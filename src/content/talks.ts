export interface Talk {
  id: string;
  title: string;
  host: string;
  venue: string;
  date: string;
  role: string;
  description: string;
  image: string;
  eventUrl?: string;
  featured: boolean;
}

export const talks: Talk[] = [
  {
    id: 'aws-etl',
    title: 'Building an End to End Data Pipeline with AWS',
    host: 'Amazon Web Services Cloud Club - PUP',
    venue: 'AWS Arthaland, BGC, Taguig',
    date: '2024',
    role: 'Speaker & Organizer',
    description: 'Spearheaded the planning and delivery of a hands on, face to face workshop at the AWS Office in BGC, Taguig, introducing attendees to data engineering on AWS. Guided participants through building a serverless ETL pipeline using Amazon S3, AWS Lambda, and Amazon Redshift, providing practical experience with modern cloud data workflows.',
    image: '/images/talks/8_aws_etl.jpg',
    eventUrl: 'https://www.meetup.com/aws-sbg-at-pup-manila/events/315597718/?eventOrigin=group_past_events',
    featured: true,
  },
  {
    id: 'datacamp-connect',
    title: 'DataCamp Connect: From XP to eXPertise',
    host: 'Amazon Web Services Cloud Club - PUP',
    venue: 'MS Teams',
    date: '2024',
    role: 'Speaker',
    description: 'Invited to speak to incoming DataCamp Scholars about building a consistent learning routine and making the most of the platform. Also introduced the roles of Data Analysts, Data Engineers, and AI Practitioners to help participants choose a learning path aligned with their interests.',
    image: '/images/talks/7_datacamp_connect.jpg',
    eventUrl: 'https://www.meetup.com/aws-sbg-at-pup-manila/events/313572930/',
    featured: true,
  },
  {
    id: 'data-decoded',
    title: 'Data Decoded: Mastering Pandas for Real World Insights',
    host: 'Amazon Web Services Cloud Club - PUP',
    venue: 'MS Teams',
    date: '2024',
    role: 'Speaker',
    description: 'Led the planning and delivery of a hands on Pandas workshop that helped participants build a strong foundation in data manipulation. Demonstrated practical techniques for cleaning, transforming, organizing, and analyzing tabular data using Python.',
    image: '/images/talks/6_aws_pandas.jpg',
    eventUrl: 'https://www.meetup.com/aws-sbg-at-pup-manila/events/313444779/',
    featured: true,
  },
  {
    id: 'slithering-python',
    title: 'Slithering into Python Fundamentals',
    host: 'Amazon Web Services Cloud Club - PUP',
    venue: 'MS Teams',
    date: '2024',
    role: 'Speaker',
    description: 'Designed and delivered a hands on introduction to Python, covering the programming fundamentals needed for data analysis. Participants learned how to write clean, readable code and apply Python to solve practical data related problems.',
    image: '/images/talks/5_aws_python.jpg',
    eventUrl: 'https://www.meetup.com/aws-sbg-at-pup-manila/events/313154066/?eventOrigin=group_events_list',
    featured: true,
  },
  {
    id: 'ai-unlocked',
    title: 'AI Unlocked: Introduction to Artificial Intelligence and Machine Learning',
    host: 'DEVCON',
    venue: 'Online',
    date: '2024',
    role: 'Speaker',
    description: 'Invited as a speaker to deliver the machine learning session, introducing the fundamentals of machine learning and explaining how models learn from data. The talk was designed to make AI approachable for students and beginners while providing a strong foundation for further learning.',
    image: '/images/talks/4_ai_unlocked.jpg',
    eventUrl: 'https://luma.com/mj88eshh',
    featured: true,
  },
  {
    id: 'bwai-2025',
    title: 'GDG on Campus PUP: Build with AI 2025',
    host: 'GDG on Campus PUP',
    venue: 'MS Teams',
    date: '2024',
    role: 'Organizer & Facilitator',
    description: 'Helped organize a full day AI workshop that brought together students and industry professionals for hands on learning. Worked with the organizing team to guide participants in building AI assistants using Gemini, Google AI Studio, and Streamlit while introducing prompt engineering and API integration.',
    image: '/images/talks/3_bwai.jpg',
    eventUrl: 'https://gdg.community.dev/events/details/google-gdg-on-campus-polytechnic-university-of-the-philippines-manila-philippines-presents-gdg-on-campus-pup-build-with-ai-2025/',
    featured: true,
  },
  {
    id: 'pandas-basics',
    title: 'Pandas: From Basics to Intermediate',
    host: 'GDG on Campus PUP',
    venue: 'MS Teams',
    date: '2024',
    role: 'Speaker',
    description: 'One of my first workshops, introducing beginners to Pandas and demonstrating how Python simplifies everyday data tasks, from cleaning messy datasets to exploring, transforming, and analyzing data.',
    image: '/images/talks/2_pandas_workshop.jpg',
    eventUrl: 'https://gdg.community.dev/events/details/google-gdg-on-campus-polytechnic-university-of-the-philippines-manila-philippines-presents-kickstarting-your-python-for-data-journey-session-3-pandas-from-basics-to-intermediate/',
    featured: true,
  },
  {
    id: 'ai-horizons',
    title: 'AI Horizons: Discover the Art of Effortless Data Science!',
    host: 'DEVCON / GDG on Campus PUP',
    venue: 'MS Teams',
    date: '2024',
    role: 'Speaker',
    description: 'Invited by DEVCON to speak about leveraging Artificial Intelligence for Data Science, focusing on how AI powered tools enhance data analysis, uncover meaningful insights, and improve decision making. The session explored how AI streamlines modern data workflows and enables more effective data driven solutions.',
    image: '/images/talks/1_devcon_ai_horizons.jpg',
    eventUrl: 'https://gdg.community.dev/events/details/google-gdg-on-campus-polytechnic-university-of-the-philippines-manila-philippines-presents-campus-devcon-ai-horizons-pioneering-tomorrows-solutions/',
    featured: true,
  }
];
