import fs from 'fs';
import PDFDocument from 'pdfkit';

// Create a new A4 PDF document (595.28 x 841.89 pt)
const doc = new PDFDocument({
  size: 'A4',
  margins: {
    top: 45,
    bottom: 45,
    left: 45,
    right: 45
  }
});

const outputPath = './public/resume.pdf';
doc.pipe(fs.createWriteStream(outputPath));

// Premium Formal Color Palette
const primaryColor = '#0F172A';     // Slate 900 (Deep Dark Headers)
const accentColor = '#2563EB';      // Royal Blue 600 for Subtitles/Highlights
const bodyTextColor = '#334155';    // Slate 700 for main readable text
const mutedTextColor = '#64748B';   // Slate 500 for secondary details
const lineDividerColor = '#CBD5E1'; // Slate 300 for clean structural lines

// Helper to draw horizontal section dividers
const drawDivider = (y) => {
  doc.strokeColor(lineDividerColor)
     .lineWidth(0.8)
     .moveTo(45, y)
     .lineTo(550, y)
     .stroke();
};

// Helper for section headers
const addSectionHeader = (title, y) => {
  doc.fillColor(primaryColor)
     .font('Helvetica-Bold')
     .fontSize(11)
     .text(title.toUpperCase(), 45, y, { characterSpacing: 0.8 });
  drawDivider(y + 15);
  return y + 24;
};

// ----------------------------------------------------
// PAGE 1: HEADER, SUMMARY, PROFESSIONAL EXPERIENCE
// ----------------------------------------------------

// Profile Image Frame & Photo on the Right
const imagePath = './public/images/profile.png';
if (fs.existsSync(imagePath)) {
  const imgX = 465;
  const imgY = 45;
  const imgSize = 85;

  // Background circle & border for clean photo placement
  doc.save();
  doc.circle(imgX + imgSize / 2, imgY + imgSize / 2, imgSize / 2 + 2)
     .lineWidth(1)
     .strokeColor(lineDividerColor)
     .stroke();
  doc.restore();

  // Clip profile image into smooth circle
  doc.save();
  doc.circle(imgX + imgSize / 2, imgY + imgSize / 2, imgSize / 2)
     .clip();
  doc.image(imagePath, imgX, imgY, { width: imgSize, height: imgSize });
  doc.restore();
}

// Left Header Block
doc.fillColor(primaryColor)
   .font('Helvetica-Bold')
   .fontSize(22)
   .text('Cee Jay Cejas', 45, 45);

doc.fillColor(accentColor)
   .font('Helvetica-Bold')
   .fontSize(11)
   .text('Full-Stack Web Developer', 45, 73);

doc.fillColor(bodyTextColor)
   .font('Helvetica')
   .fontSize(9)
   .text('📍 Digos City, Davao del Sur, Philippines', 45, 91)
   .text('📧 cejasceejay2004@gmail.com', 45, 104)
   .text('💻 GitHub: github.com/ceejaycejas', 45, 117)
   .text('🔗 LinkedIn: linkedin.com/in/ceejaycejas', 45, 130);

let currentY = 150;
drawDivider(currentY);

// PROFESSIONAL SUMMARY
currentY = addSectionHeader('Professional Summary', currentY + 12);

doc.fillColor(bodyTextColor)
   .font('Helvetica')
   .fontSize(9.5)
   .text(
     'Passionate and detail-oriented Full-Stack Web Developer with a Bachelor of Science in Information Technology and hands-on experience developing modern web applications using Laravel, PHP, JavaScript, and MySQL. Experienced in designing responsive user interfaces, building scalable backend systems, and managing relational databases. Completed internships in both software development and data management, strengthening problem-solving, collaboration, and technical support skills. Dedicated to engineering efficient, user-friendly digital solutions that optimize organizational workflows.',
     45,
     currentY,
     { width: 505, align: 'justify', lineGap: 3 }
   );

// PROFESSIONAL EXPERIENCE
currentY = addSectionHeader('Professional Experience', currentY + 105);

// Experience 1: DepEd
doc.fillColor(primaryColor)
   .font('Helvetica-Bold')
   .fontSize(10.5)
   .text('Out-Campus System Developer Intern', 45, currentY);

doc.fillColor(mutedTextColor)
   .font('Helvetica-Bold')
   .fontSize(9)
   .text('Apr 2026 – May 2026', 420, currentY, { align: 'right', width: 130 });

currentY += 14;
doc.fillColor(accentColor)
   .font('Helvetica-Bold')
   .fontSize(9.5)
   .text('DepEd Digos Division – IT Department', 45, currentY);

