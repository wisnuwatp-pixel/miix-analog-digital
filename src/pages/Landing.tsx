import { motion } from "framer-motion";
import {
  ArrowRight,
  Terminal,
  Layers,
  Type,
  BarChart3,
  Eye,
  Zap,
  Coffee,
  Leaf,
  Monitor,
  MessageSquare,
  Upload,
  LayoutDashboard,
} from "lucide-react";
import {
  FloppyIcon,
  HourglassIcon,
  CRTIcon,
  BrowserIcon,
  RSSIcon,
  GlobeIcon,
  LockIcon,
  ChatBubbleIcon,
  FolderIcon,
  CDDiscIcon,
  PixelStarIcon,
  ProgressBarIcon,
  RunningManIcon,
  ButterflyIcon,
  HappyMacIcon,
  WindowsFlagIcon,
} from "@/components/Y2KIcons";
import { useNavigate } from "react-router";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
};

const stagger = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-20px" },
};

const principles = [
  {
    icon: Zap,
    title: "Function before Decoration",
    desc: "ทุกองค์ประกอบต้องมีหน้าที่ก่อนตกแต่ง",
  },
  {
    icon: BarChart3,
    title: "Data as Graphic",
    desc: "ข้อมูลคือความสวยงาม เปลี่ยนตัวเลขให้เป็นกราฟิก",
  },
  {
    icon: Type,
    title: "Text as Interface",
    desc: "ตัวอักษรที่ชัดเจน ทำหน้าที่เป็นส่วนประสานที่ดีที่สุด",
  },
  {
    icon: Monitor,
    title: "Status-Driven",
    desc: "สถานะของระบบต้องเข้าใจได้ในทันที",
  },
  {
    icon: Layers,
    title: "Analog × Digital",
    desc: "ผสานสัมผัสแบบมนุษย์เข้ากับความเร็วของเทคโนโลยี",
  },
  {
    icon: Eye,
    title: "Less Decoration, More Meaning",
    desc: "ตัดทอนสิ่งที่ไม่จำเป็น เพื่อให้ความหมายเด่นชัด",
  },
];

const whatWeAreNot = [
  { label: "Not Trend Follower", desc: "ไม่ทำ UI ให้เหมือนคนอื่นเพียงเพราะกระแส" },
  { label: "Not Retro for Retro's sake", desc: "ความเป็น Retro ต้องมาจากเหตุผลของการใช้งาน" },
  { label: "Not Minimalism for Emptiness", desc: "พื้นที่ว่างเพื่อให้เนื้อหาสำคัญโดดเด่น" },
  { label: "Not Technology for Show", desc: "ใช้เทคโนโลยีเพื่อแก้ปัญหา ไม่ใช่เพื่อโชว์" },
  { label: "Not Decorative Art", desc: "ปฏิเสธกราฟิกที่สวยงามแต่ใช้งานจริงได้ยาก" },
];

const colorDna = [
  { name: "Espresso", hex: "#0e0a08", accent: "#1a1410" },
  { name: "Dark Cocoa", hex: "#1a1410", accent: "#2a2218" },
  { name: "Matcha", hex: "#96b88c", accent: "#7da872" },
  { name: "Honey", hex: "#d4a843", accent: "#c99a30" },
  { name: "Terracotta", hex: "#c4734e", accent: "#b56340" },
  { name: "Sage", hex: "#7da872", accent: "#6a9460" },
  { name: "Warm Stone", hex: "#c9a87c", accent: "#b89466" },
  { name: "Digital Cyan", hex: "#00dbc2", accent: "#00b8a1" },
];

const capabilities = [
  {
    icon: Upload,
    title: "Post & Share",
    desc: "สร้างและแบ่งปันเนื้อหาของคุณเอง ไม่ว่าจะเป็นบทความ รูปภาพ หรือไอเดีย",
  },
  {
    icon: MessageSquare,
    title: "Comment & Discuss",
    desc: "แลกเปลี่ยนความคิดเห็นกับชุมชน สร้างบทสนทนาที่มีความหมาย",
  },
  {
    icon: LayoutDashboard,
    title: "Your Dashboard",
    desc: "ดูเนื้อหา กิจกรรม และสถิติของคุณในที่เดียว เข้าใจสถานะได้ทันที",
  },
];

