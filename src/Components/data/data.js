export const featuresData = {
    staticFeatures: [
      { icon: "/palette.svg", title: "Customizable Categories", description: "Host code that you don't want to share with the world in private." },
      { icon: "/lock.svg", title: "Private Repos", description: "Host code that you don't want to share with the world in private." },
      { icon: "/file-chart-bar.svg", title: "Tracking Saving Rate", description: "Host code that you don't want to share with the world in private." },
    ],
  
    dynamicFeatures: [
      {
        icon: "/Icon Shapes1.svg",
        title: "Project Management",
        bulletIcon: "/mark1.svg",
        points: [
          "Unified Contribution Graph",
          "Org activity graph",
          "Org dependency insights",
          "Milestones",
          "Repo insights",
        ],
      },
      {
        icon: "/Icon Shapes2.svg",
        title: "Collaborative Coding",
        bulletIcon: "/mark2.svg",
        points: [
          "Dynamic reports and dashboards",
          "Code review assignments",
          "Team discussions",
          "Protected branches",
          "Draft pull requests",
        ],
      },
      {
        icon: "/Icon Shapes3.svg",
        title: "Enterprise Security",
        bulletIcon: "/mark3.svg",
        points: [
          "Required reviews",
          "Dependabot security",
          "Dependency graph",
          "GitHub Advisory Database",
          "GPG commit signing verification",
        ],
      },
    ],


    cardsData : [
        {
          icon: "/cardShape4.svg",
          title: "Platform",
          description:
            "We keep Clickbite secure, and free of spam and abuse so that this can be the platform where developers come together to create.",
        },
        {
          icon: "/cardShape1.svg",
          title: "Open source",
          description:
            "Our Clickbite Security Lab is a world-class security R&D team. We inspire and enable the community to secure open source.",
        },
        {
          icon: "/cardShape2.svg",
          title: "Premium products",
          description:
            "We embody the shift toward investments in safe and secure software design practices with our world-class front-end products.",
        },
        {
          icon: "/cardShape3.svg",
          title: "Customization",
          description:
            "It's easy to customize and style Clickbite. Tweak the look and feel of your UI with CSS/Less, and add major features with HTML.",
        },
      ],
      

      testimonials : [
        {
          id: 1,
          name: "Micheal Gough",
          role: "Web developer at Google",
          image: "https://randomuser.me/api/portraits/men/1.jpg",
          title:'It was a great experience!',
           feedback: `Clickbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.<br /> 
            There is absolutely no doubt in my mind that without Clickbite, I would not have been able to make the jump to Ueno, a digital agency I started in 2014. The work I got through Clickbite made it possible for me to have something to build on. We now have about 45 people on our team, a lot of whom we found and recruited through Clickbite.`
        },
        {
          id: 2,
          name: "Bonnie Green",
          role: "CEO at Facebook",
          title:'It was a great experience!',
          image: "https://randomuser.me/api/portraits/women/2.jpg",
           feedback: `Clickbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.<br /> 
            There is absolutely no doubt in my mind that without Clickbite, I would not have been able to make the jump to Ueno, a digital agency I started in 2014. The work I got through Clickbite made it possible for me to have something to build on. We now have about 45 people on our team, a lot of whom we found and recruited through Clickbite.`
        },
        {
          id: 3,
          name: "Lana Byrd",
          role: "CTO at Microsoft",
          title:'It was a great experience!',
          image: "https://randomuser.me/api/portraits/women/3.jpg",
           feedback: `Clickbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.<br /> 
            There is absolutely no doubt in my mind that without Clickbite, I would not have been able to make the jump to Ueno, a digital agency I started in 2014. The work I got through Clickbite made it possible for me to have something to build on. We now have about 45 people on our team, a lot of whom we found and recruited through Clickbite.`
        },
        {
          id: 4,
          name: "John Doe",
          role: "Senior Engineer at Amazon",
          title:'It was a great experience!',
          image: "https://randomuser.me/api/portraits/men/4.jpg",
           feedback: `Clickbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.<br /> 
            There is absolutely no doubt in my mind that without Clickbite, I would not have been able to make the jump to Ueno, a digital agency I started in 2014. The work I got through Clickbite made it possible for me to have something to build on. We now have about 45 people on our team, a lot of whom we found and recruited through Clickbite.`
        },
        {
            id: 5,
            name: "Emma Watson",
            role: "Product Designer at Apple",
            title: "It was a great experience!",
            image: "https://randomuser.me/api/portraits/women/5.jpg",
            feedback: `Clickbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.<br /> 
            There is absolutely no doubt in my mind that without Clickbite, I would not have been able to make the jump to Ueno, a digital agency I started in 2014. The work I got through Clickbite made it possible for me to have something to build on. We now have about 45 people on our team, a lot of whom we found and recruited through Clickbite.`
          }
      ],

      pricingPlans: {
        monthly: [
          {
            id: 1,
            title: "Starter",
            description: "Great for personal use and for your side projects.",
            price: 49,
            features: [
                "All you need to manage payments",
                "No setup, monthly, or hidden fees",
                "Team size: <strong>10 developers</strong>",
                "Premium support: <strong>24 months</strong>",
                "Free updates: <strong>24 months</strong>",
              ],
          },
          {
            id: 2,
            title: "Company",
            description: "Best for large scale uses and extended redistribution rights.",
            price: 99,
            features: [
                "All you need to manage payments",
                "No setup, monthly, or hidden fees",
                "Team size: <strong>10 developers</strong>",
                "Premium support: <strong>24 months</strong>",
                "Free updates: <strong>24 months</strong>",
              ],
          },
          {
            id: 3,
            title: "Enterprise",
            description: "Best for large scale uses and extended redistribution rights.",
            price: 499,
            features: [
                "All you need to manage payments",
                "No setup, monthly, or hidden fees",
                "Team size: <strong>10 developers</strong>",
                "Premium support: <strong>24 months</strong>",
                "Free updates: <strong>24 months</strong>",
              ],
          },
        ],
        yearly: [
            {
              id: 1,
              title: "Starter",
              description: "Great for personal use and for your side projects.",
              price: 49,
              features: [
                "All you need to manage payments",
                "No setup, monthly, or hidden fees",
                "Team size: <strong>10 developers</strong>",
                "Premium support: <strong>24 months</strong>",
                "Free updates: <strong>24 months</strong>",
              ],
            },
            {
              id: 2,
              title: "Company",
              description: "Best for large scale uses and extended redistribution rights.",
              price: 99,
              features: [
                "All you need to manage payments",
                "No setup, monthly, or hidden fees",
                "Team size: <strong>10 developers</strong>",
                "Premium support: <strong>24 months</strong>",
                "Free updates: <strong>24 months</strong>",
              ],
            },
            {
              id: 3,
              title: "Enterprise",
              description: "Best for large scale uses and extended redistribution rights.",
              price: 499,
              features: [
                "All you need to manage payments",
                "No setup, monthly, or hidden fees",
                "Team size: <strong>10 developers</strong>",
                "Premium support: <strong>24 months</strong>",
                "Free updates: <strong>24 months</strong>",
              ],
            },
          ],

    },


    pricingData : [
        {
          
          features: [
            { name: "Application UI", link: "view demo", values: [true, true, true] },
            { name: "Marketing UI pre-order", values: [true, true, true] },
            { name: "E-commerce UI pre-order", values: [false, true, true] },
            { name: "Basic components", link: "view all", values: [false, false, true] },
          ],
        },
        {
          category: "Figma design files",
          features: [
            { name: "Free edition", link: "duplicate in Figma", values: [true, true, true] },
            { name: "Application UI", link: "preview in Figma", values: [true, true, false] },
            { name: "Marketing UI pre-order", values: [false, false, true] },
            { name: "E-commerce UI pre-order", values: [false, true, true] },
          ],
        },
        {
          category: "Support",
          features: [
            { name: "Community", values: [true, true, true] },
            { name: "Bug reports & feature requests", values: [true, true, false] },
            { name: "Support duration", values: [false, false, true] },,
          ],
        },
      ],

      faqs : [
        {
            question: "Can I use ClickBite in open-source projects?",
            answer: `Generally, it is accepted to use ClickBite in open-source projects, as long as it is not a UI library, a theme, a template, or a page-builder that would be considered as an alternative to FlowBite itself.\nWith that being said, feel free to use this design kit for your open-source projects.\nFind out more information by <a href='#' class='text-blue-600 font-medium'>reading the license</a>.`
          },
        {
          question: "Where can I access my download files?",
         answer: `Generally, it is accepted to use ClickBite in open-source projects, as long as it is not a UI library, a theme, a template, or a page-builder that would be considered as an alternative to FlowBite itself.\nWith that being said, feel free to use this design kit for your open-source projects.\nFind out more information by <a href='#' class='text-blue-600 font-medium'>reading the license</a>.`
        },
        {
          question: "Can I use ClickBite for commercial purposes?",
      answer: `Generally, it is accepted to use ClickBite in open-source projects, as long as it is not a UI library, a theme, a template, or a page-builder that would be considered as an alternative to FlowBite itself.\nWith that being said, feel free to use this design kit for your open-source projects.\nFind out more information by <a href='#' class='text-blue-600 font-medium'>reading the license</a>.`
        },
        {
          question: "What about browser support?",
          answer: `Generally, it is accepted to use ClickBite in open-source projects, as long as it is not a UI library, a theme, a template, or a page-builder that would be considered as an alternative to FlowBite itself.\nWith that being said, feel free to use this design kit for your open-source projects.\nFind out more information by <a href='#' class='text-blue-600 font-medium'>reading the license</a>.`
        },
      ]
  };
  