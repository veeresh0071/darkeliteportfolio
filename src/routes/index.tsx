import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ArrowRight, Award, Heart, Lightbulb, Target, Users2, Globe2, Mail, Phone, MapPin, MessageCircle, Send, Check, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Text3D } from "@/components/Text3D";
import { Background3D } from "@/components/Background3D";
import { useTiltCard } from "@/hooks/useTiltCard";

// SectionHeading component
function SectionHeading({ eyebrow, title, center = true }: { eyebrow?: string; title: React.ReactNode; center?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={center ? "text-center" : ""}
    >
      {eyebrow && (
        <span className="inline-block font-mono text-xs uppercase tracking-[0.25em] text-primary mb-4">
          ⏤ {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">{title}</h2>
    </motion.div>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dark Elite Creations — Portfolio" },
      { name: "description", content: "Welcome to Dark Elite Creations, your premier destination for cutting-edge solutions and creative services in Belagavi." },
      { property: "og:title", content: "Dark Elite Creations — Portfolio" },
      { property: "og:description", content: "Best web design, development, digital marketing, and IT company in Belagavi." },
    ],
  }),
  component: Home,
});

const stats = [
  { value: 650, suffix: "+", label: "Projects Delivered" },
  { value: 95, suffix: "+", label: "Happy Clients" },
  { value: 15, suffix: "+", label: "Team Members" },
  { value: 2, suffix: "Y", label: "Years Experience" },
];

const values = [
  { icon: Award, title: "Craft & Excellence", desc: "We sweat details others miss, delivering exceptional quality in every project." },
  { icon: Heart, title: "Honesty & Cooperation", desc: "Direct, transparent partnership built on trust and seamless teamwork." },
  { icon: Lightbulb, title: "Strategy & Innovation", desc: "We craft intelligent strategies and chase unexpected solutions that drive growth." },
  { icon: Target, title: "Goal Achievement", desc: "Beautiful work that moves metrics and helps you achieve your business goals." },
  { icon: Users2, title: "Team Collaboration", desc: "Senior-only experts working together with no handoffs, ensuring consistent excellence." },
  { icon: Globe2, title: "Growth & Scale", desc: "Empowering businesses to grow faster with scalable solutions across continents." },
];

const clientLogos = [
  "/clients/balaji1.png",
  "/clients/company_logo_Png.png",
  "/clients/Final-Logo.png",
  "/clients/Layer-1.png",
  "/clients/New-2.png",
  "/clients/New-7.png",
  "/clients/New-Project-1.png",
  "/clients/New-Project-11.png",
  "/clients/New-Project-12.png",
  "/clients/New-Project-16.png",
  "/clients/New-Project-17.png",
  "/clients/New-Project-19.png",
  "/clients/New-Project-2.png",
  "/clients/New-Project-20.png",
  "/clients/New-Project-26-1.png",
  "/clients/New-Project-3.png",
  "/clients/New-Project-4.png",
  "/clients/New-Project-5.png",
  "/clients/New-Project-6.png",
  "/clients/New-Project-7.png",
  "/clients/New-Project-8.png",
  "/clients/New-Project-9.png",
  "/clients/New-Project.png",
  "/clients/New-Project21.png",
  "/clients/New-Project22.png",
  "/clients/New-Project25.png",
  "/clients/New-Project27.png",
  "/clients/New-Project29.png",
  "/clients/New-Project30.png",
  "/clients/New-Project31.png",
  "/clients/New-Project66.png",
  "/clients/New-Project67.png",
  "/clients/Renuka-Group-Logo-1.png"
];

