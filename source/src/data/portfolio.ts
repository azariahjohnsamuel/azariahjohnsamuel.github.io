export interface SkillGroup {
  category: string
  items: string[]
}

export interface ExperienceEntry {
  company: string
  title: string
  location?: string
  start: string
  end: string
  clients?: string[]
  project?: string
  summary: string
  highlights: string[]
}

export interface ProjectEntry {
  tagName: string
  title: string
  skills: string
  description: string
  responsibilities: string
  size: string
  location: string
  logo?: string
}

export interface EducationEntry {
  title: string
  course: string
  institution: string
  year: string
}

export const profile = {
  name: 'Azariah John Samuel Ebenezer',
  displayName: 'Azariah John Samuel',
  title: 'Senior Software Engineer',
  tagline:
    'Full-Stack Application Architect — Industrial Automation and Enterprise Systems Specialist',
  email: 'azariahjohnsamuel@gmail.com',
  phone: '+44 7539 010156',
  location: 'United Kingdom',
  linkedin: 'https://www.linkedin.com/in/azariahjohnsamuel',
  github: 'https://github.com/azariahjohnsamuel',
  resumeUrl: '/assets/files/azariah-john-samuel-resume.pdf',
  summary:
    'Senior Software Engineer with a strong front-end foundation and growing ownership across full-stack development, system architecture, identity and access management, DevOps, infrastructure, and industrial automation integration. Started as a front-end developer specializing in Vue.js, TypeScript, and responsive UI design, then progressively expanded into backend services, API development, authentication, database integration, messaging systems, monitoring, deployment automation, and technical architecture. Currently works across the complete delivery lifecycle for enterprise warehouse-management and industrial-automation systems — from Vue/TypeScript interfaces through .NET and GraphQL APIs to Keycloak, Entra ID, RabbitMQ, and CI/CD — including integrations with PLCs, robots, conveyors, scanners, and printers.',
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Front End',
    items: [
      'Vue.js', 'Vue 3 Composition API', 'React.js', 'Next.js', 'Angular', 'TypeScript',
      'JavaScript', 'jQuery', 'Vuetify', 'Pinia', 'Vue Router', 'Vite', 'Apollo Client',
      'GraphQL', 'SignalR', 'WebSockets', 'AEM', 'Responsive Design', 'i18n',
    ],
  },
  {
    category: 'Backend',
    items: [
      'C#', '.NET', 'ASP.NET Core', 'Hot Chocolate GraphQL', 'Entity Framework Core',
      'LINQ', 'REST APIs', 'Salesforce APEX', 'Windows Services', 'Repository Pattern',
    ],
  },
  {
    category: 'Identity & Security',
    items: [
      'Keycloak', 'Microsoft Entra ID', 'OAuth 2.0', 'OpenID Connect', 'JWT', 'PKCE',
      'Client Credentials Flow', 'RBAC', 'Certificates', 'HTTPS', 'CSP',
    ],
  },
  {
    category: 'Data & Messaging',
    items: [
      'Microsoft SQL Server', 'Entity Framework Core', 'RabbitMQ', 'Event-Driven Architecture',
      'Elasticsearch', 'Kibana', 'Serilog',
    ],
  },
  {
    category: 'DevOps & Infrastructure',
    items: [
      'Azure DevOps', 'CI/CD Pipelines', 'YAML Pipelines', 'Git', 'PowerShell', 'IIS',
      'Nginx', 'Ocelot API Gateway', 'Windows Server', 'DNS', 'Firewalls', 'Load Balancing',
      'SonarCloud',
    ],
  },
  {
    category: 'Industrial Automation',
    items: [
      'PLC Integration', 'Robot Integration', 'Conveyor Systems', 'Barcode Scanners',
      'Industrial Printers', 'Warehouse Control Systems', 'Warehouse Management Systems',
    ],
  },
]

