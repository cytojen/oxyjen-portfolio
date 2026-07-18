export interface Experience {
  id: string;
  company: string;
  logo: string;
  role: string;
  type: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: 'angat-buhay',
    company: 'Angat Buhay',
    logo: '/images/organizations/angat_buhay_logo.png',
    role: 'Data Analyst Intern',
    type: 'Hybrid',
    location: 'Quezon City, PH',
    period: 'January 2026 – June 2026',
    description:
      'Designed and delivered interactive dashboards across all advocacy pillars, translating operational requirements into actionable data models and visualizations for executive stakeholders.',
    achievements: [
      'Designed and delivered interactive Power BI dashboards across all 5 advocacy pillars (Education, Health, Community Engagement, Climate Action, and Arts & Culture), connecting and engineering underlying data sources.',
      'Worked directly with 5+ internal program managers to translate operational requirements into data models and visualizations (maps, KPI dashboards), enabling standardized tracking of program performance.',
      'Presented historical insights to the Executive Director and 10+ stakeholders for program evaluation and reporting.',
    ],
    technologies: ['Power BI', 'Data Modeling', 'KPI Reporting', 'Data Visualization', 'Data Storytelling', 'Stakeholder Collaboration'],
  },
  {
    id: 'booky',
    company: 'Booky',
    logo: '/images/organizations/booky_logo.png',
    role: 'Growth Analyst Intern',
    type: 'Hybrid',
    location: 'Mandaluyong City, PH',
    period: 'October 2025 – January 2026',
    description:
      'Analyzed large-scale user events and transactions, built multi-merchant performance analyses, and proactively explored ETL pipelines to extract event-level data for executive reporting.',
    achievements: [
      'Analyzed 10k+ user events and transactions across GCash GDeals, Booky App, and Web, identifying trends in merchant performance, payment behavior, and subscriber segmentation.',
      'Built and validated multi-merchant performance analyses using Tableau and PostHog, with slide deck reports and visualizations in Tableau and ThinkCell to present findings to executives.',
      'Proactively expanded scope beyond assigned tasks by exploring PostHog product analytics and ETL pipelines (PostHog → AWS Lambda → AWS Redshift → Tableau) and writing SQL queries to extract and analyze event-level data.',
    ],
    technologies: ['Tableau', 'PostHog', 'SQL', 'AWS Lambda', 'AWS Redshift', 'ThinkCell', 'ETL Pipelines'],
  },
  {
    id: 'omdena',
    company: 'Omdena',
    logo: '/images/organizations/omdena_logo.png',
    role: 'Junior Machine Learning Engineer',
    type: 'Remote · Project-Based',
    location: 'New York, USA',
    period: 'October 2024 – April 2025',
    description:
      'Led ML, data collection, and data engineering teams to forecast air quality trends, developing time series models and building real-time prediction dashboards.',
    achievements: [
      'Led the machine learning, data collection, and data engineering team to forecast 24-hour AQI trends from multiple monitoring stations in Mexico, achieving 85% accuracy.',
      'Developing and fine-tuning time series forecasting models to predict AQI trends, leveraging techniques like LightGBM and XGBoost.',
      'Built a web dashboard delivering real-time AQI predictions and personalized health recommendations for end-users.',
    ],
    technologies: ['Python', 'LightGBM', 'XGBoost', 'Time Series Forecasting', 'Data Engineering', 'Dashboard Development'],
  },
];
