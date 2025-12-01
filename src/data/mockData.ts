export interface NGO {
  id: string;
  name: string;
  description: string;
  location: string;
  category: string;
  beneficiaries: number;
  status: 'Active' | 'Pending';
  image: string;
  verified?: boolean;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
}

export interface SuccessStory {
  id: string;
  name: string;
  role: string;
  quote: string;
  image: string;
}

export const MOCK_NGOS: NGO[] = [
  {
    id: '1',
    name: 'Hope Foundation for Education',
    description: 'Providing quality education and learning resources to underprivileged children in rural areas.',
    location: 'Mumbai, Maharashtra',
    category: 'Education',
    beneficiaries: 5420,
    status: 'Active',
    image: 'https://via.placeholder.com/150',
    verified: true,
  },
  {
    id: '2',
    name: 'Feeding the Needy Poor',
    description: 'The hunger relief feeding program and charity ensure no one goes to bed hungry.',
    location: 'Mumbai, Maharashtra',
    category: 'Zakat',
    beneficiaries: 1420,
    status: 'Active',
    image: 'https://via.placeholder.com/150',
    verified: true,
  },
  {
    id: '3',
    name: 'Community Health Initiative',
    description: 'Providing quality healthcare and medical camps to underprivileged communities.',
    location: 'Bangalore Urban, Karnataka',
    category: 'Health',
    beneficiaries: 12000,
    status: 'Active',
    image: 'https://via.placeholder.com/150',
    verified: true,
  },
  {
    id: '4',
    name: 'Rural Development Trust',
    description: 'Empowering rural communities through sustainable development projects.',
    location: 'Anantapur, Andhra Pradesh',
    category: 'Livelihood',
    beneficiaries: 8500,
    status: 'Pending',
    image: 'https://via.placeholder.com/150',
    verified: false,
  },
];

export const UPCOMING_EVENTS: Event[] = [
  {
    id: '1',
    title: 'NGO Leadership Summit 2025',
    date: '15 Nov, 2025',
    time: '9:00 am',
    location: 'Delhi',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: '2',
    title: 'AMP President visits Krishanganj, Bihar',
    date: '20 Nov, 2025',
    time: '10:30 am',
    location: 'Bihar',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: '3',
    title: 'AMP National Talent Search (NTS) 2025 Launch',
    date: '30 Nov, 2025',
    time: '11:00 am',
    location: 'Mumbai',
    image: 'https://via.placeholder.com/150',
  },
];

export const SUCCESS_STORIES: SuccessStory[] = [
  {
    id: '1',
    name: 'Khan Maksud Kuddus',
    role: 'Member',
    quote: 'My name is Maksud. Though belonging to a very humble household where we could barely make ends meet I always had big aspirations. My father is a very hard-working man.',
    image: 'https://via.placeholder.com/150',
  },
];

export const NGO_OF_THE_MONTH = {
  name: 'Community Health Initiative',
  stats: [
    '40% reduction in infant mortality',
    '50+ mobile health camps monthly',
    '100+ healthcare workers trained',
  ],
};

export const CATEGORIES = ['All', 'Education', 'Health', 'Livelihood', 'Zakat', 'Environment'];
