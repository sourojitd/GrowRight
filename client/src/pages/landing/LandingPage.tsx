import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  TrendingUp,
  Puzzle,
  Blocks,
  Syringe,
  BookOpen,
  Map,
  ArrowRight,
  CheckCircle2,
  UserPlus,
  BarChart3,
} from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import SEO from '@/components/shared/SEO';
import AnimatedBackground from '@/components/shared/AnimatedBackground';

/* ------------------------------------------------------------------ */
/*  Animation helpers                                                  */
/* ------------------------------------------------------------------ */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

function AnimatedSection({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={stagger}
      className={className}
    >
      {children}
    </motion.section>
  );
}

function AnimatedCounter({ value, label }: { value: string; label: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      className="text-center"
    >
      <p className="text-display font-bold text-gradient">{value}</p>
      <p className="text-subhead text-text-primary/60 mt-1">{label}</p>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const features = [
  {
    icon: TrendingUp,
    title: 'Milestone Tracking',
    description: 'Track 175+ developmental milestones across cognitive, motor, language, social, and self-care categories from birth to age 5.',
    color: 'text-accent-blue',
  },
  {
    icon: Puzzle,
    title: 'Activity Recommendations',
    description: 'Discover age-appropriate activities curated to stimulate your child\'s growth at every stage of early development.',
    color: 'text-accent-green',
  },
  {
    icon: Blocks,
    title: 'Toy Suggestions',
    description: 'Get personalised toy recommendations matched to your child\'s developmental stage and learning needs.',
    color: 'text-accent-orange',
  },
  {
    icon: Syringe,
    title: 'Vaccination Tracker',
    description: 'Stay on top of your child\'s immunisation schedule with reminders and a complete vaccination history log.',
    color: 'text-accent-red',
  },
  {
    icon: BookOpen,
    title: 'Syllabus Comparator',
    description: 'Compare school syllabi across CBSE, ICSE, and IB boards from Class 1 to 12 to plan your child\'s education early.',
    color: 'text-accent-purple',
  },
  {
    icon: Map,
    title: 'Development Roadmaps',
    description: 'Get personalised, AI-powered roadmaps that guide you through each phase of your child\'s early years.',
    color: 'text-accent-teal',
  },
];

const steps = [
  {
    icon: UserPlus,
    step: '1',
    title: 'Create Your Account',
    description: 'Sign up for free and add your child\'s profile with their date of birth.',
  },
  {
    icon: CheckCircle2,
    step: '2',
    title: 'Track Progress',
    description: 'Log milestones, activities, and vaccinations as your child grows.',
  },
  {
    icon: BarChart3,
    step: '3',
    title: 'Get Insights',
    description: 'Receive personalised recommendations and roadmaps based on your child\'s development.',
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function LandingPage() {
  return (
    <>
      <SEO
        title="Free Child Development Tracker | Milestones, Vaccinations & Syllabus"
        description="GrowRight is a free child development tracker for ages 0–5. Track milestones, activities, vaccinations, compare CBSE/ICSE/IB syllabi, and get personalised roadmaps for your baby's growth."
        path="/"
      />

      <div className="min-h-screen overflow-hidden">
        <AnimatedBackground />
        <div className="relative z-10">

        {/* ── Hero ── */}
        <header className="relative min-h-[90vh] flex items-center justify-center px-4">
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            >
              <h1 className="text-display-lg font-bold tracking-tight leading-tight sm:text-[56px]">
                <span className="text-gradient">Track Your Child's</span>
                <br />
                <span className="text-gradient-blue">Development Milestones</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-body text-text-primary/70 mt-6 max-w-xl mx-auto leading-relaxed"
            >
              GrowRight is a free baby development app that helps parents track milestones, activities, vaccinations, and compare school syllabi — all in one place.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, type: 'spring', stiffness: 200, damping: 20 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/register">
                <Button variant="gradient" size="lg">
                  Get Started Free <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="secondary" size="lg">
                  Sign In
                </Button>
              </Link>
            </motion.div>
          </div>
        </header>

        {/* ── Features Grid ── */}
        <AnimatedSection className="max-w-6xl mx-auto px-4 py-24">
          <motion.div variants={fadeUp} className="text-center mb-16">
            <h2 className="text-display-sm font-bold text-text-primary">
              Everything You Need to Support Your Child's Growth
            </h2>
            <p className="text-body text-text-primary/60 mt-4 max-w-2xl mx-auto">
              From milestone tracking to syllabus comparison, GrowRight gives you the tools to nurture your child's development with confidence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <motion.div key={feature.title} variants={fadeUp}>
                <Card variant="gradient-border" interactive padding="lg" className="h-full">
                  <feature.icon className={`w-8 h-8 ${feature.color} mb-4`} />
                  <h3 className="text-headline font-semibold text-text-primary mb-2">{feature.title}</h3>
                  <p className="text-subhead text-text-primary/60 leading-relaxed">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* ── How It Works ── */}
        <AnimatedSection className="relative bg-white/60 py-24">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div variants={fadeUp} className="text-center mb-16">
              <h2 className="text-display-sm font-bold text-text-primary">How It Works</h2>
              <p className="text-body text-text-primary/60 mt-4">
                Get started in minutes — no complex setup required.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step) => (
                <motion.div key={step.step} variants={fadeUp}>
                  <Card variant="glass" padding="lg" className="text-center h-full">
                    <div className="w-12 h-12 rounded-full btn-gradient flex items-center justify-center mx-auto mb-5">
                      <span className="relative z-10 text-white font-bold text-body">{step.step}</span>
                    </div>
                    <h3 className="text-headline font-semibold text-text-primary mb-2">{step.title}</h3>
                    <p className="text-subhead text-text-primary/60 leading-relaxed">{step.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* ── Stats Row ── */}
        <AnimatedSection className="max-w-4xl mx-auto px-4 py-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedCounter value="175+" label="Milestones" />
            <AnimatedCounter value="5" label="Categories" />
            <AnimatedCounter value="3" label="Education Boards" />
            <AnimatedCounter value="0–5 yrs" label="Age Range" />
          </div>
        </AnimatedSection>

        {/* ── SEO Content Block ── */}
        <AnimatedSection className="relative bg-white/60 py-24">
          <div className="max-w-3xl mx-auto px-4">
            <motion.div variants={fadeUp}>
              <h2 className="text-display-sm font-bold text-text-primary mb-6">
                Why Parents Choose GrowRight as Their Child Development Tracker
              </h2>
              <div className="space-y-5 text-body text-text-primary/70 leading-relaxed">
                <p>
                  Every child grows at their own pace, but knowing what to expect at each stage makes all the difference. GrowRight is a <strong>child milestone tracker</strong> designed for parents of children aged 0 to 5 years. It covers over 175 developmental milestones across five key areas — cognitive, motor, language, social-emotional, and self-care — so you can celebrate every achievement and spot areas that may need extra attention.
                </p>
                <p>
                  Beyond milestone tracking, GrowRight doubles as a <strong>baby development app</strong> with curated activity suggestions, a <strong>vaccination tracker</strong> that keeps immunisation records organised, and personalised development roadmaps powered by AI. Whether your toddler is taking their first steps or learning to count, GrowRight provides the guidance and data you need.
                </p>

                <h3 className="text-title font-semibold text-text-primary !mt-8">
                  Plan Ahead with the Syllabus Comparator
                </h3>
                <p>
                  Choosing the right school board is one of the biggest decisions parents face. GrowRight's built-in <strong>syllabus comparator</strong> lets you explore and contrast curricula from CBSE, ICSE, and IB boards across Class 1 to 12 — all within the same platform you use to track your child's early development. Start planning your child's educational journey from day one.
                </p>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* ── Final CTA ── */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 btn-gradient opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/10 to-accent-purple/10" />

          <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            >
              <h2 className="text-display-sm font-bold text-white mb-4">
                Start Tracking Your Child's Growth Today
              </h2>
              <p className="text-body text-white/80 mb-8">
                Join thousands of parents who trust GrowRight to guide their child's development journey. It's completely free.
              </p>
              <Link to="/register">
                <Button variant="secondary" size="lg">
                  Create Free Account <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="relative bg-white/70 border-t border-border-light py-10">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-headline font-bold">
                <span className="text-gradient">Grow</span><span className="text-gradient-blue">Right</span>
              </span>
              <span className="text-caption text-text-primary/50">— Child Development Tracker</span>
            </div>

            <nav className="flex items-center gap-6 text-subhead text-text-primary/70">
              <Link to="/login" className="hover:text-text-primary transition-colors">Sign In</Link>
              <Link to="/register" className="hover:text-text-primary transition-colors">Register</Link>
            </nav>

            <p className="text-caption text-text-primary/50">
              &copy; {new Date().getFullYear()} GrowRight. All rights reserved.
            </p>
          </div>
        </footer>
        </div>
      </div>
    </>
  );
}
