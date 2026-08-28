// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-machine-learning-engineer",
    title: "Machine Learning Engineer",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "research",
          description: "Peer-reviewed work in geospatial machine learning and spatially robust environmental modeling.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-work",
          title: "work",
          description: "Deployed AI products, research systems, and focused experiments across retrieval, generative models, and applied machine learning.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Experience across LLM systems, research engineering, causal ML, and applied AI products.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "projects-seouldoc",
          title: 'SeoulDoc',
          description: "Agentic medical-facility search for international residents in Seoul.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-stableface",
          title: 'StableFace',
          description: "Fine-tuned Stable Diffusion for photorealistic faces with controllable emotional expression.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-minifacegpt",
          title: 'MiniFaceGPT',
          description: "A compact vision-language model adapted for facial-emotion understanding.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-market-basket-seasonality",
          title: 'Market Basket Seasonality',
          description: "Association-rule analysis of how grocery purchasing patterns change by season.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-soil-carbon-mapping",
          title: 'Soil Carbon Mapping',
          description: "Compact CNN-Transformers for spatially robust regional soil organic carbon prediction.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/Valerian-Fourel-CV.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%76%61%6C%65%72%69%61%6E.%66%6F%75%72%65%6C@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/ValerianFourel", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/valerian-raphael-fourel-b9750417b", "_blank");
        },
      },{
        id: 'social-hugging_face',
        title: 'Hugging_face',
        section: 'Socials',
        handler: () => {
          window.open("https://huggingface.co/ValerianFourel", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
