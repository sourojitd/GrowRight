// GrowRight Database Seed — Sourojit D
import { PrismaClient, MilestoneCategory, ImportanceLevel, SyllabusBoard } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { milestones } from './data/milestones';
import { activities } from './data/activities';
import { cbseSyllabus } from './data/syllabus/cbse';
import { icseSyllabus } from './data/syllabus/icse';
import { ibSyllabus } from './data/syllabus/ib';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...\n');

  // ─── Admin User ───────────────────────────────────────
  const adminPassword = await bcrypt.hash('Admin@123456', 12);
  const admin = await prisma.user.upsert({
    where: { email: 'admin@growright.app' },
    update: {},
    create: {
      email: 'admin@growright.app',
      passwordHash: adminPassword,
      name: 'GrowRight Admin',
      role: 'ADMIN',
      emailVerified: true,
      subscriptionTier: 'PREMIUM',
    },
  });
  console.log(`  Admin user: ${admin.email}`);

  // ─── Demo Parent User ────────────────────────────────
  const parentPassword = await bcrypt.hash('Parent@123456', 12);
  const parent = await prisma.user.upsert({
    where: { email: 'parent@demo.com' },
    update: {},
    create: {
      email: 'parent@demo.com',
      passwordHash: parentPassword,
      name: 'Demo Parent',
      role: 'PARENT',
      emailVerified: true,
      subscriptionTier: 'FREE',
    },
  });
  console.log(`  Demo parent: ${parent.email}`);

  // ─── Milestones (from data file) ──────────────────────
  console.log(`\n  Seeding ${milestones.length} milestones...`);
  let milestoneCount = 0;
  for (const m of milestones) {
    const id = `ms-${m.category}-${m.ageRangeStartMonth}-${m.title.slice(0, 30).replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}`;
    await prisma.milestone.upsert({
      where: { id },
      update: {
        category: m.category as MilestoneCategory,
        title: m.title,
        description: m.description,
        ageRangeStartMonth: m.ageRangeStartMonth,
        ageRangeEndMonth: m.ageRangeEndMonth,
        importanceLevel: m.importanceLevel as ImportanceLevel,
        tips: m.tips || null,
      },
      create: {
        id,
        category: m.category as MilestoneCategory,
        title: m.title,
        description: m.description,
        ageRangeStartMonth: m.ageRangeStartMonth,
        ageRangeEndMonth: m.ageRangeEndMonth,
        importanceLevel: m.importanceLevel as ImportanceLevel,
        tips: m.tips || null,
      },
    });
    milestoneCount++;
  }
  console.log(`  ✓ Seeded ${milestoneCount} milestones`);

  // ─── Activities (from data file) ───────────────────────
  console.log(`\n  Seeding ${activities.length} activities...`);
  let activityCount = 0;
  for (const a of activities) {
    const id = `act-${a.category}-${a.minAgeMonths}-${a.title.slice(0, 30).replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}`;
    await prisma.activity.upsert({
      where: { id },
      update: {
        category: a.category as MilestoneCategory,
        title: a.title,
        description: a.description,
        instructions: a.instructions,
        minAgeMonths: a.minAgeMonths,
        maxAgeMonths: a.maxAgeMonths,
        durationMinutes: a.durationMinutes,
        materials: a.materials,
      },
      create: {
        id,
        category: a.category as MilestoneCategory,
        title: a.title,
        description: a.description,
        instructions: a.instructions,
        minAgeMonths: a.minAgeMonths,
        maxAgeMonths: a.maxAgeMonths,
        durationMinutes: a.durationMinutes,
        materials: a.materials,
      },
    });
    activityCount++;
  }
  console.log(`  ✓ Seeded ${activityCount} activities`);

  // ─── Syllabus Data (CBSE + ICSE + IB) ─────────────────
  const allSyllabus = [
    ...cbseSyllabus,
    ...icseSyllabus,
    ...ibSyllabus,
  ];

  console.log(`\n  Seeding ${allSyllabus.length} syllabus entries...`);
  let syllabusCount = 0;
  let topicCount = 0;

  for (const s of allSyllabus) {
    const syllabus = await prisma.syllabus.upsert({
      where: {
        board_grade_subject: {
          board: s.board as SyllabusBoard,
          grade: s.grade,
          subject: s.subject,
        },
      },
      update: {},
      create: {
        board: s.board as SyllabusBoard,
        grade: s.grade,
        subject: s.subject,
      },
    });

    // Delete existing topics for this syllabus (to allow re-seeding)
    await prisma.syllabusTopic.deleteMany({
      where: { syllabusId: syllabus.id },
    });

    for (const t of s.topics) {
      await prisma.syllabusTopic.create({
        data: {
          syllabusId: syllabus.id,
          topicName: t.topicName,
          subtopics: t.subtopics,
          depthLevel: t.depthLevel,
          learningObjectives: t.learningObjectives,
          orderIndex: t.orderIndex,
        },
      });
      topicCount++;
    }
    syllabusCount++;
  }
  console.log(`  ✓ Seeded ${syllabusCount} syllabi with ${topicCount} topics`);
  console.log(`    - CBSE: ${cbseSyllabus.length} entries`);
  console.log(`    - ICSE: ${icseSyllabus.length} entries`);
  console.log(`    - IB: ${ibSyllabus.length} entries`);

  // ─── Feature Flags ──────────────────────────────────
  const flags = [
    { name: 'ai_roadmap', description: 'Enable AI-powered roadmap generation', isEnabled: false },
    { name: 'subscription_billing', description: 'Enable subscription and billing features', isEnabled: false },
    { name: 'syllabus_comparator', description: 'Enable syllabus comparison tool', isEnabled: true },
    { name: 'export_pdf', description: 'Enable PDF export of reports', isEnabled: false },
    { name: 'multi_language', description: 'Enable multi-language support', isEnabled: false },
    { name: 'free_version', description: 'Free mode: unlimited usage + donate option', isEnabled: true },
  ];

  for (const f of flags) {
    await prisma.featureFlag.upsert({
      where: { name: f.name },
      update: {},
      create: f,
    });
  }
  console.log(`\n  ✓ Seeded ${flags.length} feature flags`);

  // ─── Summary ────────────────────────────────────────
  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('  Seeding complete!');
  console.log(`  Milestones:  ${milestoneCount}`);
  console.log(`  Activities:  ${activityCount}`);
  console.log(`  Syllabi:     ${syllabusCount} (${topicCount} topics)`);
  console.log(`  Flags:       ${flags.length}`);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
}

main()
  .catch((e) => {
    console.error('Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
