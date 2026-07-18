import fs from 'fs';
import PDFDocument from 'pdfkit';

// Create a new A4 PDF document
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

// Colors
const primaryColor = '#1E293B';    // Deep Dark (Slate 800)
const textColor = '#1E293B';       // Slate 800
const mutedTextColor = '#334155';  // Slate 700
const lineColor = '#CBD5E1';       // Slate 300 for lines

// Helper to draw horizontal section dividers
const drawDivider = (y) => {
  doc.strokeColor(lineColor)
     .lineWidth(1)
     .moveTo(45, y)
     .lineTo(550, y)
     .stroke();
};

// Helper for bold titles with bottom line dividers
const addSectionHeader = (title, y) => {
  doc.fillColor(primaryColor)
     .font('Helvetica-Bold')
     .fontSize(12)
     .text(title, 45, y);
  drawDivider(y + 16);
  return y + 26;
};

// ----------------------------------------------------
// PAGE 1: HEADER, SUMMARY, EXPERIENCE
// ----------------------------------------------------

// Profile Image on the Right
const imagePath = './public/images/profile.png';
if (fs.existsSync(imagePath)) {
  doc.image(imagePath, 460, 45, { width: 90, height: 90 });
}

// Header text on the Left
doc.fillColor(primaryColor)
   .font('Helvetica-Bold')
   .fontSize(22)
   .text('Cee Jay Cejas', 45, 45);

doc.fillColor(textColor)
   .font('Helvetica-Bold')
   .fontSize(11)
   .text('Full-Stack Web Developer', 45, 73);

// Contact Info list
doc.fillColor(mutedTextColor)
   .font('Helvetica')
   .fontSize(9.5)
   .text('📍 Digos City, Davao del Sur, Philippines', 45, 91)
   .text('📧 cejasceejay2004@gmail.com', 45, 104)
   .text('💻 GitHub: github.com/ceejaycejas', 45, 117)
   .text('🔗 LinkedIn: linkedin.com/in/ceejaycejas', 45, 130);

let currentY = 152;
drawDivider(currentY);

// PROFESSIONAL SUMMARY
currentY = addSectionHeader('PROFESSIONAL SUMMARY', currentY + 12);

doc.fillColor(textColor)
   .font('Helvetica')
   .fontSize(9.5)
   .text(
     'Passionate and detail-oriented Full-Stack Web Developer with a Bachelor of Science in Information Technology and hands-on experience developing modern web applications using Laravel, PHP, JavaScript, and MySQL. Experienced in designing responsive user interfaces, building scalable backend systems, and managing relational databases. Completed internships in both software development and data management, strengthening problem-solving, collaboration, and technical support skills. Dedicated to developing efficient, user-friendly solutions that improve organizational workflows.',
     45,
     currentY,
     { width: 505, align: 'justify', lineGap: 3 }
   );

// PROFESSIONAL EXPERIENCE
currentY = addSectionHeader('PROFESSIONAL EXPERIENCE', currentY + 110);

// Job 1: Out-Campus System Developer Intern
doc.fillColor(textColor)
   .font('Helvetica-Bold')
   .fontSize(11)
   .text('Out-Campus System Developer Intern', 45, currentY);

doc.fillColor(mutedTextColor)
   .font('Helvetica')
   .fontSize(9.5)
   .text('April 2026 – May 2026', 420, currentY, { align: 'right', width: 130 });

currentY += 14;
doc.fillColor(textColor)
   .font('Helvetica-Bold')
   .fontSize(9.5)
   .text('DepEd Digos Division – IT Department', 45, currentY);

const exp1Bullets = [
  'Developed and maintained internal web-based applications that streamlined administrative processes.',
  'Implemented new system features based on user and departmental requirements.',
  'Diagnosed, debugged, and resolved software issues to improve system reliability.',
  'Collaborated with developers and staff to enhance application performance and user experience.',
  'Assisted in system testing, deployment, and technical support.'
];

currentY += 15;
exp1Bullets.forEach(bullet => {
  doc.fillColor(mutedTextColor)
     .font('Helvetica')
     .fontSize(9.5)
     .text('•', 55, currentY);
  doc.fillColor(textColor)
     .text(bullet, 67, currentY, { width: 483, align: 'justify', lineGap: 1 });
  currentY += doc.heightOfString(bullet, { width: 483 }) + 4;
});

// Job 2: In-Campus Data Encoder Intern
currentY += 10;
doc.fillColor(textColor)
   .font('Helvetica-Bold')
   .fontSize(11)
   .text('In-Campus Data Encoder Intern', 45, currentY);

doc.fillColor(mutedTextColor)
   .font('Helvetica')
   .fontSize(9.5)
   .text('February 2026 – March 2026', 400, currentY, { align: 'right', width: 150 });

currentY += 14;
doc.fillColor(textColor)
   .font('Helvetica-Bold')
   .fontSize(9.5)
   .text('Davao del Sur State College – Quality Assurance Office', 45, currentY);

const exp2Bullets = [
  'Encoded and maintained institutional records with accuracy and confidentiality.',
  'Verified and validated data before submission to ensure consistency and integrity.',
  'Assisted in preparing accreditation documents and quality assurance reports.',
  'Organized digital records for easier retrieval and document management.'
];

currentY += 15;
exp2Bullets.forEach(bullet => {
  doc.fillColor(mutedTextColor)
     .font('Helvetica')
     .fontSize(9.5)
     .text('•', 55, currentY);
  doc.fillColor(textColor)
     .text(bullet, 67, currentY, { width: 483, align: 'justify', lineGap: 1 });
  currentY += doc.heightOfString(bullet, { width: 483 }) + 4;
});

