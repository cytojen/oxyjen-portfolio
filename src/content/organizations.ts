export interface Organization {
  id: string;
  name: string;
  logo: string;
  url: string;
}

export const organizations: Organization[] = [
  {
    id: 'angat-buhay',
    name: 'Angat Buhay',
    logo: '/images/organizations/angat_buhay_logo.png',
    url: 'https://www.angatbuhay.ph/',
  },
  {
    id: 'booky',
    name: 'Booky',
    logo: '/images/organizations/booky_logo.png',
    url: 'https://booky.ph',
  },
  {
    id: 'datacamp',
    name: 'DataCamp',
    logo: '/images/organizations/datacamp_logo.png',
    url: 'https://datacamp.com',
  },
  {
    id: 'aws-cloud-club',
    name: 'AWS Cloud Club PUP',
    logo: '/images/organizations/awsccpup_logo.webp',
    url: 'https://awsccpup.cloud/',
  },
  {
    id: 'gdg',
    name: 'Google Developer Groups',
    logo: '/images/organizations/gdg_logo.png',
    url: 'https://gdg.community.dev/',
  }
];
