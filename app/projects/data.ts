export type Link = {
  type: "github" | "figma";
  href: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  links?: Link[]; // optional because some projects don't have links
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Snorlax's Stash",
    description: "A prototype Pokémon trading card e-commerce system built with React and optimized PostgreSQL queries for performance and scalability.",
    image: "/SnorlaxStash.png",
    links: [
      {
        type: "github",
        href: "https://github.com/joshnealcrisostomo/stadvdb",
      },
    ]
  },
  {
    id: "2",
    title: "SafeMeds Pro",
    description: "A Philippine-based prescription reader built with PaddleOCR, developed to digitize and interpret handwritten and printed medical prescriptions commonly used in the Philippines.",
    image: "/SafeMeds.png",
    links: [
      {
        type: "github",
        href: "https://github.com/THS-ST/ocr-models",
      },
      {
        type: "figma",
        href: "https://www.figma.com/design/929ltKTrIBhaWrna25zrBs/TH2-Framework?node-id=0-1&t=DOIaV7G8HhbuKs42-1",
      },
    ]
  },  
  {
    id: "4",
    title: "Secure Support Ticketing System",
    description: "A secure ticketing system built with Vue.js, Laravel (PHP), and PostgreSQL that implements authentication, role-based access control, and best-practice security principles for managing user support tickets.",
    image: "/SecureTicket.png",
    links: [
      {
        type: "github",
        href: "https://github.com/shayleneK/CSSECDV",
      },
    ]

  }, 
  {
    id: "5",
    title: "MultiPest Corporation Website",
    description: "A website designed for the business processes of the MultiPest Corporation designed with NextJS.",
    image:"/MutiPest.png",
    links: [
      {
        type: "github",
        href: "https://github.com/gitnadu/STSWENG",
      },
    ]
  }, 
  {
    id: "6",
    title: "“Promise” Mini Story Game",
    description: "A game developed with GameMaker 2 focusing on dialogueing, menus, and player movement.",
    image: "/Promise.png"
  }, 
];
