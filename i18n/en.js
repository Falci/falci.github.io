module.exports = {
  lang: 'en_US',
  title: 'Fernando Falci',
  toggle: 'Toggle navigation',

  name: 'Fernando Falci',
  developer: 'Developer',

  home: 'Home',
  profile: {
    title: 'Profile',
    sub: 'Personal Profile',
    text: `
            <p>Hi, my name is Fernando Falci, I'm a web developer and I've been working in this area since my graduate, 5 years ago.</p>
            <p>I started as a freelance, in small jobs, usually PHP and Javascript (Wordpress).</p>
            <p>When I decided that I was ready for a professional experience, I started working at <a href="http://www.elotech.com.br" target="_blank">Elotech</a>. In that company I worked as a PHP developer, using Zend Framework e jQuery, in a project for health area.</p>
            <p>Sometime after that, I switched the PHP for Java and the jQuery for AngularJS. I started a post-graduate course to help me in this switch. I did well. Meanwhile, I did an HTML5, CSS3 and Javascript certification, from Microsoft; and also an Associate Java 8 certification, from Oracle.</p>
            <p>Now I'm at <a href="http://www.matera.com/en/" target="_blank">MATERA Systems</a>. I work in an international project, for one of the biggest telecommunication companies from the USA (in the Fortune 500 list). It's amazing how much new technologies we are using here: microservices, AWS cloud, several Netflix OSS projects: Eureka, Governator, Asgard, Archauis, Hysterix, Kayron, Zuul. I've learned new things like code review, scrum, different environments for each project phase (dev, test, prod).</p>
            <p>Here we like to do lectures and workshops, for our colleagues and for the community. I took part in few of them: Docker, Cassandra, Meteor, Material Design. I also taught some: AngularJS, Chrome Inspector, Lambda (Java 8).</p>
            <p>One year ago I started working on another project, part time, for <a href="http://www.mobile-di.com" target="_blank">Mobile DI</a>. I participated in a project so that voters can express an opinion on the bills of your region. Now I'm on another project, for a management of activities during development. In this project, we are using NodeJS and AngularJS. I'm managing a small team of 3 developers and 1 QA, it's challenging.</p>
            <p>Well, this is just a resume of my professional experiences. Feel free to contact me.</p>`,
  },
  skills: {
    title: 'Skills',
    sub: 'A.K.A.: Keywords'
  },
  education: {
    title: 'Education',
    sub: 'The base of my knowledge',

    cesumar: {
      title: 'UniCesumar - Maringá',
      sub: 'Java Postgraduate',
      progress: 'In Progress',
      text: 'The course has provided a thorough overview of Java and its related technologies in order to be able to choose those that meet the particular requirements of various fields of existing applications and is also able to develop systems in java applying object orientation and design patterns. Development in Java for desktop, web, mobile devices and enterprise environment was addressed.'
    },
    unipar: {
      title: 'UNIPAR - Guaíra',
      sub: 'Analysis and Systems Development',
      progress: '2010',
      text: 'Kickoff of my professional career. The course provided a solid foundation for the development of systems.  Beginning of networking that keeps growing up. Laureate as best student of the course, consider this one of the most important steps in my career.'
    }
  },

  experience: {
    title: 'Experience',
    sub: 'Some important companies of my professional career',

    matera: {
      title: 'MATERA Systems',
      sub: 'Developer / Maringá, PR / 2014 - Current',
      text: 'Acting as a developer on an outsourcing project for an US company. Keywords: Netflix OSS, Jersey, Rest API, micro-services, outsourcing.'
    },
    confidential: {
      title: 'Confidential',
      sub: 'Developer / Maringá, PR / 2012 - 2014',
      text: 'I worked in two different products. One facing the electoral data management and another for back office of a large supermarket chain. Keywords: Java, JSP, Oracle, outsourcing, Android.'
    },
    elotech: {
      title: 'Elotech',
      sub: 'Developer / Maringá, PR / 2011 - 2012',
      text: 'I worked on developing solutions in a healthcare software. Keywords: PHP, Zend Framework, jQuery, Postgres, Full Stack, UX.'
    }
  },

  contact: {
    title: 'Contact',
    sub: 'Let\'s talk',
    info: 'Contact information',
    address: 'Maringá, Paraná, Brazil',
    email: 'contact@falci.me',
    phone: {
      icon: '<i class="fa fa-phone"></i>',
      number: '+55 (44) 9 8806-3145'
    },
    form: {
      name: {
        title: 'Name',
        placeholder: 'Your name',
        validation: 'Who are you?'
      },
      email: {
        title: 'Email',
        placeholder: 'Your email',
        validation: 'Hand me your email so I can answer'
      },
      message: {
        title: 'Message',
        validation: 'Hmm.. type something...'
      },
      submit: 'Send Message',
      success: 'Your message was sent.',
      error: '<strong>Sorry, it looks like something is wrong with my email server...</strong> You can send a direct email to <a href="mailto:contato@falci.me">contato@falci.me</a>? Sorry for the inconvenience!'
    }
  },

  lang1: { code: 'br', version: 'Versão em português' },
  lang2: { code: 'es', version: 'Version en español' },

  social: {
    linkedin: 'https://www.linkedin.com/in/fernandofalci/en'
  },

  hireMe: 'Hire me',
  quotation: 'Everything is going to be <u>200 OK</u>'
}
