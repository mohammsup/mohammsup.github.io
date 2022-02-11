// Navbar Options
export const buttons = {
  left: "MBY",
  right: [
    {id: "about", title: "About Me"},
    {id: "skills", title: "Skills"},
    {id: "timeline", title: "Journey"},
    {id: "edu", title: "Education"},
    {id: "experiences", title: "Experiences"},
    {id: "projects", title: "Projects"},
    {id: "certs", title: "Certification"},
    {id: "contact", title: "Contact"},
    {id: "https://drive.google.com/file/d/1qwO2BWId-F4c3WleUhbepEQ9IOEnNfro/view?usp=sharing", title: "CV"},
  ]
}

// First Section (Hero Section)
export const hero = {
  title: "Mohammad Bin Yousuf",
  subtitle: "Aspiring Machine Learning Research Engineer with a focus on Artificial Intelligence.",
  img: "/header.jpeg"
}


// Second Section (About Section)
// Add "<br /><br />" for paragraph break
export const about = {
  title: "About Me",
  subtitle: `
  Hi there, my name is Mohammad. I am a graduate from the International Islamic University Malaysia (IIUM). I am a researcher by heart and I focus on understanding how to solve real-life issues/problems using Machine Learning and Data Science. My topics of interest includes Big Data and Artificial Intelligent Systems/Agents. I have recently developed an interest in Health Informatics and its implications on the advancement of modern healthcare.
  <br /><br />
  I have recently completed a thesis that is utilising the data from the Malaysian Ministry of Health to further understand the present and future of the pandemic in Malaysia while also increasing the transparency and trust between the Government and the Public. The thesis covers data extraction, storage, manipulation, visualisation, and predictive & prescriptive analytics. The thesis is currently being prepared for publication under the supervision of Dr Raini Hassan.
  <br /><br />
  I am a curious person. I love exploring and spontaneous adventures.
  `
}

// Third Section (Skills Section)
export const skills = {
  title: "Skills",
  items: [
    { a: "Artificial Intelligence [ML + DL]", b: "ai.png", c: "I have worked on many projects in ML and AI throughout my academic and professional career. I spent a few months developing a machine learning model on Time-Series model for Aduka. I have experience using Tensorflow, PyTorch, and Keras. I am currently exploring deep learning projects for real-life applications." },
    { a: "Big Data", b: "data.png", c: "I am very passionate about Big Data. With over three years experience, I have been disseminating, extracting, and manipulating various forms of data." },
    { a: "Data Visualization", b: "vis.png", c: "I have the most experience in data visualization. When creating visuals, we must realize that while we might understand most visualizations, not everyone has the same skills. As such, each visualization must be tailored specifically to its users. I have extensive experience in Data Visualization tools; Microsoft Power BI, Google Data Studio, and SAP."},
  ]
}

// Fourth Section (Journey/Timeline Section)
export const timeline = {
  title: "Timeline",
  items: [
    { year: 2016 },
    { a: "Bachelor of Science (Honors) in Computer Science", b: "bg-indigo-400", c: "Data Science & Artificial Intelligence - International Islamic University Malaysia, Malaysia", d: "Graduated with a First-Class Honors from IIUM. Specialization in Data Science and Artificial Intelligence. Involved in many extra-curricular activities throughout the degree." ,cgpa: 3.68, right: false, month: "September"},
    { year: 2020 },
    { a: "Schlumberger KL Finance Hub, Malaysia " , b: "bg-orange-400", c: "Data Visualization Analyst Intern - Data & Analytics Department", d:"Joined in January 2020 as a Data Visualization Analyst Intern. Spent 9 months working alongside talented individuals, in the Data & Analytics department that catered to the data needs of the entire Schlumberger organization. Helped with extracting and manipulating data with ETL tools. As an internship project, I developed a workflow integrating Microsoft Power BI, Powershell scripts, and Alteryx to automatically vet Power BI dashboards before publishing. Worked with a team that supports the data needs of multiple departments, systems, and products.",right: true, month: "January"},
    { a: "Zarty Business Services, Malaysia" , b: "bg-red-400", c: "Data Analyst - IT Team", d:"Lead Data Analyst for a revamp project for the Mofaz Group of Companies. Managed internal data visualization projects at a growing start-up.", right: true, month: "October"},
    { a: "Master of Business Intelligence & Analytics" , b: "bg-cyan-400", c: "International Islamic University Malaysia, Malaysia", d:"Enrolled to gain a more business perspective of data. Achieved excellent grades throughout the program. Completed a thesis, currently in preparation of publication under supervision of the Head of the Computer Science department.", cgpa: 3.96, right: false, month: "October"},
    { year: 2021 },
    { a: "Aduka Analytics Sdn Bhd, Malaysia" , b: "bg-purple-400", c: "Data Scientist (Research Associate) - Data & Analytics Team <br> Scrum Master", d:"Lead Data Scientist in the Data and Analytics team. Development and optimization of Time-Series model for predicting house prices in Malaysia. Managing end-to-end processes in the data pipeline. Introduced and implemented the Agile Scrum methodology in Aduka Analytics. Trained all teams and undertook the responsibility of Agile Coach and Scrum Master.", right: true, month: "February"},
    { year: 2022 },
    { a: "Master of Science in Computer Science" , b: "bg-sky-400", c: "Lakehead University, Ontario, Canada", d:"Started a thesis-based master's at Lakehead University in January 2022. Currently taking Deep Learning and Big Data courses.",right: false, month: "January"},
  ]
}

