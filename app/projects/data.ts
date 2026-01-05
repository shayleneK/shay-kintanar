export type Tech =
  | "php"
  | "laravel"
  | "postgreSQL"
  | "next.js"
  | "react"
  | "vue.js"
  | "python"
  | "mongodb";

export type Link = {
  type: "github" | "figma";
  href: string;
};

export type Project = {
  id: string;
  title: string;
  brief: string;
  description?: string;
  image: string;
  links?: Link[]; // optional because some projects don't have links
  stacks?: Tech[];
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Snorlax's Stash",
    brief: "A prototype Pokémon trading card e-commerce system built with React and optimized PostgreSQL queries for performance and scalability.",
    description: "Snorlax’s Stash is an e-commerce platform for trading cards, built with a focus on database optimization and high availability. The system uses separate OLTP and OLAP databases to handle transactional operations and analytical reporting independently, ensuring both performance and insight.\n\nI engineered the database schemas, containerized the application, and set up hot backup servers with automatic failover. On the transactional side, users can browse products, manage carts with an optimized 'Upsert' strategy, and complete secure checkouts via a stored procedure that ensures ACID compliance. Inventory constraints prevent overselling, even during high-traffic flash sales.\n\nFor analytics, sales data is automatically synced to the OLAP database and transformed into a Star Schema in real time, enabling instant reporting without nightly batch jobs. High availability is ensured through streaming replication of Write-Ahead Logs, with automatic failover in case the primary server goes down.\n\nThis project demonstrates practical application of database optimization concepts, including load balancing, deadlock handling, and disaster recovery, while delivering a reliable and efficient e-commerce experience",
    image: "/SnorlaxStash.png",
    links: [
      {
        type: "github",
        href: "https://github.com/joshnealcrisostomo/stadvdb",
      },
    ],
    stacks: [
      "next.js", "postgreSQL", "python"
    ]
  },
  {
    id: "2",
    title: "SafeMeds Pro",
    brief: "A Philippine-based prescription reader built with PaddleOCR, developed to digitize and interpret handwritten and printed medical prescriptions commonly used in the Philippines.",
    description: "Safe Meds Pro is an ongoing project where my team is developing a mobile application designed to centralize and simplify elderly home management. The application is equipped with a PaddleOCR-powered handwritten prescription recognition feature, allowing caregivers to digitize prescriptions quickly and accurately.\n\nThe project was initiated to reduce caregiver burden by streamlining medication management, minimizing human error, and improving elderly care efficiency. Caregivers no longer need to manually track medications or rely on paper prescriptions, allowing them to focus more on the residents’ well-being and daily care routines.\n\nBefore development, our team evaluated multiple OCR models to determine the most suitable solution for Philippine handwritten prescriptions. Based on Word Error Rate and Character Error Rate scores across four candidate models, PaddleOCR consistently produced the most accurate predictions. I was responsible for developing the DocTr model and implementing the backend infrastructure for the application.\n\nThe platform includes full CRUD functionalities, enabling caregivers to add, remove, or edit medications for each resident. It provides reminders for both stock levels and upcoming doses. When adding a new medication, caregivers can also leverage the PaddleOCR-powered camera recognition feature to quickly capture prescription information, further reducing manual entry and potential errors.",
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
    ],
    stacks: ["python"]
  },  
  {
    id: "4",
    title: "Secure Support Ticketing System",
    brief: "A secure ticketing system built with Vue.js, Laravel (PHP), and PostgreSQL that implements authentication, role-based access control, and best-practice security principles for managing user support tickets.",
    description: "The secure ticketing system application that I built is focused on the practice and application of secure development concepts I learned. The application includes concepts such as Role-Based access control, route protection, authentication, and logging or auditing. \n\nFor this application, I worked with a team to engineer the application end-to-end and to ensure the application of the predefined secure development concepts. The application was built with Laravel PHP for the backend, Vue.js for the frontend, and PostgreSQL for the database.\n\nThe application centralizes ticketing functions such as creating a ticket, adding comments, changing its status, and handling all clients. The application has 3 roles, namely, admin, support, and client. Credentials for these roles are found in the GitHub readme.",
    image: "/SecureTicket.png",
    links: [
      {
        type: "github",
        href: "https://github.com/shayleneK/CSSECDV",
      },
    ],
    stacks: ["laravel", "vue.js", "postgreSQL"],
  }, 
  {
    id: "5",
    title: "MultiPest Corporation Website",
    brief: "A website designed for the business processes of the MultiPest Corporation designed with NextJS.",
    description: "The MultiPest Corporation website is a web-based solution designed to centralize and streamline the company's business form processes while also serving as its official website.\n\nThe project was motivated by the need to enhacnce internal record-keeping and workflow wile providing the company with an online platform to officially present their offered services to potential clients.\n\n As the frontend developer, I was responsible for designing and implementing an intuitive and responsive user interface that ensures a seamless experience for both employees and visitors. I collaborated closely with the backend team to integrate dynamic form handling, secure submission, and real-time updates, translating functional requirements into an accessible and visually cohesive interface.\n\nKey features of the platform include secure digital form submission, categorized storage for easy retrieval, and real-time synchronization with backend systems. On the public-facing side, customers can effortlessly navigate the company’s services, access contact information, and interact with the platform through a clean, responsive interface. By combining operational efficiency with improved customer engagement, this project demonstrates practical application of frontend development principles and delivers tangible improvements in both business workflow and digital presence.",
    image:"/MutiPest.png",
    links: [
      {
        type: "github",
        href: "https://github.com/gitnadu/STSWENG",
      },
    ],
    stacks: ["next.js", "mongodb"]
  }, 
  {
    id: "6",
    title: "“Promise” Mini Story Game",
    brief: "A game developed with GameMaker 2 focusing on dialogueing, menus, and player movement.",
    description: "Promise Story Game is just a fun little side project that I wanted to work on. The game follows a story line of two highschool sweethearts making a promise to one another then reuniting after college.\n\nI made this side project because I wanted to test the waters of game development. As a gamer, I wanted to see what was going on behind the scenes of RPGs like Undertale. \n\n I developed the game with Gamemaker Studio 2 where I spent a week learning and practicing the GML.",
    image: "/Promise.png"
  }, 
];
