export interface GalleryImage {
  src: string;
  desc: string;
  category: string;
  title: string;
}

export const galleryImages: GalleryImage[] = [
  {
    src: "/gallery/1.jpg",
    title: "RC Aircraft Flight Test",
    desc: "Team members conducting flight tests of our custom-built RC aircraft",
    category: "Aircraft",
  },
  {
    src: "/gallery/2.jpg",
    title: "Workshop Session",
    desc: "Technical workshop on aerodynamics and aircraft design principles",
    category: "Workshops",
  },
  {
    src: "/gallery/3.jpg",
    title: "Competition Win",
    desc: "Team celebrating victory at inter-college aeromodelling competition",
    category: "Competitions",
  },
  {
    src: "/gallery/4.jpg",
    title: "Aircraft Assembly",
    desc: "Team assembling wing components for new aircraft prototype",
    category: "Aircraft",
  },
  {
    src: "/gallery/5.jpg",
    title: "Team Meeting",
    desc: "Strategic planning meeting for upcoming competition",
    category: "Team Events",
  },
  {
    src: "/gallery/6.jpg",
    title: "Flight Demonstration",
    desc: "Demonstrating autonomous flight capabilities to audience",
    category: "Aircraft",
  },
  {
    src: "/gallery/7.jpg",
    title: "CAD Design Session",
    desc: "Team working on 3D modeling and design optimization",
    category: "Workshops",
  },
  {
    src: "/gallery/8.jpg",
    title: "Competition Preparation",
    desc: "Final preparations before national-level competition",
    category: "Competitions",
  },
  {
    src: "/gallery/9.jpg",
    title: "VTOL Testing",
    desc: "Vertical Take-Off and Landing aircraft field testing",
    category: "Aircraft",
  },
  {
    src: "/gallery/10.jpg",
    title: "Electronics Workshop",
    desc: "Workshop on avionics and flight control systems",
    category: "Workshops",
  },
  {
    src: "/gallery/11.jpg",
    title: "Award Ceremony",
    desc: "Receiving first place trophy at regional competition",
    category: "Competitions",
  },
  {
    src: "/gallery/12.jpg",
    title: "Drone Assembly",
    desc: "Building custom quadcopter with FPV capabilities",
    category: "Aircraft",
  },
  {
    src: "/gallery/13.jpg",
    title: "Team Bonding",
    desc: "Team building activities and social gathering",
    category: "Team Events",
  },
  {
    src: "/gallery/14.jpg",
    title: "Fabrication Lab",
    desc: "Manufacturing aircraft components in our workshop",
    category: "Workshops",
  },
  {
    src: "/gallery/15.jpg",
    title: "Competition Day",
    desc: "Team at venue ready for competition rounds",
    category: "Competitions",
  },
  {
    src: "/gallery/16.jpg",
    title: "Test Flight Success",
    desc: "Successful maiden flight of new aircraft design",
    category: "Aircraft",
  },
  {
    src: "/gallery/17.png",
    title: "Guest Lecture",
    desc: "Industry expert sharing insights on aerospace engineering",
    category: "Workshops",
  },
  {
    src: "/gallery/18.png",
    title: "Team Photo",
    desc: "Team Vyoma members at annual gathering",
    category: "Team Events",
  },
];

export const categories = [
  "All",
  "Aircraft",
  "Competitions",
  "Workshops",
  "Team Events",
] as const;
