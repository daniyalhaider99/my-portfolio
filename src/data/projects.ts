export interface Project {
  name: string;
  description: string;
  imageUrl: string;
}

export const projects: Project[] = [
  {
    name: 'Elocker',
    description: 'A comprehensive locker management system with hardware integration. Features include real-time locker status monitoring, secure access control, and customizable locker configurations.',
    imageUrl: '/elocker.svg'
  },
  {
    name: 'HuntWallet',
    description: 'The first planning and organizing tool designed exclusively for hunters. From application to hunting season, and everything in between, HUNTwallet puts all your hunting needs in one place.',
    imageUrl: '/hunt_wallet.png'
  },
  {
    name: 'Astria Learning',
    description: 'An education suite from digital libraries to fully managed online courses, designed to meet the diverse needs of educational institutions of all sizes.',
    imageUrl: '/astria.svg'
  },
  {
    name: 'Jarvis',
    description: 'Product of Dubizzle Labs providing CRM strategies and solutions for other products like Zameen, OLX, Bayut and Dubizzle.',
    imageUrl: '/jarvis.svg'
  }
];

export const projectSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
};