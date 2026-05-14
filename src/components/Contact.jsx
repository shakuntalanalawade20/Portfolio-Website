import { useState } from "react";

const contactLinks = [
  { icon: "✉️", label: "Email", value: "shaku6979@gmail.com", href: "mailto:shaku6979@gmail.com" },
  { icon: "📞", label: "Phone", value: "+91 7276812585", href: "tel:+917276812585" },
  { icon: "💼", label: "LinkedIn", value: "shakuntala-nalawade-21885824b", href: "https://www.linkedin.com/in/shakuntala-nalawade-21885824b" },
  { icon: "🐙", label: "GitHub", value: "shakuntalanalawade20", href: "https://github.com/shakuntalanalawade20" },
  { icon: "📍", label: "Location", value: "Wakad, Pune, Maharashtra", href: null },
];

export default function Contact() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStatus("✓ Message noted! Connect directly via email or LinkedIn for fastest response.");
      e.target.reset();
    }, 1200);
  }

  return (
    <section id="contact" className="contact">
      <p className="section-tag">Let's Connect</p>
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-grid">
        <div className="contact-info">
          <p>
            I'm actively seeking internship and entry-level frontend development opportunities.
            Whether you have a project in mind or just want to say hello — my inbox is always open.
          </p>
          <div className="contact-links">
            {contactLinks.map((cl) =>
              cl.href ? (
                <a key={cl.label} className="contact-link" href={cl.href} target={cl.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                  <div className="contact-link-icon">{cl.icon}</div>
                  <div>
                    <strong style={{ color: "var(--ink)", fontSize: "0.83rem" }}>{cl.label}</strong>
                    <br />{cl.value}
                  </div>
                </a>
              ) : (
                <div key={cl.label} className="contact-link">
                  <div className="contact-link-icon">{cl.icon}</div>
                  <div>
                    <strong style={{ color: "var(--ink)", fontSize: "0.83rem" }}>{cl.label}</strong>
                    <br />{cl.value}
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="cf-name">Your Name</label>
              <input id="cf-name" type="text" placeholder="Full name" required />
            </div>
            <div className="form-group">
              <label htmlFor="cf-email">Email Address</label>
              <input id="cf-email" type="email" placeholder="you@example.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="cf-subject">Subject</label>
              <input id="cf-subject" type="text" placeholder="Internship opportunity, collaboration…" />
            </div>
            <div className="form-group">
              <label htmlFor="cf-msg">Message</label>
              <textarea id="cf-msg" placeholder="Tell me about the opportunity…" required />
            </div>
            <button className="btn btn--primary" type="submit" style={{ width: "100%" }} disabled={loading}>
              {loading ? "Sending…" : "Send Message"}
            </button>
            {status && <p className="form-note">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
