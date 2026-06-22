import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  UploadCloud,
  FileText,
  Brain,
  BookOpenCheck,
  ArrowRight,
  Zap,
  CheckCircle2,
  ChevronRight,
  Menu,
  X,
  Sparkles,
} from "lucide-react";

/* ---------------------------------------------------------
   DOT MATRIX / BLUEPRINT BACKGROUND
   A subtle, slow-drifting dotted grid. Pure CSS background-position
   animation driven by Framer Motion — cheap on the GPU, no canvas needed.
--------------------------------------------------------- */
function DotGridBackground({ className = "" }) {
  return (
    <motion.div
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(15,15,15,0.12) 1px, transparent 1px)",
        backgroundSize: "26px 26px",
      }}
      animate={{ backgroundPosition: ["0px 0px", "26px 26px"] }}
      transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
    />
  );
}

/* ---------------------------------------------------------
   NAV
--------------------------------------------------------- */
function Nav() {
  const [open, setOpen] = useState(false);
  const links = ["Product", "How it works", "Pricing", "Docs"];

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b-2 border-black bg-[#FAF9F6]/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black flex items-center justify-center rounded-sm">
              <FileText className="w-4 h-4 text-amber-400" strokeWidth={2.5} />
            </div>
            <span className="font-semibold tracking-tight text-black text-lg">
              Brief<span className="text-blue-700">ly</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l}
                href="#"
                className="text-sm font-medium text-neutral-600 hover:text-black transition-colors"
              >
                {l}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#"
              className="text-sm font-medium text-neutral-700 hover:text-black px-3 py-2"
            >
              Sign in
            </a>
            <motion.a
              href="#"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="text-sm font-semibold bg-black text-white px-4 py-2.5 rounded-md border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              Try it free
            </motion.a>
          </div>

          <button
            onClick={() => setOpen((o) => !o)}
            className="md:hidden p-2 border-2 border-black rounded-md"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t-2 border-black bg-[#FAF9F6]"
          >
            <div className="px-5 py-4 flex flex-col gap-4">
              {links.map((l) => (
                <a key={l} href="#" className="text-sm font-medium text-neutral-700">
                  {l}
                </a>
              ))}
              <a
                href="#"
                className="text-sm font-semibold bg-black text-white px-4 py-2.5 rounded-md text-center border-2 border-black"
              >
                Try it free
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ---------------------------------------------------------
   HERO
--------------------------------------------------------- */
function Hero() {
  return (
    <section className="relative pt-40 pb-24 px-5 sm:px-8 overflow-hidden border-b-2 border-black">
      <DotGridBackground className="opacity-60" />
      {/* fade mask so grid doesn't feel uniform/flat */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 30%, transparent 0%, #FAF9F6 75%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 border-2 border-black rounded-full px-4 py-1.5 mb-8 bg-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span className="text-xs font-semibold tracking-wide uppercase">
            Now reading 40-page PDFs in 9 seconds
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-black leading-[1.02]"
        >
          Turn Messy Documents
          <br />
          into{" "}
          <span className="relative inline-block">
            <span className="relative z-10">Instant Clarity</span>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
              style={{ originX: 0 }}
              className="absolute left-0 right-0 bottom-1 h-4 sm:h-5 bg-amber-300 -z-0"
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-7 text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed"
        >
          Drop in any contract, report, or research paper. Our engine extracts
          what matters and structures it into a clean, readable brief —
          formatted exactly the way you need it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.96 }}
            className="group flex items-center gap-2 bg-black text-white font-semibold px-7 py-3.5 rounded-md border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
          >
            Summarise a document
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-2 bg-white text-black font-semibold px-7 py-3.5 rounded-md border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
          >
            Watch demo
          </motion.a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 text-xs font-medium text-neutral-500 tracking-wide uppercase"
        >
          No credit card · 25 free summaries · Cancel anytime
        </motion.p>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------
   VISUALIZER — messy text scanned by amber laser → structured card
--------------------------------------------------------- */
function Visualizer() {
  const containerRef = useRef(null);
  const [cycle, setCycle] = useState(0);

  // loop the scan animation
  useEffect(() => {
    const t = setInterval(() => setCycle((c) => c + 1), 4200);
    return () => clearInterval(t);
  }, []);

  const messyLines = [
    { w: "92%" },
    { w: "78%" },
    { w: "85%" },
    { w: "60%" },
    { w: "95%" },
    { w: "70%" },
    { w: "88%" },
    { w: "55%" },
  ];

  const summaryPoints = [
    "Q3 revenue grew 18% YoY, driven by enterprise tier",
    "Churn dropped to 2.1%, lowest in company history",
    "New pricing model launches in November",
    "Support headcount to double by year end",
  ];

  return (
    <section className="relative px-5 sm:px-8 py-24 bg-[#FAF9F6] border-b-2 border-black overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          ref={containerRef}
          className="relative bg-white border-2 border-black rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden"
        >
          {/* fake window chrome */}
          <div className="flex items-center gap-2 px-5 py-3.5 border-b-2 border-black bg-neutral-50">
            <div className="w-3 h-3 rounded-full bg-neutral-300 border border-black" />
            <div className="w-3 h-3 rounded-full bg-neutral-300 border border-black" />
            <div className="w-3 h-3 rounded-full bg-neutral-300 border border-black" />
            <span className="ml-3 text-xs font-mono text-neutral-500">
              quarterly-report.pdf — Briefly
            </span>
          </div>

          <div className="grid md:grid-cols-2 divide-y-2 md:divide-y-0 md:divide-x-2 divide-black">
            {/* LEFT: messy doc with scanning laser */}
            <div className="relative p-8 sm:p-10 h-[340px] overflow-hidden">
              <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-5">
                Raw input
              </p>
              <div className="space-y-3.5">
                {messyLines.map((l, i) => (
                  <div
                    key={i}
                    className="h-2.5 rounded-sm bg-neutral-200"
                    style={{ width: l.w }}
                  />
                ))}
              </div>

              {/* scanning laser line */}
              <motion.div
                key={cycle}
                initial={{ top: "8%" }}
                animate={{ top: "92%" }}
                transition={{ duration: 1.8, ease: "easeInOut", delay: 0.3 }}
                className="absolute left-0 right-0 h-[3px]"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, #FBBF24 20%, #FBBF24 80%, transparent)",
                  boxShadow: "0 0 12px 2px rgba(251,191,36,0.7)",
                }}
              />
            </div>

            {/* RIGHT: structured summary card, fades/builds in after scan */}
            <div className="relative p-8 sm:p-10 h-[340px] bg-neutral-50">
              <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-5">
                Structured brief
              </p>
              <div className="space-y-3.5">
                {summaryPoints.map((point, i) => (
                  <motion.div
                    key={`${cycle}-${i}`}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 2.1 + i * 0.22,
                    }}
                    className="flex items-start gap-2.5"
                  >
                    <div className="mt-1 w-3.5 h-3.5 rounded-sm bg-blue-700 flex-shrink-0 flex items-center justify-center">
                      <CheckCircle2 className="w-2.5 h-2.5 text-white" strokeWidth={3} />
                    </div>
                    <span className="text-sm text-neutral-800 leading-snug font-medium">
                      {point}
                    </span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                key={`badge-${cycle}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 3.1, duration: 0.3 }}
                className="absolute bottom-7 right-7 flex items-center gap-1.5 bg-amber-300 border-2 border-black rounded-full px-3 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              >
                <Zap className="w-3 h-3" strokeWidth={2.5} />
                <span className="text-[10px] font-bold uppercase tracking-wide">
                  4 key points
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------
   FEATURES — bento grid
--------------------------------------------------------- */
function FeatureCard({ icon: Icon, title, desc, accent, className = "", delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4 }}
      className={`group relative border-2 border-black rounded-2xl p-7 bg-white shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-shadow ${className}`}
    >
      <div
        className={`w-11 h-11 rounded-lg flex items-center justify-center border-2 border-black mb-5 ${accent}`}
      >
        <Icon className="w-5 h-5 text-black" strokeWidth={2.2} />
      </div>
      <h3 className="text-lg font-bold text-black mb-2 tracking-tight">{title}</h3>
      <p className="text-sm text-neutral-600 leading-relaxed">{desc}</p>
    </motion.div>
  );
}

function Features() {
  return (
    <section className="relative px-5 sm:px-8 py-24 border-b-2 border-black bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-14"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-blue-700">
            Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-black mt-3 tracking-tight">
            Built for documents that actually matter
          </h2>
          <p className="text-neutral-600 mt-4 text-base leading-relaxed">
            Every feature is designed around one principle: never lose the
            signal in the noise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <FeatureCard
            icon={UploadCloud}
            title="Instant Uploads"
            desc="Drag in PDFs, Word docs, or scanned images. Parsing starts the moment the file lands."
            accent="bg-amber-300"
            delay={0}
          />
          <FeatureCard
            icon={FileText}
            title="Strict Formatting"
            desc="Output follows the exact structure you define — bullets, sections, or executive-style briefs."
            accent="bg-blue-200"
            delay={0.08}
          />
          <FeatureCard
            icon={Brain}
            title="Context Retention"
            desc="References across a 200-page document are tracked, so summaries never lose the thread."
            accent="bg-amber-300"
            delay={0.16}
          />
          <FeatureCard
            icon={BookOpenCheck}
            title="Readability First"
            desc="Every brief is scored for clarity and reading level before it reaches your inbox."
            accent="bg-blue-200"
            delay={0.24}
          />
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------
   HOW IT WORKS — 1-2-3
--------------------------------------------------------- */
function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Upload your document",
      desc: "Drop a file or paste a link. We support PDF, DOCX, TXT, and scanned images.",
    },
    {
      n: "02",
      title: "We extract & structure",
      desc: "Our engine reads, ranks, and organizes the content into a clean hierarchy.",
    },
    {
      n: "03",
      title: "Get your brief",
      desc: "Receive a formatted summary in seconds — ready to share or export.",
    },
  ];

  return (
    <section className="relative px-5 sm:px-8 py-24 bg-[#FAF9F6] border-b-2 border-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-xl mx-auto mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-blue-700">
            Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-black mt-3 tracking-tight">
            From document to clarity in three steps
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 relative">
          {/* connecting line on desktop */}
          <div className="hidden md:block absolute top-9 left-[16.5%] right-[16.5%] h-[2px] bg-black/15" />

          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative bg-white border-2 border-black rounded-2xl p-7 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]"
            >
              <div className="w-9 h-9 rounded-full bg-black text-amber-300 flex items-center justify-center font-bold text-xs mb-6 border-2 border-black relative z-10">
                {s.n}
              </div>
              <h3 className="text-lg font-bold text-black mb-2 tracking-tight">
                {s.title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">{s.desc}</p>
              {i < steps.length - 1 && (
                <ChevronRight className="hidden md:block absolute -right-4 top-9 w-5 h-5 text-black/30" strokeWidth={3} />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------
   CTA BANNER
--------------------------------------------------------- */
function CTABanner() {
  return (
    <section className="relative px-5 sm:px-8 py-24 bg-white overflow-hidden border-b-2 border-black">
      <DotGridBackground className="opacity-40" />
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative max-w-4xl mx-auto text-center bg-black rounded-3xl px-8 py-16 sm:py-20 border-2 border-black shadow-[8px_8px_0px_0px_rgba(251,191,36,1)]"
      >
        <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
          Stop reading. Start knowing.
        </h2>
        <p className="text-neutral-300 mt-5 text-base sm:text-lg max-w-md mx-auto">
          Your first 25 summaries are on us. No card required.
        </p>
        <motion.a
          href="#"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.96 }}
          className="inline-flex items-center gap-2 mt-9 bg-amber-300 text-black font-semibold px-7 py-3.5 rounded-md border-2 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] transition-all"
        >
          Get started free
          <ArrowRight className="w-4 h-4" />
        </motion.a>
      </motion.div>
    </section>
  );
}

/* ---------------------------------------------------------
   FOOTER
--------------------------------------------------------- */
function Footer() {
  const cols = [
    { title: "Product", items: ["Features", "Pricing", "Changelog", "Docs"] },
    { title: "Company", items: ["About", "Blog", "Careers", "Contact"] },
    { title: "Legal", items: ["Privacy", "Terms", "Security"] },
  ];

  return (
    <footer className="px-5 sm:px-8 py-16 bg-[#FAF9F6]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-black flex items-center justify-center rounded-sm">
                <FileText className="w-3.5 h-3.5 text-amber-400" strokeWidth={2.5} />
              </div>
              <span className="font-semibold tracking-tight text-black text-base">
                Briefly
              </span>
            </div>
            <p className="text-sm text-neutral-500 max-w-xs leading-relaxed">
              Smart document summarisation for teams who don't have time to
              read everything twice.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">
                {c.title}
              </h4>
              <ul className="space-y-2.5">
                {c.items.map((it) => (
                  <li key={it}>
                    <a
                      href="#"
                      className="text-sm text-neutral-600 hover:text-black transition-colors"
                    >
                      {it}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 pt-6 border-t-2 border-black/10 text-xs text-neutral-400">
          © 2026 Briefly Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

/* ---------------------------------------------------------
   ROOT
--------------------------------------------------------- */
export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] font-sans antialiased selection:bg-amber-300 selection:text-black">
      <Nav />
      <main>
        <Hero />
        <Visualizer />
        <Features />
        <HowItWorks />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}