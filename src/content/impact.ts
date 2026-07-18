export interface ImpactMetric {
  id: string;
  label: string;
  value: number;
  suffix: string;
  icon: string;
}

export const impactMetrics: ImpactMetric[] = [
  {
    id: 'scholarships',
    label: 'DataCamp Scholarships Distributed',
    value: 1100,
    suffix: '+',
    icon: 'lucide:graduation-cap',
  },
  {
    id: 'community',
    label: 'Community Members Reached',
    value: 500,
    suffix: '+',
    icon: 'lucide:users',
  },
  {
    id: 'workshops',
    label: 'Workshops Hosted/Led',
    value: 15,
    suffix: '+',
    icon: 'lucide:presentation',
  }
];
