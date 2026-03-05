import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Syringe,
  Shield,
  ShieldCheck,
  ChevronDown,
  Check,
  CheckCheck,
  Clock,
  Building2,
  Stethoscope,
  CircleDot,
  SlidersHorizontal,
  CalendarDays,
  FileText,
  Save,
} from 'lucide-react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiGet, apiPatch, apiPost } from '@/lib/api';
import { useChildren } from '@/hooks/useChildren';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import Progress from '@/components/ui/Progress';
import EmptyState from '@/components/ui/EmptyState';
import AnimatedCounter from '@/components/shared/AnimatedCounter';
import { PageSpinner } from '@/components/ui/Spinner';
import { cn } from '@/lib/utils';
import SEO from '@/components/shared/SEO';
import toast from 'react-hot-toast';

type VaccineCategory = 'GOVERNMENT' | 'PRIVATE';
type TabFilter = 'ALL' | VaccineCategory;

interface VaccinationItem {
  id: string;
  name: string;
  doseLabel: string;
  description: string;
  ageWeeks: number | null;
  ageMonths: number;
  ageLabel: string;
  category: VaccineCategory;
  sortOrder: number;
  isAdministered: boolean;
  administeredDate: string | null;
  notes: string | null;
  isDue: boolean;
  isUpcoming: boolean;
}

interface VaccinationData {
  child: { id: string; name: string; ageMonths: number };
  vaccinations: VaccinationItem[];
  summary: {
    total: number;
    administered: number;
    pending: number;
    governmentTotal: number;
    privateTotal: number;
  };
}

interface DetailPanelProps {
  vaccine: VaccinationItem;
  childId: string;
  onSaved: () => void;
}

function VaccineDetailPanel({ vaccine, childId, onSaved }: DetailPanelProps) {
  const queryClient = useQueryClient();
  const [isAdministered, setIsAdministered] = useState(vaccine.isAdministered);
  const [date, setDate] = useState(
    vaccine.administeredDate ? vaccine.administeredDate.slice(0, 10) : ''
  );
  const [notes, setNotes] = useState(vaccine.notes ?? '');

  const saveMutation = useMutation({
    mutationFn: () =>
      apiPatch(`/vaccinations/child/${childId}/${vaccine.id}`, {
        isAdministered,
        administeredDate: date || undefined,
        notes: notes || undefined,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['vaccinations', childId] });
      toast.success('Saved');
      onSaved();
    },
    onError: () => toast.error('Failed to save'),
  });

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="overflow-hidden"
    >
      <div className="mx-4 sm:mx-5 mb-4 p-4 rounded-xl bg-surface-secondary border border-border-light space-y-4">
        {/* Administered toggle */}
        <div className="flex items-center justify-between">
          <span className="text-subhead font-medium text-text-primary">Administered</span>
          <button
            onClick={() => setIsAdministered((v) => !v)}
            className={cn(
              'w-11 h-6 rounded-full transition-colors duration-200 relative flex-shrink-0',
              isAdministered ? 'bg-accent-green' : 'bg-surface-tertiary'
            )}
          >
            <span
              className={cn(
                'absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-200',
                isAdministered ? 'translate-x-5' : 'translate-x-0.5'
              )}
            />
          </button>
        </div>

        {/* Date field */}
        <div>
          <label className="flex items-center gap-1.5 text-caption text-text-secondary mb-1.5">
            <CalendarDays className="w-3.5 h-3.5" />
            Date administered
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            max={new Date().toISOString().slice(0, 10)}
            className="w-full px-3 py-2 rounded-xl bg-surface-primary border border-border text-subhead text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-blue/30 focus:border-accent-blue transition-colors"
          />
        </div>

        {/* Notes field */}
        <div>
          <label className="flex items-center gap-1.5 text-caption text-text-secondary mb-1.5">
            <FileText className="w-3.5 h-3.5" />
            Notes
          </label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Batch no., clinic, side effects…"
            rows={2}
            maxLength={500}
            className="w-full px-3 py-2 rounded-xl bg-surface-primary border border-border text-subhead text-text-primary placeholder:text-text-quaternary focus:outline-none focus:ring-2 focus:ring-accent-blue/30 focus:border-accent-blue transition-colors resize-none"
          />
        </div>

        <Button
          variant="gradient"
          size="sm"
          isLoading={saveMutation.isPending}
          onClick={() => saveMutation.mutate()}
          className="w-full"
        >
          <Save className="w-4 h-4" /> Save Details
        </Button>
      </div>
    </motion.div>
  );
}

