import style from "./Education.module.css";

const education = [
  {
    degree: "Bachelor of Technology — Computer Science & Engineering",
    institution: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
    location: "Lucknow, Uttar Pradesh",
    period: "2017 – 2021",
    highlights: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering",
      "Object-Oriented Programming (Java)",
    ],
  },
];

const certifications = [
  {
    name: "Full-Stack Web Development",
    issuer: "Cuvette Tech",
    period: "Feb 2024 – Nov 2024",
    note: "Intensive full-stack program covering React, Node.js, MongoDB, and system design fundamentals.",
  },
];

function Education() {
  return (
    <div style={{ paddingTop: "var(--nav-height)" }}>
      <div className={style.container}>
        <h1 className={style.pagetitle}>Education</h1>

        <div className={style.section}>
          <h2 className={style.sectiontitle}>Degree</h2>
          {education.map((edu, i) => (
            <div key={i} className={style.card}>
              <div className={style.cardheader}>
                <div>
                  <h2 className={style.degree}>{edu.degree}</h2>
                  <h3 className={style.institution}>{edu.institution}</h3>
                  <p className={style.meta}>
                    {edu.location} &nbsp;·&nbsp; {edu.period}
                  </p>
                </div>
              </div>
              <div className={style.highlights}>
                <p className={style.highlightlabel}>Key coursework:</p>
                <div className={style.tagrow}>
                  {edu.highlights.map((h, j) => (
                    <span key={j} className={style.tag}>{h}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={style.section}>
          <h2 className={style.sectiontitle}>Additional Training</h2>
          {certifications.map((cert, i) => (
            <div key={i} className={style.card}>
              <h2 className={style.degree}>{cert.name}</h2>
              <h3 className={style.institution}>{cert.issuer}</h3>
              <p className={style.meta}>{cert.period}</p>
              <p className={style.certnote}>{cert.note}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Education;
