import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ArrowRight, Award, Heart, Lightbulb, Target, Users2, Globe2, Mail, Phone, MapPin, MessageCircle, Send, Check, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Text3D } from "@/components/Text3D";
import { Background3D } from "@/components/Background3D";

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

const workCategories = [
  {
    id: 1,
    title: "Website Development",
    image: "/works/New-Project-2-1-1024x775.jpg",
    description: "Custom websites built with modern technologies",
    sectionId: "website-development"
  },
  {
    id: 2,
    title: "App Development",
    image: "/works/New-Project-3-1-1024x775.jpg",
    description: "Native and cross-platform mobile applications",
  },
  {
    id: 3,
    title: "Digital Marketing",
    image: "/works/New-Project-3-1024x775.jpg",
    description: "Strategic campaigns that drive results",
  },
  {
    id: 4,
    title: "UI/UX Design",
    image: "/works/New-Project-4-1024x775.jpg",
    description: "User-centered design that delights",
    sectionId: "ui-ux-design"
  },
  {
    id: 5,
    title: "Graphic Design",
    image: "/works/New-Project5-1024x775.jpg",
    description: "Visual identities that stand out",
    sectionId: "graphic-design"
  },
  {
    id: 6,
    title: "Production",
    image: "/works/New-Project6-1024x775.jpg",
    description: "Professional photo and video production",
  },
  {
    id: 7,
    title: "Animation",
    image: "/works/New-Project7-1024x775.jpg",
    description: "2D and 3D animation that captivates",
  },
  {
    id: 8,
    title: "VFX/CGI",
    image: "/works/New-Project-8-1024x775.jpg",
    description: "Cinematic visual effects and CGI",
  },
  {
    id: 9,
    title: "Print Design",
    image: "/works/New-Project-9-1024x775.jpg",
    description: "Premium print materials and branding",
  },
];