const exp1Bullets = [
  'Developed and maintained internal web-based applications to streamline administrative processes and digital services.',
  'Assisted in designing, testing, and implementing new system features based on departmental requirements.',
  'Diagnosed, debugged, and resolved software issues to enhance overall system performance and reliability.',
  'Collaborated closely with developers and staff to improve application user experience and technical workflow.',
  'Provided end-user technical support, system deployment assistance, and software onboarding.'
];

currentY += 15;
exp1Bullets.forEach(bullet => {
  doc.fillColor(mutedTextColor)
     .font('Helvetica')
     .fontSize(9)
     .text('•', 55, currentY);
  doc.fillColor(bodyTextColor)
     .text(bullet, 67, currentY, { width: 483, align: 'justify', lineGap: 1.5 });
  currentY += doc.heightOfString(bullet, { width: 483 }) + 4;
});

// Experience 2: DSSC QA
currentY += 10;
doc.fillColor(primaryColor)
   .font('Helvetica-Bold')
   .fontSize(10.5)
   .text('In-Campus Data Encoder Intern', 45, currentY);

doc.fillColor(mutedTextColor)
   .font('Helvetica-Bold')
   .fontSize(9)
   .text('Feb 2026 – Mar 2026', 400, currentY, { align: 'right', width: 150 });

currentY += 14;
doc.fillColor(accentColor)
   .font('Helvetica-Bold')
   .fontSize(9.5)
   .text('Davao del Sur State College – Quality Assurance Office', 45, currentY);

const exp2Bullets = [
  'Encoded, verified, and maintained institutional records with a high level of accuracy and confidentiality.',
  'Organized and updated quality assurance documents and databases for accreditation readiness.',
  'Assisted in preparing comprehensive reports and documentation for institutional compliance activities.',
  'Ensured data integrity by reviewing and validating encoded information prior to submission.'
];

currentY += 15;
exp2Bullets.forEach(bullet => {
  doc.fillColor(mutedTextColor)
     .font('Helvetica')
     .fontSize(9)
     .text('•', 55, currentY);
  doc.fillColor(bodyTextColor)
     .text(bullet, 67, currentY, { width: 483, align: 'justify', lineGap: 1.5 });
  currentY += doc.heightOfString(bullet, { width: 483 }) + 4;
});

// ----------------------------------------------------
// PAGE 2: EDUCATION, FEATURED PROJECTS, SKILLS
// ----------------------------------------------------
doc.addPage();

currentY = 45;
currentY = addSectionHeader('Education', currentY);

doc.fillColor(primaryColor)
   .font('Helvetica-Bold')
   .fontSize(10.5)
   .text('Bachelor of Science in Information Technology', 45, currentY);

doc.fillColor(mutedTextColor)
   .font('Helvetica-Bold')
   .fontSize(9)
   .text('Graduated: 2026', 420, currentY, { align: 'right', width: 130 });

currentY += 14;
doc.fillColor(accentColor)
   .font('Helvetica-Bold')
   .fontSize(9.5)
   .text('Davao del Sur State College', 45, currentY);

currentY += 16;
doc.fillColor(primaryColor)
   .font('Helvetica-Bold')
   .fontSize(9)
   .text('Relevant Coursework: ', 45, currentY);

const courseworkString = 'Software Engineering, Web Development, Database Management, Information Systems, Systems Analysis & Design';
const courseworkWidth = doc.widthOfString('Relevant Coursework: ') + 2;

doc.fillColor(bodyTextColor)
   .font('Helvetica')
   .fontSize(9)
   .text(courseworkString, 45 + courseworkWidth, currentY, { width: 505 - courseworkWidth });

// FEATURED PROJECTS
currentY = addSectionHeader('Featured Projects', currentY + 26);

// Project 1: NutriKid
doc.fillColor(primaryColor)
   .font('Helvetica-Bold')
   .fontSize(10.5)
   .text('NutriKid – School Nutrition Management System', 45, currentY);

currentY += 13;
doc.fillColor(mutedTextColor)
   .font('Helvetica-BoldOblique')
   .fontSize(8.5)
   .text('Laravel • PHP • MySQL • Bootstrap • JavaScript', 45, currentY);

const proj1Bullets = [
  'Developed a web-based nutrition management system for School-Based Feeding Programs (SBFP).',
  'Automated BMI computation, nutritional status classification, and student progress monitoring.',
  'Implemented role-based authentication, reporting, and data analytics dashboards.'
];

currentY += 14;
proj1Bullets.forEach(bullet => {
  doc.fillColor(mutedTextColor)
     .font('Helvetica')
     .fontSize(9)
     .text('•', 55, currentY);
  doc.fillColor(bodyTextColor)
     .text(bullet, 67, currentY, { width: 483, align: 'justify', lineGap: 1.5 });
  currentY += doc.heightOfString(bullet, { width: 483 }) + 4;
});

