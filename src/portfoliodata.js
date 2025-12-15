const portfolioData = {
  personal: {
    name: "Jitendra Yadav",
    title: "Web Developer",
    avatar: "/assets/images/my-avatar.png",
    email: "yadavjayofficial72@gmail.com",
    phone: "+91 9137299206",
    birthday: "August 19, 2002",
    location: "Chembur-400071, Mumbai, Maharashtra",
  },
  social: [
    {
      name: "GitHub",
      url: "https://github.com/Jitendra9140?tab=repositories",
      icon: "logo-github",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/jitendra9140/",
      icon: "logo-linkedin",
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/Jitendra9140/",
      icon: "code-slash-outline",
    },
    {
      name: "GeeksForGeeks",
      url: "https://www.geeksforgeeks.org/profile/yadavjayup72?tab=activity",
      icon: "school-outline",
    },
  ],
  about: {
    intro: [
      "I'm a Web developer specializing in modern web technologies like React, Node.js, MongoDB, and Express. I enjoy building responsive and user-friendly web applications and solving complex problems.",
      "My job is to build websites that are functional, user-friendly, and attractive. I add a personal touch to each project and ensure it's eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way while maintaining high performance and scalability.",
    ],
    services: [
      {
        title: "Web Development",
        description:
          "Building modern and responsive web applications using React, Node.js, and MongoDB.",
        icon: "/assets/images/icon-design.svg",
      },
      {
        title: "Backend Development",
        description:
          "Developing robust and scalable backend systems using Node.js, Express, and MongoDB and SQL.",
        icon: "/assets/images/icon-dev.svg",
      },
      {
        title: "Data Structures & Algorithms",
        description:
          "Solving complex problems and optimizing algorithms for efficient solutions.",
        icon: "/assets/images/icon-app.svg",
      },
      {
        title: "Freelance Projects",
        description:
          "Working on freelance projects to deliver high-quality solutions for clients.",
        icon: "/assets/images/icon-photo.svg",
      },
    ],
  },
  education: [
    {
      institution: "Bharti Vidyapeeth College of Engineering",
      period: "2021 — 2025",
      description:
        "Pursuing IT engineering with a focus on software development, specializing in creating innovative and efficient solutions using modern technologies.",
    },
    {
      institution: "Swami Vivekanad Junior College",
      period: "2018 — 2020",
      description:
        "Completed HSC in the Science stream with 82.98%, building a strong foundation in mathematics, physics, and computer science.",
    },
    {
      institution: "Swami Vivekanad Vidyalaya",
      period: "2017 — 2018",
      description:
        "Completed SSC with 91.40%, demonstrating academic excellence and strong dedication to learning.",
    },
  ],
  experience: [
    {
      company: "AtpLand",
      period: "2022 — Dec",
      description:
        "Designed captivating front-end interfaces for Atpland, employing HTML, CSS, Bootstrap, and JavaScript to seamlessly merge aesthetics with function.",
    },
    {
      company: "Meri Pahchan NGO",
      period: "2023 — March",
      description:
        "Crafted impactful landing page and two additional pages for an NGO using HTML, CSS, and JavaScript, enhancing their online presence and user experience.",
    },
    {
      company: "College IT Department Technical Head",
      period: "2022 — 2023",
      description:
        "Led as Technical Head at ITSA, organizing and executing technical events for 200+ students, and developed a 100% responsive website to facilitate event registration.",
    },
    {
      company: "2nd Place in Swami Vivekanand Hackathon",
      period: "",
      description:
        "Achieved second place in the Swami Vivekanand hackathon for landing page design, demonstrating strong problem-solving skills and innovative thinking.",
    },
  ],
  certifications: [
    {
      title: "MERN Stack Certification",
      issuer: "Udemy",
      description:
        "Completed comprehensive MERN stack development certification, gaining expertise in MongoDB, Express.js, React, and Node.js.",
    },
  ],
  internships: [
    {
      company: "WhizAct Pvt Ltd",
      role: "Software Engineer Intern",
      period: "June/24-Nov/24",
      description:
        "Designed and implemented a robust frontend architecture utilizing React, leading to a 25% rise in user retention rates. Leveraged HTML, CSS, and component-based architecture and state management to build dynamic, responsive UI components.",
    },
  ],
  skills: [
    { name: "Web Development", level: 80 },
    { name: "Backend Development", level: 60 },
    { name: "Data Structures And Algorithms", level: 65 },
    { name: "Tailwind", level: 65 },
  ],
  techSkills: [
    {
      name: "JavaScript",
      icon: "/assets/images/js-removebg-preview.png",
    },
    {
      name: "React",
      icon: "/assets/images/react-removebg-preview.png",
    },
    {
      name: "Redux",
      icon: "/assets/images/redux-removebg-preview.png",
    },
    {
      name: "Node.js",
      icon: "/assets/images/nodejs-removebg-preview.png",
    },
    {
      name: "MongoDB",
      icon: "/assets/images/mongodb-removebg-preview.png",
    },
    {
      name: "Express.js",
      icon: "/assets/images/express-removebg-preview.png",
    },
    {
      name: "Git",
      icon: "/assets/images/git-removebg-preview.png",
    },
    {
      name: "VS Code",
      icon: "/assets/images/vscode-removebg-preview.png",
    },
    {
      name: "Docker",
      icon: "/assets/images/docker-removebg-preview.png",
    },
    {
      name: "SQL",
      icon: "/assets/images/sql-removebg-preview.png",
    },
    {
      name: "Java",
      icon: "/assets/images/java-removebg-preview.png",
    },
    {
      name: "Socket",
      icon: "/assets/images/socket-removebg-preview.png",
    },
  ],
  projects: [
    {
      id: 1,
      title: "RentYourBook",
      category: "web development",
      image: "/assets/images/project-1.png",
      description:
        "Book rental platform to browse, rent, and manage books online.",
      tech: "React, Node.js, Express, MongoDB,Node-Mailer , Razorpay , Redux",
      github: "https://github.com/Jitendra9140/BookRental-WebApp/tree/master",
      live: "https://bookrentbharati.netlify.app/",
    },
    {
      id: 2,
      title: "IKC WebApp",
      category: "web development",
      image: "/assets/images/project-2.png",
      description:
        "Institutional knowledge center web app with content pages and resources.",
      tech: "React, JavaScript,Tailwind ,Mongodb, Express",
      github: "https://github.com/Jitendra9140/IKC-WEBAPP",
      live: "https://ikc-webapp.netlify.app/",
    },
    {
      id: 3,
      title: "Web Book",
      category: "web development",
      image: "/assets/images/project-3.png",
      description:
        "This is my first project of my webdevelopment journey.It is a clone of Codewithharry platform. It is a platform where you can learn web development by watching videos and solving problems.",
      tech: "React, Node.js, Express, MongoDB",
      github: "https://github.com/Jitendra9140/WebBook",
      //   live: "https://github.com/Jitendra9140/WebBook"
    },
    {
      id: 4,
      title: "Hackfusion",
      category: "College Level Project",
      image: "/assets/images/hackfusion.png",
      description: "Landing page for hackfusion, a hackathon platform.",
      tech: "Next.js, JavaScript, Tailwind CSS,TypeScript",
      github: "https://github.com/Jitendra9140/HackFusion2024",
      live: "https://hackfusion2024.netlify.app/",
    },
    {
      id: 5,
      title: "Innovision",
      category: "College Level Project",
      image: "/assets/images/innovison.png",
      description:
        "College level project for Innovision, It is college fest ITSA Website. which is used to register for the fest and also to view the schedule of the fest.",
      tech: "React, JavaScript, Tailwind CSS ",
      github: "",
      live: "https://itsa-innovision.netlify.app/",
    },
  ],
};
export default portfolioData;