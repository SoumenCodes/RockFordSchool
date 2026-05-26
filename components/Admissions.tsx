"use client";
import { FileText, Calendar, ClipboardCheck, GraduationCap, ChevronRight } from "lucide-react";

const steps = [
  { icon: FileText, step: "01", title: "Submit Enquiry", desc: "Fill out the online enquiry form or visit our admissions office. Our team will reach out within 24 hours." },
  { icon: Calendar, step: "02", title: "Campus Visit", desc: "Schedule a guided school tour with your family. Meet the faculty, see the facilities, and get a feel for our community." },
  { icon: ClipboardCheck, step: "03", title: "Assessment & Interview", desc: "A friendly interaction session to understand your child's strengths and readiness for the grade applied." },
  { icon: GraduationCap, step: "04", title: "Enrolment Confirmed", desc: "Receive the offer letter, complete documentation, and your child joins the Rock Ford family." },
];

const docs = ["Birth Certificate", "Transfer Certificate (if applicable)", "Aadhar Card (Child & Parents)", "Last 2 years' Report Cards", "Passport-size Photographs", "Address Proof"];

export default function Admissions() {
  return (
    <section id="admissions" style={{ background: "#FAF7F2", padding: "100px 40px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 70 }}>
          <div style={{ display: "inline-block", width: 50, height: 3, background: "#C9922A", borderRadius: 2, marginBottom: 20 }} />
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, color: "#0B1F4A", marginBottom: 16 }}>
            Admissions 2025–26
          </h2>
          <p style={{ color: "#4A5568", fontSize: 17, lineHeight: 1.7, maxWidth: 560, margin: "0 auto", fontFamily: "'DM Sans', sans-serif" }}>
            We welcome applications for all classes. Admission is open to students who demonstrate curiosity, potential, and a desire to grow.
          </p>
          {/* Open badge */}
          <div style={{ marginTop: 20, display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.3)", borderRadius: 100, padding: "6px 18px" }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#10B981", animation: "pulse 2s infinite" }} />
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 600, color: "#059669" }}>Admissions Now Open</span>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 60, alignItems: "start" }} className="adm-grid">
          {/* Steps */}
          <div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: "#0B1F4A", marginBottom: 36 }}>Admission Process</h3>
            <div style={{ position: "relative" }}>
              {/* Connector line */}
              <div style={{ position: "absolute", left: 26, top: 52, bottom: 52, width: 1, background: "linear-gradient(to bottom, #C9922A44, transparent)" }} />
              {steps.map(({ icon: Icon, step, title, desc }) => (
                <div key={step} style={{ display: "flex", gap: 20, marginBottom: 32, position: "relative" }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: "50%",
                    background: "#0B1F4A",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                    position: "relative", zIndex: 1,
                    border: "3px solid #FAF7F2",
                    boxShadow: "0 0 0 1px #C9922A",
                  }}>
                    <Icon size={20} color="#E8B455" />
                  </div>
                  <div style={{ paddingTop: 8 }}>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "#C9922A", fontWeight: 700, letterSpacing: "0.1em", marginBottom: 4 }}>STEP {step}</div>
                    <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: 19, fontWeight: 700, color: "#0B1F4A", marginBottom: 6 }}>{title}</h4>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "#4A5568", lineHeight: 1.7 }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {/* Documents */}
            <div style={{ background: "#fff", borderRadius: 16, padding: "32px 28px", border: "1px solid #EEE9E0" }}>
              <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: "#0B1F4A", marginBottom: 20 }}>Documents Required</h4>
              <ul style={{ listStyle: "none" }}>
                {docs.map((d) => (
                  <li key={d} style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 0", borderBottom: "1px solid #F0EDE8" }}>
                    <ChevronRight size={14} color="#C9922A" />
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "#4A5568" }}>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA card */}
            <div style={{ background: "linear-gradient(135deg, #0B1F4A, #0B2460)", borderRadius: 16, padding: "32px 28px" }}>
              <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 10 }}>Ready to Apply?</h4>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: 22 }}>
                Start your child's journey with Rock Ford today. Seats are limited — secure your spot now.
              </p>
              <a href="#contact" style={{
                display: "block",
                background: "linear-gradient(135deg, #C9922A, #E8B455)",
                color: "#fff",
                padding: "13px 24px",
                borderRadius: 8,
                textDecoration: "none",
                fontWeight: 600,
                fontSize: 14,
                textAlign: "center",
                boxShadow: "0 6px 20px rgba(201,146,42,0.35)",
              }}>Apply Now</a>
              <a href="tel:+916200000000" style={{
                display: "block",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "rgba(255,255,255,0.7)",
                padding: "12px 24px",
                borderRadius: 8,
                textDecoration: "none",
                fontWeight: 500,
                fontSize: 14,
                textAlign: "center",
                marginTop: 10,
              }}>Call Admissions Office</a>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes pulse { 0%,100%{opacity:1}50%{opacity:0.4} }
        @media (max-width: 900px) { .adm-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