export const websiteProjects = [
  { id: 1, name: "Balaji Hydraulics", image: "/website-portfolio/screencapture-balajihydraulics-in-2025-03-11-16_05_48.png", url: "https://balajihydraulics.in" },
  { id: 2, name: "Fresh Fork Bite", image: "/website-portfolio/screencapture-freshforkbite-2025-08-08-15_35_53-scaled.png", url: "https://freshforkbite.com" },
  { id: 3, name: "Ice Smith Machines", image: "/website-portfolio/screencapture-icesmithmachines-2025-03-11-16_16_31.png", url: "https://icesmithmachines.com" },
  { id: 4, name: "Intence System", image: "/website-portfolio/screencapture-intencesystem-2025-08-08-15_36_27-scaled.png", url: "https://intencesystem.com" },
  { id: 5, name: "Kailas Tejen Engineers", image: "/website-portfolio/screencapture-kailastejengineers-2025-03-11-16_14_37.png", url: "https://kailastejengineers.com" },
  { id: 6, name: "Prestige Institute Dharwad", image: "/website-portfolio/screencapture-prestigeinstitutedharwad-in-2025-08-08-15_37_37-scaled.png", url: "https://prestigeinstitutedharwad.in" },
  { id: 7, name: "RMR Sports Academy", image: "/website-portfolio/screencapture-rmrsportsacademy-2025-08-08-15_37_01-768x2882.png", url: "https://rmrsportsacademy.com" },
  { id: 8, name: "Sagar Techenc", image: "/website-portfolio/screencapture-sagartechenc-2025-08-08-15_35_26-768x3198.png", url: "https://sagartechenc.com" },
  { id: 9, name: "Shiva Chidambara", image: "/website-portfolio/screencapture-shivachidambara-2025-08-08-15_38_04-1065x2048.png", url: "https://shivachidambara.com" },
  { id: 10, name: "Shivraj Calibration", image: "/website-portfolio/screencapture-shivrajcalibration-2025-03-11-16_18_58.png", url: "https://shivrajcalibration.com" },
  { id: 11, name: "Tool Holders BGM", image: "/website-portfolio/screencapture-toolholdersbgm-2025-03-25-15_56_04.png", url: "https://toolholdersbgm.com" },
  { id: 12, name: "Venus Hydraulics", image: "/website-portfolio/screencapture-venushydraulics-2025-08-08-15_34_51-scaled.png", url: "https://venushydraulics.com" },
];

export const uiuxProjects = [
  { id: 1, name: "Mobile App UI 1", image: "/uiux/iPhone-12-Pro-Max-–-1.png" },
  { id: 2, name: "Mobile App UI 2", image: "/uiux/iPhone-12-Pro-Max-–-2.png" },
  { id: 3, name: "Mobile App UI 3", image: "/uiux/iPhone-12-Pro-Max-–-4.png" },
  { id: 4, name: "Mobile App UI 4", image: "/uiux/iPhone-12-Pro-Max-–-5.png" },
  { id: 5, name: "Mobile App UI 5", image: "/uiux/iPhone-12-Pro-Max-–-6.png" },
  { id: 6, name: "Mobile App UI 6", image: "/uiux/iPhone-12-Pro-Max-–-7.png" },
  { id: 7, name: "Mobile App UI 7", image: "/uiux/iPhone-12-Pro-Max-–-8.png" },
  { id: 8, name: "Mobile App UI 8", image: "/uiux/iPhone-12-Pro-Max-–-9.png" },
];