const websiteProjects = [
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

const uiuxProjects = [
  { id: 1, name: "Mobile App UI 1", image: "/uiux/iPhone-12-Pro-Max-–-1.png" },
  { id: 2, name: "Mobile App UI 2", image: "/uiux/iPhone-12-Pro-Max-–-2.png" },
  { id: 3, name: "Mobile App UI 3", image: "/uiux/iPhone-12-Pro-Max-–-4.png" },
  { id: 4, name: "Mobile App UI 4", image: "/uiux/iPhone-12-Pro-Max-–-5.png" },
  { id: 5, name: "Mobile App UI 5", image: "/uiux/iPhone-12-Pro-Max-–-6.png" },
  { id: 6, name: "Mobile App UI 6", image: "/uiux/iPhone-12-Pro-Max-–-7.png" },
  { id: 7, name: "Mobile App UI 7", image: "/uiux/iPhone-12-Pro-Max-–-8.png" },
  { id: 8, name: "Mobile App UI 8", image: "/uiux/iPhone-12-Pro-Max-–-9.png" },
];

const graphicProjects = [
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
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="home" ref={ref} className="relative min-h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      
      {/* Animated gradient orbs */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 left-10 h-64 w-64 rounded-full blur-3xl opacity-20"
        style={{ background: "radial-gradient(circle, oklch(0.58 0.24 25), transparent)" }}
      />
      <motion.div
        animate={{ 
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 right-10 h-80 w-80 rounded-full blur-3xl opacity-20"
        style={{ background: "radial-gradient(circle, oklch(0.58 0.24 25), transparent)" }}
      />
      
      <motion.div
        aria-hidden
        style={{ y, opacity }}
        className="absolute -top-32 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full"
      >
        <motion.div 
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 rounded-full" 
          style={{ background: "radial-gradient(circle, oklch(0.58 0.24 25 / 0.35), transparent 60%)" }} 
        />
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center perspective-1000">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-mono uppercase tracking-[0.2em] text-primary mb-8"
        >
          <motion.span 
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="h-1.5 w-1.5 rounded-full bg-primary"
          />
          A New Standard for Digital Craft
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Text3D className="font-display text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight text-balance leading-[1.05]">
            We design <span className="text-gradient-red glow-text">cinematic</span><br />
            digital experiences.
          </Text3D>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 max-w-3xl mx-auto text-sm md:text-base text-muted-foreground/90 leading-relaxed"
        >
          Based in <span className="text-foreground font-medium">Belagavi</span>, we're transforming businesses across <span className="text-foreground font-medium">Karnataka and India</span> with cutting-edge digital solutions. From <span className="text-primary/90">intelligent web & mobile apps</span> to <span className="text-primary/90">AI-powered automation</span>, <span className="text-primary/90">strategic SEO</span>, and <span className="text-primary/90">brand storytelling</span>—we architect technology that drives real growth. Whether you're a bold startup or an established enterprise, we turn your vision into powerful digital experiences that captivate, convert, and scale.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <motion.a 
            href="#contact" 
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start a Project <ArrowRight className="h-4 w-4" />
          </motion.a>
          <motion.a 
            href="#works" 
            className="btn-ghost"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Our Work
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-20 flex flex-col items-center gap-2 text-xs font-mono text-muted-foreground"
        >
          <motion.span 
            animate={{ height: [48, 60, 48] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px bg-gradient-to-b from-primary to-transparent"
            style={{ height: 48 }}
          />
        </motion.div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["HELIOS", "VECTOR AI", "LUMEN", "NORTHWIND", "ARCADIA", "OBSIDIAN", "AETHER", "PHOENIX"];
  return (
    <section className="py-12 border-y border-border overflow-hidden">
      <div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap">
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
        <textarea
          required
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          rows={5}
          placeholder="Goals, timeline, anything we should know..."
          className="w-full glass rounded-xl px-4 py-3 text-sm outline-none focus:border-primary/50 transition-colors resize-none"
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
    <div>
      <label className="block text-xs uppercase tracking-widest font-mono text-muted-foreground mb-2">{label}{required && " *"}</label>
      <input
        required={required}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full glass rounded-xl px-4 py-3 text-sm outline-none focus:border-primary/50 transition-colors"
      />
    </div>
  );
}

function ContactCard({ icon, label, value, href, accent }: { icon: React.ReactNode; label: string; value: string; href?: string; accent?: boolean }) {
  const Wrap = href ? "a" : "div";
  return (
    <motion.div
      whileHover={{ x: 5, transition: { duration: 0.2 } }}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <Wrap
        {...(href ? { href, target: href.startsWith("http") ? "_blank" : undefined, rel: "noreferrer" } : {})}
        className={`group flex items-center gap-4 glass rounded-2xl p-5 neon-border-hover transition-all ${accent ? "border-primary/40" : ""}`}
      >
        <motion.div 
          className={`grid place-items-center h-12 w-12 rounded-xl shrink-0 ${accent ? "bg-gradient-to-br from-primary to-primary-glow text-primary-foreground" : "bg-primary/10 text-primary"}`}
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          {icon}
        </motion.div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{label}</p>
          <p className="font-medium text-foreground group-hover:text-primary transition-colors">{value}</p>
        </div>
      </Wrap>
    </motion.div>
  );
}

function Home() {
  return (
    <>
      <Background3D />
      <Hero />
      
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

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary">⏤ About Us</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 font-display text-3xl md:text-6xl font-bold leading-tight text-balance"
          >
            Your premier destination for
            <span className="text-gradient-red"> cutting-edge digital solutions</span>.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 text-lg text-muted-foreground max-w-2xl leading-relaxed"
          >
            Welcome to Dark Elite Creations, the best web design and development, digital marketing, graphic designing, video editing and the finest Software IT company in Belagavi. We specialize in transforming your vision into compelling digital realities.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-20 relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Website Development */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass rounded-2xl p-8 neon-border-hover group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Website Development</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We craft responsive, high-performance websites using the latest technologies. From simple landing pages to complex web applications, our development team delivers scalable solutions that drive business growth.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  Custom Web Applications
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  E-commerce Solutions
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  CMS Development
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  Progressive Web Apps
                </li>
              </ul>
            </motion.div>

            {/* UI/UX Design */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass rounded-2xl p-8 neon-border-hover group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">UI/UX Design</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our design team creates intuitive, user-centered interfaces that provide seamless experiences. We focus on usability, accessibility, and aesthetics to ensure your users love interacting with your product.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  User Research & Testing
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  Wireframing & Prototyping
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  Mobile App Design
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  Design Systems
                </li>
              </ul>
            </motion.div>

            {/* Graphic Design */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass rounded-2xl p-8 neon-border-hover group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500/20 to-pink-600/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Graphic Design</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We create stunning visual identities that make your brand stand out. From logos to marketing materials, our graphic design services help you communicate your message effectively and memorably.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  Brand Identity Design
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  Marketing Collateral
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  Social Media Graphics
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  Print Design
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Additional Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8"
          >
            <h3 className="font-display text-2xl font-bold mb-8 text-center">More Services We Offer</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {/* App Development */}
              <div className="glass rounded-2xl p-6 neon-border-hover group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-600/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-display text-lg font-bold mb-2">App Development</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Build powerful mobile applications for iOS and Android. We create native and cross-platform apps that deliver exceptional user experiences and performance.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs px-2 py-1 rounded-full bg-orange-500/10 text-orange-400">iOS Apps</span>
                      <span className="text-xs px-2 py-1 rounded-full bg-orange-500/10 text-orange-400">Android Apps</span>
                      <span className="text-xs px-2 py-1 rounded-full bg-orange-500/10 text-orange-400">React Native</span>
                      <span className="text-xs px-2 py-1 rounded-full bg-orange-500/10 text-orange-400">Flutter</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Digital Marketing */}
              <div className="glass rounded-2xl p-6 neon-border-hover group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500/20 to-green-600/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-display text-lg font-bold mb-2">Digital Marketing</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Grow your online presence with data-driven marketing strategies. From SEO to social media campaigns, we help you reach and engage your target audience effectively.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs px-2 py-1 rounded-full bg-green-500/10 text-green-400">SEO</span>
                      <span className="text-xs px-2 py-1 rounded-full bg-green-500/10 text-green-400">Social Media</span>
                      <span className="text-xs px-2 py-1 rounded-full bg-green-500/10 text-green-400">PPC Ads</span>
                      <span className="text-xs px-2 py-1 rounded-full bg-green-500/10 text-green-400">Content Marketing</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Video Production */}
              <div className="glass rounded-2xl p-6 neon-border-hover group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-500/20 to-red-600/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-display text-lg font-bold mb-2">Video Production</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Professional video production and editing services that bring your stories to life. From corporate videos to promotional content, we handle everything from concept to final cut.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs px-2 py-1 rounded-full bg-red-500/10 text-red-400">Corporate Videos</span>
                      <span className="text-xs px-2 py-1 rounded-full bg-red-500/10 text-red-400">Commercials</span>
                      <span className="text-xs px-2 py-1 rounded-full bg-red-500/10 text-red-400">Video Editing</span>
                      <span className="text-xs px-2 py-1 rounded-full bg-red-500/10 text-red-400">Photography</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Animation & VFX */}
              <div className="glass rounded-2xl p-6 neon-border-hover group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-display text-lg font-bold mb-2">Animation & VFX</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Create stunning 2D and 3D animations with cinematic visual effects. Perfect for explainer videos, product demos, and bringing imaginative concepts to reality.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs px-2 py-1 rounded-full bg-cyan-500/10 text-cyan-400">2D Animation</span>
                      <span className="text-xs px-2 py-1 rounded-full bg-cyan-500/10 text-cyan-400">3D Modeling</span>
                      <span className="text-xs px-2 py-1 rounded-full bg-cyan-500/10 text-cyan-400">Motion Graphics</span>
                      <span className="text-xs px-2 py-1 rounded-full bg-cyan-500/10 text-cyan-400">VFX/CGI</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Print Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-6 glass rounded-2xl p-6 neon-border-hover"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500/20 to-indigo-600/10 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="font-display text-lg font-bold">Digital & Offset Print</h4>
                  <p className="text-sm text-muted-foreground">
                    High-quality printing services for all your business needs. From business cards to large format banners, we deliver premium print materials with exceptional finishing.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 rounded-full bg-indigo-500/10 text-indigo-400">Business Cards</span>
                <span className="text-xs px-2 py-1 rounded-full bg-indigo-500/10 text-indigo-400">Brochures</span>
                <span className="text-xs px-2 py-1 rounded-full bg-indigo-500/10 text-indigo-400">Banners</span>
                <span className="text-xs px-2 py-1 rounded-full bg-indigo-500/10 text-indigo-400">Packaging</span>
                <span className="text-xs px-2 py-1 rounded-full bg-indigo-500/10 text-indigo-400">Offset Printing</span>
                <span className="text-xs px-2 py-1 rounded-full bg-indigo-500/10 text-indigo-400">Digital Printing</span>
              </div>
            </motion.div>
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
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
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
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <motion.div 
                key={v.title} 
                className="glass rounded-2xl p-7 neon-border-hover"
                initial={{ opacity: 0, rotateY: -90 }}
                whileInView={{ opacity: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <v.icon className="h-7 w-7 text-primary" />
                </motion.div>
                <h3 className="mt-5 font-display text-xl font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
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
          <div className="flex animate-[marquee_50s_linear_infinite] whitespace-nowrap">
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
          <div className="flex animate-[marquee-reverse_50s_linear_infinite] whitespace-nowrap">
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
          <div className="flex animate-[marquee_50s_linear_infinite] whitespace-nowrap">
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

      {/* Works */}
      <section id="works" className="py-32 relative scroll-mt-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ background: "var(--gradient-radial)" }} />
        
        {/* 3D Spinning Circle */}
        <motion.div
          className="absolute top-1/4 right-10 w-56 h-56 opacity-25"
          style={{ perspective: "1000px" }}
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <motion.div
            className="w-full h-full rounded-full border-[3px] border-primary/40"
            style={{ transformStyle: "preserve-3d" }}
            animate={{
              rotateX: [0, 360],
              rotateZ: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>

        {/* Blinking Dots Grid */}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={`work-dot-${i}`}
            className="absolute w-2 h-2 rounded-full bg-primary"
            style={{
              left: `${10 + (i % 4) * 25}%`,
              top: `${20 + Math.floor(i / 4) * 30}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeading
              eyebrow="Portfolio"
              title={<>Our <span className="text-gradient-red">Works</span></>}
            />
          </motion.div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {workCategories.map((category, i) => {
              const CardContent = (
                <motion.div
                  className="group h-full"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                >
                  <div className="glass rounded-2xl overflow-hidden neon-border-hover h-full flex flex-col cursor-pointer">
                    <motion.div 
                      className="aspect-[4/3] bg-white/5 flex items-center justify-center p-8 overflow-hidden"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-contain"
                      />
                    </motion.div>
                    <div className="p-6 border-t border-border/50 flex-1">
                      <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {category.description}
                      </p>
                      {category.sectionId && (
                        <motion.p 
                          className="text-xs text-primary mt-3 flex items-center gap-1"
                          initial={{ x: 0 }}
                          whileHover={{ x: 5 }}
                        >
                          View Projects
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </motion.p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );

              return category.sectionId ? (
                <a key={category.id} href={`#${category.sectionId}`}>
                  {CardContent}
                </a>
              ) : (
                <div key={category.id}>
                  {CardContent}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Website Development Projects */}
      <section id="website-development" className="py-32 scroll-mt-20 relative overflow-hidden bg-surface/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-between mb-12">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary">⏤ Portfolio</span>
                <h2 className="mt-2 font-display text-3xl md:text-5xl font-bold">
                  Website <span className="text-gradient-red">Development</span>
                </h2>
                <p className="mt-4 text-muted-foreground">Custom-built websites showcasing our expertise in modern web development</p>
              </div>
              <a href="#works" className="hidden md:inline-flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all">
                <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                Back to Works
              </a>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {websiteProjects.map((project, index) => (
              <motion.a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="group cursor-pointer"
              >
                <div className="glass rounded-2xl overflow-hidden neon-border-hover transition-all hover:scale-105">
                  <div className="p-4 border-b border-border/50">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display text-lg font-semibold group-hover:text-primary transition-colors">
                        {project.name}
                      </h3>
                      <svg className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="relative bg-white/5 overflow-hidden aspect-[4/3]">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* UI/UX Design Projects */}
      <section id="ui-ux-design" className="py-32 scroll-mt-20 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-between mb-12">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary">⏤ Portfolio</span>
                <h2 className="mt-2 font-display text-3xl md:text-5xl font-bold">
                  UI/UX <span className="text-gradient-red">Design</span>
                </h2>
                <p className="mt-4 text-muted-foreground">User-centered designs that create delightful experiences</p>
              </div>
              <a href="#works" className="hidden md:inline-flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all">
                <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                Back to Works
              </a>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {uiuxProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="group"
              >
                <div className="glass rounded-2xl overflow-hidden neon-border-hover transition-all hover:scale-105">
                  <div className="relative bg-white/5 overflow-hidden aspect-[9/16]">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-contain p-4"
                      loading="lazy"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Graphic Design Projects */}
      <section id="graphic-design" className="py-32 scroll-mt-20 relative overflow-hidden bg-surface/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-between mb-12">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary">⏤ Portfolio</span>
                <h2 className="mt-2 font-display text-3xl md:text-5xl font-bold">
                  Graphic <span className="text-gradient-red">Design</span>
                </h2>
                <p className="mt-4 text-muted-foreground">Visual identities and designs that stand out</p>
              </div>
              <a href="#works" className="hidden md:inline-flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all">
                <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                Back to Works
              </a>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {graphicProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.03 }}
                className="group"
              >
                <div className="glass rounded-2xl overflow-hidden neon-border-hover transition-all hover:scale-105">
                  <div className="relative bg-white/95 overflow-hidden aspect-square p-4">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
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
              <ContactCard icon={<Mail className="h-5 w-5" />} label="Email" value="hello@darkelitecreations.com" href="mailto:hello@darkelitecreations.com" />
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