export const experience: ExperienceEntry[] = [
  {
    company: 'Agito Global',
    title: 'Front End Developer',
    location: 'United Kingdom',
    start: '2025-03-01',
    end: '',
    project: 'Momentum',
    summary:
      'Officially a Front End Developer on Momentum, but works across the full delivery lifecycle for enterprise warehouse-management and industrial-automation systems — front end, backend APIs, identity, infrastructure, and production support.',
    highlights: [
      'Build enterprise UIs for Momentum with Vue 3, TypeScript, Vuetify, Pinia, and Apollo Client for GraphQL data.',
      'Develop and integrate backend APIs using ASP.NET Core and Hot Chocolate GraphQL against SQL Server.',
      'Configure and troubleshoot authentication with Keycloak, Microsoft Entra ID, OAuth 2.0, OpenID Connect, and JWT.',
      'Support RabbitMQ messaging, SignalR real-time updates, and Ocelot API Gateway routing across services.',
      'Own CI/CD pipelines in Azure DevOps, environment configuration, and release coordination across dev, test, preprod, and production.',
      'Investigate production incidents spanning applications, databases, messaging, identity providers, and networking.',
      'Support integrations with PLCs, robots, conveyors, barcode scanners, and industrial printers for warehouse operations.',
    ],
  },
  {
    company: 'Cognizant',
    title: 'Front-End Developer & Team Leader',
    location: 'Chennai, India',
    start: '2023-07-01',
    end: '2025-02-28',
    clients: ['Ford Motor Company'],
    summary:
      'Led a team of developers building an eCommerce platform for non-factory-fitted Ford vehicle accessories, integrating multiple front-end frameworks into a single platform.',
    highlights: [
      'Led a team of developers delivering an eCommerce platform for non-factory-fitted Ford accessories, following best-practice coding and design patterns.',
      'Integrated Angular, jQuery, and React into a unified front-end platform, ensuring performance and optimization across modules.',
      'Built a standalone Next.js accessories website with responsive design, integrated with the main vehicle-purchase platform.',
      'Owned code reviews and deployment processes, keeping post-launch issues to a minimum.',
    ],
  },
  {
    company: 'Cognizant',
    title: 'Front-End Developer',
    location: 'Chennai, India',
    start: '2021-10-22',
    end: '2023-06-30',
    clients: ['AbbVie'],
    project: 'Sypher',
    summary:
      'Delivered the Sypher application for AbbVie, visualizing franchise and product performance on top of a Salesforce APEX backend, working in an agile team with daily scrums.',
    highlights: [
      'Built reusable UI components with React JS and Vue.js, consuming Salesforce APEX data and rendering it with Chart.js.',
      'Optimized components for fast load times and responsive interfaces, improving data-visualization efficiency by ~20%.',
      'Integrated the Salesforce APEX backend so frontend and backend collaborated seamlessly.',
      'Participated in agile ceremonies and daily scrums to keep delivery on schedule.',
    ],
  },
  {
    company: 'Infosys',
    title: 'Technical Operations Associate',
    location: 'Chennai, India',
    start: '2021-05-01',
    end: '2021-10-18',
    clients: ['Mercedes-Benz (Daimler)'],
    summary:
      'Built the Mercedes-Benz (Daimler) channel page on the Infosys Lex internal learning platform.',
    highlights: [
      'Built the learning channel with HTML5, CSS, and Bootstrap 4, increasing engagement and course completion.',
      'Contributed to agile development and daily scrums.',
    ],
  },
  {
    company: 'Infosys',
    title: 'Senior Executive',
    location: 'Chennai, India',
    start: '2020-01-01',
    end: '2020-05-01',
    clients: ['Boston Private Bank'],
    summary:
      'Contributed to the Boston Private Bank inventory dashboard consolidating data-center and Azure cloud infrastructure data.',
    highlights: [
      'Developed React JS components for a centralized dashboard, improving data-consolidation efficiency by ~30%.',
      'Worked with PowerShell-generated JSON data feeds from on-prem and Azure cloud sources.',
    ],
  },
  {
    company: 'Infosys',
    title: 'Executive',
    location: 'Chennai, India',
    start: '2018-09-01',
    end: '2019-12-01',
    clients: ['Boston Private Bank'],
    summary:
      'Front-end development on the Boston Private Bank inventory application using React JS and TypeScript.',
    highlights: [
      'Built UI components with React JS, TypeScript, HTML5, SCSS, and Bootstrap 4.',
      'Participated in agile development and daily scrums.',
    ],
  },
]

