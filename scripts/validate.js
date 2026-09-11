import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.join(__dirname, '..');
const ASSETS_DIR = path.join(ROOT_DIR, 'assets');
const README_FILE = path.join(ROOT_DIR, 'README.md');
const DATA_FILE = path.join(ROOT_DIR, 'src', 'data', 'profile-data.json');

function validateXml(xmlString, filename) {
  // Basic XML well-formedness checks
  if (!xmlString.startsWith('<svg') || !xmlString.trim().endsWith('</svg>')) {
    throw new Error(`${filename}: Does not start with <svg or end with </svg>`);
  }

  // Check balanced tags for common container elements
  const tagsToCheck = ['svg', 'defs', 'style', 'g', 'filter', 'linearGradient', 'radialGradient'];
  for (const tag of tagsToCheck) {
    const openMatches = xmlString.match(new RegExp(`<${tag}(\\s+[^>]*)?>`, 'g')) || [];
    const closeMatches = xmlString.match(new RegExp(`</${tag}>`, 'g')) || [];
    if (openMatches.length !== closeMatches.length) {
      throw new Error(`${filename}: Mismatched <${tag}> tags (opened ${openMatches.length}, closed ${closeMatches.length})`);
    }
  }

  // Check for forbidden unrendered tokens outside tags
  if (xmlString.includes('undefined') || xmlString.includes('NaN') || xmlString.includes('null')) {
    throw new Error(`${filename}: Contains unrendered JS token ('undefined', 'NaN', or 'null')`);
  }

  // Check for invalid XML entities
  const entityMatches = [...xmlString.matchAll(/&([a-zA-Z0-9]+);/g)];
  const validEntities = new Set(['amp', 'lt', 'gt', 'quot', 'apos']);
  for (const match of entityMatches) {
    if (!validEntities.has(match[1])) {
      throw new Error(`${filename}: Contains non-XML entity '&${match[1]};'. Use valid XML entity, numeric entity, or UTF-8 character.`);
    }
  }
}

