export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  technologies: string[];
  github?: string;
  live?: string;
  notebook?: string;
  featured: boolean;
  category: 'Academic' | 'Hackathon' | 'Research' | 'Personal';
  highlights?: string[];
  tagline?: string;
}

export const projects: Project[] = [
  // PERSONAL PROJECTS
  {
    id: 'etl-aws',
    title: 'ETL Pipeline for Data Lake & Warehouse on AWS',
    description: 'Developed an event driven ETL pipeline on AWS that orchestrates data ingestion from three public APIs into Amazon Redshift using AWS Lambda, Amazon S3, EventBridge, and the Redshift Data API. Implemented automated extraction, transformation, and loading workflows triggered by scheduled events and S3 object creation for near real time analytics.',
    thumbnail: '/images/projects/aws_etl.png',
    technologies: ['Python', 'AWS Lambda', 'Amazon S3', 'Amazon EventBridge', 'Amazon Redshift', 'IAM', 'Amazon CloudWatch'],
    featured: true,
    category: 'Personal'
  },
  {
    id: 'medallion-etl',
    title: 'Medallion Architecture ETL with Databricks & Power BI',
    description: 'Built an end to end medallion ETL pipeline on Databricks using Bronze, Silver, and Gold layers with PySpark and Delta Lake. Implemented incremental data loading using Delta MERGE to process relational e commerce data, transformed datasets into analytics ready tables for Power BI, and automated daily pipeline execution with Databricks Workflows.',
    thumbnail: '/images/projects/medallion_databricks_etl.png',
    technologies: ['Python', 'SQL', 'PySpark', 'Databricks', 'Delta Lake', 'AWS S3', 'Databricks Workflows', 'Power BI'],
    github: 'https://github.com/cytojen/medallion-etl-databricks-powerbi',
    live: 'https://app.powerbi.com/view?r=eyJrIjoiYjFkMThhYjktNmUxZi00ZmZlLWIzYjgtM2VmODRhYzdmNTFjIiwidCI6IjRkYTk4NTcxLWRjZWEtNDgzOS04ZmIxLTBiZGQ1ZGM5NjlmOSIsImMiOjEwfQ%3D%3D',
    featured: true,
    category: 'Personal'
  },
  {
    id: 'fraud-detection',
    title: 'Credit Card Fraud Detection',
    description: 'Built an end to end machine learning workflow for detecting fraudulent credit card transactions. Applied SMOTE to address class imbalance, trained and evaluated multiple classification models, and analyzed model performance using appropriate evaluation metrics.',
    thumbnail: '/images/projects/kaggle_logo.png',
    technologies: ['Python', 'Pandas', 'Scikit learn', 'SMOTE', 'XGBoost', 'Jupyter Notebook'],
    notebook: 'https://www.kaggle.com/code/oxyjen/credit-card-fraud-detection-end-to-end-workflow',
    featured: false,
    category: 'Personal'
  },
  {
    id: 'churnbucket',
    title: 'ChurnBucket: B2B SaaS Customer Churn Prediction',
    description: 'Created an end-to-end machine learning pipeline for B2B SaaS customer churn prediction using XGBoost, automating data extraction, feature engineering, and customer risk classification.',
    thumbnail: '/images/projects/churnbucket.png',
    technologies: ['Python', 'XGBoost', 'FastAPI', 'Supabase'],
    github: 'https://github.com/cytojen/churn-bucket',
    featured: true,
    category: 'Personal'
  },
  {
    id: 'heart-disease',
    title: 'Heart Disease Risk Classification',
    description: 'Built a classification model by performing exploratory data analysis, feature selection, and preprocessing on clinical patient data to identify key cardiovascular risk factors.',
    thumbnail: '/images/projects/google_colab_logo.jpg',
    technologies: ['Python', 'Machine Learning'],
    notebook: 'https://colab.research.google.com/drive/1hV-ErW81_qSN9Aq5LHv9ng82byc97O5r?usp=sharing',
    featured: false,
    category: 'Personal'
  },

  // HACKATHON PROJECTS
  {
    id: 'verifai',
    title: 'VerifAI: Where AI Meets Authentication',
    description: 'Champion among 80+ teams at Omdena\'s Year End Hackathon 2024 for building a scalable AI solution for synthetic media detection. Engineered backend logic and APIs to support real time analysis of deepfake images and audio. Performed end to end testing to ensure system reliability, scalability, and responsiveness.',
    thumbnail: '/images/projects/verifai.png',
    technologies: ['AI', 'Backend APIs', 'Testing'],
    live: 'https://luma.com/blast/vEwTrTC5F8',
    tagline: 'Omdena Year End Hackathon 2024',
    featured: true,
    category: 'Hackathon'
  },
  {
    id: 'bcbob',
    title: 'BCBob',
    description: 'Built on IBM Bob, BCBob scans repositories for security flaws introduced by AI assisted development and automatically applies secure, non breaking fixes. The system detects AI driven vulnerabilities, validates fixes in an isolated sandbox environment, and commits verified patches to improve repository security and stability.',
    thumbnail: '/images/projects/BCBob.png',
    technologies: ['IBM Bob', 'Security Auditing'],
    github: 'https://github.com/cytojen/BCBob-IBM-Bob',
    tagline: 'IBM Bob Hackathon',
    highlights: ['System wide vulnerability patching', 'Targeted AI specific auditing', 'Sandbox verification loops'],
    featured: false,
    category: 'Hackathon'
  },
  {
    id: 'thryve',
    title: 'Thryve',
    description: 'Built an autonomous agentic AI platform that digitizes and accelerates BPI\'s core product development process, helping teams respond to changing market demands faster while considering BSP regulatory requirements for the Philippine banking sector.',
    thumbnail: '/images/projects/thryve.png',
    technologies: ['TypeScript', 'Next.js', 'React', 'Supabase', 'Tailwind CSS', 'Vercel'],
    github: 'https://github.com/AshleyFullero/DATAWAVE2025-thryve',
    tagline: 'BPI DataWave Hackathon - See What\'s Beyond. Build What\'s Next.',
    featured: true,
    category: 'Hackathon'
  },

  // ACADEMIC PROJECTS
  {
    id: 'cropchain',
    title: 'CropChain: Smart Agricultural Supply Chain Optimizer',
    description: 'A web based platform that connects farmers directly with buyers through intelligent matching and optimized crop distribution. CropChain streamlines agricultural trade, reduces post harvest losses, and creates a data driven marketplace that benefits both producers and consumers.',
    thumbnail: '/images/projects/cropchain.jpg',
    technologies: ['Web Development', 'Supply Chain'],
    github: 'https://github.com/JyLV-Rey/crop-chain',
    featured: false,
    category: 'Academic'
  },
  {
    id: 'polyplaza',
    title: 'PolyPlaza',
    description: 'An e commerce platform built exclusively for students, allowing them to buy, sell, and trade textbooks, school supplies, gadgets, and other campus essentials within the university community.',
    thumbnail: '/images/projects/polyplaza.jpg',
    technologies: ['E-commerce', 'Web Development'],
    github: 'https://github.com/JyLV-Rey/poly-plaza',
    featured: false,
    category: 'Academic'
  },
  {
    id: 'shoppupee',
    title: 'shopPUPee',
    description: 'A Laravel based e commerce marketplace similar to PolyPlaza, designed for students to securely buy and sell items within the campus community.',
    thumbnail: '/images/projects/shopPUPee.png',
    technologies: ['Laravel', 'PHP', 'MySQL'],
    github: 'https://github.com/JyLV-Rey/shopPUPee',
    featured: false,
    category: 'Academic'
  },
  {
    id: 'semispaces',
    title: 'SemiSpaces',
    description: 'A first person survival shooter set in fractured interdimensional zones where reality is unstable. Players battle Swarm entities and Duelist class anomalies while navigating environments that dynamically change throughout gameplay. I mainly worked on the swarm and duelist algorithm for the enemy AI.',
    thumbnail: '/images/projects/semispaces.png',
    technologies: ['Game Development'],
    github: 'https://github.com/icyclestick/semi-spaces',
    featured: false,
    category: 'Academic'
  }
];
