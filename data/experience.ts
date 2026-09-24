export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
};
export const experience: Experience[] = [
  {
    period: "Sep 2021 – 2026",
    company: "Emirates National Facilities Management",
    role: "IT Manager",
    location: "Dubai, UAE",
    description:
      "Led IT strategy, digital transformation, business applications, infrastructure, cybersecurity, vendor management and IT operations across a large UAE facilities management organization.",
    achievements: [
      "Established and scaled the IT function, growing the team to 20+ professionals across IT operations, applications and digital transformation.",
      "Managed an annual IT budget of approximately AED 2.3M and a project portfolio exceeding AED 7M.",
      "Led the end-to-end EnFM360 digital transformation program, consolidating business processes across operations, HR, procurement, finance, CRM, customer service and asset management.",
      "Delivered 4+ ERP implementations, 7+ CAFM implementations and 2 HRMS implementations across business functions.",
      "Led implementation of PayDay HRMS transformation supporting approximately 4,200 employees.",
      "Implemented customer and vendor portals, workflow automation, dashboards and mobile-enabled business applications.",
      "Managed Microsoft 365, Azure, Active Directory, Windows Server, identity access, RBAC/MFA and enterprise IT operations.",
      "Supported technology operations across 200+ offices and sites while managing business stakeholders, vendors and technology partners.",
      "Delivered measurable improvements including approximately 30% improvement in incident resolution efficiency and 25% reduction in IT procurement costs.",
    ],
  },
  {
    period: "Oct 2017 – Aug 2021",
    company: "Lattice",
    role: "Product Consultant / Functional Product Specialist",
    location: "Dubai, UAE",
    description:
      "Worked across ERP, CAFM and business application implementations, translating business requirements into scalable product and technology solutions.",
    achievements: [
      "Led functional analysis, requirements gathering, solution design and implementation activities for enterprise business applications.",
      "Worked closely with customers, product teams, developers and implementation stakeholders throughout the project lifecycle.",
      "Supported ERP and CAFM implementations across multiple business functions.",
      "Converted operational requirements into workflows, functional specifications and product enhancements.",
      "Managed stakeholder communication, UAT, training, issue resolution and implementation support.",
    ],
  },
  {
    period: "Oct 2014 – Sep 2017",
    company: "Realtime",
    role: "Associate Product Analyst / ERP Solutions Specialist",
    location: "Dubai, UAE",
    description:
      "Supported ERP product implementations and business process transformation for customers across different operational functions.",
    achievements: [
      "Performed business analysis, requirement gathering and functional solution design for ERP implementations.",
      "Configured workflows, business rules and application processes based on customer requirements.",
      "Supported implementation, testing, UAT, training and go-live activities.",
      "Worked with customers and technical teams to resolve functional issues and improve product adoption.",
      "Built strong expertise in ERP processes, business applications and customer-facing solution delivery.",
    ],
  },
  {
    period: "Mar 2012 – Sep 2014",
    company: "Suntech",
    role: ".NET Developer",
    location: "Dubai, UAE",
    description:
      "Started my professional IT career in software development, building a strong technical foundation that later evolved into business applications, product management and IT leadership.",
    achievements: [
      "Developed and maintained business applications using Microsoft .NET technologies.",
      "Worked with SQL Server, application development, debugging and system enhancements.",
      "Collaborated with functional and technical teams to translate business requirements into software solutions.",
      "Built a strong foundation in software engineering and enterprise application development.",
    ],
  },
];