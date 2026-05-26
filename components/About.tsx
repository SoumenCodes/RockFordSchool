"use client";
import { CheckCircle, Target, Eye, Heart } from "lucide-react";

const values = [
  { icon: Target, title: "Academic Excellence", desc: "Rigorous curriculum aligned with CBSE standards, preparing students for national and global success." },
  { icon: Eye, title: "Holistic Vision", desc: "Sports, arts, and co-curricular activities that build well-rounded, confident individuals." },
  { icon: Heart, title: "Character & Values", desc: "Instilling integrity, empathy, and civic responsibility in every student from day one." },
];

const highlights = [
  "CBSE Affiliated (Since 1999)",
  "Smart Classrooms & Digital Labs",
  "Qualified & Experienced Faculty",
  "Safe & Nurturing Campus",
  "Activity Rooms & Sports Grounds",
  "Annual Cultural & Science Fests",
];

export default function About() {
  return (
    <section id="about" style={{ background: "#FAF7F2", padding: "100px 40px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 70 }}>
          <div style={{ display: "inline-block", width: 50, height: 3, background: "#C9922A", borderRadius: 2, marginBottom: 20 }} />
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, color: "#0B1F4A", marginBottom: 16 }}>
            About Rock Ford
          </h2>
          <p style={{ color: "#4A5568", fontSize: 17, lineHeight: 1.7, maxWidth: 580, margin: "0 auto", fontFamily: "'DM Sans', sans-serif" }}>
            For over two decades, Rock Ford Public School has been a cornerstone of quality education — shaping young minds with values, knowledge, and purpose.
          </p>
        </div>

        {/* Two-column layout */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center", marginBottom: 80 }} className="about-grid">
          {/* Left: Visual block */}
          <div style={{ position: "relative" }}>
            <div style={{
              background: "linear-gradient(135deg, #0B1F4A, #0B2460)",
              borderRadius: 16,
              padding: "50px 44px",
              color: "#fff",
              position: "relative",
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute", top: -30, right: -30,
                width: 180, height: 180, borderRadius: "50%",
                background: "rgba(201,146,42,0.1)",
              }} />
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#E8B455", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>
                Our Story
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, lineHeight: 1.3, marginBottom: 20 }}>
                Building Futures Since 1999
              </h3>
              <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.8, fontSize: 15, marginBottom: 28 }}>
                Founded with a singular vision — to make quality education accessible and transformative — Rock Ford has grown from a small institution to a thriving community of over 1,800 students, 80+ educators, and generations of alumni who lead across India and the world.
              </p>
              <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.8, fontSize: 15 }}>
                Our CBSE-affiliated campus blends traditional values with modern pedagogy, creating an environment where every child is seen, supported, and inspired.
              </p>

              {/* Decorative quote */}
              <div style={{ marginTop: 32, paddingTop: 28, borderTop: "1px solid rgba(255,255,255,0.12)" }}>
                <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", color: "#E8B455", fontSize: 16, lineHeight: 1.6 }}>
                  "Education is not the filling of a pail, but the lighting of a fire."
                </p>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, marginTop: 8 }}>— W.B. Yeats</p>
              </div>
            </div>

            {/* Floating badge */}
            <div style={{
              position: "absolute", bottom: -20, right: -20,
              background: "#C9922A",
              borderRadius: 12,
              padding: "16px 22px",
              textAlign: "center",
              boxShadow: "0 10px 30px rgba(201,146,42,0.4)",
            }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 900, color: "#fff" }}>A+</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.85)", letterSpacing: "0.08em" }}>NAAC Grade</div>
            </div>
          </div>

          {/* Right: Highlights */}
          <div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#C9922A", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>
              Why Choose Us
            </div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 30, fontWeight: 700, color: "#0B1F4A", marginBottom: 28, lineHeight: 1.3 }}>
              A Place Where Every Child Thrives
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 36 }}>
              {highlights.map((h) => (
                <div key={h} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <CheckCircle size={18} color="#C9922A" strokeWidth={2.5} style={{ flexShrink: 0 }} />
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "#4A5568", fontWeight: 500 }}>{h}</span>
                </div>
              ))}
            </div>
            <a href="#contact" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#0B1F4A",
              color: "#fff",
              padding: "13px 28px",
              borderRadius: 8,
              textDecoration: "none",
              fontWeight: 600,
              fontSize: 14,
              transition: "background 0.2s",
            }}
              onMouseEnter={e => (e.currentTarget.style.background = "#C9922A")}
              onMouseLeave={e => (e.currentTarget.style.background = "#0B1F4A")}
            >
              Schedule a Campus Tour
            </a>
          </div>
        </div>

        {/* Values */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 28 }} className="values-grid">
          {values.map(({ icon: Icon, title, desc }) => (
            <div key={title} style={{
              background: "#fff",
              borderRadius: 14,
              padding: "36px 30px",
              border: "1px solid #EEE9E0",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 40px rgba(11,31,74,0.1)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
            >
              <div style={{
                width: 52, height: 52, borderRadius: 12,
                background: "linear-gradient(135deg, rgba(11,31,74,0.08), rgba(11,31,74,0.04))",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 20,
              }}>
                <Icon size={24} color="#0B1F4A" />
              </div>
              <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: "#0B1F4A", marginBottom: 10 }}>{title}</h4>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "#4A5568", lineHeight: 1.7 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .values-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
