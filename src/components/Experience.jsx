export default function Experience() {
  return (
    <section id="experience" className="experience">
      <p className="section-tag">Career</p>
      <h2 className="section-title">Experience &amp; Education</h2>
      <div className="exp-edu-grid">

        {/* Work Experience */}
        <div>
          <h3 className="subsection-title">Work Experience</h3>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot" />
              <p className="timeline-period">June 2023 – July 2023</p>
              <h4 className="timeline-title">IoT Intern</h4>
              <p className="timeline-org">Robota Classroom and Solutions, Pune</p>
              <ul className="timeline-bullets">
                <li>Hands-on experience with IoT devices, sensors, and microcontrollers (Arduino, ESP32)</li>
                <li>Developed and tested real-time data communication between sensors and mobile/web apps</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="subsection-title">Education</h3>
          <div className="edu-grid">
            <div className="edu-card">
              <p className="edu-year">Expected August 2027</p>
              <p className="edu-degree">B.E. in Information Technology</p>
              <p className="edu-inst">Nutan Maharashtra Institute of Engineering Technology, Talegaon Pune — SPPU</p>
            </div>
            <div className="edu-card">
              <p className="edu-year">Aug 2021 – June 2024</p>
              <p className="edu-degree">Diploma in Computer Engineering</p>
              <p className="edu-inst">Marathwada Mitra Mandal's Polytechnic, Kalewadi Pune — MSBTE</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
