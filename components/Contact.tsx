"use client";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";

const info = [
  { icon: MapPin, label: "Address", value: "123 School Road, Patna, Bihar — 800001" },
  { icon: Phone, label: "Phone", value: "+91 62000 00000" },
  { icon: Mail, label: "Email", value: "info@rockfordschool.edu.in" },
  { icon: Clock, label: "Office Hours", value: "Mon–Sat: 8:00 AM – 4:00 PM" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", child: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 16px",
    border: "1.5px solid #EEE9E0",
    borderRadius: 8,
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 14,
    color: "#0B1F4A",
    background: "#fff",
    outline: "none",
    transition: "border-color 0.2s",
    boxSizing: "border-box",
  };

  return (
    <section id="contact" style={{ background: "#0B1F4A", padding: "100px 40px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div style={{ display: "inline-block", width: 50, height: 3, background: "#C9922A", borderRadius: 2, marginBottom: 20 }} />
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(30px, 4vw, 48px)", fontWeight: 700, color: "#fff", marginBottom: 14 }}>
            Get in Touch
          </h2>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 16, maxWidth: 480, margin: "0 auto", fontFamily: "'DM Sans', sans-serif" }}>
            Have questions about admissions or anything else? We'd love to hear from you.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 50, alignItems: "start" }} className="contact-grid">
          {/* Info */}
          <div>
            {info.map(({ icon: Icon, label, value }) => (
              <div key={label} style={{ display: "flex", gap: 16, marginBottom: 28 }}>
                <div style={{
                  width: 46, height: 46, borderRadius: 10,
                  background: "rgba(201,146,42,0.12)",
                  border: "1px solid rgba(201,146,42,0.25)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <Icon size={20} color="#E8B455" />
                </div>
                <div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "#E8B455", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>{label}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.75)" }}>{value}</div>
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div style={{
              marginTop: 10,
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 12,
              height: 180,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: 8,
            }}>
              <MapPin size={28} color="#C9922A" />
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)" }}>Rock Ford Public School, Patna</span>
              <a href="https://maps.google.com" target="_blank" rel="noreferrer" style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 12,
                color: "#E8B455",
                textDecoration: "none",
                fontWeight: 600,
              }}>View on Google Maps →</a>
            </div>
          </div>

          {/* Form */}
          <div style={{ background: "#fff", borderRadius: 16, padding: "40px 36px" }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, color: "#0B1F4A", marginBottom: 10 }}>Message Received!</h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#4A5568", lineHeight: 1.7 }}>
                  Thank you for reaching out. Our admissions team will get back to you within 24 hours.
                </p>
                <button onClick={() => setSent(false)} style={{
                  marginTop: 24,
                  background: "#0B1F4A", color: "#fff",
                  border: "none", borderRadius: 8, padding: "10px 24px",
                  cursor: "pointer", fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 14,
                }}>Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#0B1F4A", marginBottom: 24 }}>Enquiry Form</h3>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
                  <div>
                    <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 600, color: "#0B1F4A", display: "block", marginBottom: 6 }}>Parent Name *</label>
                    <input required style={inputStyle} placeholder="Full name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                      onFocus={e => (e.currentTarget.style.borderColor = "#C9922A")}
                      onBlur={e => (e.currentTarget.style.borderColor = "#EEE9E0")} />
                  </div>
                  <div>
                    <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 600, color: "#0B1F4A", display: "block", marginBottom: 6 }}>Phone *</label>
                    <input required type="tel" style={inputStyle} placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                      onFocus={e => (e.currentTarget.style.borderColor = "#C9922A")}
                      onBlur={e => (e.currentTarget.style.borderColor = "#EEE9E0")} />
                  </div>
                </div>
                <div style={{ marginBottom: 14 }}>
                  <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 600, color: "#0B1F4A", display: "block", marginBottom: 6 }}>Email Address</label>
                  <input type="email" style={inputStyle} placeholder="your@email.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                    onFocus={e => (e.currentTarget.style.borderColor = "#C9922A")}
                    onBlur={e => (e.currentTarget.style.borderColor = "#EEE9E0")} />
                </div>
                <div style={{ marginBottom: 14 }}>
                  <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 600, color: "#0B1F4A", display: "block", marginBottom: 6 }}>Child's Class Applying For *</label>
                  <select required style={{ ...inputStyle, cursor: "pointer" }} value={form.child} onChange={e => setForm({ ...form, child: e.target.value })}
                    onFocus={e => (e.currentTarget.style.borderColor = "#C9922A")}
                    onBlur={e => (e.currentTarget.style.borderColor = "#EEE9E0")}
                  >
                    <option value="">Select class</option>
                    {["Nursery / KG", "Class I", "Class II", "Class III", "Class IV", "Class V", "Class VI – VIII", "Class IX – X", "Class XI – XII"].map(c => <option key={c}>{c}</option>)}
                  </select>
                </div>
                <div style={{ marginBottom: 22 }}>
                  <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 600, color: "#0B1F4A", display: "block", marginBottom: 6 }}>Message</label>
                  <textarea style={{ ...inputStyle, resize: "vertical", minHeight: 90 }} placeholder="Any specific questions or notes?" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                    onFocus={e => (e.currentTarget.style.borderColor = "#C9922A")}
                    onBlur={e => (e.currentTarget.style.borderColor = "#EEE9E0")} />
                </div>
                <button type="submit" style={{
                  width: "100%",
                  background: "linear-gradient(135deg, #0B1F4A, #0B2460)",
                  color: "#fff",
                  border: "none",
                  borderRadius: 8,
                  padding: "14px 24px",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: 15,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  transition: "background 0.2s",
                }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#C9922A")}
                  onMouseLeave={e => (e.currentTarget.style.background = "linear-gradient(135deg, #0B1F4A, #0B2460)")}
                >
                  <Send size={16} />
                  Submit Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
