const skillData = [
  {
    cat: "Frontend",
    title: "Web Technologies",
    tags: [
      { name: "React.js", hot: true },
      { name: "JavaScript", hot: true },
      { name: "HTML5", hot: true },
      { name: "CSS3", hot: true },
      { name: "Bootstrap" },
      { name: "Font Awesome" },
    ],
  },
  {
    cat: "Programming",
    title: "Languages",
    tags: [
      { name: "Java", hot: true },
      { name: "C++", hot: true },
      { name: "C" },
      { name: "Ubuntu / Linux" },
    ],
  },
  {
    cat: "Data & Cloud",
    title: "Databases",
    tags: [
      { name: "MySQL", hot: true }
      
    ],
  },
  {
    cat: "Tools & Workflow",
    title: "Dev Tools",
    tags: [
      { name: "Git / GitHub", hot: true },
      { name: "VS Code" },
      { name: "Jupyter" },
      { name: "Android Studio" }
    ],
  },
  {
    cat: "IoT & Hardware",
    title: "Embedded Systems",
    tags: [
      { name: "Arduino Uno", hot: true },
      { name: "Ultrasonic Sensor" },
      { name: "RFID" },
      { name: "ESP32" },
    ],
  },
  {
    cat: "Languages",
    title: "Communication",
    tags: [
      { name: "English", hot: true },
      { name: "Marathi", hot: true },
      { name: "Hindi", hot: true }      
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <p className="section-tag">Technical Expertise</p>
      <h2 className="section-title">Skills &amp; Technologies</h2>
      <div className="skills-grid">
        {skillData.map((s) => (
          <div className="skill-card" key={s.title}>
            <p className="section-tag" style={{ marginBottom: "0.6rem" }}>{s.cat}</p>
            <h4>{s.title}</h4>
            <div className="skill-tags">
              {s.tags.map((t) => (
                <span
                  key={t.name}
                  className={`skill-tag${t.hot ? " skill-tag--hot" : ""}`}
                >
                  {t.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