export const graphicProjects = [
  { id: 1, name: "Graphic Design 1", image: "/graphic-design/New-1-150x150.png" },
  { id: 2, name: "Graphic Design 2", image: "/graphic-design/New-2-150x150.png" },
  { id: 3, name: "Graphic Design 3", image: "/graphic-design/New-3-150x150.png" },
  { id: 4, name: "Graphic Design 4", image: "/graphic-design/New-4-150x150.png" },
  { id: 5, name: "Graphic Design 5", image: "/graphic-design/New-5-150x150.png" },
  { id: 6, name: "Graphic Design 6", image: "/graphic-design/New-6-150x150.png" },
  { id: 7, name: "Graphic Design 7", image: "/graphic-design/New-7-150x150.png" },
  { id: 8, name: "Graphic Design 8", image: "/graphic-design/New-8-150x150.png" },
  { id: 9, name: "Graphic Design 9", image: "/graphic-design/New-9-150x150.png" },
  { id: 10, name: "Graphic Design 10", image: "/graphic-design/New-10-1-150x150.png" },
  { id: 11, name: "Graphic Design 11", image: "/graphic-design/New-11-150x150.png" },
  { id: 12, name: "Graphic Design 12", image: "/graphic-design/New-12-150x150.png" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obj = { v: 0 };
    const tween = gsap.to(obj, {
      v: to,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: undefined,
      onUpdate: () => { el.textContent = Math.round(obj.v).toString(); },
    });
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) tween.restart();
    }, { threshold: 0.4 });
    io.observe(el);
    return () => { io.disconnect(); tween.kill(); };
  }, [to]);
  return (
    <span className="font-display text-5xl md:text-6xl font-bold text-gradient">
      <span ref={ref}>0</span>{suffix}
    </span>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const bgY        = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY      = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const charY      = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const ctaOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const bgMX   = useTransform(mouseX, [-1, 1], [-15, 15]);
  const charMX = useTransform(mouseX, [-1, 1], [20, -20]);
  const charMY = useTransform(mouseY, [-1, 1], [10, -10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { innerWidth: w, innerHeight: h } = window;
    mouseX.set((e.clientX / w) * 2 - 1);
    mouseY.set((e.clientY / h) * 2 - 1);
  };

  return (
    <section
      id="home"
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Layer 0: Background image */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY, x: bgMX }}>
        <img src="/hero-bg.png" alt="" className="w-full h-full object-cover scale-110" />
        <div className="absolute inset-0 bg-black/55" />
      </motion.div>

      {/* Layer 1: Giant text behind everything */}
      <motion.div
        className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none select-none"
        style={{ y: textY }}
      >
        <div className="text-center px-4">
          <motion.h1
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-black leading-none tracking-tighter"
            style={{
              fontSize: "clamp(4.5rem, 14vw, 14rem)",
              background: "linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(220,38,38,0.7) 60%, rgba(220,38,38,0.1) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 60px rgba(220,38,38,0.4))",
            }}
          >
            DARK ELITE
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-black leading-none tracking-tighter -mt-2 md:-mt-4"
            style={{
              fontSize: "clamp(3rem, 9vw, 9rem)",
              background: "linear-gradient(180deg, rgba(220,38,38,0.8) 0%, rgba(220,38,38,0.2) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 80px rgba(220,38,38,0.6))",
            }}
          >
            CREATIONS
          </motion.h1>
        </div>
      </motion.div>

      {/* Layer 3: Right foreground character */}
      <motion.div
        className="absolute bottom-0 right-0 z-20 w-3/4 md:w-[52%] lg:w-[48%] max-w-[720px] pointer-events-none"
        style={{ y: charY, x: charMX, translateY: charMY }}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.img
          src="/hero-char.png"
          alt=""
          className="w-full object-contain"
          style={{ filter: "drop-shadow(0 0 85px rgba(220,38,38,0.75)) brightness(1.2) contrast(1.08)" }}
          animate={{
            x: [-25, 25, -25],       // Smooth continuous right-to-left and left-to-right drift
            y: [-12, 12, -12],       // Organic vertical breathing float
            rotate: [-1.5, 1.5, -1.5] // Subtle premium tilt
          }}
          transition={{
            duration: 9,             // Slow, premium loop duration
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Layer 4: Foreground UI (Scroll Indicator Only) */}
      <motion.div
        className="relative z-30 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center w-full mt-auto mb-12 pointer-events-none"
        style={{ opacity: ctaOpacity }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col items-center gap-2"
        >
          <motion.span
            animate={{ height: [40, 56, 40] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px bg-gradient-to-b from-primary to-transparent"
            style={{ height: 40 }}
          />
        </motion.div>
      </motion.div>

      {/* Floating particles */}
      {Array.from({ length: 18 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary/30 pointer-events-none"
          style={{
            width: Math.random() * 4 + 1,
            height: Math.random() * 4 + 1,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            zIndex: 5,
          }}
          animate={{ y: [0, -30, 0], opacity: [0, 0.8, 0], scale: [0.5, 1.5, 0.5] }}
          transition={{ duration: 3 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 5, ease: "easeInOut" }}
        />
      ))}
    </section>
  );
}

function Marquee() {
  const items = ["HELIOS", "VECTOR AI", "LUMEN", "NORTHWIND", "ARCADIA", "OBSIDIAN", "AETHER", "PHOENIX"];
  return (
    <section className="py-12 border-y border-border overflow-hidden">
      <div className="flex animate-[marquee_30s_linear_infinite] hover:[animation-play-state:paused] whitespace-nowrap">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="mx-12 font-display text-2xl md:text-3xl font-bold text-muted-foreground/40 hover:text-primary transition-colors">
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", mobile: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", company: "", mobile: "", message: "" });
    }, 4000);
  };

  return (
    <form onSubmit={submit} className="glass rounded-3xl p-8 md:p-10 neon-border space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Your name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
        <Field label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required />
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Company" value={form.company} onChange={(v) => setForm({ ...form, company: v })} />
        <Field label="Mobile Number" type="tel" value={form.mobile} onChange={(v) => setForm({ ...form, mobile: v })} required />
      </div>
      <div>
        <label className="block text-xs uppercase tracking-widest font-mono text-muted-foreground mb-2">Tell us about your project</label>
        <motion.textarea
          required
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          rows={5}
          placeholder="Goals, timeline, anything we should know..."
          whileHover={{ y: -2 }}
          whileFocus={{
            borderColor: "rgba(220, 38, 38, 0.5)",
            boxShadow: "0 0 15px rgba(220, 38, 38, 0.25)",
            scale: 1.01,
          }}
          transition={{ duration: 0.2 }}
          className="w-full glass rounded-xl px-4 py-3 text-sm outline-none border border-white/5 focus:border-primary/50 transition-colors resize-none"
        />
      </div>
      <motion.button
        type="submit"
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.02 }}
        disabled={sent}
        className="w-full btn-primary justify-center disabled:opacity-80"
        animate={sent ? { scale: [1, 1.05, 1] } : {}}
        transition={{ duration: 0.3 }}
      >
        {sent ? <><Check className="h-4 w-4" /> Message Sent — We'll be in touch</> : <>Send Message <Send className="h-4 w-4" /></>}
      </motion.button>
    </form>
  );
}

