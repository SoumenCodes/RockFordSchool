"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, GraduationCap } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Academics", href: "#academics" },
  { label: "Admissions", href: "#admissions" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.4s ease",
        background: scrolled ? "rgba(11,31,74,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(201,146,42,0.3)" : "none",
        padding: scrolled ? "12px 40px" : "20px 40px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <Link href="#home" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 42, height: 42, borderRadius: "50%",
            background: "linear-gradient(135deg, #C9922A, #E8B455)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <GraduationCap size={22} color="#fff" />
          </div>
          <div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 18, color: "#fff", lineHeight: 1.1 }}>Rock Ford</div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: "#C9922A", letterSpacing: "0.15em", textTransform: "uppercase" }}>Public School</div>
          </div>
        </Link>

        {/* Desktop links */}
        <ul style={{ display: "flex", gap: 32, listStyle: "none", alignItems: "center" }} className="hidden-mobile">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a href={l.href} style={{
                color: "rgba(255,255,255,0.85)",
                textDecoration: "none",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
                fontSize: 14,
                letterSpacing: "0.04em",
                transition: "color 0.2s",
              }}
                onMouseEnter={e => (e.currentTarget.style.color = "#E8B455")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}
              >{l.label}</a>
            </li>
          ))}
          <li>
            <a href="#admissions" style={{
              background: "linear-gradient(135deg, #C9922A, #E8B455)",
              color: "#fff",
              padding: "9px 22px",
              borderRadius: 6,
              textDecoration: "none",
              fontWeight: 600,
              fontSize: 13,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}>Apply Now</a>
          </li>
        </ul>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          style={{ background: "none", border: "none", cursor: "pointer", color: "#fff", display: "none" }}
          className="mobile-burger"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          background: "rgba(11,31,74,0.98)",
          padding: "20px 40px 30px",
          borderTop: "1px solid rgba(201,146,42,0.3)",
        }}>
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} style={{
              display: "block",
              padding: "12px 0",
              color: "rgba(255,255,255,0.85)",
              textDecoration: "none",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 500,
              fontSize: 15,
              borderBottom: "1px solid rgba(255,255,255,0.08)",
            }}>{l.label}</a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .mobile-burger { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
