export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Languages & Frameworks',
    skills: ['Python', 'SQL', 'PySpark', 'FastAPI', 'Scikit-learn', 'XGBoost', 'LightGBM'],
  },
  {
    name: 'Data Engineering',
    skills: ['ETL/ELT Pipelines', 'Medallion Architecture', 'Data Modeling', 'Data Warehousing', 'Delta Lake', 'Incremental Data Loading', 'Data Transformation', 'Data Integration'],
  },
  {
    name: 'Cloud & Infrastructure',
    skills: ['AWS S3', 'AWS Lambda', 'AWS Athena', 'AWS Redshift', 'Amazon EventBridge', 'Amazon CloudWatch', 'Databricks', 'IAM'],
  },
  {
    name: 'Analytics & Visualization',
    skills: ['Power BI', 'Tableau', 'PostHog', 'ThinkCell', 'Plotly', 'Dashboard Development', 'KPI Reporting', 'Data Storytelling'],
  },
  {
    name: 'Machine Learning & AI',
    skills: ['Supervised Learning', 'Unsupervised Learning', 'Time Series Forecasting', 'Feature Engineering', 'Model Evaluation', 'Imbalanced Learning', 'EDA', 'Gemini API'],
  },
  {
    name: 'Tools & Practices',
    skills: ['Git', 'GitHub', 'Version Control', 'Data Cleaning & Preprocessing', 'Business Performance Analysis'],
  },
];
