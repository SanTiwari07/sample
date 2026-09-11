import { escapeXml } from './theme.js';

export function generateReadme(data) {
  const username = data.username || 'Shambhavi500';
  const name = data.name || 'Shambhavi Patil';
  const email = data.email || 'shambhavipatil5631@gmail.com';
  const linkedinUrl = data.linkedinUrl || 'https://www.linkedin.com/in/shambhavi-patil05/';
  const projects = data.projects || [];
  const topProjects = projects.slice(0, 6);

  // Generate dynamic markdown table rows from ranked showcase projects
  const projectRows = projects.map(p => {
    const badgeText = p.tag ? ` \`${p.tag}\`` : '';
    const cleanDesc = (p.highlight || p.description || '').replace(/\|/g, '\\|');
    return `| **[${p.name}](https://github.com/${username}/${p.name})** | \`${p.category}\` | **${p.language}** | ${cleanDesc}${badgeText} |`;
  }).join('\n');

  // Build 2-column table of individual clickable project cards
  let projectCardsGrid = '<table border="0" cellpadding="0" cellspacing="12" width="100%">\n';
  for (let i = 0; i < topProjects.length; i += 2) {
    const p1 = topProjects[i];
    const p2 = topProjects[i + 1];
    const id1 = p1.id || String(i + 1).padStart(2, '0');
    
    projectCardsGrid += '  <tr>\n';
    projectCardsGrid += `    <td width="50%" align="center" valign="top">\n`;
    projectCardsGrid += `      <a href="https://github.com/${username}/${p1.name}">\n`;
    projectCardsGrid += `        <img src="./assets/project-${id1}.svg" alt="${p1.name} - ${escapeXml(p1.category)}" width="100%" />\n`;
    projectCardsGrid += `      </a>\n`;
    projectCardsGrid += `    </td>\n`;

    if (p2) {
      const id2 = p2.id || String(i + 2).padStart(2, '0');
      projectCardsGrid += `    <td width="50%" align="center" valign="top">\n`;
      projectCardsGrid += `      <a href="https://github.com/${username}/${p2.name}">\n`;
      projectCardsGrid += `        <img src="./assets/project-${id2}.svg" alt="${p2.name} - ${escapeXml(p2.category)}" width="100%" />\n`;
      projectCardsGrid += `      </a>\n`;
      projectCardsGrid += `    </td>\n`;
    } else {
      projectCardsGrid += `    <td width="50%"></td>\n`;
    }
    projectCardsGrid += '  </tr>\n';
  }
  projectCardsGrid += '</table>';

  return `<div align="center">

<!-- 01. HERO SECTION // ATELIER NO. 500 -->
<img src="./assets/hero.svg" alt="${name} - Luxury Barbiecore Engineering Portfolio" width="100%" />

<!-- INTERACTIVE BARBIECORE ACTION BAR -->
<p align="center">
  <a href="#curated-atelier-architectures"><img src="https://img.shields.io/badge/%E2%9C%A8_EXPLORE_PROJECTS-E0218A?style=for-the-badge&logoColor=white" alt="Explore Top Projects" /></a>
  &nbsp;
  <a href="${linkedinUrl}"><img src="https://img.shields.io/badge/%F0%9F%92%BC_CONNECT_LINKEDIN-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Profile" /></a>
  &nbsp;
  <a href="#hackathon-honors--recognitions"><img src="https://img.shields.io/badge/%F0%9F%8F%86_HACKATHON_WINS-C71585?style=for-the-badge&logoColor=white" alt="Hackathon Honors" /></a>
  &nbsp;
  <a href="mailto:${email}"><img src="https://img.shields.io/badge/%F0%9F%93%AC_SEND_EMAIL-2D2D2D?style=for-the-badge&logo=gmail&logoColor=white" alt="Email Shambhavi" /></a>
  &nbsp;
  <a href="https://github.com/${username}?tab=repositories"><img src="https://img.shields.io/badge/%E2%9A%A1_ALL_REPOSITORIES-FFD1DC?style=for-the-badge&labelColor=E0218A&color=FFD1DC" alt="All Repositories" /></a>
</p>

<br/>

<!-- FLOWING PINK CURVE DIVIDER -->
<img src="./assets/divider.svg" alt="Divider" width="100%" />

<br/>

<!-- 02. THE PERSON // ENGINEERING PROFILE & FOCUS -->
<img src="./assets/identity.svg" alt="The Person - Shambhavi Patil Profile &amp; Focus" width="100%" />

<br/>

<!-- FLOWING PINK CURVE DIVIDER -->
<img src="./assets/divider.svg" alt="Divider" width="100%" />

<br/>

<!-- 03. THE WINS // HACKATHONS & ENGINEERING HONORS -->
<a id="hackathon-honors--recognitions" name="hackathon-honors--recognitions"></a>
<img src="./assets/achievements.svg" alt="The Wins - Hackathon Honors &amp; Recognitions" width="100%" />

<br/>

<!-- FLOWING PINK CURVE DIVIDER -->
<img src="./assets/divider.svg" alt="Divider" width="100%" />

<br/>

<!-- 04. PROFESSIONAL EDIT // INDUSTRY APPOINTMENT & ACADEMICS -->
<a href="${linkedinUrl}">
  <img src="./assets/experience.svg" alt="Professional Edit - Mindstrix Technologies LLP AI/ML Intern &amp; PICT ENTC" width="100%" />
</a>

<br/>

<!-- FLOWING PINK CURVE DIVIDER -->
<img src="./assets/divider.svg" alt="Divider" width="100%" />

<br/>

<!-- 05. THE WORK // FEATURED PROJECTS & ARCHITECTURES -->
<a id="curated-atelier-architectures" name="curated-atelier-architectures"></a>
<img src="./assets/projects.svg" alt="The Work - Featured Projects &amp; Architectures" width="100%" />

<br/>

<!-- INDIVIDUAL CLICKABLE 1-TO-1 PROJECT CARDS -->
${projectCardsGrid}

</div>

### ✦ Curated Atelier Architectures

| Project | Domain / Category | Primary Architecture | Description & Recognition |
| :--- | :--- | :--- | :--- |
${projectRows}

<div align="center">

<br/>

<!-- FLOWING PINK CURVE DIVIDER -->
<img src="./assets/divider.svg" alt="Divider" width="100%" />

<br/>

<!-- 06. THE TELEMETRY // SYSTEM METRICS & TECH DISTRIBUTION -->
<a href="https://github.com/${username}?tab=repositories">
  <img src="./assets/dashboard.svg" alt="The Telemetry - System Metrics &amp; Stack Distribution" width="100%" />
</a>

<br/>

<!-- FLOWING PINK CURVE DIVIDER -->
<img src="./assets/divider.svg" alt="Divider" width="100%" />

<br/>

<!-- 07. THE LAB // AI/ML & ENGINEERING STACK -->
<a href="https://github.com/${username}?tab=repositories">
  <img src="./assets/tech-wardrobe.svg" alt="The Lab - AI/ML &amp; Engineering Stack" width="100%" />
</a>

<br/>

<!-- FLOWING PINK CURVE DIVIDER -->
<img src="./assets/divider.svg" alt="Divider" width="100%" />

<br/>

<!-- 08. THE BUILD LOG // ACTIVITY RUNWAY & CADENCE -->
<img src="./assets/runway.svg" alt="The Build Log - Activity Runway &amp; Cadence" width="100%" />

<br/>

<!-- FLOWING PINK CURVE DIVIDER -->
<img src="./assets/divider.svg" alt="Divider" width="100%" />

<br/>

<!-- 09. THE CLOSING // HAUTE COUTURE SIGNATURE -->
<a href="mailto:${email}">
  <img src="./assets/footer.svg" alt="The Closing - Shambhavi Patil Portfolio" width="100%" />
</a>

<br/><br/>

[![GitHub](https://img.shields.io/badge/GitHub-Shambhavi500-E0218A?style=for-the-badge&logo=github&logoColor=white)](https://github.com/${username})
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Shambhavi_Patil-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](${linkedinUrl})
[![Email](https://img.shields.io/badge/Email-shambhavipatil5631%40gmail.com-2D2D2D?style=for-the-badge&logo=gmail&logoColor=white)](mailto:${email})
[![Status](https://img.shields.io/badge/Status-AI%2FML_R%26D_Intern_%40Mindstrix-E0218A?style=for-the-badge)](https://github.com/${username})
[![Education](https://img.shields.io/badge/PICT_ENTC-CGPA_8.6-C71585?style=for-the-badge)](https://github.com/${username})

<br/><br/>

<sub>Curated with intention &amp; precision in the <b>Atelier No. 500</b>. Where Autonomous Intelligence Meets Haute Couture Engineering.</sub>

</div>
`;
}