export default function VaccinationsPage() {
  const { selectedChild, isLoading: childrenLoading, hasFetched } = useChildren();
  const queryClient = useQueryClient();
  const [activeTab, setActiveTab] = useState<TabFilter>('ALL');
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);
  const [detailsMode, setDetailsMode] = useState(false);
  const [expandedVaccine, setExpandedVaccine] = useState<string | null>(null);
  const autoExpanded = useRef(false);

  const { data, isLoading } = useQuery({
    queryKey: ['vaccinations', selectedChild?.id],
    queryFn: () => apiGet<VaccinationData>(`/vaccinations/child/${selectedChild!.id}`),
    enabled: !!selectedChild,
  });

  const bulkAdministerMutation = useMutation({
    mutationFn: () => apiPost<{ administered: number }>(`/vaccinations/child/${selectedChild!.id}/bulk-administer`),
    onSuccess: (result) => {
      queryClient.invalidateQueries({ queryKey: ['vaccinations', selectedChild?.id] });
      if (result.administered > 0) {
        toast.success(`Marked ${result.administered} vaccines as administered`);
      } else {
        toast.success('All due vaccines are already administered');
      }
    },
    onError: () => toast.error('Failed to bulk-administer'),
  });

  const toggleMutation = useMutation({
    mutationFn: ({ vaccinationId, isAdministered }: { vaccinationId: string; isAdministered: boolean }) =>
      apiPatch(`/vaccinations/child/${selectedChild!.id}/${vaccinationId}`, { isAdministered }),
    onMutate: async ({ vaccinationId, isAdministered }) => {
      await queryClient.cancelQueries({ queryKey: ['vaccinations', selectedChild?.id] });
      const prev = queryClient.getQueryData<VaccinationData>(['vaccinations', selectedChild?.id]);
      if (prev) {
        queryClient.setQueryData<VaccinationData>(['vaccinations', selectedChild?.id], {
          ...prev,
          vaccinations: prev.vaccinations.map((v) =>
            v.id === vaccinationId ? { ...v, isAdministered } : v
          ),
          summary: {
            ...prev.summary,
            administered: prev.summary.administered + (isAdministered ? 1 : -1),
            pending: prev.summary.pending + (isAdministered ? -1 : 1),
          },
        });
      }
      return { prev };
    },
    onError: (_err, _vars, context) => {
      if (context?.prev) {
        queryClient.setQueryData(['vaccinations', selectedChild?.id], context.prev);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['vaccinations', selectedChild?.id] });
    },
  });

  // Auto-expand the first group that has due vaccines when data first loads
  useEffect(() => {
    if (!data || autoExpanded.current) return;
    autoExpanded.current = true;
    const firstDue = data.vaccinations.find((v) => v.isDue && !v.isAdministered);
    const fallback = data.vaccinations[0];
    setExpandedGroup(firstDue ? firstDue.ageLabel : (fallback?.ageLabel ?? null));
  }, [data]);

  if (!hasFetched || childrenLoading) return <PageSpinner />;

  if (!selectedChild) {
    return (
      <EmptyState
        icon={Syringe}
        title="Select a child"
        description="Add a child profile first to track their vaccination schedule."
        actionLabel="Add Child"
        onAction={() => window.location.assign('/children/add')}
      />
    );
  }

  if (isLoading || !data) return <PageSpinner />;

  const { vaccinations, summary } = data;

  const filtered = activeTab === 'ALL' ? vaccinations : vaccinations.filter((v) => v.category === activeTab);

  const groups = filtered.reduce<Record<string, VaccinationItem[]>>((acc, v) => {
    if (!acc[v.ageLabel]) acc[v.ageLabel] = [];
    acc[v.ageLabel]!.push(v);
    return acc;
  }, {});

  const groupEntries = Object.entries(groups);

  const govAdministered = vaccinations.filter((v) => v.category === 'GOVERNMENT' && v.isAdministered).length;
  const pvtAdministered = vaccinations.filter((v) => v.category === 'PRIVATE' && v.isAdministered).length;
  const overallPercent = summary.total > 0 ? Math.round((summary.administered / summary.total) * 100) : 0;
  const dueUnadministered = vaccinations.filter((v) => v.isDue && !v.isAdministered).length;

  const handleVaccineClick = (vaccine: VaccinationItem) => {
    if (detailsMode) {
      setExpandedVaccine((cur) => (cur === vaccine.id ? null : vaccine.id));
    } else {
      toggleMutation.mutate(
        { vaccinationId: vaccine.id, isAdministered: !vaccine.isAdministered },
        {
          onSuccess: () => toast.success(!vaccine.isAdministered ? 'Marked as given' : 'Unmarked'),
          onError: () => toast.error('Failed to update'),
        }
      );
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
      <SEO title="Vaccinations" description="Track your child's immunisation schedule and vaccination history." path="/vaccinations" />

      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-display-sm text-text-primary">
            Vaccinations for <span className="text-gradient">{selectedChild.name}</span>
          </h1>
          <p className="text-body text-text-secondary mt-1">
            {selectedChild.ageFormatted} old — Indian Immunization Schedule (IAP + UIP)
          </p>
        </div>
        {/* Details mode toggle */}
        <button
          onClick={() => {
            setDetailsMode((v) => !v);
            setExpandedVaccine(null);
          }}
          className={cn(
            'flex items-center gap-2 px-3 py-2 rounded-xl text-subhead font-medium transition-all duration-200 shrink-0',
            detailsMode
              ? 'bg-accent-blue text-white shadow-glow-blue'
              : 'bg-surface-secondary text-text-secondary hover:bg-surface-tertiary'
          )}
          title={detailsMode ? 'Switch to quick-toggle mode' : 'Switch to details mode (edit dates & notes)'}
        >
          <SlidersHorizontal className="w-4 h-4" />
          <span className="hidden sm:inline">{detailsMode ? 'Details On' : 'Add Details'}</span>
        </button>
      </div>

      {detailsMode && (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 px-4 py-3 rounded-xl bg-accent-blue/10 border border-accent-blue/20 text-caption text-accent-blue"
        >
          <SlidersHorizontal className="w-3.5 h-3.5 flex-shrink-0" />
          Details mode — tap a vaccine to edit its date and notes. Toggle off to return to quick-mark mode.
        </motion.div>
      )}

      {/* Overall Progress */}
      <Card variant="elevated" className="border border-accent-blue/10">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 mb-4">
          <div className="flex items-center gap-3 flex-1">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-accent-blue" />
            </div>
            <div>
              <p className="text-title text-text-primary font-semibold">
                <AnimatedCounter target={summary.administered} /> / {summary.total}
              </p>
              <p className="text-caption text-text-tertiary">vaccines administered</p>
            </div>
          </div>
          <div className="flex gap-6 text-center">
            <div>
              <p className="text-headline text-accent-green font-semibold">
                <AnimatedCounter target={govAdministered} />
                <span className="text-caption text-text-tertiary font-normal"> / {summary.governmentTotal}</span>
              </p>
              <p className="text-caption text-text-tertiary">Government</p>
            </div>
            <div>
              <p className="text-headline text-accent-purple font-semibold">
                <AnimatedCounter target={pvtAdministered} />
                <span className="text-caption text-text-tertiary font-normal"> / {summary.privateTotal}</span>
              </p>
              <p className="text-caption text-text-tertiary">Private</p>
            </div>
          </div>
        </div>
        <Progress value={overallPercent} showLabel />
      </Card>

      {/* Bulk Administer Banner */}
      {dueUnadministered > 0 && (
        <Card variant="elevated" className="border border-accent-orange/20 bg-gradient-to-r from-accent-orange/5 to-accent-yellow/5">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex items-center gap-3 flex-1">
              <div className="w-10 h-10 rounded-xl bg-accent-orange/15 flex items-center justify-center flex-shrink-0">
                <CheckCheck className="w-5 h-5 text-accent-orange" />
              </div>
              <div>
                <p className="text-subhead font-medium text-text-primary">
                  {dueUnadministered} {dueUnadministered === 1 ? 'vaccine' : 'vaccines'} due but not yet administered
                </p>
                <p className="text-caption text-text-secondary">
                  Mark all vaccines up to {selectedChild.ageFormatted} as administered
                </p>
              </div>
            </div>
            <Button
              variant="gradient"
              size="sm"
              isLoading={bulkAdministerMutation.isPending}
              onClick={() => bulkAdministerMutation.mutate()}
            >
              <CheckCheck className="w-4 h-4" /> Mark All Given
            </Button>
          </div>
        </Card>
      )}

      {/* Tab Filters */}
      <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1">
        {([
          { key: 'ALL' as TabFilter, label: 'All Vaccines', count: summary.total },
          { key: 'GOVERNMENT' as TabFilter, label: 'Government (UIP)', count: summary.governmentTotal },
          { key: 'PRIVATE' as TabFilter, label: 'Private (IAP)', count: summary.privateTotal },
        ]).map(({ key, label, count }) => (
          <motion.button
            key={key}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveTab(key)}
            className={cn(
              'px-4 py-2 rounded-full text-subhead font-medium transition-all duration-200 whitespace-nowrap',
              activeTab === key
                ? key === 'GOVERNMENT'
                  ? 'bg-accent-green text-white shadow-sm'
                  : key === 'PRIVATE'
                    ? 'bg-accent-purple text-white shadow-sm'
                    : 'bg-accent-blue text-white shadow-glow-blue'
                : 'bg-surface-secondary text-text-secondary hover:bg-surface-tertiary'
            )}
          >
            {label} ({count})
          </motion.button>
        ))}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center gap-4 text-caption text-text-tertiary">
        <span className="flex items-center gap-1.5">
          <Building2 className="w-3.5 h-3.5 text-accent-green" />
          Government (Free at govt hospitals)
        </span>
        <span className="flex items-center gap-1.5">
          <Stethoscope className="w-3.5 h-3.5 text-accent-purple" />
          Private (IAP recommended, available at private clinics)
        </span>
      </div>

      {/* Vaccine Groups by Age */}
      <div className="space-y-4">
        {groupEntries.map(([ageLabel, items]) => {
          const isExpanded = expandedGroup === ageLabel;
          const groupDone = items.filter((v) => v.isAdministered).length;
          const allDone = groupDone === items.length;
          const firstItem = items[0];
          const isDue = firstItem?.isDue;

          return (
            <motion.div
              key={ageLabel}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <Card
                variant="elevated"
                padding="none"
                className={cn(
                  'overflow-hidden transition-all',
                  allDone && 'border-l-4 border-l-accent-green',
                  !allDone && isDue && 'border-l-4 border-l-accent-orange',
                )}
              >
                {/* Group Header */}
                <button
                  onClick={() => setExpandedGroup(isExpanded ? null : ageLabel)}
                  className="w-full flex items-center gap-3 sm:gap-4 p-4 sm:p-5 text-left"
                >
                  <div
                    className={cn(
                      'w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0',
                      allDone
                        ? 'bg-accent-green/15'
                        : isDue
                          ? 'bg-accent-orange/15'
                          : 'bg-surface-tertiary'
                    )}
                  >
                    {allDone ? (
                      <ShieldCheck className="w-5 h-5 text-accent-green" />
                    ) : isDue ? (
                      <Clock className="w-5 h-5 text-accent-orange" />
                    ) : (
                      <Shield className="w-5 h-5 text-text-tertiary" />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-subhead font-semibold text-text-primary">{ageLabel}</p>
                    <p className="text-caption text-text-secondary">
                      {items.length} {items.length === 1 ? 'vaccine' : 'vaccines'} &middot;{' '}
                      {groupDone === items.length ? (
                        <span className="text-accent-green font-medium">All done</span>
                      ) : (
                        <span>{groupDone} of {items.length} given</span>
                      )}
                    </p>
                  </div>

                  <div className="hidden sm:flex items-center gap-2">
                    {allDone && <Badge variant="green">Complete</Badge>}
                    {!allDone && isDue && <Badge variant="orange">Due</Badge>}
                    {!isDue && !allDone && <Badge variant="blue">Upcoming</Badge>}
                  </div>

                  <ChevronDown
                    className={cn(
                      'w-5 h-5 text-text-tertiary transition-transform duration-200 flex-shrink-0',
                      isExpanded && 'rotate-180'
                    )}
                  />
                </button>

                {/* Expanded Vaccine List */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-border-light">
                        {items.map((vaccine, idx) => (
                          <div key={vaccine.id}>
                            <motion.div
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.05 }}
                              onClick={() => handleVaccineClick(vaccine)}
                              className={cn(
                                'flex items-start gap-3 sm:gap-4 px-4 sm:px-5 py-4 cursor-pointer select-none hover:bg-surface-secondary/50 transition-colors',
                                expandedVaccine !== vaccine.id && idx !== items.length - 1 && 'border-b border-border-light/50',
                                expandedVaccine === vaccine.id && 'bg-surface-secondary/30'
                              )}
                            >
                              {/* Checkbox */}
                              <div
                                className={cn(
                                  'mt-0.5 w-6 h-6 rounded-lg border-2 flex items-center justify-center flex-shrink-0 transition-all duration-200',
                                  vaccine.isAdministered
                                    ? 'bg-accent-green border-accent-green text-white'
                                    : 'border-border'
                                )}
                              >
                                {vaccine.isAdministered && (
                                  <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: 'spring', stiffness: 500, damping: 15 }}
                                  >
                                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                                  </motion.div>
                                )}
                              </div>

                              {/* Info */}
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 flex-wrap">
                                  <p
                                    className={cn(
                                      'text-subhead font-medium',
                                      vaccine.isAdministered && !detailsMode
                                        ? 'text-text-tertiary line-through'
                                        : 'text-text-primary'
                                    )}
                                  >
                                    {vaccine.name}
                                  </p>
                                  <Badge variant={vaccine.category === 'GOVERNMENT' ? 'green' : 'purple'}>
                                    {vaccine.category === 'GOVERNMENT' ? 'Govt' : 'Pvt'}
                                  </Badge>
                                </div>
                                <p className="text-caption text-text-secondary mt-0.5">{vaccine.doseLabel}</p>
                                <p className="text-caption text-text-tertiary mt-1 leading-relaxed">
                                  {vaccine.description}
                                </p>
                                {/* Show saved date/notes inline when in quick mode */}
                                {!detailsMode && vaccine.isAdministered && (vaccine.administeredDate || vaccine.notes) && (
                                  <div className="mt-1.5 flex flex-wrap gap-3 text-caption text-text-tertiary">
                                    {vaccine.administeredDate && (
                                      <span className="flex items-center gap-1">
                                        <CalendarDays className="w-3 h-3" />
                                        {new Date(vaccine.administeredDate).toLocaleDateString()}
                                      </span>
                                    )}
                                    {vaccine.notes && (
                                      <span className="flex items-center gap-1 truncate max-w-[200px]">
                                        <FileText className="w-3 h-3 flex-shrink-0" />
                                        {vaccine.notes}
                                      </span>
                                    )}
                                  </div>
                                )}
                              </div>

                              {/* Status / mode indicator */}
                              <div className="flex-shrink-0 mt-1.5">
                                {detailsMode ? (
                                  <ChevronDown
                                    className={cn(
                                      'w-4 h-4 text-text-tertiary transition-transform duration-200',
                                      expandedVaccine === vaccine.id && 'rotate-180'
                                    )}
                                  />
                                ) : vaccine.isAdministered ? (
                                  <CircleDot className="w-4 h-4 text-accent-green" />
                                ) : vaccine.isDue ? (
                                  <CircleDot className="w-4 h-4 text-accent-orange" />
                                ) : (
                                  <CircleDot className="w-4 h-4 text-text-quaternary" />
                                )}
                              </div>
                            </motion.div>

                            {/* Inline Detail Panel */}
                            <AnimatePresence>
                              {detailsMode && expandedVaccine === vaccine.id && (
                                <VaccineDetailPanel
                                  key={vaccine.id}
                                  vaccine={vaccine}
                                  childId={selectedChild.id}
                                  onSaved={() => setExpandedVaccine(null)}
                                />
                              )}
                            </AnimatePresence>

                            {/* Bottom divider when detail panel is open */}
                            {expandedVaccine === vaccine.id && idx !== items.length - 1 && (
                              <div className="border-b border-border-light/50 mx-4" />
                            )}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Disclaimer */}
      <Card className="bg-surface-secondary/50 border border-border-light">
        <p className="text-caption text-text-tertiary leading-relaxed">
          <strong className="text-text-secondary">Disclaimer:</strong> This vaccination schedule is based on the
          IAP (Indian Academy of Pediatrics) ACVIP 2023 recommendations and the Government of India Universal
          Immunization Programme (UIP). Always consult your paediatrician for personalized advice. Government
          vaccines are available free at all public health facilities. Private vaccines are available at private
          hospitals and clinics.
        </p>
      </Card>

      {/* Floating Status Pill */}
      <AnimatePresence>
        {summary.total > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="fixed bottom-6 left-0 lg:left-[260px] w-full lg:w-[calc(100%-260px)] z-50 flex justify-center pointer-events-none"
          >
            <div className="status-pill-border rounded-full pointer-events-auto">
              <div className="flex items-center gap-2 rounded-full px-4 py-2 glass shadow-lg">
                <ShieldCheck className="w-3.5 h-3.5 text-accent-green shrink-0" />
                <span className="text-caption font-semibold text-text-primary tabular-nums whitespace-nowrap">
                  {summary.administered}
                  <span className="font-normal text-text-secondary"> of {summary.total} administered</span>
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
