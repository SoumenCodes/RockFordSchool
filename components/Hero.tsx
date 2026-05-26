"use client";
import { useEffect, useRef } from "react";
import { ArrowDown, Award, Users, BookOpen } from "lucide-react";

const stats = [
  { icon: Award, value: "25+", label: "Years of Excellence" },
  { icon: Users, value: "1,800+", label: "Students Enrolled" },
  { icon: BookOpen, value: "98%", label: "Board Pass Rate" },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    setTimeout(() => {
      el.style.transition = "opacity 1s ease, transform 1s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 100);
  }, []);

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(160deg, #0B1F4A 0%, #071530 55%, #0B2460 100%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "120px 40px 80px",
      }}
    >
      {/* Decorative circles */}
      <div
        style={{
          position: "absolute",
          top: "-15%",
          right: "-10%",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(201,146,42,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-20%",
          left: "-5%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(201,146,42,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Grid pattern overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
          pointerEvents: "none",
        }}
      />

      <div
        ref={ref}
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ maxWidth: 760 }}>
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(201,146,42,0.15)",
              border: "1px solid rgba(201,146,42,0.4)",
              borderRadius: 100,
              padding: "6px 18px",
              marginBottom: 32,
            }}
          >
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#C9922A",
              }}
            />
            <span
              style={{
                color: "#E8B455",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Est. 1999 · Jamshedpur
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(42px, 6vw, 78px)",
              fontWeight: 900,
              color: "#fff",
              lineHeight: 1.08,
              marginBottom: 28,
            }}
          >
            Shaping the{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #C9922A, #E8B455)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Leaders
            </span>{" "}
            of Tomorrow
          </h1>

          <p
            style={{
              color: "rgba(255,255,255,0.65)",
              fontSize: 18,
              lineHeight: 1.75,
              maxWidth: 580,
              marginBottom: 44,
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
            }}
          >
            Rock Ford Public School offers a world-class education blending
            academic rigour with holistic development — empowering every child
            to discover their potential.
          </p>

          {/* CTAs */}
          <div
            style={{
              display: "flex",
              gap: 16,
              flexWrap: "wrap",
              marginBottom: 70,
            }}
          >
            <a
              href="#admissions"
              style={{
                background: "linear-gradient(135deg, #C9922A, #E8B455)",
                color: "#fff",
                padding: "15px 34px",
                borderRadius: 8,
                textDecoration: "none",
                fontWeight: 600,
                fontSize: 15,
                letterSpacing: "0.04em",
                boxShadow: "0 8px 30px rgba(201,146,42,0.35)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(-2px)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 12px 40px rgba(201,146,42,0.45)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 8px 30px rgba(201,146,42,0.35)";
              }}
            >
              Apply for Admission
            </a>
            <a
              href="#about"
              style={{
                border: "1.5px solid rgba(255,255,255,0.3)",
                color: "rgba(255,255,255,0.85)",
                padding: "15px 34px",
                borderRadius: 8,
                textDecoration: "none",
                fontWeight: 500,
                fontSize: 15,
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#E8B455";
                (e.currentTarget as HTMLElement).style.color = "#E8B455";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(255,255,255,0.3)";
                (e.currentTarget as HTMLElement).style.color =
                  "rgba(255,255,255,0.85)";
              }}
            >
              Discover Our School
            </a>
          </div>

          {/* Stats */}
          <div style={{ display: "flex", gap: 40, flexWrap: "wrap" }}>
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                style={{ display: "flex", alignItems: "center", gap: 12 }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 10,
                    background: "rgba(201,146,42,0.15)",
                    border: "1px solid rgba(201,146,42,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon size={20} color="#C9922A" />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 700,
                      fontSize: 22,
                      color: "#fff",
                    }}
                  >
                    {value}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: "rgba(255,255,255,0.5)",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        style={{
          position: "absolute",
          bottom: 36,
          left: "50%",
          transform: "translateX(-50%)",
          color: "rgba(255,255,255,0.4)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
          textDecoration: "none",
          animation: "bounce 2s infinite",
        }}
      >
        <span
          style={{
            fontSize: 11,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Scroll
        </span>
        <ArrowDown size={16} />
      </a>

      <style>{`@keyframes bounce { 0%,100%{transform:translateX(-50%) translateY(0)}50%{transform:translateX(-50%) translateY(6px)} }`}</style>
    </section>
  );
}
