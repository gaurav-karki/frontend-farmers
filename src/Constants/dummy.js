import { img1, img2, img3, img4, user, req1, req2, req3 } from '../Images';
import { BiCamera, BiImage, BiLinkAlt, BiSmile } from 'react-icons/bi';
import { SlHome } from 'react-icons/sl';
import { MdCardMembership, MdGroups } from 'react-icons/md';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { BsCalendar4Event } from 'react-icons/bs';

export const sidebarRoutes = [
  {
    name: 'Home',
    path: '/',
    icon: SlHome,
  },
  {
    name: 'Community',
    path: '/community',
    icon: MdGroups,
  },
  {
    name: 'Marketplace',
    path: '/marketplace',
    icon: HiOutlineShoppingBag,
  },
  {
    name: 'FarmersMedia events',
    path: '/events',
    icon: BsCalendar4Event,
  },
  {
    name: 'News feed',
    path: '/news',
    icon: MdCardMembership,
  },
];

export const recentRequest = [
  {
    name: 'Shyam Lama',
    profile: req1,
  },
  {
    name: 'Hari Sharma',
    profile: req2,
  },
  {
    name: 'Bharat Nepal',
    profile: req3,
  },
];

export const shareOptions = [
  {
    icon: BiCamera,
  },
  {
    icon: BiImage,
  },
  {
    icon: BiLinkAlt,
  },
  {
    icon: BiSmile,
  },
];

export const posts = [
  {
    id: 894839543,
    img: img1,
    text: 'Checking on the growth of the crops.',
    username: 'Sita Neupane',
    profile: img1,
  },
  {
    id: 894839343,
    img: img2,
    text: 'This year production of crops is less.',
    username: 'Rajendra Bhusal',
    profile: img2,
  },
  {
    id: 894839243,
    img: img3,
    username: 'Sarita Khanal',
    text: 'My new setUp.',
    profile: img3,
  },
  {
    id: 894832843,
    img: img4,
    text: 'I think my mission on earth is completed.',
    username: 'Lionel Messi',
    profile: img4,
  },
];

export const comments = [
  {
    id: 894839843,
  },
  {
    id: 894839843,
  },
  {
    id: 894839843,
  },
  {
    id: 894839843,
  },
];

export const apiRoute = 'http://localhost:5000/api';