// Fifth Section (Education Section)
export const education = {
  title: "Education",
  unis: [
    { name: "International Islamic University Malaysia", img: "/iium.png", type:"Bachelors of Science in Computer Science", year: "2016 - 2020", loc: "KL, Malaysia"},
    { name: "International Islamic University Malaysia", img: "/iium.png", type:"Masters in Business Intelligence & Analytics", year: "2020 - 2022", loc: "KL, Malaysia"},
    { name: "Lakehead University", img: "/lu.png", type:"Masters of Science in Computer Science", year: "2022 - Present", loc: "ON, Canada"}
  ]
}

// Sixth Section (Experience Section)
export const experience = {
  title: "Experience",
  rows: [
    {name: "Langauges", items: ["Python", "C++", "C", "Java"]},
    {name: "Database", items: ["SQL Server", "MySQL", "MariaDB"]},
    {name: "BI Tools", items: ["Microsoft Power BI", "Google Data Studio", "SAP"]},
    {name: "Framework", items: ["Keras", "TensorFlow","Azure Cloud Services", "Laravel"]},
  ],
  lastrow: { name: "Software", items: ["Alteryx", "SSMS","Visual Studio Code", "Adobe Illustrator", "Adobe Premiere Pro", "WAMP Stack"] }
}

// Seventh Section (Projects Section)
export const projects = {
  title: "Projects",
  projects: [
    {view: "", supervisorLink: "", title: "Understanding the Present and Future of the Pandemic in Malaysia Through Business Intelligence & Analytics", content:"", type: "Master's Thesis Paper", supervisor: "Dr. Raini Hassan (Asst. Professor)", time: "Oct 2021 - Jan 2022"},
    {view: "", supervisorLink: "", title: "The Convergence of Data Science & Big Data Analytics", content:"", type: "Secondary Research - Big Data Across Verticals & Domains (MBIA)", supervisor: "Dr. Zainatul Shima Abdullah (Asst. Professor)", time: "Feb 2021"},
    {view: "", supervisorLink: "", title: "Sentiment Analysis of Tweets on Customer Satisfaction", content:"", type: "Secondary Research - Unstructured Data (MBIA)", supervisor: "Dr. Raini Hassan (Asst. Professor)", time: "Jan 2021"},
    {view: "", supervisorLink: "", title: "Data Quality Dimensions and Metrics", content:"", type: "Quantitative Research - Data Quality (MBIA)", supervisor: "Dr. Normi Sham Bt. Awang (Asst. Professor)", time: "Dec 2020"},
    {view: "", supervisorLink: "", title: "A Marketplace Using Cryptocurrency", content:"", type: "Final Year Project - UG (BSc CS)", supervisor: "Dr. Rizal Mohd Nor (Asst. Professor)", time: "Jan 2019 - Dec 2019"},
    {view: "", supervisorLink: "", title: "Price & Prediction Analysis of Smartphones", content:"", type: "Project - Big Data Analytics (BSc CS)", supervisor: "Dr. Raini Hassan (Asst. Professor)", time: "Oct 2019 - Dec 2019"},
    {view: "", supervisorLink: "", title: "Sentiment Analysis of YouTube Comments", content:"", type: "Project - Machine Learning (BSc CS)", supervisor: "Dr. Amelia Ritahani Ismail (Assoc. Professor)", time: "Feb 2019 - Jun 2019"},
  ]
}