// Project 2: QR Attendance
currentY += 6;
doc.fillColor(primaryColor)
   .font('Helvetica-Bold')
   .fontSize(10.5)
   .text('QR Attendance Monitoring System', 45, currentY);

currentY += 13;
doc.fillColor(mutedTextColor)
   .font('Helvetica-BoldOblique')
   .fontSize(8.5)
   .text('Laravel • PHP • MySQL • Tailwind CSS • JavaScript', 45, currentY);

const proj2Bullets = [
  'Built a QR code-based attendance system with real-time tracking and automated log generation.',
  'Developed an interactive analytics dashboard for monitoring attendance records.',
  'Streamlined event and class check-ins with fast scanner verification.'
];

currentY += 14;
proj2Bullets.forEach(bullet => {
  doc.fillColor(mutedTextColor)
     .font('Helvetica')
     .fontSize(9)
     .text('•', 55, currentY);
  doc.fillColor(bodyTextColor)
     .text(bullet, 67, currentY, { width: 483, align: 'justify', lineGap: 1.5 });
  currentY += doc.heightOfString(bullet, { width: 483 }) + 4;
});

// Project 3: Inventory System
currentY += 6;
doc.fillColor(primaryColor)
   .font('Helvetica-Bold')
   .fontSize(10.5)
   .text('Inventory Management System', 45, currentY);

currentY += 13;
doc.fillColor(mutedTextColor)
   .font('Helvetica-BoldOblique')
   .fontSize(8.5)
   .text('Laravel • PHP • MySQL • Bootstrap • JavaScript', 45, currentY);

const proj3Bullets = [
  'Created a web-based inventory management system for tracking products and stock movements.',
  'Implemented inventory monitoring, transaction history logs, and low-stock notification alerts.'
];

currentY += 14;
proj3Bullets.forEach(bullet => {
  doc.fillColor(mutedTextColor)
     .font('Helvetica')
     .fontSize(9)
     .text('•', 55, currentY);
  doc.fillColor(bodyTextColor)
     .text(bullet, 67, currentY, { width: 483, align: 'justify', lineGap: 1.5 });
  currentY += doc.heightOfString(bullet, { width: 483 }) + 4;
});

// Project 4: Student Info System
currentY += 6;
doc.fillColor(primaryColor)
   .font('Helvetica-Bold')
   .fontSize(10.5)
   .text('Student Information System', 45, currentY);

currentY += 13;
doc.fillColor(mutedTextColor)
   .font('Helvetica-BoldOblique')
   .fontSize(8.5)
   .text('Laravel • PHP • MySQL • Bootstrap • JavaScript', 45, currentY);

const proj4Bullets = [
  'Developed a centralized student information portal for managing academic profiles and enrollment records.',
  'Built interactive management dashboards for record filtering, data export, and administrative reporting.'
];

currentY += 14;
proj4Bullets.forEach(bullet => {
  doc.fillColor(mutedTextColor)
     .font('Helvetica')
     .fontSize(9)
     .text('•', 55, currentY);
  doc.fillColor(bodyTextColor)
     .text(bullet, 67, currentY, { width: 483, align: 'justify', lineGap: 1.5 });
  currentY += doc.heightOfString(bullet, { width: 483 }) + 4;
});

// TECHNICAL SKILLS & LANGUAGES
currentY = addSectionHeader('Technical Skills & Languages', currentY + 12);

const skillsData = [
  { label: 'Programming Languages', val: 'PHP, JavaScript, Java, Python' },
  { label: 'Web Technologies', val: 'Laravel, HTML5, CSS3, Bootstrap, Tailwind CSS, Flask' },
  { label: 'Database Management', val: 'MySQL, phpMyAdmin' },
  { label: 'Development Tools', val: 'VS Code, Cursor, Git, GitHub' },
  { label: 'Design & Productivity', val: 'Canva, Figma, Microsoft Office Suite' },
  { label: 'Spoken Languages', val: 'Filipino (Native), English (Proficient)' }
];

skillsData.forEach(skill => {
  doc.fillColor(primaryColor)
     .font('Helvetica-Bold')
     .fontSize(9)
     .text(`${skill.label}: `, 45, currentY);
     
  const labelWidth = doc.widthOfString(`${skill.label}: `) + 2;
  
  doc.fillColor(bodyTextColor)
     .font('Helvetica')
     .fontSize(9)
     .text(skill.val, 45 + labelWidth, currentY, { width: 505 - labelWidth });
     
  currentY += doc.heightOfString(skill.val, { width: 505 - labelWidth }) + 5;
});

// Finalize document
doc.end();
console.log('PDF Resume generated successfully at ' + outputPath);
