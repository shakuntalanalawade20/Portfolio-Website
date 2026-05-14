const projects = [
  {
    id: "hospital",
    banner: "project-banner--hospital",
    emoji: "🏥",
    type: "Full-Stack Web Application",
    title: "Sunrise Multispecialist Hospital Web App",
    stack: ["React.js", "HTML5", "CSS3", "JavaScript", "Bootstrap"],
    bullets: [
      "Dynamic appointment booking interface with React state management and form validation",
      "Modular component architecture for maintainability and scalability",
      "Integrated Bootstrap, Font Awesome icons, and custom CSS for professional UI",
    ],
  },
  {
    id: "iot",
    banner: "project-banner--iot",
    emoji: "🛒",
    type: "IoT / Embedded Systems",
    title: "IoT Smart Trolley & Bill Generator",
    stack: ["Java", "Arduino Uno", "RFID", "Ultrasonic Sensor", "Eclipse"],
    bullets: [
      "Automated product detection and billing using RFID technology",
      "Real-time data communication between sensors and application layer",
      "Reduced checkout time by eliminating manual billing errors",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects__inner">
        <p className="section-tag">Portfolio</p>
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((p) => (
            <article className="project-card" key={p.id}>
              <div className={`project-banner ${p.banner}`} aria-hidden="true">
                <span style={{ fontSize: "3rem" }}>{p.emoji}</span>
              </div>
              <div className="project-body">
                <p className="section-tag">{p.type}</p>
                <h3>{p.title}</h3>
                <div className="project-stack">
                  {p.stack.map((s) => <span className="stack-tag" key={s}>{s}</span>)}
                </div>
                <ul className="project-bullets">
                  {p.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
                <a
                  className="btn btn--outline btn--sm"
                  href="https://github.com/shakuntalanalawade20"
                  target="_blank"
                  rel="noreferrer"
                >
                  View on GitHub ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
