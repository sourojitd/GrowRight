import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Baby, Target, Sparkles, ArrowRight, Plus, TrendingUp, BookOpen } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useChildren } from '@/hooks/useChildren';
import { useMilestones } from '@/hooks/useMilestones';
import Card from '@/components/ui/Card';
import Progress from '@/components/ui/Progress';
import Badge from '@/components/ui/Badge';
import EmptyState from '@/components/ui/EmptyState';
import AnimatedCounter from '@/components/shared/AnimatedCounter';
import StaggerContainer, { staggerItem } from '@/components/shared/StaggerContainer';
import { PageSpinner } from '@/components/ui/Spinner';
import { getCategoryLabel, getCategoryDotColor } from '@/lib/utils';
import SEO from '@/components/shared/SEO';

export default function DashboardPage() {
  const { user } = useAuth();
  const { children, selectedChild, isLoading, hasFetched } = useChildren();
  const { progress, summary } = useMilestones(selectedChild?.id);

  if (!hasFetched || isLoading) return <PageSpinner />;

  if (children.length === 0) {
    return (
      <EmptyState
        icon={Baby}
        title="Welcome to GrowRight"
        description="Start by adding your child's profile to begin tracking their development journey."
        actionLabel="Add your first child"
        onAction={() => window.location.assign('/children/add')}
      />
    );
  }

  const isEarlyDev = !selectedChild || (selectedChild.ageMonths ?? 0) < 72;

  const greeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 17) return 'Good afternoon';
    return 'Good evening';
  };

  return (
    <StaggerContainer className="space-y-8">
      <SEO title="Dashboard" description="View your child's development progress, recent milestones, and activity overview." path="/dashboard" />
      {/* Greeting */}
      <motion.div variants={staggerItem}>
        <h1 className="text-display-sm sm:text-display-lg text-text-primary">
          {greeting()}, <span className="text-gradient">{user?.name?.split(' ')[0]}</span>
        </h1>
        <p className="text-body text-text-secondary mt-2">
          Here's how {selectedChild?.name} is doing today
        </p>
      </motion.div>

      {/* Stats Grid */}
      <motion.div variants={staggerItem} className={`grid grid-cols-1 sm:grid-cols-2 ${isEarlyDev ? 'lg:grid-cols-4' : 'lg:grid-cols-2'} gap-5`}>
        <Card variant="elevated" className="stat-card-blue flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent-blue/20 to-accent-teal/20 flex items-center justify-center">
            <Baby className="w-6 h-6 text-accent-blue" />
          </div>
          <div>
            <p className="text-caption text-text-tertiary">Children</p>
            <p className="text-title text-text-primary">
              <AnimatedCounter target={children.length} />
            </p>
          </div>
        </Card>

        {isEarlyDev && (
          <>
            <Card variant="elevated" className="stat-card-green flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent-green/20 to-accent-teal/20 flex items-center justify-center">
                <Target className="w-6 h-6 text-accent-green" />
              </div>
              <div>
                <p className="text-caption text-text-tertiary">Milestones Achieved</p>
                <p className="text-title text-text-primary">
                  <AnimatedCounter target={summary?.achieved || 0} />
                </p>
              </div>
            </Card>

            <Card variant="elevated" className="stat-card-orange flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent-orange/20 to-accent-red/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-accent-orange" />
              </div>
              <div>
                <p className="text-caption text-text-tertiary">In Progress</p>
                <p className="text-title text-text-primary">
                  <AnimatedCounter target={summary?.inProgress || 0} />
                </p>
              </div>
            </Card>
          </>
        )}

        <Card variant="elevated" className="stat-card-purple flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent-purple/20 to-accent-blue/10 flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-accent-purple" />
          </div>
          <div>
            <p className="text-caption text-text-tertiary">Age</p>
            <p className="text-title text-text-primary">{selectedChild?.ageFormatted}</p>
          </div>
        </Card>
      </motion.div>

      {/* Development Progress — only for early development children (0-5 years) */}
      {isEarlyDev && (
        <motion.div variants={staggerItem}>
          <Card variant="elevated">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-headline text-text-primary">Development Progress</h3>
              <Link to="/milestones" className="btn-ghost text-subhead flex items-center gap-1">
                View all <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-5">
              {progress.map((p) => (
                <div key={p.category} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: getCategoryDotColor(p.category) }}
                      />
                      <span className="text-subhead font-medium text-text-primary">
                        {getCategoryLabel(p.category)}
                      </span>
                    </div>
                    <span className="text-caption text-text-secondary">
                      {p.achieved}/{p.total}
                    </span>
                  </div>
                  <Progress value={p.percentage} showLabel />
                </div>
              ))}
              {progress.length === 0 && (
                <p className="text-center text-subhead text-text-secondary py-8">
                  Start tracking milestones to see progress here
                </p>
              )}
            </div>
          </Card>
        </motion.div>
      )}

      {/* Quick Actions */}
      <motion.div variants={staggerItem} className={`grid grid-cols-1 ${isEarlyDev ? 'sm:grid-cols-3' : 'sm:grid-cols-2'} gap-5`}>
        <Link to="/children/add">
          <Card interactive variant="gradient-border" className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-blue/15 to-accent-purple/15 flex items-center justify-center">
              <Plus className="w-5 h-5 text-accent-blue" />
            </div>
            <div>
              <p className="text-subhead font-medium text-text-primary">Add Child</p>
              <p className="text-caption text-text-tertiary">New child profile</p>
            </div>
          </Card>
        </Link>

        {isEarlyDev && (
          <Link to="/activities">
            <Card interactive variant="gradient-border" className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-green/15 to-accent-teal/15 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-accent-green" />
              </div>
              <div>
                <p className="text-subhead font-medium text-text-primary">Activities</p>
                <p className="text-caption text-text-tertiary">Age-appropriate fun</p>
              </div>
            </Card>
          </Link>
        )}

        <Link to="/syllabus">
          <Card interactive variant="gradient-border" className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-purple/15 to-accent-blue/15 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-accent-purple" />
            </div>
            <div>
              <p className="text-subhead font-medium text-text-primary">Syllabus</p>
              <p className="text-caption text-text-tertiary">Compare curricula</p>
            </div>
          </Card>
        </Link>
      </motion.div>

      {/* Children Quick View */}
      {children.length > 1 && (
        <motion.div variants={staggerItem}>
          <Card variant="elevated">
            <h3 className="text-headline text-text-primary mb-4">Your Children</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {children.map((child) => (
                <Link key={child.id} to={`/children/${child.id}`}>
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-surface-secondary transition-colors"
                  >
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-accent-blue to-accent-teal flex items-center justify-center text-white font-bold">
                      {child.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <p className="text-subhead font-medium text-text-primary">{child.name}</p>
                      <p className="text-caption text-text-secondary">{child.ageFormatted}</p>
                    </div>
                    <Badge variant="green">{child.achievedMilestones || 0} milestones</Badge>
                  </motion.div>
                </Link>
              ))}
            </div>
          </Card>
        </motion.div>
      )}
    </StaggerContainer>
  );
}
