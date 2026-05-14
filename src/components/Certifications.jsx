const certs = [
  { title: "Core Java", desc: "Disha Computer Institute — certified Java programmer" },
  { title: "C++ Gold Badge ⭐⭐⭐⭐⭐", desc: "HackerRank 5-Star rating in C++" },
  { title: "Anveshan Competition", desc: "Regional Level — Samsung Semiconductor Research India sponsored" },
  { title: "Vice President — YIN Sakal", desc: "Leadership role, 2023" },
];

export default function Certifications() {
  return (
    <section id="certifications" className="certifications">
      <div className="certifications__inner">
        <p className="section-tag">Recognition</p>
        <h2 className="section-title">Certifications &amp; Achievements</h2>
        <div className="certs-grid">
          {certs.map((c) => (
            <div className="cert-item" key={c.title}>
              <div className="cert-dot" />
              <div className="cert-text">
                <strong>{c.title}</strong>
                {c.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
