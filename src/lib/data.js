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
  img: "https://dummyimage.com/450"
}


// Second Section (About Section)
// Add "<br /><br />" for paragraph break
export const about = {
  title: "About Me",
  subtitle: `
  Hi there, my name is Mohammad. I am a recent Computer Science graduate from the International Islamic University Malaysia (IIUM). I am a researcher by heart and I like to focus on understanding how to solve real-life issues/problems using Machine Learning and Data Science. My topics of interest includes Big Data and Artificial Intelligent Systems/Agents. I have recently developed an interest in Health Informatics and its implications on the advancement of modern healthcare.
  <br /><br />
  I am currently working on a project that is utilising the data from the Malaysian Ministry of Health to further increase the transparency between the Government and the Public. The project covers data extraction, storage, manipulation, visualisation, and predictive & prescriptive analytics.
  <br /><br />
  I am a curious person. I love exploring and spontaneous adventures.
  `
}

// Third Section (Skills Section)
export const skills = {
  title: "Skills",
  items: [
    { a: "Artificial Intelligence", b: "ai.png", c: "ai" },
    { a: "Big Data", b: "data.png", c: "bigdata" },
    { a: "Data Visualization", b: "vis.png", c: "Datavis"},
  ]
}

// Fourth Section (Journey/Timeline Section)
export const timeline = {
  title: "Timeline",
  items: [
    { year: 2016 },
    { a: "Bachelor of Science (Honors) in Computer Science", b: "bg-indigo-400", c: "Data Science & Artificial Intelligence - International Islamic University Malaysia, Malaysia", cgpa: 3.68, right: false, month: "September"},
    { year: 2020 },
    { a: "Schlumberger KL Finance Hub, Malaysia " , b: "bg-orange-400", c: "Data Analyst - Data & Analytics Department", right: true, month: "January"},
    { a: "Zarty Business Services, Malaysia" , b: "bg-red-400", c: "Data Analyst - IT Team", right: true, month: "October"},
    { a: "Master of Business Intelligence & Analytics" , b: "bg-cyan-400", c: "International Islamic University Malaysia, Malaysia", cgpa: 3.96, right: false, month: "October"},
    { year: 2021 },
    { a: "Aduka Analytics Sdn Bhd, Malaysia" , b: "bg-purple-400", c: "Data Scientist (Research Associate) - Data & Analytics Team <br> Scrum Master", right: true, month: "February"},
    { year: 2022 },
    { a: "Master of Science in Computer Science" , b: "bg-gray-400", c: "Lakehead University, Ontario, Canada", right: false, month: "January"},
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
    {name: "BI Tools", items: ["Microsoft Power BI", "Google Data Studio"]},
    {name: "Framework", items: ["Keras", "TensorFlow","Azure Cloud Services", "Laravel"]},
  ],
  lastrow: { name: "Software", items: ["Alteryx", "SSMS","Visual Studio Code", "Adobe Illustrator", "Adobe Premiere Pro", "WAMP Stack"] }
}

// Seventh Section (Projects Section)
export const projects = {
  title: "Projects",
  projects: [
    {title: "Understanding the Present and Future of the Pandemic in Malaysia", content:"", type: "Master's Thesis Paper", supervisor: "Dr. Raini Hassan (Asst. Professor)", time: "October 2021 - January 2022"},
    {title: "The Convergence of Data Science & Big Data Analytics", content:"", type: "Secondary Research - Big Data Across Verticals & Domains (MBIA)", supervisor: "Dr. Zainatul Shima Abdullah (Asst. Professor)", time: "Feburary 2021"},
    {title: "Sentiment Analysis of Tweets on Customer Satisfaction", content:"", type: "Secondary Research - Unstructured Data (MBIA)", supervisor: "Dr. Raini Hassan (Asst. Professor)", time: "January 2021"},
    {title: "Data Quality Dimensions and Metrics", content:"", type: "Quantitative Research - Data Quality (MBIA)", supervisor: "Dr. Normi Sham Bt. Awang (Asst. Professor)", time: "December 2020"},
    {title: "A Marketplace Using Cryptocurrency", content:"", type: "Final Year Project - UG (BSc CS)", supervisor: "Dr. Rizal Mohd Nor (Asst. Professor)", time: "January 2019 - December 2019"},
    {title: "Price & Prediction Analysis of Smartphones", content:"", type: "Project - Big Data Analytics (BSc CS)", supervisor: "Dr. Raini Hassan (Asst. Professor)", time: "October 2019 - December 2019"},
    {title: "Sentiment Analysis of YouTube Comments", content:"", type: "Project - Machine Learning (BSc CS)", supervisor: "Dr. Amelia Ritahani Ismail (Assoc. Professor)", time: "February 2019 - June 2019"},
  ]
}

// Eighth Section (Certifications Section)
export const certifications = {
  title: "Certifications",
  certs: [
    {title: "Machine Learning by Andrew Ng (Stanford University)", img: "https://dummyimage.com/500x200" },
    {title: "ASEAN Data Science Explorers 2021", img: "https://dummyimage.com/500x200" },
  ]
}

// Ninth Section (Courses Section)
export const courses = {
  title: "Courses",
  courses: [ 
    {name:"Intro to Software Engineering", code: "CSCI 1111"},
    {name:"Database Systems", code: "CSCI 1100"},
    {name:"third", code: "CSCI 3333"},
    {name:"fourth", code: "CSCI 4444"},
    {name:"fifth", code: "CSCI 5555"},
    {name:"sixth", code: "CSCI 6666"},    
  ]
}
