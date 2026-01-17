type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      phone: {
        label: string;
        link: string;
        text: string;
        download?: boolean;
      };
      email: {
        label: string;
        link: string;
        text: string;
        download?: boolean;
      };
      linkedin: {
        label: string;
        link: string;
        text: string;
        download?: boolean;
      }
      resume: {
        label: string;
        link: string;
        text: string;
        download?: boolean;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    tech_stacks: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Guru's Portfolio",
    fullName: "John Doe",
    email: "johndoe@mail.com",
  },
  hero: {
    name: "Guru moorthi",
    p: ["Software Developer", "Writing clean, maintainable code to solve real-world problems.Committed to optimization, performance, and technical excellence."],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      phone: {
        label: "Contact Number :",
        link: "tel:+919787310867",
        text: "+91 97873 10867",
      },
      email: {
        label: "Email :",
        link: "mailto:gurumoorthi.tech@gmail.com",
        text: "gurumoorthi.tech@gmail.com",
      },
      linkedin: {
        label: "LinkedIn :",
        link: "https://www.linkedin.com/in/guru-moorthi-guru21m",
        text: "Profile Link",
      },
      resume: {
        label: "Resume :",
        link: "/resume/guru_moorthi_resume.pdf",
        text: "Download Resume",
        download: true,
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I'm a skilled software developer with experience in TypeScript and
      JavaScript, and expertise in frameworks like React, Node.js, and
      Three.js. I'm a quick learner and collaborate closely with clients to
      create efficient, scalable, and user-friendly solutions that solve
      real-world problems. Let's work together to bring your ideas to life!`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Certifications & Work Experience.",
    },
    tech_stacks: {
      p: "Stacks I Worked on",
      h2: "Tech Stacks."
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
  },
};
