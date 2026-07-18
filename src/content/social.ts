export interface SocialLink {
  id: string;
  label: string;
  url: string;
  icon: string;
}

export const personalInfo = {
  name: 'Jen Patrick G. Nataba',
  firstName: 'Jen Patrick',
  lastName: 'Nataba',
  headline: 'Data Analyst · Data Scientist · ML Engineer',
  subtitles: [
    'Data Analyst',
    'Data Scientist',
    'ML Engineer',
    'Data Engineer',
    'Growth Analyst',
  ],
  location: 'Manila, NCR, Philippines',
  email: 'jenpatricknataba@gmail.com',
  phone: '+639945227725',
  summary:
    'I believe that good data should be useful, not just interesting. These days, you\'ll usually find me building data pipelines, training machine learning models, or creating dashboards that help turn questions into decisions.',
  tagline: 'Fueled by curiosity, driven by data, and always chasing the "why" behind every data point.',
  resumeUrl:
    'https://drive.google.com/uc?export=download&id=1M9Dje62seM1-ywBavFtFuUZmvk3vHgIG',
  profileImage: '/images/profile/profile.png',
} as const;

export const socialLinks: SocialLink[] = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/cytojen/',
    icon: 'mdi:linkedin',
  },
  {
    id: 'github',
    label: 'GitHub',
    url: 'https://github.com/cytojen',
    icon: 'mdi:github',
  },
  {
    id: 'email',
    label: 'Email',
    url: 'mailto:jenpatricknataba@gmail.com',
    icon: 'lucide:mail',
  },
];

export const navLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Certifications', href: '/#certifications' },
  { label: 'Talks', href: '/#talks' },
  { label: 'Impact', href: '/#impact' },
  { label: 'Contact', href: '/#contact' },
] as const;
