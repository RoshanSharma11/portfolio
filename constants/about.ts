export interface TimelineItem {
  title: string;
  highlight: string;
  highlightColor: string;
  description: string;
  date: string;
  isActive?: boolean;
}

export const experienceData: TimelineItem[] = [
  {
    title: "Mobile App Developer",
    highlight: "GenZFit",
    highlightColor: "text-zinc-300",
    description: "Built and shipped a production-ready fitness & nutrition mobile app with real-time features and subscriptions",
    date: "Sep 2025 - Nov 2025",
  },
  {
    title: "Full Stack Developer",
    highlight: "ToolSnitch",
    highlightColor: "text-zinc-300",
    description: "Developed scalable seller and user portals with role-based access, payments, and automated workflows",
    date: "Sep 2024 - Nov 2024",
  },
];

export const educationData: TimelineItem[] = [
  {
    title: "Bachelor of Technology in Computer Science and Engineering ",
    highlight: "8.48 GPA",
    highlightColor: "text-blue-400",
    description: "Netaji Subhas Institute of Technology",
    date: "2024 - 2028",
    isActive: true,
  },
  {
    title: "Class XII",
    highlight: "93.2%",
    highlightColor: "text-zinc-300",
    description: "Delhi Public School, Vasant Kunj",
    date: "2024",
  },
  {
    title: "Class X",
    highlight: "93.0%",
    highlightColor: "text-zinc-300",
    description: "Masonic Public School, Vasant Kunj",
    date: "2022",
  },
];