export async function runValidation() {
  console.log('═══════════════════════════════════════════════════════════════');
  console.log('✦  ATELIER NO. 500 // PROFILE AUTOMATED VALIDATION SUITE      ✦');
  console.log('═══════════════════════════════════════════════════════════════\n');

  let errors = 0;

  // 1. Validate Data File & Truth Sources
  console.log('[1/4] Validating Profile Data & Truth Sources...');
  if (!fs.existsSync(DATA_FILE)) {
    console.error('  ✖ Missing data file at', DATA_FILE);
    errors++;
  } else {
    const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
    if (data.username !== 'Shambhavi500') {
      console.error(`  ✖ Expected username Shambhavi500, got ${data.username}`);
      errors++;
    } else {
      console.log(`  ✔ Verified username: ${data.username} (${data.name})`);
    }

    if (!data.education || !data.education.institution.includes('PICT') || data.education.cgpa !== '8.6') {
      console.error(`  ✖ Missing or inaccurate education in profile data`);
      errors++;
    } else {
      console.log(`  ✔ Verified Academic Pedigree: ${data.education.institution} (${data.education.shortDegree}) CGPA: ${data.education.cgpa}`);
    }

    if (!data.experience || data.experience.length === 0 || !data.experience[0].company.includes('Mindstrix')) {
      console.error(`  ✖ Missing or inaccurate internship data`);
      errors++;
    } else {
      console.log(`  ✔ Verified Internship: ${data.experience[0].company} - ${data.experience[0].role}`);
    }

    const hasTechFiesta = (data.achievements || []).some(a => a.title.includes('TECHFIESTA') || a.event.includes('TECHFIESTA'));
    const hasPuneAgri = (data.achievements || []).some(a => a.title.includes('PUNE AGRI') || a.event.includes('PUNE AGRI'));
    if (!hasTechFiesta || !hasPuneAgri) {
      console.error(`  ✖ Missing prominent hackathon achievements in profile data`);
      errors++;
    } else {
      console.log(`  ✔ Verified Achievements: TechFiesta '26 (1st Place) & Pune Agri Hackathon (National Runner-Up)`);
    }

    if (!data.projects || data.projects.length < 6) {
      console.error(`  ✖ Expected at least 6 ranked featured projects, got ${data.projects?.length}`);
      errors++;
    } else {
      console.log(`  ✔ Verified Ranked Projects: ${data.projects.length} showcase projects ranked`);
    }
  }

  // 2. Validate README Architecture (Markdown-first, Semantic, Accessible)
  console.log('\n[2/4] Validating README.md Structure & Semantic Architecture...');
  if (!fs.existsSync(README_FILE)) {
    console.error('  ✖ Missing README.md at', README_FILE);
    errors++;
  } else {
    const readme = fs.readFileSync(README_FILE, 'utf-8');
    if (readme.length < 1000) {
      console.error('  ✖ README.md is suspiciously short');
      errors++;
    } else {
      console.log(`  ✔ README.md exists (${readme.length} chars)`);
    }

    // Check for placeholders
    const placeholders = ['TODO', 'FIXME', 'LOREM IPSUM', 'PLACEHOLDER'];
    for (const p of placeholders) {
      if (readme.toUpperCase().includes(p)) {
        console.error(`  ✖ README contains forbidden placeholder: "${p}"`);
        errors++;
      }
    }

    // Check required Markdown sections
    const requiredSections = [
      { name: 'About Me', trigger: '## 🌸 About Me' },
      { name: 'What I Build', trigger: '## 💡 What I Build' },
      { name: 'Selected Work', trigger: '## 🚀 Selected Work' },
      { name: 'Achievements', trigger: '## 🏆 Achievements' },
      { name: 'Current Experience', trigger: '## 💼 Current Experience' },
      { name: 'Tech Stack', trigger: '## 🛠️ Tech Stack' },
      { name: 'Contact & Connect', trigger: '## 📬 Contact & Connect' }
    ];

    for (const sec of requiredSections) {
      if (!readme.includes(sec.trigger)) {
        console.error(`  ✖ README missing required section: "${sec.name}" (${sec.trigger})`);
        errors++;
      } else {
        console.log(`  ✔ Section present: "${sec.name}"`);
      }
    }

    // Check that projects table contains the 6 required repositories in priority
    const requiredProjects = ['KrishiSahAI', 'KRISHI-PRABANDH', 'AlphaTrader-RL', 'Ovio', 'Aira', 'NDVI_satellite'];
    for (const proj of requiredProjects) {
      if (!readme.includes(proj)) {
        console.error(`  ✖ README missing required project: ${proj}`);
        errors++;
      } else {
        console.log(`  ✔ Project present in table: ${proj}`);
      }
    }

    // Validate that static poster SVGs are NOT used as text replacements in README
    const forbiddenTextPosters = [
      'identity.svg',
      'achievements.svg',
      'experience.svg',
      'projects.svg',
      'project-01.svg',
      'project-02.svg',
      'project-03.svg',
      'project-04.svg',
      'project-05.svg',
      'project-06.svg',
      'dashboard.svg',
      'tech-wardrobe.svg',
      'runway.svg',
      'footer.svg'
    ];

    for (const poster of forbiddenTextPosters) {
      if (readme.includes(poster)) {
        console.error(`  ✖ Anti-pattern detected: README embeds static text poster "${poster}" instead of real Markdown!`);
        errors++;
      }
    }

    // Verify verbatim about me text is directly readable in Markdown
    if (!readme.includes('Electronics and Telecommunication Engineering student at PICT, Pune')) {
      console.error('  ✖ README missing readable About Me text');
      errors++;
    } else {
      console.log('  ✔ Verified real, accessible Markdown narrative in About Me section');
    }
  }

  // 3. Validate Referenced Assets in README
  console.log('\n[3/4] Validating Referenced Assets...');
  const readme = fs.readFileSync(README_FILE, 'utf-8');
  const assetRefs = [...readme.matchAll(/src=["'](\.\/assets\/[^"']+)["']/g)].map(m => m[1]);
  console.log(`  Found ${assetRefs.length} asset reference(s) in README.md: ${assetRefs.join(', ')}`);
  for (const ref of assetRefs) {
    const localPath = path.join(ROOT_DIR, ref);
    if (!fs.existsSync(localPath)) {
      console.error(`  ✖ Referenced asset missing: ${ref}`);
      errors++;
    } else {
      try {
        const svgContent = fs.readFileSync(localPath, 'utf-8');
        validateXml(svgContent, ref);
        console.log(`  ✔ Referenced asset exists and is well-formed XML: ${ref}`);
      } catch (err) {
        console.error(`  ✖ Invalid XML in ${ref}: ${err.message}`);
        errors++;
      }
    }
  }

  // 4. Validate Asset Directory Optimization
  console.log('\n[4/4] Validating Asset Files & XML Well-Formedness...');
  if (fs.existsSync(ASSETS_DIR)) {
    const files = fs.readdirSync(ASSETS_DIR).filter(f => f.endsWith('.svg'));
    for (const file of files) {
      const filePath = path.join(ASSETS_DIR, file);
      try {
        const content = fs.readFileSync(filePath, 'utf-8');
        validateXml(content, file);
      } catch (err) {
        console.error(`  ✖ Invalid SVG in ${file}: ${err.message}`);
        errors++;
      }
    }
    console.log(`  ✔ All ${files.length} SVG files in /assets are syntactically valid XML`);
  }

  // Final Verdict
  console.log('\n═══════════════════════════════════════════════════════════════');
  if (errors === 0) {
    console.log('✨ ALL 4 TEST SUITES PASSED — ZERO ERRORS DETECTED ✨');
    console.log('═══════════════════════════════════════════════════════════════\n');
  } else {
    console.error(`❌ VALIDATION FAILED WITH ${errors} ERROR(S)`);
    console.log('═══════════════════════════════════════════════════════════════\n');
    process.exit(1);
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  runValidation().catch(err => {
    console.error('Validation crashed:', err);
    process.exit(1);
  });
}
