export interface Experience {
  id: number;
  date: string;
  title: string;
  description: string;
  side: "start" | "end";
}

export const experiencesData: Experience[] = [
  {
    id: 1,
    date: "June 2022",
    title: "High School Education",
    description: "I studied under a STEM course in highschool where I was the Foreign Language Club Head and a member of the programming organization.",
    side: "start",
  },
  {
    id: 2,
    date: "September 2022",
    title: "Start of College Education",
    description: "I studied at De La Salle University in Manila where I studied Computer Science majoring in Software Technology.",
    side: "end",
  },
  {
    id: 3,
    date: "August 2024",
    title: "Center for Human-Computer Interaction (CecHI)",
    description: "I joined this organization to make more contributions and understanding to human and computer interaction.",
    side: "start",
  },
  {
    id: 4,
    date: "August 2024",
    title: "Green Giant FM Website Management",
    description: "Contributed to the management and maintenance of the Green Giant FM website, assisting with content updates, layout adjustments, and overall site functionality.",
    side: "end",
  },
  {
    id: 5,
    date: "August 2025",
    title: "Completed Internship at PurpleBug",
    description: "Completed a software development internship at PurpleBug, where I gained hands-on experience working with real-world applications, collaborating with teams.",
    side: "start",
  },
  {
    id: 6,
    date: "August 2026",
    title: "Graduation (Hopefully!)",
    description: "Expected to graduate with a degree in Computer Science, specializing in Software Technology, with a strong foundation in full-stack development and user-centered design.",
    side: "end",
  },
];