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
  phone: '+91 8220077523',
  location: 'Chennai, India',
  linkedin: 'https://www.linkedin.com/in/azariahjohnsamuel',
  github: 'https://github.com/azariahjohnsamuel',
  resumeUrl: '/assets/files/azariah-john-samuel-resume-2024.pdf',
  summary:
    'Senior Software Engineer with a strong front-end foundation and growing ownership across full-stack development, system architecture, identity and access management, DevOps, infrastructure, and industrial automation integration. Started as a front-end developer specializing in Vue.js, TypeScript, and responsive UI design, then progressively expanded into backend services, API development, authentication, database integration, messaging systems, monitoring, deployment automation, and technical architecture. Currently works across the complete delivery lifecycle for enterprise warehouse-management and industrial-automation systems — from Vue/TypeScript interfaces through .NET and GraphQL APIs to Keycloak, Entra ID, RabbitMQ, and CI/CD — including integrations with PLCs, robots, conveyors, scanners, and printers.',
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Front End',
    items: [
      'Vue.js', 'Vue 3 Composition API', 'TypeScript', 'JavaScript', 'Vuetify', 'Pinia',
      'Vue Router', 'Vite', 'Apollo Client', 'GraphQL', 'SignalR', 'WebSockets',
      'Responsive Design', 'i18n',
    ],
  },
  {
    category: 'Backend',
    items: [
      'C#', '.NET', 'ASP.NET Core', 'Hot Chocolate GraphQL', 'Entity Framework Core',
      'LINQ', 'REST APIs', 'Windows Services', 'Repository Pattern',
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
    location: 'United Kingdom (Remote)',
    start: '2025-03-01',
    end: '',
    summary:
      'Officially a Front End Developer, but works across the full delivery lifecycle for enterprise warehouse-management and industrial-automation systems — front end, backend APIs, identity, infrastructure, and production support.',
    highlights: [
      'Build enterprise UIs with Vue 3, TypeScript, Vuetify, Pinia, and Apollo Client for GraphQL data.',
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
    title: 'Associate — Projects',
    location: 'Chennai, India',
    start: '2021-10-22',
    end: '2025-02-28',
    clients: ['AbbVie'],
    summary:
      'Delivered a React-based data visualization application for AbbVie on top of a Salesforce backend, working in an agile team with daily scrums.',
    highlights: [
      'Developed reusable React JS components consuming Salesforce data and rendering it with Chart.js.',
      'Improved data accessibility and visualization efficiency by ~20% through UI and component work.',
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
    tagName: 'AbbVie',
    title: 'AbbVie — Sypher',
    skills: 'React JS, JavaScript, Chart.js, MUI, HTML5, SCSS, JSON',
    description:
      'A data visualization application used by the client to track product data, metrics, and performance. Built on a Salesforce backend with a React JS front end made up of reusable components that pull data from the backend and render it with Chart.js per requirements.',
    responsibilities:
      'UI development, agile process participation, and daily scrums. Developed multiple reusable front-end components in React JS.',
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