const timelineEvents = [
  { time: "001", label: "Concept", status: "Analog Thinking" },
  { time: "010", label: "Design", status: "Digital Translation" },
  { time: "011", label: "Build", status: "System Integration" },
  { time: "100", label: "Launch", status: "Status: Live" },
];

export default function Landing() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen text-miix-coffee"
    >
      {/* ─── NAV ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-miix-cyan/10 bg-miix-cream/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-md border border-miix-cyan/30 bg-miix-cyan/10">
              <span className="text-xs font-bold text-miix-cyan miix-font-mono">
                M
              </span>
            </div>
            <span className="text-sm font-bold uppercase tracking-[0.15em]">
              Miix <span className="text-miix-cyan">Analog</span> Digital
            </span>
          </div>
          <div className="hidden items-center gap-5 sm:flex">
            <a href="#identity" className="miix-font-mono text-[11px] font-bold uppercase tracking-wider text-miix-milk/40 transition-colors hover:text-miix-cyan">
              Identity
            </a>
            <a href="#philosophy" className="miix-font-mono text-[11px] font-bold uppercase tracking-wider text-miix-milk/40 transition-colors hover:text-miix-cyan">
              Philosophy
            </a>
            <a href="#platform" className="miix-font-mono text-[11px] font-bold uppercase tracking-wider text-miix-milk/40 transition-colors hover:text-miix-cyan">
              Platform
            </a>
            <a href="#heritage" className="miix-font-mono text-[11px] font-bold uppercase tracking-wider text-miix-milk/40 transition-colors hover:text-miix-honey">
              Heritage
            </a>
            <a href="#colors" className="miix-font-mono text-[11px] font-bold uppercase tracking-wider text-miix-milk/40 transition-colors hover:text-miix-cyan">
              Colors
            </a>
            <button
              onClick={() => navigate("/auth")}
              className="rounded-md border border-miix-cyan/30 bg-miix-cyan/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-miix-cyan transition-all hover:bg-miix-cyan hover:text-miix-cream hover:border-miix-cyan"
            >
              Enter System →
            </button>
          </div>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen border-b border-miix-cyan/5 pt-20 miix-grad-hero miix-grid-bg">
        {/* Decorative glow */}
        <div className="pointer-events-none absolute top-32 left-1/4 h-96 w-96 rounded-full bg-miix-cyan/5 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-20 right-1/4 h-64 w-64 rounded-full bg-miix-honey/5 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-32 md:pb-24">
          {/* Terminal tag */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 rounded-md border border-miix-cyan/20 bg-miix-cyan/5 px-3 py-1.5"
          >
            <Terminal className="h-3.5 w-3.5 text-miix-cyan" />
            <span className="miix-font-mono text-xs font-medium uppercase tracking-wider text-miix-cyan">
              System.boot()
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="max-w-5xl text-[clamp(2.5rem,8vw,7rem)] font-black uppercase leading-[0.85] tracking-tight"
          >
            Good Ideas,
            <br />
            <span className="relative inline-block">
              Well
              <span className="ml-4 inline-block rounded-md border border-miix-cyan/40 bg-miix-cyan/10 px-3 py-1 text-miix-cyan shadow-[0_0_30px_#00dbc220]">
                Mixed.
              </span>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-8 max-w-2xl rounded-md border-l-4 border-miix-cyan/40 bg-miix-cyan/5 pl-6 pr-4 py-4 text-lg leading-relaxed text-miix-milk/60"
          >
            แพลตฟอร์มที่ผสานความคิดสร้างสรรค์แบบ Analog เข้ากับเทคโนโลยี Digital
            — ที่ซึ่งคุณสร้างเนื้อหา เชื่อมต่อชุมชน และเป็นเจ้าของพื้นที่ของตัวเอง
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-12 flex flex-wrap gap-4"
          >
            <button
              onClick={() => navigate("/auth?returnTo=/dashboard")}
              className="group flex items-center gap-3 rounded-md border border-miix-cyan/40 bg-miix-cyan/10 px-8 py-4 text-sm font-bold uppercase tracking-wider text-miix-cyan transition-all hover:bg-miix-cyan hover:text-miix-cream hover:shadow-[0_0_30px_#00dbc230]"
            >
              Enter the System
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href="#platform"
              className="flex items-center gap-3 rounded-md border border-miix-milk/10 bg-miix-milk/5 px-8 py-4 text-sm font-bold uppercase tracking-wider text-miix-milk/60 transition-all hover:bg-miix-milk/10 hover:text-miix-milk hover:border-miix-milk/20"
            >
              Explore the Platform
            </a>
          </motion.div>

          {/* Status bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="mt-16 flex flex-wrap gap-6 rounded-md border border-miix-cyan/5 bg-miix-cyan/3 px-4 py-4"
          >
            {[
              { label: "Status", value: "Online" },
              { label: "Mode", value: "Analog × Digital" },
              { label: "Version", value: "1.0.0" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <span className="miix-font-mono text-xs text-miix-milk/30">
                  {item.label}:
                </span>
                <span className="miix-font-mono text-xs font-bold text-miix-cyan">
                  {item.value}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Decorative right panel */}
        <div className="absolute right-0 bottom-0 hidden h-full w-80 border-l border-miix-cyan/5 bg-miix-cyan/2 lg:block">
          <div className="flex h-full flex-col justify-center gap-4 px-6">
            {timelineEvents.map((event, i) => (
              <motion.div
                key={event.time}
                {...stagger}
                transition={{ delay: 0.8 + i * 0.1, duration: 0.4 }}
                className="flex items-start gap-3"
              >
                <span className="miix-font-mono text-xs font-bold text-miix-cyan">
                  {event.time}
                </span>
                <div className="flex-1 border-l border-miix-cyan/10 pl-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-miix-milk/80">
                    {event.label}
                  </p>
                  <p className="miix-font-mono text-[10px] text-miix-milk/30">
                    {event.status}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHAT IS MIIX ─── */}
      <section className="border-b border-miix-cyan/5 miix-grad-warm">
        <div id="identity" className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <motion.div {...fadeUp}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-miix-cyan/15 bg-miix-cyan/5 px-3 py-1.5">
                <Coffee className="h-3.5 w-3.5 text-miix-cyan" />
                <span className="miix-font-mono text-xs font-medium uppercase tracking-wider text-miix-cyan">
                  01 / Identity
                </span>
              </div>
              <h2 className="mb-6 text-4xl font-black uppercase leading-tight tracking-tight md:text-5xl">
                What is
                <br />
                Miix Analog Digital?
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-miix-milk/50">
                <p>
                  <strong className="text-miix-milk">Miix = การผสมผสาน</strong>{" "}
                  สิ่งดี ๆ ให้กลายเป็นสิ่งที่ใช้งานได้จริง
                </p>
                <p>
                  เราคือจุดตัดระหว่างความคิดแบบ Analog ที่เน้นความเข้าใจในตัวตนและธรรมชาติของวัตถุดิบ
                  เข้ากับเทคโนโลยี Digital ที่แม่นยำและไร้รอยต่อ
                </p>
                <p>
                  เราไม่ยึดติดกับสไตล์ของใครหรือกระแสนิยมที่ไร้รากฐาน
                  ทุกฟีเจอร์ที่เราสร้างต้องมี{" "}
                  <span className="border-b border-miix-cyan/40 font-bold text-miix-cyan">
                    "ลายเซ็นของ Miix"
                  </span>{" "}
                  ที่บ่งบอกถึงความตั้งใจและการใช้งานที่ถูกคิดมาอย่างถ่องแท้
                </p>
              </div>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="flex items-center"
            >
              <div className="w-full rounded-lg border border-miix-cyan/10 bg-miix-oat/80 p-8">
                <div className="mb-4 flex items-center gap-2 border-b border-miix-cyan/10 pb-4">
                  <Terminal className="h-4 w-4 text-miix-cyan" />
                  <span className="miix-font-mono text-xs font-bold uppercase tracking-wider text-miix-cyan">
                    BrandMIX.dll
                  </span>
                </div>
                <pre className="miix-font-mono text-xs leading-relaxed text-miix-milk/40">
{`// Miix Analog Digital — Brand DNA
// ────────────────────────────────

const BrandMIX = {
  identity:    "Analog × Digital",
  purpose:     "Good Ideas, Well Mixed",
  approach:    "Function → Form",
  principle:   "Less Decoration, More Meaning",
  signature:   "ทุกฟีเจอร์ต้องมีลายเซ็น Miix",
  rejection:   "ไม่ยึดติดกับกระแส",
};

// Status:  ACTIVE
// Mode:   HYBRID
// Auth:   VERIFIED`}
                </pre>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── DESIGN PHILOSOPHY ─── */}
      <section
        id="philosophy"
        className="border-b border-miix-cyan/5 miix-grad-cyan-dark text-miix-milk"
      >
        {/* Decorative glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-miix-cyan/5 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
          <motion.div {...fadeUp} className="mb-16">
            <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-miix-cyan/20 bg-miix-cyan/10 px-3 py-1.5">
              <Layers className="h-3.5 w-3.5 text-miix-cyan" />
              <span className="miix-font-mono text-xs font-medium uppercase tracking-wider text-miix-cyan">
                02 / Philosophy
              </span>
            </div>
            <h2 className="text-4xl font-black uppercase leading-tight tracking-tight md:text-5xl">
              Design
              <br />
              Principles
            </h2>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((p, i) => (
              <motion.div
                key={p.title}
                {...stagger}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="group rounded-lg border border-miix-cyan/8 bg-miix-cyan/3 p-6 transition-all hover:border-miix-cyan/25 hover:bg-miix-cyan/5"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md border border-miix-cyan/20 text-miix-cyan transition-all group-hover:border-miix-cyan/40 group-hover:bg-miix-cyan/10 group-hover:shadow-[0_0_15px_#00dbc220]">
                  <p.icon className="h-5 w-5" />
                </div>
                <p className="miix-font-mono mb-2 text-[10px] text-miix-cyan/50">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mb-2 text-sm font-bold uppercase tracking-wider text-miix-milk/90">
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed text-miix-milk/40">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PLATFORM CAPABILITIES ─── */}
      <section id="platform" className="border-b border-miix-cyan/5 miix-grad-dark miix-grid-bg-strong">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <motion.div {...fadeUp} className="mb-16">
            <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-miix-cyan/15 bg-miix-cyan/5 px-3 py-1.5">
              <Monitor className="h-3.5 w-3.5 text-miix-cyan" />
              <span className="miix-font-mono text-xs font-medium uppercase tracking-wider text-miix-cyan">
                03 / Platform
              </span>
            </div>
            <h2 className="text-4xl font-black uppercase leading-tight tracking-tight md:text-5xl">
              What You
              <br />
              Can Do
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-miix-milk/40">
              แพลตฟอร์มที่ออกแบบมาเพื่อคุณ — สร้างเนื้อหา เชื่อมต่อชุมชน
              และจัดการทุกอย่างจากแดชบอร์ดส่วนตัว
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                {...stagger}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="group rounded-lg border border-miix-cyan/10 bg-miix-oat/60 p-8 transition-all hover:border-miix-cyan/30 hover:shadow-[0_0_30px_#00dbc215]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-miix-cyan/20 bg-miix-cyan/5 text-miix-cyan transition-all group-hover:bg-miix-cyan/15 group-hover:shadow-[0_0_20px_#00dbc220]">
                  <cap.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-lg font-bold uppercase tracking-wider text-miix-milk/90">
                  {cap.title}
                </h3>
                <p className="text-sm leading-relaxed text-miix-milk/40">
                  {cap.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── VISUAL LANGUAGE ─── */}
      <section className="border-b border-miix-cyan/5 bg-miix-cream miix-grid-bg-strong">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <motion.div {...fadeUp} className="mb-16">
            <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-miix-cyan/15 bg-miix-cyan/5 px-3 py-1.5">
              <Terminal className="h-3.5 w-3.5 text-miix-cyan" />
              <span className="miix-font-mono text-xs font-medium uppercase tracking-wider text-miix-cyan">
                04 / Visual Language
              </span>
            </div>
            <h2 className="text-4xl font-black uppercase leading-tight tracking-tight md:text-5xl">
              The System
              <br />
              Aesthetic
            </h2>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Terminal / Early Digital */}
            <motion.div
              {...fadeUp}
              className="rounded-lg border border-miix-cyan/10 bg-miix-oat/60 p-8"
            >
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-miix-milk/80">
                Terminal / Early Digital
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-miix-milk/40">
                อ้างอิงความคลาสสิกของยุคเริ่มต้นของ Digital Interface เส้น
                ตัวอักษร และตัวเลข ถูกวางในระบบ Grid ที่คำนวณมาอย่างดี
              </p>
              <div className="rounded-md border border-miix-cyan/10 bg-miix-cream p-4">
                <div className="miix-font-mono space-y-1 text-xs text-miix-cyan">
                  <p>
                    <span className="text-miix-matcha">$</span> miix
                    --status=active
                  </p>
                  <p>
                    <span className="text-miix-matcha">$</span> grid --cols=12
                    --rows=auto
                  </p>
                  <p>
                    <span className="text-miix-matcha">$</span> render
                    --font=mono
                  </p>
                  <p className="text-miix-milk/40">
                    → System ready. All components aligned.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Timeline as Component */}
            <motion.div
              {...fadeUp}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="rounded-lg border border-miix-cyan/10 bg-miix-oat/60 p-8"
            >
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-miix-milk/80">
                Timeline as Component
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-miix-milk/40">
                เวลา (Timeline) คือองค์ประกอบหลักที่บ่งบอกถึงจังหวะของการทำงาน
              </p>
              <div className="space-y-3">
                {[
                  { step: "01", label: "Brief", active: true },
                  { step: "02", label: "Research", active: true },
                  { step: "03", label: "Design", active: true },
                  { step: "04", label: "Develop", active: false },
                  { step: "05", label: "Launch", active: false },
                ].map((s, si) => (
                  <motion.div
                    key={s.step}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: si * 0.08, duration: 0.35 }}
                    className="flex items-center gap-3 rounded-md border border-miix-cyan/8 bg-miix-cyan/3 px-4 py-2.5"
                  >
                    <span
                      className={`miix-font-mono text-xs font-bold ${s.active ? "text-miix-cyan" : "text-miix-milk/20"}`}
                    >
                      {s.step}
                    </span>
                    <div
                      className={`h-2 w-2 rounded-full ${s.active ? "bg-miix-cyan shadow-[0_0_8px_#00dbc260]" : "bg-miix-milk/10"}`}
                    />
                    <span
                      className={`text-xs font-bold uppercase tracking-wider ${s.active ? "text-miix-milk/80" : "text-miix-milk/20"}`}
                    >
                      {s.label}
                    </span>
                    {s.active && (
                      <span className="miix-font-mono ml-auto text-[10px] text-miix-cyan">
                        ● ACTIVE
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Space & Logic */}
            <motion.div
              {...fadeUp}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="rounded-lg border border-miix-cyan/10 bg-miix-oat/60 p-8"
            >
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-miix-milk/80">
                Space & Logic
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-miix-milk/40">
                พื้นที่ว่าง (White Space) ไม่ใช่แค่การเว้น
                แต่คือการจัดระเบียบให้ลำดับการอ่านชัดเจน
              </p>
              <div className="grid grid-cols-3 gap-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="col-span-2 rounded-md border border-miix-cyan/20 bg-miix-cream p-4"
                >
                  <p className="miix-font-mono text-[10px] text-miix-cyan">
                    PRIMARY
                  </p>
                  <p className="mt-1 text-sm font-bold uppercase text-miix-milk/80">
                    Hierarchy Matters
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08, duration: 0.4 }}
                  className="rounded-md border border-miix-cyan/8 bg-miix-oat/60 p-4"
                >
                  <p className="miix-font-mono text-[10px] text-miix-milk/25">
                    SECONDARY
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.16, duration: 0.4 }}
                  className="rounded-md border border-miix-cyan/8 bg-miix-oat/60 p-4"
                >
                  <p className="miix-font-mono text-[10px] text-miix-milk/25">
                    TERTIARY
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.24, duration: 0.4 }}
                  className="col-span-2 rounded-md border border-miix-cyan/5 bg-miix-cyan/2 p-4"
                >
                  <p className="miix-font-mono text-[10px] text-miix-milk/20">
                    SUPPORTING
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Visual Integrity */}
            <motion.div
              {...fadeUp}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="rounded-lg border border-miix-cyan/10 bg-miix-oat/60 p-8"
            >
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-miix-milk/80">
                Visual Integrity
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-miix-milk/40">
                เราไม่ใช้กราฟิกเพื่อประดับให้สวยงามโดยปราศจากเหตุผล
                ทุกจุดสีและเส้นสายคือส่วนหนึ่งของการทำงานของระบบ
              </p>
              <div className="flex items-end gap-2">
                {[40, 65, 50, 80, 70, 55, 90, 60, 75, 85].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.06, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
                    className="flex-1 rounded-t-sm border border-miix-cyan/10 origin-bottom"
                    style={{ height: `${h * 0.4}px` }}
                  >
                    <div
                      className={`h-full rounded-t-sm ${i % 3 === 0 ? "bg-miix-cyan/60" : i % 3 === 1 ? "bg-miix-honey/50" : "bg-miix-terracotta/50"}`}
                    />
                  </motion.div>
                ))}
              </div>
              <p className="miix-font-mono mt-2 text-[10px] text-miix-milk/20">
                Every pixel has purpose. Every color has reason.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── DIGITAL HERITAGE (Y2K Icons) ─── */}
      <section id="heritage" className="border-b border-miix-cyan/5 miix-grad-dark miix-grid-bg">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <motion.div {...fadeUp} className="mb-16">
            <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-miix-honey/20 bg-miix-honey/5 px-3 py-1.5">
              <FloppyIcon size={14} className="text-miix-honey" />
              <span className="miix-font-mono text-xs font-medium uppercase tracking-wider text-miix-honey">
                05 / Digital Heritage
              </span>
            </div>
            <h2 className="text-4xl font-black uppercase leading-tight tracking-tight md:text-5xl">
              Icons of the<br />
              <span className="text-miix-honey">Transition</span>
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-miix-milk/40">
              ยุค 1999–2005 คือช่วงเวลาแห่งการเปลี่ยนผ่าน — จาก CRT สู่ Flat Screen,
              จาก Floppy Disk สู่ USB, จาก Dial-up สู่ Broadband
              ไอคอนเหล่านี้คือสัญลักษณ์ของยุคที่ Analog พบกับ Digital
            </p>
          </motion.div>

          {/* Icon Grid */}
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {[
              { icon: FloppyIcon, name: "Floppy Disk", year: "1971–2010", desc: "สัญลักษณ์สากลของ Save" },
              { icon: HourglassIcon, name: "Hourglass", year: "1981–2007", desc: " cursors ที่ทุกคนรอคอย" },
              { icon: CRTIcon, name: "CRT Monitor", year: "1970–2005", desc: "จอภาพของยุคเริ่มต้น" },
              { icon: BrowserIcon, name: "Browser", year: "1993–", desc: "ประตูสู่ World Wide Web" },
              { icon: RSSIcon, name: "RSS Feed", year: "1999–", desc: "การป้อนข่าวสารยุคแรก" },
              { icon: GlobeIcon, name: "WWW Globe", year: "1990–", desc: "สัญลักษณ์ของอินเทอร์เน็ต" },
              { icon: LockIcon, name: "Security Lock", year: "1990s–", desc: "ยุคเริ่มต้นของ Web Security" },
              { icon: ChatBubbleIcon, name: "IM Chat", year: "1996–", desc: "AIM, ICQ, MSN Messenger" },
              { icon: FolderIcon, name: "Manila Folder", year: "1984–", desc: "ระบบจัดไฟล์ดิจิทัล" },
              { icon: CDDiscIcon, name: "CD-ROM", year: "1985–2010", desc: "สื่อบันทึกข้อมูลสุดคลาสสิก" },
              { icon: PixelStarIcon, name: "Pixel Star", year: "1990s–", desc: "ระบบให้คะแนนยุคแรก" },
              { icon: ProgressBarIcon, name: "Progress Bar", year: "1980s–", desc: "สถานะการโหลดแบบ Chunky" },
              { icon: RunningManIcon, name: "MSN Man", year: "1999–2013", desc: "สัญลักษณ์ status ของ MSN" },
              { icon: ButterflyIcon, name: "MSN Butterfly", year: "1999–2013", desc: "ไอคอน MSN Messenger" },
              { icon: HappyMacIcon, name: "Happy Mac", year: "1984–2001", desc: "หน้าจอ Boot ของ Macintosh" },
              { icon: WindowsFlagIcon, name: "Windows Flag", year: "1990–", desc: "สัญลักษณ์ Windows XP Luna" },
            ].map((item, i) => (
              <motion.div
                key={item.name}
                {...stagger}
                transition={{ delay: i * 0.04, duration: 0.35 }}
                className="group rounded-lg border border-miix-honey/8 bg-miix-honey/3 p-5 transition-all hover:border-miix-honey/25 hover:bg-miix-honey/5"
              >
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg border border-miix-honey/10 bg-miix-honey/5 transition-all group-hover:border-miix-honey/20 group-hover:bg-miix-honey/10 group-hover:shadow-[0_0_15px_#d4a84320]">
                  <item.icon size={28} />
                </div>
                <h4 className="mb-0.5 text-xs font-bold uppercase tracking-wider text-miix-milk/80">
                  {item.name}
                </h4>
                <p className="miix-font-mono text-[9px] text-miix-honey/50">
                  {item.year}
                </p>
                <p className="mt-1 text-[10px] leading-relaxed text-miix-milk/30">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Timeline strip */}
          <motion.div
            {...fadeUp}
            className="mt-12 rounded-lg border border-miix-honey/8 bg-miix-honey/3 p-6"
          >
            <div className="flex items-center gap-1 overflow-x-auto pb-2">
              {["1999", "2000", "2001", "2002", "2003", "2004", "2005"].map((year, i) => (
                <div key={year} className="flex flex-1 flex-col items-center gap-2">
                  <span className="miix-font-mono text-[10px] font-bold text-miix-honey/50">
                    {year}
                  </span>
                  <div className={`h-1 w-full rounded-full ${i === 2 ? "bg-miix-cyan" : i < 2 ? "bg-miix-honey/20" : "bg-miix-honey/10"}`} />
                  {i === 2 && (
                    <span className="text-[8px] text-miix-cyan">Mac OS X</span>
                  )}
                  {i === 3 && (
                    <span className="text-[8px] text-miix-honey/40">XP SP1</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── COLOR DNA ─── */}
      <section id="colors" className="border-b border-miix-cyan/5 miix-grad-dark text-miix-milk">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <motion.div {...fadeUp} className="mb-16">
            <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-miix-cyan/20 bg-miix-cyan/10 px-3 py-1.5">
              <Leaf className="h-3.5 w-3.5 text-miix-cyan" />
              <span className="miix-font-mono text-xs font-medium uppercase tracking-wider text-miix-cyan">
                06 / Color DNA
              </span>
            </div>
            <h2 className="text-4xl font-black uppercase leading-tight tracking-tight md:text-5xl">
              From Ingredient
              <br />
              to Digital
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-miix-milk/40">
              โทนสีที่ดึงมาจากวัตถุดิบจริง เพื่อให้ความรู้สึกที่จับต้องได้
              ผสานด้วย Digital Cyan ที่เป็นตัวเชื่อมโยงเทคโนโลยี
            </p>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {colorDna.map((c, i) => (
              <motion.div
                key={c.name}
                {...stagger}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="overflow-hidden rounded-lg border border-miix-cyan/8 transition-all hover:border-miix-cyan/30 hover:shadow-[0_0_20px_#00dbc210]"
              >
                <div
                  className="h-24 border-b border-miix-cyan/5 relative overflow-hidden"
                  style={{ backgroundColor: c.hex }}
                >
                  <div
                    className="absolute right-0 bottom-0 h-12 w-12 rounded-tl-lg"
                    style={{ backgroundColor: c.accent }}
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm font-bold uppercase tracking-wider text-miix-milk/80">
                    {c.name}
                  </p>
                  <p className="miix-font-mono mt-1 text-[10px] text-miix-milk/30">
                    {c.hex}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHAT WE ARE NOT ─── */}
      <section className="border-b border-miix-cyan/5 miix-grad-warm">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <motion.div {...fadeUp} className="mb-16">
            <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-miix-cyan/15 bg-miix-cyan/5 px-3 py-1.5">
              <Eye className="h-3.5 w-3.5 text-miix-cyan" />
              <span className="miix-font-mono text-xs font-medium uppercase tracking-wider text-miix-cyan">
                07 / Boundaries
              </span>
            </div>
            <h2 className="text-4xl font-black uppercase leading-tight tracking-tight md:text-5xl">
              What Miix
              <br />
              is NOT
            </h2>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whatWeAreNot.map((item, i) => (
              <motion.div
                key={item.label}
                {...stagger}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="rounded-lg border border-miix-cyan/8 bg-miix-oat/50 p-6 transition-all hover:border-miix-cyan/25 hover:shadow-[0_0_20px_#00dbc210]"
              >
                <div className="mb-3 flex items-center gap-2">
                  <span className="miix-font-mono text-lg font-bold text-miix-terracotta">
                    ✕
                  </span>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-miix-milk/80">
                    {item.label}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-miix-milk/40">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── UX PHILOSOPHY ─── */}
      <section className="border-b border-miix-cyan/5 bg-miix-cream miix-grid-bg">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <motion.div {...fadeUp} className="mb-16">
            <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-miix-cyan/15 bg-miix-cyan/5 px-3 py-1.5">
              <Zap className="h-3.5 w-3.5 text-miix-cyan" />
              <span className="miix-font-mono text-xs font-medium uppercase tracking-wider text-miix-cyan">
                08 / UX
              </span>
            </div>
            <h2 className="text-4xl font-black uppercase leading-tight tracking-tight md:text-5xl">
              Clarity for
              <br />
              Every Stakeholder
            </h2>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                role: "Customer",
                question: '"ฉันอยู่ตรงไหน"',
                answer: "สถานะการสั่งซื้อ / คิว",
                icon: "01",
                grad: "miix-grad-dark",
              },
              {
                role: "Creator",
                question: '"ต้องทำอะไรต่อ"',
                answer: "เครื่องมือสร้างเนื้อหาถัดไป",
                icon: "10",
                grad: "miix-grad-sage",
              },
              {
                role: "Manager",
                question: '"ระบบกำลังเกิดอะไรขึ้น"',
                answer: "ภาพรวม / Dashboard",
                icon: "11",
                grad: "miix-grad-cyan-dark",
              },
            ].map((item, i) => (
              <motion.div
                key={item.role}
                {...stagger}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className={`rounded-lg border border-miix-cyan/10 ${item.grad} p-6`}
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="miix-font-mono text-xs font-bold text-miix-cyan">
                    [{item.icon}]
                  </span>
                  <span className="rounded-md border border-miix-cyan/20 bg-miix-cyan/5 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-miix-cyan">
                    {item.role}
                  </span>
                </div>
                <p className="mb-2 text-lg font-bold text-miix-milk/90">
                  {item.question}
                </p>
                <p className="miix-font-mono text-xs text-miix-milk/40">
                  → {item.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="border-b border-miix-cyan/5 miix-grad-cyan-dark text-miix-milk relative overflow-hidden">
        {/* Decorative glows */}
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-miix-cyan/8 blur-[120px]" />
        <div className="pointer-events-none absolute -top-20 -left-20 h-60 w-60 rounded-full bg-miix-honey/5 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
          <motion.div {...fadeUp} className="text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-md border border-miix-cyan/20 bg-miix-cyan/10 px-3 py-1.5">
              <Monitor className="h-3.5 w-3.5 text-miix-cyan" />
              <span className="miix-font-mono text-xs font-medium uppercase tracking-wider text-miix-cyan">
                System Ready
              </span>
            </div>
            <h2 className="mb-6 text-4xl font-black uppercase leading-tight tracking-tight md:text-6xl">
              Ready to
              <br />
              <span className="text-miix-cyan">Mix</span>?
            </h2>
            <p className="mx-auto mb-10 max-w-lg text-sm leading-relaxed text-miix-milk/40">
              เข้าร่วม Miix Analog Digital — ที่ซึ่งคุณสร้างเนื้อหา
              เชื่อมต่อชุมชน และเป็นเจ้าของพื้นที่ดิจิทัลของตัวเอง
            </p>
            <button
              onClick={() => navigate("/auth?returnTo=/dashboard")}
              className="group inline-flex items-center gap-3 rounded-md border border-miix-cyan/40 bg-miix-cyan/10 px-10 py-5 text-sm font-bold uppercase tracking-wider text-miix-cyan backdrop-blur-sm transition-all hover:bg-miix-cyan hover:text-miix-cream hover:border-miix-cyan hover:shadow-[0_0_40px_#00dbc230]"
            >
              Enter the System
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="miix-grad-dark text-miix-milk">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-between gap-4 border-t border-miix-cyan/5 pt-8 sm:flex-row"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-sm border border-miix-cyan/30 bg-miix-cyan/10">
                <span className="text-[8px] font-bold text-miix-cyan miix-font-mono">
                  M
                </span>
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.15em]">
                Miix <span className="text-miix-cyan">Analog</span> Digital
              </span>
            </div>
            <div className="flex items-center gap-6">
              <span className="miix-font-mono text-[10px] text-miix-milk/20">
                Good Ideas, Well Mixed.
              </span>
              <span className="miix-font-mono text-[10px] text-miix-milk/20">
                © 2026
              </span>
            </div>
          </motion.div>
        </div>
      </footer>
    </motion.div>
  );
}