// ----------------------------------------------------
// PAGE 2: EDUCATION, FEATURED PROJECTS, SKILLS
// ----------------------------------------------------
doc.addPage();

currentY = 45;
currentY = addSectionHeader('EDUCATION', currentY);

doc.fillColor(textColor)
   .font('Helvetica-Bold')
   .fontSize(11)
   .text('Bachelor of Science in Information Technology', 45, currentY);

doc.fillColor(mutedTextColor)
   .font('Helvetica')
   .fontSize(9.5)
   .text('Graduated: 2026', 420, currentY, { align: 'right', width: 130 });

currentY += 14;
doc.fillColor(textColor)
   .font('Helvetica-Bold')
   .fontSize(9.5)
   .text('Davao del Sur State College', 45, currentY);

currentY += 16;
doc.fillColor(textColor)
   .font('Helvetica-Bold')
   .fontSize(9.5)
   .text('Relevant Coursework: ', 45, currentY);

const courseworkString = 'Software Engineering, Web Development, Database Management, Information Systems, Systems Analysis and Design';
const courseworkWidth = doc.widthOfString('Relevant Coursework: ') + 2;

doc.fillColor(mutedTextColor)
   .font('Helvetica')
   .fontSize(9.5)
   .text(courseworkString, 45 + courseworkWidth, currentY, { width: 505 - courseworkWidth });

// FEATURED PROJECTS
currentY = addSectionHeader('FEATURED PROJECTS', currentY + 28);

// Project 1
doc.fillColor(textColor)
   .font('Helvetica-Bold')
   .fontSize(11)
   .text('NutriKid – School Nutrition Management System', 45, currentY);

currentY += 13;
doc.fillColor(mutedTextColor)
   .font('Helvetica-BoldOblique')
   .fontSize(9)
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
     .fontSize(9.5)
     .text('•', 55, currentY);
  doc.fillColor(textColor)
     .text(bullet, 67, currentY, { width: 483, align: 'justify', lineGap: 1 });
  currentY += doc.heightOfString(bullet, { width: 483 }) + 4;
});

// Project 2
currentY += 5;
doc.fillColor(textColor)
   .font('Helvetica-Bold')
   .fontSize(11)
   .text('QR Attendance Monitoring System', 45, currentY);

currentY += 13;
doc.fillColor(mutedTextColor)
   .font('Helvetica-BoldOblique')
   .fontSize(9)
   .text('Laravel • PHP • MySQL • Tailwind CSS • JavaScript', 45, currentY);

const proj2Bullets = [
  'Built a QR code-based attendance system with real-time attendance tracking.',
  'Developed an analytics dashboard for monitoring attendance records.',
  'Automated attendance logging and report generation.'
];

currentY += 14;
proj2Bullets.forEach(bullet => {
  doc.fillColor(mutedTextColor)
     .font('Helvetica')
     .fontSize(9.5)
     .text('•', 55, currentY);
  doc.fillColor(textColor)
     .text(bullet, 67, currentY, { width: 483, align: 'justify', lineGap: 1 });
  currentY += doc.heightOfString(bullet, { width: 483 }) + 4;
});

// Project 3
currentY += 5;
doc.fillColor(textColor)
   .font('Helvetica-Bold')
   .fontSize(11)
   .text('Inventory Management System', 45, currentY);

currentY += 13;
doc.fillColor(mutedTextColor)
   .font('Helvetica-BoldOblique')
   .fontSize(9)
   .text('Laravel • PHP • MySQL • Bootstrap • JavaScript', 45, currentY);

const proj3Bullets = [
  'Created a web-based inventory management system for tracking products and stock movements.',
  'Implemented inventory monitoring, transaction history, and low-stock notifications.'
];

currentY += 14;
proj3Bullets.forEach(bullet => {
  doc.fillColor(mutedTextColor)
     .font('Helvetica')
     .fontSize(9.5)
     .text('•', 55, currentY);
  doc.fillColor(textColor)
     .text(bullet, 67, currentY, { width: 483, align: 'justify', lineGap: 1 });
  currentY += doc.heightOfString(bullet, { width: 483 }) + 4;
});

// TECHNICAL SKILLS
currentY = addSectionHeader('TECHNICAL SKILLS', currentY + 12);

const skillsData = [
  { label: 'Programming Languages', val: 'PHP, JavaScript, Java, Python' },
  { label: 'Web Development', val: 'Laravel, HTML5, CSS3, Bootstrap, Tailwind CSS, Flask' },
  { label: 'Database', val: 'MySQL, phpMyAdmin' },
  { label: 'Tools & Technologies', val: 'Git, GitHub, VS Code, Cursor, Figma, Canva, Microsoft Office' },
  { label: 'Spoken Languages', val: 'English (Proficient), Filipino (Native)' }
];

skillsData.forEach(skill => {
  doc.fillColor(textColor)
     .font('Helvetica-Bold')
     .fontSize(9.5)
     .text(`${skill.label}: `, 45, currentY);
     
  const labelWidth = doc.widthOfString(`${skill.label}: `) + 2;
  
  doc.fillColor(mutedTextColor)
     .font('Helvetica')
     .fontSize(9.5)
     .text(skill.val, 45 + labelWidth, currentY, { width: 505 - labelWidth });
     
  currentY += doc.heightOfString(skill.val, { width: 505 - labelWidth }) + 6;
});

// Finalize document
doc.end();
console.log('PDF Resume generated successfully at ' + outputPath);
