export default function About() {
  return (
    <section id="about" className="about">
      <div className="about__inner">
        <div className="fade-up">
          <div className="avatar-frame">
     <img 
    src="/portfolio.png" 
    alt="Shakuntala Nalawade"
    style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "4px" }}
  />
</div>
        </div>
        <div className="fade-up-2">
          <p className="section-tag">About Me</p>
          <h2 className="section-title">Crafting digital<br />experiences</h2>
          <div className="divider" />
        <p>
  I am an Information Technology Engineering student at Nutan Maharashtra Institute
  of Engineering Technology, Pune, focused on building modern, scalable full-stack
  web applications. I develop responsive and user-centric digital solutions with a
  strong emphasis on clean design, performance, and usability.
</p>

<p>
  Alongside frontend and backend development, I enjoy solving real-world problems
  through software engineering and building complete end-to-end applications. I am
  actively working on projects that strengthen my development skills and help me
  grow as a full-stack developer, with a focus on delivering practical and impactful
  solutions.
</p>

          <div className="about__details">
            {[
              { icon: "📍", label: "Location", value: "Wakad, Pune" },
              { icon: "📧", label: "Email", value: "shaku6979@gmail.com" },
              { icon: "📞", label: "Phone", value: "+91 7276812585" },
              { icon: "🎓", label: "Graduating", value: "August 2027" },
            ].map((d) => (
              <div className="about__detail" key={d.label}>
                <span>{d.icon}</span>
                <div>
                  <strong>{d.label}</strong>
                  {d.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
