export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  image: string;
  credentialUrl: string;
  description: string;
}

export const certifications: Certification[] = [
  {
    id: 'microsoft-azure-databricks',
    title: 'Microsoft Certified: Azure Databricks Data Engineer Associate',
    issuer: 'Microsoft',
    year: '2026',
    image: '/images/certifications/Microsoft_AzureDatabricks.png',
    credentialUrl: 'https://learn.microsoft.com/api/credentials/share/en-us/JenPatrickNataba-6454/5531CA61A677F5CE?sharingId=1229231DB8EDA6E9',
    description: 'Certified in setting up and configuring Azure Databricks environments, securing Unity Catalog objects, and building scalable data pipelines.',
  },
  {
    id: 'datacamp-de',
    title: 'Certified Data Engineer',
    issuer: 'DataCamp',
    year: '2026',
    image: '/images/certifications/nataba_data_engi_certification.jpg',
    credentialUrl: 'https://www.datacamp.com/certificate/DE0019422770746',
    description: 'Engineered end-to-end data pipelines to automate the extraction, transformation, and validation of large datasets.',
  },
  {
    id: 'datacamp-da',
    title: 'Associate Data Analyst',
    issuer: 'DataCamp',
    year: '2024',
    image: '/images/certifications/nataba_assoc_data_analyst_certification.jpg',
    credentialUrl: 'https://www.datacamp.com/certificate/DAA0014313414567',
    description: 'Certified in data analysis, demonstrating proficiency in key analytical and statistical techniques.',
  },
  {
    id: 'ibm-ds',
    title: 'Industry Professional Credentials — IBM Data Science',
    issuer: 'IBM',
    year: '2025',
    image: '/images/certifications/ibm_data_science.png',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/specialization/7DAN7GTYZOTC',
    description: 'Completed IBM Data Science specialization track.',
  },
  {
    id: 'harvardx-cs50p',
    title: 'CS50P: Introduction to Programming with Python',
    issuer: 'HarvardX',
    year: '2024',
    image: '/images/certifications/CS50P.png',
    credentialUrl: 'https://certificates.cs50.io/4cc03379-76a6-4fef-90ce-4d851df8c856.pdf?size=letter',
    description: 'Learned Python fundamentals through hands-on problem sets, with emphasis on writing clean, efficient, and Pythonic code.',
  },
  {
    id: 'harvardx-cs50',
    title: "CS50x: Introduction to Computer Science",
    issuer: 'HarvardX',
    year: '2023',
    image: '/images/certifications/CS50x.png',
    credentialUrl: 'https://certificates.cs50.io/d721918e-4d64-4b0e-b324-227539f2251a.png?size=letter',
    description: 'Gained foundational knowledge in Computer Science and programming using C, Python, and SQL.',
  },
];
