import { clsx, type ClassValue } from 'clsx';
import type { MilestoneCategory } from '@/types';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function getCategoryColor(category: MilestoneCategory): string {
  const colors: Record<MilestoneCategory, string> = {
    MOTOR: 'bg-accent-orange/10 text-accent-orange',
    COGNITIVE: 'bg-accent-blue/10 text-accent-blue',
    SPEECH: 'bg-accent-purple/10 text-accent-purple',
    SOCIAL: 'bg-accent-green/10 text-accent-green',
    EMOTIONAL: 'bg-accent-red/10 text-accent-red',
  };
  return colors[category] || 'bg-gray-100 text-gray-600';
}

export function getCategoryDotColor(category: MilestoneCategory): string {
  const colors: Record<MilestoneCategory, string> = {
    MOTOR: '#FF9500',
    COGNITIVE: '#0071E3',
    SPEECH: '#AF52DE',
    SOCIAL: '#34C759',
    EMOTIONAL: '#FF3B30',
  };
  return colors[category] || '#86868B';
}

export function getCategoryLabel(category: MilestoneCategory): string {
  const labels: Record<MilestoneCategory, string> = {
    MOTOR: 'Motor Skills',
    COGNITIVE: 'Cognitive',
    SPEECH: 'Speech & Language',
    SOCIAL: 'Social Skills',
    EMOTIONAL: 'Emotional',
  };
  return labels[category] || category;
}

export function getStatusColor(status: string): string {
  switch (status) {
    case 'ACHIEVED':
      return 'bg-accent-green/10 text-accent-green';
    case 'IN_PROGRESS':
      return 'bg-accent-blue/10 text-accent-blue';
    case 'NOT_STARTED':
      return 'bg-surface-tertiary text-text-tertiary';
    default:
      return 'bg-surface-tertiary text-text-tertiary';
  }
}

export function getDepthLabel(level: number): string {
  switch (level) {
    case 1:
      return 'Basic';
    case 2:
      return 'Moderate';
    case 3:
      return 'Advanced';
    default:
      return 'Unknown';
  }
}

export function getDepthColor(level: number): string {
  switch (level) {
    case 1:
      return 'bg-accent-green/10 text-accent-green';
    case 2:
      return 'bg-accent-orange/10 text-accent-orange';
    case 3:
      return 'bg-accent-blue/10 text-accent-blue';
    default:
      return 'bg-surface-tertiary text-text-tertiary';
  }
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}
