// Markdown-First GitHub Profile README Generator for Shambhavi Patil (@Shambhavi500)
// Emits clean, accessible, semantic Markdown and lightweight HTML tables.
// Strictly eliminates giant static SVG posters for text content.

import { SHOWCASE_PROJECTS } from '../data/projects.js';

export function generateReadme(data) {
  const username = data.username || 'Shambhavi500';
  const name = data.name || 'Shambhavi Patil';
  const email = data.email || 'shambhavipatil5631@gmail.com';
  const linkedinUrl = data.linkedinUrl || 'https://www.linkedin.com/in/shambhavi-patil05/';
  const portfolioUrl = `https://github.com/${username}`;

  // Use curated SHOWCASE_PROJECTS as source of truth
  const selectedProjects = SHOWCASE_PROJECTS;

  // Build clean 2-column HTML table for projects (lightweight and native to GitHub)
  let projectTableRows = '';
  for (let i = 0; i < selectedProjects.length; i += 2) {
    const p1 = selectedProjects[i];
    const p2 = selectedProjects[i + 1];

    const renderCell = (p) => {
      if (!p) return '<td width="50%"></td>';
      const techTags = (p.technologies || [p.language || 'Code'])
        .slice(0, 4)
        .map(t => `\`${t}\``)
        .join(' · ');
      const badgeHtml = p.badge
        ? `<p><strong>${p.badge}</strong></p>`
        : '';

      return `<td width="50%" valign="top">
      <h3><a href="${p.url}">${p.name}</a></h3>
      ${badgeHtml}
      <p>${p.description}</p>
      <p>${techTags}</p>
      <p><a href="${p.url}"><strong>View repository ↗</strong></a></p>
    </td>`;
    };

    projectTableRows += `  <tr>\n    ${renderCell(p1)}\n    ${renderCell(p2)}\n  </tr>\n`;
  }

  return `<div align="center">

<!-- DECORATIVE BRANDING BANNER -->
<img src="./assets/hero.svg" alt="${name} - Engineering Portfolio Banner" width="100%" />

# Hi, I'm ${name} 👋
### Third-year Electronics & Telecommunication Engineering student at PICT, Pune
**Software Development · AI/ML · Data Structures & Algorithms**  
*Building practical systems with real-world impact.*

<p align="center">
  <a href="${portfolioUrl}"><img src="https://img.shields.io/badge/%F0%9F%8C%90_PORTFOLIO-E0218A?style=for-the-badge&logoColor=white" alt="Portfolio" /></a>
  &nbsp;
  <a href="${linkedinUrl}"><img src="https://img.shields.io/badge/%F0%9F%92%BC_LINKEDIN-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
  &nbsp;
  <a href="https://github.com/${username}"><img src="https://img.shields.io/badge/%E2%9A%A1_GITHUB-24292e?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" /></a>
  &nbsp;
  <a href="mailto:${email}"><img src="https://img.shields.io/badge/%F0%9F%93%AC_EMAIL-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" /></a>
</p>

</div>

---

## 🌸 About Me

I’m a third-year Electronics and Telecommunication Engineering student at PICT, Pune, with a strong interest in Software Development, AI/ML, and Data Structures & Algorithms. Although my academic background is in ENTC, I’ve been actively exploring the software and AI space through projects, hackathons, research, and hands-on learning.

I enjoy building practical solutions that use technology to solve real-world problems. My work has included AI-driven agricultural systems, computer vision, mobile applications, and cybersecurity-focused projects. I’ve worked with technologies such as C++, Python, Java, JavaScript, Git/GitHub, Android, and machine learning tools, while continuously improving my problem-solving and DSA skills.

Hackathons have been an important part of my learning journey. I was part of the winning team at TechFiesta 2026 in the Agriculture domain and also secured Runner-Up at the Pune Agri International Hackathon, where our AI-powered agricultural governance solution was presented to senior government officials.

I believe the best way to learn engineering is by building, experimenting, debugging, and improving real systems rather than only studying theory. Currently, I’m focused on strengthening my software, AI/ML and DSA fundamentals, gaining industry experience through internships, and building technically strong projects that have real-world impact. In the long term, I want to build a strong career in technology and continue growing as an engineer.

---

## 💡 What I Build

| Focus Area | Core Technologies & Scope |
| :--- | :--- |
| 🤖 **AI / ML** | Autonomous agents, predictive pipelines, deep neural networks |
| 💻 **Software Systems** | Full-stack application engineering, distributed architectures, REST & GraphQL APIs |
| 👁️ **Computer Vision** | OCR fraud detection, image processing, spatial feature extraction |
| 🌾 **Agritech** | Soil telemetry, crop health advisory, satellite canopy diagnostics |
| 📈 **Quant / Reinforcement Learning** | Custom Gymnasium environments, order-book backtesting, algorithmic policy |
| 🛡️ **Cybersecurity** | Secure authentication flows, data privacy, vulnerability auditing |

---

## 🚀 Selected Work

<table width="100%">
${projectTableRows}</table>

---

## 🏆 Achievements

- **TechFiesta 2026** — **WINNER (1st Place)** | *Agriculture Domain*
  - Outperformed 600+ participating teams nationwide with **KrishiSahAI**, an end-to-end AI advisory and soil telemetry platform.
- **Pune Agri International Hackathon** — **RUNNER-UP**
  - Built **KRISHI-PRABANDH**, an AI-driven agricultural governance solution combining OCR fraud detection and satellite NDVI analysis.
  - Presented directly to senior government leadership; awarded **₹15L development grant**.

---

## 💼 Current Experience

- **AI/ML Research & Development Intern** — **Mindstrix Technologies LLP** *(Mar 2026 – Ongoing)*
  - Contributing to application software development across the SDLC on live AI/ML and software platform projects under mentor guidance.
  - Designing and coding program modules for data processing, model training, and system integration; preparing test data and executing test cases.
  - Collaborating in an Agile team environment through technical reviews, brainstorming sessions, and cross-functional product development.
- **B.Tech in Electronics & Telecommunication** — **Pune Institute of Computer Technology (PICT)** *(2024 – 2028)*
  - CGPA: **8.6 / 10** | Higher Secondary Certificate (HSC): 89.83% | Secondary School Certificate (SSC): 96.40%
  - Specialization in signal processing, communication systems, embedded hardware, and algorithmic computation.

---

## 🛠️ Tech Stack

- **Languages:** \`C++\` · \`Python\` · \`Java\` · \`JavaScript\` · \`C\` · \`HTML/CSS\`
- **AI / ML & Vision:** \`Machine Learning\` · \`Computer Vision (OCR)\` · \`Reinforcement Learning\` · \`Multi-Agent Systems\`
- **Mobile & Embedded:** \`Android Development\` · \`Embedded C\` · \`Arduino\` · \`Sensors Interfacing\`
- **Tools & Foundations:** \`Data Structures & Algorithms (DSA)\` · \`Git\` · \`GitHub\` · \`Docker\` · \`FastAPI\` · \`SDLC & Agile\`

*(No fake percentages, no progress bars).*

---

## 📊 GitHub Highlights

- **Profile:** [@${username}](https://github.com/${username})
- **Repositories:** [Browse All Repositories ↗](https://github.com/${username}?tab=repositories)

---

## 📬 Contact & Connect

- **LinkedIn:** [shambhavi-patil05](${linkedinUrl})
- **GitHub:** [@${username}](https://github.com/${username})
- **Email:** [${email}](mailto:${email})
- **Portfolio:** [Shambhavi Patil Portfolio](${portfolioUrl})
`;
}
