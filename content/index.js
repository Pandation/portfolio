import {
  FaJs,
  FaCss3Alt,
  FaHtml5,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaPhp,
  FaDatabase,
  FaCircleNotch,
  FaVuejs,
} from "react-icons/fa";

export const Content = {
  en: {
    layout: {
      menu: {
        about: "About Me",
        skills: "My Skills",
        portfolio: "Portfolio",
        contact: "Contact Me",
      },
      heroSection: {
        creed: "Everything can be optimized",
        firstLine: "Hi, I'm Florian Baumes",
        middle: "Developer",
        secondLine: "based in Montpellier. (France)",
      },
      stacks: [
        "React.js",
        "Next.js",
        "Express.js",
        "React Native",
        "Fullstack",
      ],
      button: "See more",
      myself: [
        {
          title: "Myself",
          content: [
            "Problem solving lover, programming quickly became a passion.",
            "Being rational and logical is my creed and I see myself as my code: I can always improve and I will!",
            `Furthermore, teamwork is something that I appreciate both for the challenge and for the resulting benefits.

             In my experience, learning from others points of view is a great way to improve your social and technical skills, faster and more efficiently!`,
          ],
        },
        {
          title: "Experience",
          content: [
            {
              title: "Fullstack Developer",
              place: "RCR Editions @ Montpellier",
              date: "April-June 2021",
            },
            {
              title: "Production Agent",
              place: "La Poste @ Mauguio",
              date: "2016-2019",
            },
            {
              title: "BAFA Animator",
              place: "Cityhall @ Frontignan (34)",
              date: "2014-2015",
            },
          ],
        },
        {
          title: "Education & Certifications",
          content: [
            {
              title: "Web & Web Mobile Developer",
              place: "ADRAR School @ Montpellier",
              date: "2020-2021",
            },
            {
              title: "Mathematics License",
              place: "Sciences University @ Montpellier",
              date: "2017-2018",
            },
            {
              title: "DAEU B",
              place: "Sciences University @ Montpellier",
              date: "2016-2017",
            },
          ],
        },
      ],
      experiences: [],
      certifications: [],
    },
    skills: [
      {
        title: "JavaScript / TypeScript",
        paragraph:
          "I have solid notions in native JS and now I learn TypeScript.",
        icon: <FaJs />,
      },
      {
        title: "React.js/React Native (+Expo) & Redux",
        paragraph:
          "I really enjoy React's components style programming (functionnal here with the hooks) and his ecosystem.",
        icon: <FaReact />,
      },
      {
        title: "Next.js",
        paragraph:
          "I use this fullstack framework on a daily basis for the generation of static sites that it allows. But also for integrated tools.",
        icon: <FaReact />,
      },
      {
        title: "Node.js/Express.js",
        paragraph:
          "In parallel with my learning of Next.js, I learned to code with Node.js & Express.js in order to continue my learning of the modern JavaScript ecosystem.",
        icon: <FaNodeJs />,
      },
      {
        title: "Vue.js",
        paragraph: "I know the fundamentals of Vue.js (v3) and vue-router",
        icon: <FaVuejs />,
      },
      // {
      //   title: "PHP7.X.X / Symfony 5",
      //   paragraph:
      //     "I also have good notions of PHP/Symfony that I was able to learn in training.",
      //   icon: <FaPhp />,
      // },
      {
        title: "MySQL/MongoDB - SQL/NoSQL",
        paragraph:
          "On the database side, I had the opportunity to implement both relational and non-relational ones.",
        icon: <FaDatabase />,
      },
    ],
    projects: [
      {
        title: "DreamTime",
        stacks: ["Expo", "React Native"],
        url: "",
        backgroundImg: "./projects/default.png",
        status: "July 2021",
      },
      {
        title: "BreakingBad API",
        stacks: ["React.js"],
        url: "https://react-brkgbad-api.netlify.app",
        backgroundImg: "./projects/screen_bbapi.png",
        status: "January 2021",
      },
      {
        title: "JSnake",
        stacks: ["JavaScript", "HTML5 & CSS3"],
        url: "https://j-snake.netlify.app",
        backgroundImg: "./projects/screen_snake.png",
        status: "December 2020",
      },
      {
        title: "G??oQuizz",
        stacks: ["JavaScript", "Bootstrap", "HTML5 & CSS3"],
        url: "https://js-geoquizz.netlify.app",
        backgroundImg: "./projects/screen_geo.png",
        status: "December 2020",
      },
    ],
    learning: {
      title: "What I learn now",
      subjects: [
        ".NET (WPF for Software Development)",
        "ASP.NET for Web Development",
        "Unity for game Development",
      ],
    },
  },
  fr: {
    layout: {
      menu: {
        about: "?? propos de moi",
        skills: "Mes Comp??tences",
        portfolio: "Portfolio",
        contact: "Me Contacter",
      },
      heroSection: {
        creed: "Tout peut ??tre optimis??",
        firstLine: "Bonjour, je suis Florian Baumes",
        middle: "D??veloppeur",
        secondLine: "?? Montpellier. (France 34)",
      },
      stacks: ["React.js", "Next.js", "Express.js", ".NET", "Unity"],
      button: "Voir plus",
      myself: [
        {
          title: "Pr??sentation",
          content: [
            "????Amoureux de la r??solution de probl??mes????, la programmation est vite devenue une passion.", 
            "??tre rationnel et logique est mon credo et je me vois comme mon code : je peux toujours m'am??liorer et je le ferai !",
            `De plus, le travail en ??quipe est quelque chose que j'appr??cie tant pour le challenge que par les b??n??fices qui en r??sultent.

            D'apr??s mon exp??rience, apprendre des points de vue des autres est un tr??s bon moyen d'am??liorer ses comp??tences sociales et techniques, plus rapidement et efficacement !`,
          ],
        },
        {
          title: "Exp??riences",
          content: [
            {
              title: "D??veloppeur Fullstack",
              place: "RCR Editions @ Montpellier",
              date: "Avril-Juin 2021",
            },
            {
              title: "Agent de Production",
              place: "La Poste @ Mauguio",
              date: "2016-2019",
            },
            {
              title: "Animateur BAFA",
              place: "Mairie @ Frontignan (34)",
              date: "2014-2015",
            },
          ],
        },
        {
          title: "Formation & Dipl??mes",
          content: [
            {
              title: "D??veloppeur Web & Web Mobile",
              place: "centre de formation ADRAR @ Montpellier",
              date: "2020-2021",
            },
            {
              title: "Licence en Math??matiques",
              place: "Facult?? des Sciences @ Montpellier",
              date: "2017-2018",
            },
            {
              title: "DAEU B",
              place: "Facult?? des Sciences @ Montpellier",
              date: "2016-2017",
            },
          ],
        },
      ],
      experiences: [],
      certifications: [],
    },
    skills: [
      {
        title: "JavaScript / TypeScript",
        paragraph:
          "J'ai de tr??s bonnes bases en JavaScript natif et je me forme actuellement sur TypeScript.",
        icon: <FaJs />,
      },
      {
        title: "React.js/React Native (+Expo) & Redux",
        paragraph:
          "J'aime sa logique de programmation par composants (fonctionnels ici avec les hooks) et son ??cosyst??me.",
        icon: <FaReact />,
      },
      {
        title: "Next.js",
        paragraph:
          "J'utilise ce framework fullstack au quotidien pour la g??n??ration de sites statiques qu'il permet. Mais aussi pour les outils int??gr??s. (Actuellement version 12)",
        icon: <FaReact />,
      },
      {
        title: "Node.js/Express.js",
        paragraph:
          "En parall??le de mon apprentissage de Next.js, j'ai appris ?? coder avec Node.js & Express.js afin de continuer mon apprentissage de l'??cosyst??me JavaScript moderne.",
        icon: <FaNodeJs />,
      },
      {
        title: "Vue.js",
        paragraph: "J'ai les bases sur le framework Vue.js (v3) et vue-router.",
        icon: <FaVuejs />,
      },
      // {
      //   title: "PHP7.X.X / Symfony 5",
      //   paragraph:
      //     "Je dispose aussi de bonnes notions de PHP/Symfony que j'ai pu apprendre en formation.",
      //   icon: <FaPhp />,
      // },
      {
        title: "MySQL/MongoDB - SQL/NoSQL",
        paragraph:
          "C??t?? bases de donn??es, j'ai eu l'occasion d'en impl??menter des relationnelles comme des non-relationnelles.",
        icon: <FaDatabase />,
      },
    ],
    projects: [
      {
        title: "DreamTime",
        stacks: ["Expo", "React Native"],
        url: "",
        backgroundImg: "./projects/default.png",
        status: "Juillet 2021",
      },
      {
        title: "BreakingBad API",
        stacks: ["React.js"],
        url: "https://react-brkgbad-api.netlify.app",
        backgroundImg: "./projects/screen_bbapi.png",
        status: "Janvier 2021",
      },
      {
        title: "JSnake",
        stacks: ["JavaScript", "HTML5 & CSS3"],
        url: "https://j-snake.netlify.app/",
        backgroundImg: "./projects/screen_snake.png",
        status: "D??cembre 2020",
      },
      {
        title: "G??oQuizz",
        stacks: ["JavaScript", "Bootstrap", "HTML5 & CSS3"],
        url: "https://js-geoquizz.netlify.app/",
        backgroundImg: "./projects/screen_geo.png",
        status: "D??cembre 2020",
      },
    ],
    learning: {
      title: "Ce que j'apprends en ce moment",
      subjects: [
        ".NET (WPF pour du d??veloppement de logiciels)",
        "ASP.NET pour du d??veloppement Web",
        "Unity pour le d??veloppement de jeux vid??os",
      ],
    },
  },
};
