"use client";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Mrs. Priya Sharma",
    role: "Parent of Class IX Student",
    text: "Rock Ford has transformed my son completely — not just academically, but in confidence and character. The teachers genuinely care about each child.",
    rating: 5,
    initial: "P",
    color: "#C9922A",
  },
  {
    name: "Rahul Verma",
    role: "Alumni, Batch of 2019",
    text: "The foundation Rock Ford gave me was instrumental in cracking JEE Advanced. The faculty pushed us to think critically, not just memorise.",
    rating: 5,
    initial: "R",
    color: "#3B82F6",
  },
  {
    name: "Mr. Anil & Mrs. Sunita Kumar",
    role: "Parents of Two Students",
    text: "Both our children study here and we couldn't be happier. The school strikes the perfect balance between discipline and nurturing creativity.",
    rating: 5,
    initial: "A",
    color: "#10B981",
  },
];

const galleryItems = [
  { label: "Annual Sports Day", color: "from-blue-900 to-blue-700", emoji: "🏅" },
  { label: "Science Exhibition", color: "from-emerald-900 to-emerald-700", emoji: "🔬" },
  { label: "Cultural Fest", color: "from-purple-900 to-purple-700", emoji: "🎭" },
  { label: "Smart Classrooms", color: "from-amber-900 to-amber-700", emoji: "📚" },
  { label: "Robotics Club", color: "from-rose-900 to-rose-700", emoji: "🤖" },
  { label: "Republic Day Parade", color: "from-indigo-900 to-indigo-700", emoji: "🇮🇳" },
];

export default function Gallery() {
  return (
    <>
      {/* Testimonials */}
      <section style={{ background: "#fff", padding: "100px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div style={{ display: "inline-block", width: 50, height: 3, background: "#C9922A", borderRadius: 2, marginBottom: 20 }} />
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(30px, 4vw, 48px)", fontWeight: 700, color: "#0B1F4A", marginBottom: 14 }}>
              What Families Say
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }} className="test-grid">
            {testimonials.map(({ name, role, text, rating, initial, color }) => (
              <div key={name} style={{
                background: "#FAFAFA",
                border: "1px solid #EEE9E0",
                borderRadius: 16,
                padding: "36px 30px",
                position: "relative",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 40px rgba(11,31,74,0.08)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
              >
                <Quote size={32} color={color} style={{ opacity: 0.2, position: "absolute", top: 24, right: 24 }} />
                <div style={{ display: "flex", gap: 3, marginBottom: 18 }}>
                  {Array.from({ length: rating }).map((_, i) => <Star key={i} size={16} fill="#C9922A" color="#C9922A" />)}
                </div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: "#4A5568", lineHeight: 1.8, marginBottom: 24, fontStyle: "italic" }}>"{text}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: "50%",
                    background: color,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 18, fontWeight: 700, color: "#fff",
                  }}>{initial}</div>
                  <div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 600, color: "#0B1F4A" }}>{name}</div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "#9CA3AF" }}>{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" style={{ background: "#FAF7F2", padding: "100px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div style={{ display: "inline-block", width: 50, height: 3, background: "#C9922A", borderRadius: 2, marginBottom: 20 }} />
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(30px, 4vw, 48px)", fontWeight: 700, color: "#0B1F4A", marginBottom: 14 }}>
              Life at Rock Ford
            </h2>
            <p style={{ color: "#4A5568", fontSize: 16, maxWidth: 480, margin: "0 auto", fontFamily: "'DM Sans', sans-serif" }}>
              From science exhibitions to sports days — there's always something inspiring happening on campus.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }} className="gallery-grid">
            {galleryItems.map(({ label, emoji }, idx) => (
              <div key={label} style={{
                height: idx % 3 === 1 ? 240 : 200,
                background: `linear-gradient(135deg, #${idx % 2 === 0 ? "0B1F4A" : "071530"}, #0B2460)`,
                borderRadius: 14,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 12,
                cursor: "pointer",
                transition: "transform 0.2s, opacity 0.2s",
                border: "1px solid rgba(201,146,42,0.15)",
                overflow: "hidden",
                position: "relative",
              }}
                onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.02)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
              >
                <div style={{ fontSize: 48 }}>{emoji}</div>
                <div style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.9)",
                  letterSpacing: "0.04em",
                }}>{label}</div>
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0,
                  height: 3,
                  background: "linear-gradient(90deg, #C9922A, #E8B455)",
                }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .test-grid { grid-template-columns: 1fr !important; }
          .gallery-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </>
  );
}