// Eighth Section (Certifications Section)
export const certifications = {
  title: "Certifications",
  certs: [
    {title: "Machine Learning by Andrew Ng (Stanford University)", img: "/coursera.png" },
    {title: "ASEAN Data Science Explorers 2021", img: "/aseands.png" },
  ]
}

// Ninth Section (Courses Section)
export const courses = {
  title: "Courses",
  courses: [ 
    {dep: "BScCS", name:"Intro to Software Engineering", code: "CSC 1501", bg: "bg-zinc-200"},
    {dep: "BScCS", name:"Database Systems", code: "INFO 1103", bg: "bg-zinc-200"},
    {dep: "BScCS", name:"Mathematics for Computing I", code: "CSC 1701", bg: "bg-zinc-200"},
    {dep: "BScCS", name:"Elements of Programming", code: "CSC 1100", bg: "bg-teal-200"},
    {dep: "BScCS", name:"Object Oriented Programming", code: "CSC 1103", bg: "bg-teal-200"},
    {dep: "BScCS", name:"Intro to Computer Organization", code: "CSC 1401", bg: "bg-zinc-200"},
    {dep: "BScCS", name:"Probability and Statistics", code: "CSC 1706", bg: "bg-zinc-200"},
    {dep: "BScCS", name:"Systems Analysis and Design", code: "INFO 2401", bg: "bg-zinc-200"},
    {dep: "BScCS", name:"Data Structure and Algorithms I", code: "CSC 2104", bg: "bg-zinc-200"},
    {dep: "BScCS", name:"Computer Networking", code: "CSC 2201", bg: "bg-zinc-200"},
    {dep: "BScCS", name:"Mathematics for Computing II", code: "CSC 2706", bg: "bg-zinc-200"},
    {dep: "BScCS", name:"Intelligent Systems", code: "CSC 2301", bg: "bg-teal-200"},
    {dep: "BScCS", name:"Operating System", code: "CSC 3401", bg: "bg-zinc-200"},
    {dep: "BScCS", name:"Data Structures and Algorithm II", code: "CSC 3102", bg: "bg-zinc-200"},
    {dep: "BScCS", name:"Computer Architecture & Assembly Language", code: "CSC 3402", bg: "bg-zinc-200"},
    {dep: "BScCS", name:"Mathematics for Computing III", code: "CSC 3701", bg: "bg-zinc-200"},
    {dep: "BScCS", name:"Intro to Quantum Computing", code: "CSC 4102", bg: "bg-zinc-200"},
    {dep: "BScCS", name:"Machine Learning", code: "CSC 3304", bg: "bg-teal-200"},
    {dep: "BScCS", name:"Data Science", code: "CSC 3305", bg: "bg-teal-200"},
    {dep: "BScCS", name:"Computation and Complexity", code: "CSC 4101", bg: "bg-teal-200"},
    {dep: "BScCS", name:"Cryptography", code: "CSC 4604", bg: "bg-zinc-200"},
    {dep: "BScCS", name:"Big Data Analytics", code: "CSC 3303", bg: "bg-teal-200"},
    {dep: "BScCS", name:"Natural Language Processing", code: "CSC 4309", bg: "bg-teal-200"},
    {dep: "BScCS", name:"Database Programming", code: "INFO 2103", bg: "bg-zinc-200"},
    {dep: "MBIA", name:"Big Data Across Verticals and Domains", code: "CBIA 7101", bg: "bg-teal-200"},
    {dep: "MBIA", name:"Data Warehousing and Modelling", code: "CBIA 7103", bg: "bg-zinc-200"},
    {dep: "MBIA", name:"Data Quality", code: "CBIA 7102", bg: "bg-teal-200"},
    {dep: "MBIA", name:"Unstructured Data Analytics", code: "CBIA 7202", bg: "bg-teal-200"},
    {dep: "MBIA", name:"Tools for Data Science", code: "CBIA 7201", bg: "bg-zinc-200"},
    {dep: "MBIA", name:"Visualization for Decision Making", code: "CBIA 7203", bg: "bg-zinc-200"},
    {dep: "MScCS", name:"Big Data", code: "COMP-5012-WB", bg: "bg-teal-200"},
    {dep: "MScCS", name:"Deep Learning", code: "COMP-5421-WDE", bg: "bg-teal-200"},
  ]
}
