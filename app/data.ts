type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type ReviewPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'AlbumAce',
    description:
      'Platform for users to rate and review music albums.',
    link: 'https://albumace.vercel.app/',
    video: '/videos/albumace.mp4',
    id: 'project1',
  },
  {
    name: 'UEFA Euro 2024 Tournament Predictor',
    description:
      'Random Forest-based model to predict the winner of the UEFA Euro 2024',
    link: 'https://github.com/ayannair/euros_2024_predictor',
    video: '/images/euros_2024_logo.jpg',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Astera Labs',
    title: 'Product and Ecosystem Intern',
    start: 'May 2025',
    end: 'Present',
    link: 'https://www.asteralabs.com/',
    id: 'work1',
  },
  {
    company: 'Kappa Theta Pi',
    title: 'Project Manager',
    start: 'Jan 2025',
    end: 'May 2025',
    link: 'https://ktpmichigan.com/',
    id: 'work2',
  },
  {
    company: 'DeepCharge Inc.',
    title: 'Software Engineer Intern',
    start: 'May 2024',
    end: 'Aug 2024',
    link: 'https://www.deepcharge.io/',
    id: 'work3',
  },
]

export const ALBUM_REVIEWS: ReviewPost[] = [
  {
    title: 'Malibu',
    description: 'Anderson .Paak',
    link: '/reviews/malibu',
    uid: 'blog-1',
  },
  {
    title: 'IGOR',
    description:
      'Tyler, the Creator',
    link: '/reviews/igor',
    uid: 'blog-2',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/ayannair',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/ayan-nair',
  },
  {
    label: 'Resume',
    link: '/resume_ayan_nair.pdf',
  },
]

export const EMAIL = 'ayannair@umich.edu'
