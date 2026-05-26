"use client";
import { Microscope, Palette, Code, Music, Trophy, Globe } from "lucide-react";

const programs = [
  {
    icon: Microscope,
    level: "Primary",
    grade: "Classes I – V",
    color: "#3B82F6",
    bg: "rgba(59,130,246,0.08)",
    desc: "Foundational learning through play, exploration, and conceptual thinking. Language, mathematics, and environmental studies form the core.",
    highlights: ["Activity-Based Learning", "Phonics & Literacy", "Montessori Elements"],
  },
  {
    icon: Globe,
    level: "Middle School",
    grade: "Classes VI – VIII",
    color: "#C9922A",
    bg: "rgba(201,146,42,0.08)",
    desc: "Deepening subject knowledge with project-based learning, collaborative activities, and introduction to elective streams.",
    highlights: ["Science & Social Studies", "Computer Fundamentals", "Public Speaking"],
  },
  {
    icon: Code,
    level: "Secondary",
    grade: "Classes IX – X",
    color: "#10B981",
    bg: "rgba(16,185,129,0.08)",
    desc: "CBSE Board preparation with focused coaching, practicals, and counselling to ensure strong academic outcomes.",
    highlights: ["Board Exam Excellence", "Lab & Practical Work", "Career Guidance"],
  },
  {
    icon: Trophy,
    level: "Senior Secondary",
    grade: "Classes XI – XII",
    color: "#8B5CF6",
    bg: "rgba(139,92,246,0.08)",
    desc: "Science, Commerce, and Arts streams with specialist faculty and competitive entrance exam readiness.",
    highlights: ["Science / Commerce / Arts", "JEE & NEET Coaching", "College Counselling"],
  },
];

const extras = [
  { icon: Palette, label: "Visual Arts", desc: "Painting, sculpture, craft workshops" },
  { icon: Music, label: "Music & Performing Arts", desc: "Vocal, instrumental, theatre" },
  { icon: Trophy, label: "Sports Academy", desc: "Cricket, football, athletics, yoga" },
  { icon: Code, label: "STEM & Robotics", desc: "Coding, electronics, innovation lab" },
];

export default function Academics() {
  return (
    <section id="academics" style={{ background: "#0B1F4A", padding: "100px 40px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 70 }}>
          <div style={{ display: "inline-block", width: 50, height: 3, background: "#C9922A", borderRadius: 2, marginBottom: 20 }} />
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, color: "#fff", marginBottom: 16 }}>
            Academic Programmes
          </h2>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 17, lineHeight: 1.7, maxWidth: 560, margin: "0 auto", fontFamily: "'DM Sans', sans-serif" }}>
            A structured, progressive curriculum from Nursery to Class XII, following CBSE guidelines with an enriched school-level framework.
          </p>
        </div>

        {/* Programme cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 24, marginBottom: 70 }} className="prog-grid">
          {programs.map(({ icon: Icon, level, grade, color, bg, desc, highlights }) => (
            <div key={level} style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 16,
              padding: "36px 32px",
              transition: "background 0.2s, border-color 0.2s",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.07)"; (e.currentTarget as HTMLElement).style.borderColor = `${color}55`; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"; }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: 18, marginBottom: 18 }}>
                <div style={{
                  width: 50, height: 50, borderRadius: 12,
                  background: bg,
                  border: `1px solid ${color}44`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <Icon size={22} color={color} />
                </div>
                <div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: "#fff" }}>{level}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color, fontWeight: 600, marginTop: 2 }}>{grade}</div>
                </div>
              </div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.75, marginBottom: 18 }}>{desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {highlights.map(h => (
                  <span key={h} style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 12,
                    color: "rgba(255,255,255,0.7)",
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 100,
                    padding: "4px 12px",
                  }}>{h}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Extra-curricular */}
        <div>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, color: "#fff", textAlign: "center", marginBottom: 36 }}>
            Beyond the Classroom
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 18 }} className="extras-grid">
            {extras.map(({ icon: Icon, label, desc }) => (
              <div key={label} style={{
                background: "rgba(201,146,42,0.08)",
                border: "1px solid rgba(201,146,42,0.2)",
                borderRadius: 14,
                padding: "28px 22px",
                textAlign: "center",
                transition: "background 0.2s",
              }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(201,146,42,0.14)")}
                onMouseLeave={e => (e.currentTarget.style.background = "rgba(201,146,42,0.08)")}
              >
                <Icon size={28} color="#E8B455" style={{ marginBottom: 14 }} />
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 600, color: "#fff", marginBottom: 8 }}>{label}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)" }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .prog-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 700px) { .extras-grid { grid-template-columns: 1fr 1fr !important; } }
      `}</style>
    </section>
  );
}
