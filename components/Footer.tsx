"use client";
import { GraduationCap, Globe, Share2, Video, Link } from "lucide-react";

const links = {
  "Quick Links": ["Home", "About Us", "Academics", "Admissions", "Gallery", "Contact"],
  "Academics": ["Primary School", "Middle School", "Secondary School", "Senior Secondary", "Extra-Curriculars"],
  "Information": ["School Calendar", "Fee Structure", "Scholarship", "Alumni", "Careers"],
};

export default function Footer() {
  return (
    <footer style={{ background: "#071530", color: "#fff", padding: "70px 40px 30px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 40, marginBottom: 50 }} className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
              <div style={{ width: 42, height: 42, borderRadius: "50%", background: "linear-gradient(135deg, #C9922A, #E8B455)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <GraduationCap size={20} color="#fff" />
              </div>
              <div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 17, color: "#fff" }}>Rock Ford</div>
                <div style={{ fontSize: 10, color: "#C9922A", letterSpacing: "0.15em", textTransform: "uppercase" }}>Public School</div>
              </div>
            </div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.8, maxWidth: 260, marginBottom: 24 }}>
              Nurturing curious minds and building character since 1999. CBSE Affiliated. Patna, Bihar.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {[Globe, Share2, Video, Link].map((Icon, i) => (
                <a key={i} href="#" style={{
                  width: 36, height: 36, borderRadius: 8,
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "background 0.2s",
                  textDecoration: "none",
                }}
                  onMouseEnter={e => (e.currentTarget.style.background = "rgba(201,146,42,0.3)")}
                  onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.06)")}
                >
                  <Icon size={15} color="rgba(255,255,255,0.6)" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <h5 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 700, color: "#C9922A", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 18 }}>{heading}</h5>
              <ul style={{ listStyle: "none" }}>
                {items.map(item => (
                  <li key={item} style={{ marginBottom: 10 }}>
                    <a href="#" style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 13,
                      color: "rgba(255,255,255,0.5)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#E8B455")}
                      onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                    >{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.35)" }}>
            © {new Date().getFullYear()} Rock Ford Public School. All rights reserved. CBSE Affiliation No. XXXXXX
          </p>
          <div style={{ display: "flex", gap: 24 }}>
            {["Privacy Policy", "Terms of Use", "RTI"].map(l => (
              <a key={l} href="#" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.35)", textDecoration: "none" }}>{l}</a>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 500px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}