function Field({
  label, value, onChange, type = "text", required,
}: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean }) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className="w-full"
    >
      <label className="block text-xs uppercase tracking-widest font-mono text-muted-foreground mb-2">{label}{required && " *"}</label>
      <motion.input
        required={required}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        whileFocus={{
          borderColor: "rgba(220, 38, 38, 0.5)",
          boxShadow: "0 0 15px rgba(220, 38, 38, 0.25)",
          scale: 1.01,
        }}
        transition={{ duration: 0.2 }}
        className="w-full glass rounded-xl px-4 py-3 text-sm outline-none border border-white/5 focus:border-primary/50 transition-colors"
      />
    </motion.div>
  );
}

function ContactCard({ icon, label, value, href, accent }: { icon: React.ReactNode; label: string; value: string; href?: string; accent?: boolean }) {
  const Wrap = href ? "a" : "div";
  const { onMouseMove, onMouseLeave, style, shineBg } = useTiltCard(8);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", damping: 15, stiffness: 100 }}
      style={style}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="w-full"
    >
      <Wrap
        {...(href ? { href, target: href.startsWith("http") ? "_blank" : undefined, rel: "noreferrer" } : {})}
        className={`group flex items-center gap-4 glass rounded-2xl p-5 neon-border-hover transition-all relative overflow-hidden select-none ${accent ? "border-primary/40" : ""}`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Spotlight overlay inside card */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"
          style={{ background: shineBg }}
        />

        <div className="flex items-center gap-4 relative z-10 w-full" style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }}>
          <motion.div 
            className={`grid place-items-center h-12 w-12 rounded-xl shrink-0 ${accent ? "bg-gradient-to-br from-primary to-primary-glow text-primary-foreground" : "bg-primary/10 text-primary"}`}
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.5 }}
            style={{ transform: "translateZ(10px)" }}
          >
            {icon}
          </motion.div>
          <div style={{ transform: "translateZ(5px)" }}>
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{label}</p>
            <p className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">{value}</p>
          </div>
        </div>
      </Wrap>
    </motion.div>
  );
}