export const projects: ProjectEntry[] = [
  {
    tagName: 'Ford',
    title: 'Ford Motor Company — Accessories eCommerce',
    skills: 'React JS, Next.js, Angular, jQuery, AEM, HTML5, CSS3',
    description:
      'An eCommerce platform for non-factory-fitted Ford vehicle accessories. Multiple front-end frameworks (Angular, jQuery, React) were integrated into a single platform, alongside a standalone, responsive Next.js accessories site tied into the main vehicle-purchase flow.',
    responsibilities:
      'Led the front-end development team, owning code reviews, deployment processes, and coding standards across the platform.',
    size: '5 Members',
    location: 'Chennai',
  },
  {
    tagName: 'AbbVie',
    title: 'AbbVie — Sypher',
    skills: 'React JS, Vue.js, Salesforce APEX, JavaScript, Chart.js, MUI, HTML5, SCSS, JSON',
    description:
      'A data visualization application letting the client track franchise and product performance metrics. Built on a Salesforce APEX backend with reusable React JS and Vue.js components rendering the data with Chart.js, optimized for fast load times.',
    responsibilities:
      'UI development, agile process participation, and daily scrums. Developed multiple reusable front-end components in React JS and Vue.js.',
    size: '4 Members',
    location: 'Chennai',
    logo: '/assets/logo/abbvie.svg',
  },
  {
    tagName: 'Boston Private Bank',
    title: 'Boston Private Bank, an SVB Company',
    skills: 'React JS, TypeScript, HTML5, SCSS, Bootstrap 4, JSON, JavaScript',
    description:
      'An inventory application integrating server, ESXi host, and vCenter data from the data center and Azure cloud into a single dashboard refreshed twice daily. Data was gathered with PowerShell and PowerCLI, formatted into JSON, and rendered with React.',
    responsibilities:
      'UI development, agile process participation, and daily scrums. Developed front-end components using React.',
    size: '3 Members',
    location: 'Chennai',
    logo: '/assets/logo/boston.svg',
  },
  {
    tagName: 'Infosys Lex',
    title: 'Infosys Lex — Mercedes-Benz (Daimler) Learning Channel',
    skills: 'HTML5, CSS, Bootstrap 4',
    description:
      'A dedicated learning channel page for Mercedes-Benz (Daimler) on Infosys Lex, an internal learning platform hosting courses and training for employees across multiple client channels.',
    responsibilities:
      'UI development, agile process participation, and daily scrums. Built channel components in HTML, CSS, and Bootstrap.',
    size: '2 Members',
    location: 'Chennai',
    logo: '/assets/logo/mb.svg',
  },
  {
    tagName: 'E-Kart',
    title: 'E-Kart',
    skills: 'MS IIS, HTML5, CSS, Bootstrap 4',
    description:
      'An e-commerce training application where sellers list products and customers add them to a cart and place orders.',
    responsibilities: 'UI development and deployment of the application to a test environment using Microsoft IIS.',
    size: '6 Members',
    location: 'Chennai',
  },
  {
    tagName: 'Gentle Hands Mahima Charitable Trust',
    title: 'Gentle Hands Mahima Charitable Trust',
    skills: 'Vue JS, HTML5, CSS, Bootstrap 4',
    description:
      "A responsive website built end-to-end for a charitable trust, matching the client's requirements.",
    responsibilities: 'Designed and built the site solo using Vue.js, HTML, CSS, and Bootstrap, and hosted it.',
    size: '1 Member',
    location: 'Chennai',
  },
]

export const education: EducationEntry[] = [
  {
    title: 'MCA',
    course: 'Master of Computer Applications',
    institution: 'Madras University',
    year: '2018 – 2021',
  },
  {
    title: 'B.Sc. Mathematics',
    course: 'Bachelor of Science in Mathematics',
    institution: 'Madras Christian College',
    year: '2015 – 2018',
  },
  {
    title: 'HSC',
    course: 'Higher Secondary School Certificate',
    institution: 'SSRM School',
    year: '2015',
  },
  {
    title: 'SSLC',
    course: 'Secondary School Leaving Certificate',
    institution: 'SVVM School',
    year: '2013',
  },
]
