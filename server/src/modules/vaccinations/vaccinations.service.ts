import { Prisma } from '@prisma/client';
import { prisma } from '../../config/database';
import { NotFoundError, ForbiddenError } from '../../middleware/errorHandler';
import { calculateAgeInMonths } from '../../utils/helpers';

class VaccinationsService {
  /**
   * Get all reference vaccinations, optionally filtered by category.
   */
  async getAll(category?: 'GOVERNMENT' | 'PRIVATE') {
    const where: Prisma.VaccinationWhereInput = {};
    if (category) where.category = category;

    return prisma.vaccination.findMany({
      where,
      orderBy: { sortOrder: 'asc' },
    });
  }

  /**
   * Get vaccination checklist for a child with tracking status.
   */
  async getChildVaccinations(childId: string, userId: string) {
    const child = await prisma.child.findUnique({ where: { id: childId } });
    if (!child) throw new NotFoundError('Child');
    if (child.userId !== userId) throw new ForbiddenError();

    const ageMonths = calculateAgeInMonths(child.dateOfBirth);

    const vaccinations = await prisma.vaccination.findMany({
      orderBy: { sortOrder: 'asc' },
    });

    const tracked = await prisma.childVaccination.findMany({
      where: { childId },
    });
    const trackedMap = new Map(tracked.map((t) => [t.vaccinationId, t]));

    const result = vaccinations.map((v) => {
      const tracking = trackedMap.get(v.id);
      return {
        ...v,
        isAdministered: tracking?.isAdministered ?? false,
        administeredDate: tracking?.administeredDate ?? null,
        notes: tracking?.notes ?? null,
        isDue: v.ageMonths <= ageMonths,
        isUpcoming: v.ageMonths > ageMonths,
      };
    });

    const administered = result.filter((v) => v.isAdministered).length;

    return {
      child: { id: child.id, name: child.name, ageMonths },
      vaccinations: result,
      summary: {
        total: vaccinations.length,
        administered,
        pending: vaccinations.length - administered,
        governmentTotal: vaccinations.filter((v) => v.category === 'GOVERNMENT').length,
        privateTotal: vaccinations.filter((v) => v.category === 'PRIVATE').length,
      },
    };
  }

  /**
   * Toggle vaccination administered status for a child.
   */
  async toggleVaccination(
    childId: string,
    vaccinationId: string,
    userId: string,
    data: { isAdministered: boolean; administeredDate?: string; notes?: string }
  ) {
    const child = await prisma.child.findUnique({ where: { id: childId } });
    if (!child) throw new NotFoundError('Child');
    if (child.userId !== userId) throw new ForbiddenError();

    const vaccination = await prisma.vaccination.findUnique({ where: { id: vaccinationId } });
    if (!vaccination) throw new NotFoundError('Vaccination');

    return prisma.childVaccination.upsert({
      where: { childId_vaccinationId: { childId, vaccinationId } },
      update: {
        isAdministered: data.isAdministered,
        administeredDate: data.isAdministered
          ? data.administeredDate
            ? new Date(data.administeredDate)
            : new Date()
          : null,
        notes: data.notes,
      },
      create: {
        childId,
        vaccinationId,
        isAdministered: data.isAdministered,
        administeredDate: data.isAdministered
          ? data.administeredDate
            ? new Date(data.administeredDate)
            : new Date()
          : null,
        notes: data.notes,
      },
      include: { vaccination: true },
    });
  }
}

export const vaccinationsService = new VaccinationsService();