function ServiceCard({ service, index }: { service: typeof servicesList[number]; index: number }) {
  const { onMouseMove, onMouseLeave, style, shineBg } = useTiltCard(8);
  const isRoute = service.link.startsWith("/");

  const CardContent = (
    <div className="flex flex-col h-full w-full relative z-10" style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}>
      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.iconClass} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`} style={{ transform: "translateZ(10px)" }}>
        {service.icon}
      </div>
      <h3 className="font-display text-2xl font-bold mb-4 group-hover:text-primary transition-colors" style={{ transform: "translateZ(15px)" }}>
        {service.title}
      </h3>
      <p className="text-muted-foreground leading-relaxed mb-6 text-sm md:text-base" style={{ transform: "translateZ(5px)" }}>
        {service.desc}
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 text-sm text-muted-foreground border-t border-white/5 pt-6 mt-auto mb-6" style={{ transform: "translateZ(10px)" }}>
        {service.bullets.map((bullet, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
            {bullet}
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-primary group-hover:text-primary-glow transition-colors mt-2" style={{ transform: "translateZ(15px)" }}>
        <span>{service.link === "#contact" ? "Start a Project" : "Explore Projects"}</span>
        <motion.svg
          className="w-3.5 h-3.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ x: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </motion.svg>
      </div>
    </div>
  );

  const cardClassName = "glass rounded-3xl p-8 md:p-10 neon-border-hover group flex flex-col h-full cursor-pointer relative overflow-hidden select-none";

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      }
    }
  } as const;

  return (
    <motion.div
      variants={cardVariants}
      style={style}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="h-full"
    >
      {isRoute ? (
        <Link
          to={service.link}
          className={cardClassName}
        >
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"
            style={{ background: shineBg }}
          />
          {CardContent}
        </Link>
      ) : (
        <a
          href={service.link}
          className={cardClassName}
        >
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"
            style={{ background: shineBg }}
          />
          {CardContent}
        </a>
      )}
    </motion.div>
  );
}

function ValueCard({ value, index }: { value: typeof values[number]; index: number }) {
  const { onMouseMove, onMouseLeave, style, shineBg } = useTiltCard(10);

  const valueVariants = {
    hidden: { opacity: 0, y: 30, rotateX: 10 },
    show: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 18,
        stiffness: 90,
      }
    }
  } as const;

  return (
    <motion.div
      variants={valueVariants}
      style={style}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="glass rounded-2xl p-7 neon-border-hover relative overflow-hidden select-none group h-full"
    >
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"
        style={{ background: shineBg }}
      />
      
      <div className="relative z-10 flex flex-col h-full" style={{ transform: "translateZ(25px)", transformStyle: "preserve-3d" }}>
        <motion.div
          className="w-fit"
          animate={{
            y: [-3, 3, -3],
          }}
          transition={{
            duration: 4 + (index % 3) * 1.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ transform: "translateZ(15px)" }}
        >
          <value.icon className="h-7 w-7 text-primary" />
        </motion.div>
        <h3 className="mt-5 font-display text-xl font-semibold group-hover:text-primary transition-colors" style={{ transform: "translateZ(10px)" }}>{value.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-grow" style={{ transform: "translateZ(5px)" }}>{value.desc}</p>
      </div>
    </motion.div>
  );
}

const servicesList = [
  {
    title: "Website Development",
    desc: "We craft responsive, high-performance websites using the latest technologies. From simple landing pages to complex web applications, our development team delivers scalable solutions that drive business growth.",
    icon: (
      <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    iconClass: "from-blue-500/20 to-blue-600/10 text-blue-400",
    bullets: [
      "Custom Web Applications",
      "E-commerce Solutions",
      "CMS Development",
      "Progressive Web Apps"
    ],
    link: "/website-development"
  },
  {
    title: "UI/UX Design",
    desc: "Our design team creates intuitive, user-centered interfaces that provide seamless experiences. We focus on usability, accessibility, and aesthetics to ensure your users love interacting with your product.",
    icon: (
      <svg className="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    iconClass: "from-purple-500/20 to-purple-600/10 text-purple-400",
    bullets: [
      "User Research & Testing",
      "Wireframing & Prototyping",
      "Mobile App Design",
      "Design Systems"
    ],
    link: "/ui-ux-design"
  },
  {
    title: "Graphic Design",
    desc: "We create stunning visual identities that make your brand stand out. From logos to marketing materials, our graphic design services help you communicate your message effectively and memorably.",
    icon: (
      <svg className="w-7 h-7 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    iconClass: "from-pink-500/20 to-pink-600/10 text-pink-400",
    bullets: [
      "Brand Identity Design",
      "Marketing Collateral",
      "Social Media Graphics",
      "Print Design"
    ],
    link: "/graphic-design"
  },
  {
    title: "App Development",
    desc: "Build powerful mobile applications for iOS and Android. We create native and cross-platform apps that deliver exceptional user experiences, speed, and reliability.",
    icon: (
      <svg className="w-7 h-7 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    iconClass: "from-orange-500/20 to-orange-600/10 text-orange-400",
    bullets: [
      "iOS Apps",
      "Android Apps",
      "React Native",
      "Flutter"
    ],
    link: "#contact"
  },
  {
    title: "Digital Marketing",
    desc: "Grow your online presence with data-driven marketing strategies. From SEO to social media campaigns, we help you reach and engage your target audience effectively.",
    icon: (
      <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
    iconClass: "from-green-500/20 to-green-600/10 text-green-400",
    bullets: [
      "SEO & Keywords",
      "Social Media Marketing",
      "PPC Advertising",
      "Content Marketing"
    ],
    link: "#contact"
  },
  {
    title: "Video Production",
    desc: "Professional video production and editing services that bring your stories to life. From corporate videos to promotional content, we handle everything from concept to final cut.",
    icon: (
      <svg className="w-7 h-7 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    iconClass: "from-red-500/20 to-red-600/10 text-red-400",
    bullets: [
      "Corporate Videos",
      "Commercials",
      "Video Editing",
      "Photography"
    ],
    link: "#contact"
  },
  {
    title: "Animation & VFX",
    desc: "Create stunning 2D and 3D animations with cinematic visual effects. Perfect for explainer videos, product demos, and bringing imaginative concepts to reality.",
    icon: (
      <svg className="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
      </svg>
    ),
    iconClass: "from-cyan-500/20 to-cyan-600/10 text-cyan-400",
    bullets: [
      "2D Animation",
      "3D Modeling",
      "Motion Graphics",
      "VFX/CGI"
    ],
    link: "#contact"
  },
  {
    title: "Digital & Offset Print",
    desc: "High-quality printing services for all your business needs. From business cards and brochures to large format banners, we deliver premium print materials with exceptional finishing.",
    icon: (
      <svg className="w-7 h-7 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
      </svg>
    ),
    iconClass: "from-indigo-500/20 to-indigo-600/10 text-indigo-400",
    bullets: [
      "Business Cards",
      "Brochures & Banners",
      "Packaging Design",
      "Offset & Digital Print"
    ],
    link: "#contact"
  }
];

function Home() {
  return (
    <>
      <Background3D />
      <Hero />
      
      {/* Interactive Smog & Volumetric Background Wrap */}
      <div className="relative w-full bg-background z-10 overflow-hidden">
        {/* Animated Smog & Background Image (hero-left.png) Layer */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
          {/* Base Background Image with soft breathing scaling */}
          <motion.div 
            className="absolute inset-0 opacity-[0.06] md:opacity-[0.09] mix-blend-color-dodge bg-repeat-y"
            style={{
              backgroundImage: "url('/hero-left.png')",
              backgroundSize: "100% auto",
              backgroundPosition: "top center",
            }}
            animate={{
              scale: [1, 1.015, 1],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Smog Layer 1 - Floating mist */}
          <motion.div 
            className="absolute top-0 -left-1/4 w-[150%] h-[150%] opacity-20 pointer-events-none"
            style={{
              background: "radial-gradient(circle at 30% 20%, rgba(220, 38, 38, 0.22) 0%, rgba(126, 34, 206, 0.12) 35%, transparent 65%)",
              willChange: "transform, opacity",
            }}
            animate={{
              x: [-50, 50, -50],
              y: [-40, 40, -40],
              scale: [1, 1.12, 1],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Smog Layer 2 - Floating mist opposite */}
          <motion.div 
            className="absolute bottom-0 -right-1/4 w-[150%] h-[150%] opacity-15 pointer-events-none"
            style={{
              background: "radial-gradient(circle at 75% 80%, rgba(220, 38, 38, 0.18) 0%, rgba(244, 63, 94, 0.08) 40%, transparent 70%)",
              willChange: "transform, opacity",
            }}
            animate={{
              x: [40, -40, 40],
              y: [30, -30, 30],
              scale: [1.08, 0.94, 1.08],
            }}
            transition={{
              duration: 26,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Smog Layer 3 - Flashable / Pulsing lightning & smoke energy */}
          <motion.div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(circle at 50% 50%, rgba(220, 38, 38, 0.07) 0%, transparent 70%)",
              willChange: "transform, opacity",
            }}
            animate={{
              opacity: [0.25, 0.8, 0.35, 0.9, 0.25],
              scale: [1, 1.06, 0.97, 1.04, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Smog Layer 4 - Micro flashing highlights to simulate atmospheric lighting */}
          <motion.div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(to bottom, transparent, rgba(220, 38, 38, 0.03) 40%, rgba(126, 34, 206, 0.02) 80%, transparent)",
              mixBlendMode: "overlay",
            }}
            animate={{
              opacity: [0.15, 0.85, 0.1, 0.9, 0.25, 0.75, 0.15],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.12, 0.18, 0.3, 0.45, 0.6, 1],
            }}
          />
        </div>

        {/* About Section */}
        <section id="about" className="py-32 scroll-mt-20 relative">
        {/* 3D Rotating Circle */}
        <motion.div
          className="absolute top-10 right-10 w-40 h-40 opacity-30"
          style={{ perspective: "1000px" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <motion.div
            className="w-full h-full rounded-full border-2 border-primary/40"
            style={{ transformStyle: "preserve-3d" }}
            animate={{ rotateY: 360, rotateX: 180 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        {/* Section Heading */}
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10 text-center mb-16">
          <SectionHeading eyebrow="Expertise" title="Our Premium Services" />
        </div>

        {/* Services Grid (Two per row on desktop) */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-20 relative z-10">
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.12,
                  delayChildren: 0.1,
                }
              }
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {servicesList.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 border-y border-border relative overflow-hidden">
        {/* Blinking Dots Pattern */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={`stat-dot-${i}`}
            className="absolute w-1.5 h-1.5 rounded-full bg-primary"
            style={{
              left: `${5 + Math.random() * 90}%`,
              top: `${10 + Math.random() * 80}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.8, 1],
            }}
            transition={{
              duration: 1.5 + Math.random() * 1.5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-10 relative z-10">
          {stats.map((s, i) => (
            <motion.div 
              key={s.label} 
              className="text-center"
              initial={{ opacity: 0, scale: 0.4 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                type: "spring",
                damping: 12,
                stiffness: 100,
                delay: i * 0.12
              }}
              whileHover={{ scale: 1.1, rotate: i % 2 === 0 ? 2 : -2 }}
            >
              <Counter to={s.value} suffix={s.suffix} />
              <p className="mt-3 text-sm uppercase tracking-widest text-muted-foreground">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-40" style={{ background: "var(--gradient-radial)" }} />
        
        {/* 3D Rotating Rings */}
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 opacity-20"
          style={{ perspective: "1000px" }}
        >
          <motion.div
            className="w-full h-full rounded-full border-4 border-primary/30"
            style={{ transformStyle: "preserve-3d" }}
            animate={{
              rotateX: [0, 360],
              rotateY: [0, -360],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>

        <motion.div
          className="absolute bottom-20 right-20 w-48 h-48 opacity-20"
          style={{ perspective: "1000px" }}
        >
          <motion.div
            className="w-full h-full rounded-full border-4 border-primary/30"
            style={{ transformStyle: "preserve-3d" }}
            animate={{
              rotateY: [0, 360],
              rotateZ: [0, -360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeading eyebrow="Values" title="What we stand for" />
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.1,
                }
              }
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {values.map((v, i) => (
              <ValueCard key={v.title} value={v} index={i} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Clients */}
      <section id="clients" className="py-32 border-y border-border overflow-hidden bg-surface/30 scroll-mt-20 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeading eyebrow="Trusted By" title={<>Our <span className="text-gradient-red">Clients</span></>} />
          </motion.div>
        </div>
        
        <div className="space-y-8">
          {/* Row 1 - Left to Right */}
          <div className="flex animate-[marquee_50s_linear_infinite] hover:[animation-play-state:paused] whitespace-nowrap">
            {[...clientLogos.slice(0, 11), ...clientLogos.slice(0, 11)].map((logo, i) => (
              <motion.div 
                key={`row1-${i}`} 
                className="mx-4 flex-shrink-0"
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white/95 rounded-2xl p-10 h-40 w-64 flex items-center justify-center shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <img src={logo} alt="Client logo" className="max-h-28 max-w-full object-contain" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Row 2 - Right to Left */}
          <div className="flex animate-[marquee-reverse_50s_linear_infinite] hover:[animation-play-state:paused] whitespace-nowrap">
            {[...clientLogos.slice(11, 22), ...clientLogos.slice(11, 22)].map((logo, i) => (
              <motion.div 
                key={`row2-${i}`} 
                className="mx-4 flex-shrink-0"
                whileHover={{ scale: 1.1, rotate: -2 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white/95 rounded-2xl p-10 h-40 w-64 flex items-center justify-center shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <img src={logo} alt="Client logo" className="max-h-28 max-w-full object-contain" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Row 3 - Left to Right */}
          <div className="flex animate-[marquee_50s_linear_infinite] hover:[animation-play-state:paused] whitespace-nowrap">
            {[...clientLogos.slice(22), ...clientLogos.slice(22)].map((logo, i) => (
              <motion.div 
                key={`row3-${i}`} 
                className="mx-4 flex-shrink-0"
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white/95 rounded-2xl p-10 h-40 w-64 flex items-center justify-center shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <img src={logo} alt="Client logo" className="max-h-28 max-w-full object-contain" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 scroll-mt-20 relative overflow-hidden">
        {/* 3D Rotating Double Ring */}
        <motion.div
          className="absolute top-10 right-10 w-72 h-72 opacity-20"
          style={{ perspective: "1000px" }}
        >
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-primary/40"
            style={{ transformStyle: "preserve-3d" }}
            animate={{
              rotateY: [0, 360],
              rotateX: [0, 180],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute inset-8 rounded-full border-2 border-primary/30"
            style={{ transformStyle: "preserve-3d" }}
            animate={{
              rotateY: [360, 0],
              rotateZ: [0, 360],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>

        {/* Pulsing Dots */}
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={`contact-dot-${i}`}
            className="absolute w-2.5 h-2.5 rounded-full bg-gradient-to-br from-primary to-primary-glow"
            style={{
              left: `${15 + Math.random() * 70}%`,
              top: `${15 + Math.random() * 70}%`,
              filter: "blur(1px)",
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 2.5, 1],
            }}
            transition={{
              duration: 2.5 + Math.random() * 1.5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeading
              eyebrow="Get In Touch"
              title={<>Let's build something <span className="text-gradient-red">unforgettable</span></>}
            />
          </motion.div>

          <div className="mt-16 grid lg:grid-cols-5 gap-10">
            {/* Form */}
            <motion.div 
              className="lg:col-span-3"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ContactForm />
            </motion.div>

            {/* Details */}
            <motion.div 
              className="lg:col-span-2 space-y-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <ContactCard icon={<Mail className="h-5 w-5" />} label="Email (Support)" value="Darkelitecreations@gmail.com" href="mailto:Darkelitecreations@gmail.com" />
              <ContactCard icon={<Phone className="h-5 w-5" />} label="Call" value="+91 8073674176" href="tel:+918073674176" />
              <ContactCard
                icon={<MessageCircle className="h-5 w-5" />}
                label="WhatsApp"
                value="Message instantly"
                href="https://wa.me/918073674176"
                accent
              />
              <ContactCard icon={<MapPin className="h-5 w-5" />} label="Studios" value="CTS No. 4855/78 3rd floor, Oneness Empire, T1-A, Sadashiv Nagar, Belagavi, Karnataka 590019" href="https://www.google.com/maps/search/?api=1&query=CTS+No.+4855%2F78+3rd+floor,+Oneness+Empire,+T1-A,+Sadashiv+Nagar,+Belagavi,+Karnataka+590019" />

              <div className="glass rounded-2xl p-6">
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">Follow</p>
                <div className="flex gap-2">
                  <a href="https://www.facebook.com/profile.php?id=61551983787864" target="_blank" rel="noreferrer" className="grid place-items-center h-11 w-11 rounded-xl glass hover:border-primary/50 hover:text-primary transition-all">
                    <Facebook className="h-4 w-4" />
                  </a>
                  <a href="https://www.instagram.com/darkelitecreations/" target="_blank" rel="noreferrer" className="grid place-items-center h-11 w-11 rounded-xl glass hover:border-primary/50 hover:text-primary transition-all">
                    <Instagram className="h-4 w-4" />
                  </a>
                  <a href="https://www.linkedin.com/company/100664240/admin/dashboard/" target="_blank" rel="noreferrer" className="grid place-items-center h-11 w-11 rounded-xl glass hover:border-primary/50 hover:text-primary transition-all">
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a href="https://www.youtube.com/@DEcreations" target="_blank" rel="noreferrer" className="grid place-items-center h-11 w-11 rounded-xl glass hover:border-primary/50 hover:text-primary transition-all">
                    <Youtube className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-3xl overflow-hidden glass neon-border" style={{ height: 420 }}>
              <iframe
                title="Belagavi Studio"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3837.8!2d74.5!3d15.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf66e4c8f3e3e3%3A0x1234567890abcdef!2sOneness%20Empire%2C%20Sadashiv%20Nagar%2C%20Belagavi%2C%20Karnataka%20590019!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(0.92) hue-rotate(180deg) saturate(0.6)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </section>
      </div>

      {/* Floating WhatsApp */}
      <motion.a
        href="https://wa.me/918073674176"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 grid place-items-center h-14 w-14 rounded-full bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-[0_0_30px_var(--glow-red-strong)]"
        aria-label="WhatsApp"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ y: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
      >
        <MessageCircle className="h-6 w-6" />
      </motion.a>
    </>
  );
}
