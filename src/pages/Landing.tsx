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
} from "lucide-react";
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
  { name: "Coffee", hex: "#2c1a0e", category: "Dark" },
  { name: "Cocoa", hex: "#4a3428", category: "Dark" },
  { name: "Matcha", hex: "#a8c5a0", category: "Creamy" },
  { name: "Tea", hex: "#c4a882", category: "Creamy" },
  { name: "Milk", hex: "#f5f0e8", category: "Creamy" },
  { name: "Oat", hex: "#ede6d6", category: "Creamy" },
  { name: "Digital Cyan", hex: "#00e5cc", category: "Digital" },
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
      className="min-h-screen bg-miix-milk text-miix-coffee"
    >
      {/* ─── NAV ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b-2 border-miix-coffee bg-miix-oat/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center border-2 border-miix-coffee bg-miix-coffee">
              <span className="text-xs font-bold text-miix-milk miix-font-mono">
                M
              </span>
            </div>
            <span className="text-sm font-bold uppercase tracking-[0.2em]">
              Miix Studio
            </span>
          </div>
          <div className="hidden items-center gap-5 sm:flex">
            <a href="#identity" className="miix-font-mono text-[11px] font-bold uppercase tracking-wider text-miix-coffee/50 transition-colors hover:text-miix-cyan">
              Identity
            </a>
            <a href="#philosophy" className="miix-font-mono text-[11px] font-bold uppercase tracking-wider text-miix-coffee/50 transition-colors hover:text-miix-cyan">
              Philosophy
            </a>
            <a href="#visual" className="miix-font-mono text-[11px] font-bold uppercase tracking-wider text-miix-coffee/50 transition-colors hover:text-miix-cyan">
              Visual
            </a>
            <a href="#colors" className="miix-font-mono text-[11px] font-bold uppercase tracking-wider text-miix-coffee/50 transition-colors hover:text-miix-cyan">
              Colors
            </a>
            <span className="miix-font-mono text-[10px] text-miix-coffee/30">
              v1.0.0
            </span>
            <button
              onClick={() => navigate("/auth")}
              className="border-2 border-miix-coffee bg-miix-coffee px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-miix-milk transition-all hover:bg-miix-cyan hover:text-miix-coffee hover:shadow-[2px_2px_0px_#2c1a0e]"
            >
              Enter System →
            </button>
          </div>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen border-b-2 border-miix-coffee pt-20 miix-grid-bg">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-32 md:pb-24">
          {/* Terminal tag */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 border-2 border-miix-coffee bg-miix-oat px-3 py-1.5"
          >
            <Terminal className="h-3.5 w-3.5" />
            <span className="miix-font-mono text-xs font-medium uppercase tracking-wider">
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
              <span className="ml-4 inline-block border-2 border-miix-coffee bg-miix-cyan px-3 py-1 text-miix-coffee">
                Mixed.
              </span>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-8 max-w-2xl border-l-4 border-miix-cyan pl-6 text-lg leading-relaxed text-miix-coffee/70"
          >
            จุดตัดระหว่างความคิดแบบ Analog ที่เน้นความเข้าใจในตัวตน เข้ากับ
            เทคโนโลยี Digital ที่แม่นยำและไร้รอยต่อ
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
              className="group flex items-center gap-3 border-2 border-miix-coffee bg-miix-coffee px-8 py-4 text-sm font-bold uppercase tracking-wider text-miix-milk transition-all hover:bg-miix-cyan hover:text-miix-coffee hover:shadow-[4px_4px_0px_#2c1a0e]"
            >
              Enter the System
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href="#philosophy"
              className="flex items-center gap-3 border-2 border-miix-coffee bg-transparent px-8 py-4 text-sm font-bold uppercase tracking-wider text-miix-coffee transition-all hover:bg-miix-oat hover:shadow-[4px_4px_0px_#2c1a0e]"
            >
              Read the Philosophy
            </a>
          </motion.div>

          {/* Status bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="mt-16 flex flex-wrap gap-6 border-t-2 border-miix-coffee/20 pt-6"
          >
            {[
              { label: "Status", value: "Online" },
              { label: "Mode", value: "Analog × Digital" },
              { label: "Version", value: "1.0.0" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <span className="miix-font-mono text-xs text-miix-coffee/40">
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
        <div className="absolute right-0 bottom-0 hidden h-full w-80 border-l-2 border-miix-coffee/10 bg-miix-oat/50 lg:block">
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
                <div className="flex-1 border-l-2 border-miix-coffee/20 pl-3">
                  <p className="text-xs font-bold uppercase tracking-wider">
                    {event.label}
                  </p>
                  <p className="miix-font-mono text-[10px] text-miix-coffee/40">
                    {event.status}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHAT IS MIIX ─── */}
      <section className="border-b-2 border-miix-coffee bg-miix-oat">
        <div id="identity" className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <motion.div {...fadeUp}>
              <div className="mb-6 inline-flex items-center gap-2 border-2 border-miix-coffee bg-miix-milk px-3 py-1.5">
                <Coffee className="h-3.5 w-3.5" />
                <span className="miix-font-mono text-xs font-medium uppercase tracking-wider">
                  01 / Identity
                </span>
              </div>
              <h2 className="mb-6 text-4xl font-black uppercase leading-tight tracking-tight md:text-5xl">
                What is
                <br />
                Miix Studio?
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-miix-coffee/70">
                <p>
                  <strong className="text-miix-coffee">Miix = การผสมผสาน</strong>{" "}
                  สิ่งดี ๆ ให้กลายเป็นสิ่งที่ใช้งานได้จริง
                </p>
                <p>
                  เราคือจุดตัดระหว่างความคิดแบบ Analog ที่เน้นความเข้าใจในตัวตนและธรรมชาติของวัตถุดิบ
                  เข้ากับเทคโนโลยี Digital ที่แม่นยำและไร้รอยต่อ
                </p>
                <p>
                  เราไม่ยึดติดกับสไตล์ของใครหรือกระแสนิยมที่ไร้รากฐาน
                  ผลิตภัณฑ์ทุกชิ้นของเราต้องมี{" "}
                  <span className="border-b-2 border-miix-cyan font-bold text-miix-coffee">
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
              <div className="w-full border-2 border-miix-coffee bg-miix-milk p-8">
                <div className="mb-4 flex items-center gap-2 border-b-2 border-miix-coffee/20 pb-4">
                  <Terminal className="h-4 w-4 text-miix-cyan" />
                  <span className="miix-font-mono text-xs font-bold uppercase tracking-wider">
                    BrandMIX.dll
                  </span>
                </div>
                <pre className="miix-font-mono text-xs leading-relaxed text-miix-coffee/60">
{`// Miix Studio — Brand DNA
// ─────────────────────────

const BrandMIX = {
  identity:    "Analog × Digital",
  purpose:     "Good Ideas, Well Mixed",
  approach:    "Function → Form",
  principle:   "Less Decoration, More Meaning",
  signature:   "ทุกชิ้นงานต้องมีลายเซ็น Miix",
  rejection:   "ไม่ยึดติดกับกระแส",
};

// Status: ACTIVE
// Mode:  HYBRID
// Auth:  VERIFIED`}
                </pre>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── DESIGN PHILOSOPHY ─── */}
      <section
        id="philosophy"
        className="border-b-2 border-miix-coffee bg-miix-coffee text-miix-milk"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <motion.div {...fadeUp} className="mb-16">
            <div className="mb-6 inline-flex items-center gap-2 border-2 border-miix-cyan bg-transparent px-3 py-1.5">
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
                className="group border-2 border-miix-milk/20 p-6 transition-all hover:border-miix-cyan hover:bg-miix-milk/5"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center border-2 border-miix-cyan/30 text-miix-cyan transition-colors group-hover:border-miix-cyan group-hover:bg-miix-cyan group-hover:text-miix-coffee">
                  <p.icon className="h-5 w-5" />
                </div>
                <p className="miix-font-mono mb-2 text-[10px] text-miix-cyan/60">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mb-2 text-sm font-bold uppercase tracking-wider">
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed text-miix-milk/60">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── VISUAL LANGUAGE ─── */}
      <section id="visual" className="border-b-2 border-miix-coffee bg-miix-milk miix-grid-bg-strong">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <motion.div {...fadeUp} className="mb-16">
            <div className="mb-6 inline-flex items-center gap-2 border-2 border-miix-coffee bg-miix-oat px-3 py-1.5">
              <Terminal className="h-3.5 w-3.5" />
              <span className="miix-font-mono text-xs font-medium uppercase tracking-wider">
                03 / Visual Language
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
              className="border-2 border-miix-coffee bg-miix-oat p-8"
            >
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider">
                Terminal / Early Digital
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-miix-coffee/70">
                อ้างอิงความคลาสสิกของยุคเริ่มต้นของ Digital Interface เส้น
                ตัวอักษร และตัวเลข ถูกวางในระบบ Grid ที่คำนวณมาอย่างดี
              </p>
              <div className="border-2 border-miix-coffee bg-miix-coffee p-4">
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
                  <p className="text-miix-milk/50">
                    → System ready. All components aligned.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Timeline as Component */}
            <motion.div
              {...fadeUp}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="border-2 border-miix-coffee bg-miix-oat p-8"
            >
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider">
                Timeline as Component
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-miix-coffee/70">
                เวลา (Timeline) คือองค์ประกอบหลักที่บ่งบอกถึงจังหวะของการทำงาน
              </p>
              <div className="space-y-3">
                {[
                  { step: "01", label: "Brief", active: true },
                  { step: "02", label: "Research", active: true },
                  { step: "03", label: "Design", active: true },
                  { step: "04", label: "Develop", active: false },
                  { step: "05", label: "Launch", active: false },
                ].map((s) => (
                  <div
                    key={s.step}
                    className="flex items-center gap-3 border-2 border-miix-coffee/20 bg-miix-milk px-4 py-2.5"
                  >
                    <span
                      className={`miix-font-mono text-xs font-bold ${s.active ? "text-miix-cyan" : "text-miix-coffee/30"}`}
                    >
                      {s.step}
                    </span>
                    <div
                      className={`h-2 w-2 ${s.active ? "bg-miix-cyan" : "bg-miix-coffee/20"}`}
                    />
                    <span
                      className={`text-xs font-bold uppercase tracking-wider ${s.active ? "text-miix-coffee" : "text-miix-coffee/30"}`}
                    >
                      {s.label}
                    </span>
                    {s.active && (
                      <span className="miix-font-mono ml-auto text-[10px] text-miix-cyan">
                        ● ACTIVE
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Space & Logic */}
            <motion.div
              {...fadeUp}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="border-2 border-miix-coffee bg-miix-oat p-8"
            >
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider">
                Space & Logic
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-miix-coffee/70">
                พื้นที่ว่าง (White Space) ไม่ใช่แค่การเว้น
                แต่คือการจัดระเบียบให้ลำดับการอ่านชัดเจน
              </p>
              <div className="grid grid-cols-3 gap-2">
                <div className="col-span-2 border-2 border-miix-coffee bg-miix-coffee p-4">
                  <p className="miix-font-mono text-[10px] text-miix-cyan">
                    PRIMARY
                  </p>
                  <p className="mt-1 text-sm font-bold uppercase">
                    Hierarchy Matters
                  </p>
                </div>
                <div className="border-2 border-miix-coffee/30 bg-miix-milk p-4">
                  <p className="miix-font-mono text-[10px] text-miix-coffee/40">
                    SECONDARY
                  </p>
                </div>
                <div className="border-2 border-miix-coffee/30 bg-miix-milk p-4">
                  <p className="miix-font-mono text-[10px] text-miix-coffee/40">
                    TERTIARY
                  </p>
                </div>
                <div className="col-span-2 border-2 border-miix-coffee/20 bg-miix-oat p-4">
                  <p className="miix-font-mono text-[10px] text-miix-coffee/40">
                    SUPPORTING
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Visual Integrity */}
            <motion.div
              {...fadeUp}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="border-2 border-miix-coffee bg-miix-oat p-8"
            >
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider">
                Visual Integrity
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-miix-coffee/70">
                เราไม่ใช้กราฟิกเพื่อประดับให้สวยงามโดยปราศจากเหตุผล
                ทุกจุดสีและเส้นสายคือส่วนหนึ่งของการทำงานของระบบ
              </p>
              <div className="flex items-end gap-2">
                {[40, 65, 50, 80, 70, 55, 90, 60, 75, 85].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 border-2 border-miix-coffee"
                    style={{ height: `${h * 0.4}px` }}
                  >
                    <div
                      className={`h-full ${i % 3 === 0 ? "bg-miix-cyan" : i % 3 === 1 ? "bg-miix-coffee" : "bg-miix-matcha"}`}
                    />
                  </div>
                ))}
              </div>
              <p className="miix-font-mono mt-2 text-[10px] text-miix-coffee/40">
                Every pixel has purpose. Every color has reason.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── COLOR DNA ─── */}
      <section id="colors" className="border-b-2 border-miix-coffee bg-miix-coffee text-miix-milk">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <motion.div {...fadeUp} className="mb-16">
            <div className="mb-6 inline-flex items-center gap-2 border-2 border-miix-cyan bg-transparent px-3 py-1.5">
              <Leaf className="h-3.5 w-3.5 text-miix-cyan" />
              <span className="miix-font-mono text-xs font-medium uppercase tracking-wider text-miix-cyan">
                04 / Color DNA
              </span>
            </div>
            <h2 className="text-4xl font-black uppercase leading-tight tracking-tight md:text-5xl">
              From Ingredient
              <br />
              to Digital
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-miix-milk/60">
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
                className="border-2 border-miix-milk/20 transition-all hover:border-miix-cyan"
              >
                <div
                  className="h-24 border-b-2 border-miix-milk/20"
                  style={{ backgroundColor: c.hex }}
                />
                <div className="p-4">
                  <p className="text-sm font-bold uppercase tracking-wider">
                    {c.name}
                  </p>
                  <p className="miix-font-mono mt-1 text-[10px] text-miix-milk/50">
                    {c.hex}
                  </p>
                  <p className="miix-font-mono mt-1 text-[10px] text-miix-cyan/60">
                    {c.category}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHAT WE ARE NOT ─── */}
      <section className="border-b-2 border-miix-coffee bg-miix-oat">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <motion.div {...fadeUp} className="mb-16">
            <div className="mb-6 inline-flex items-center gap-2 border-2 border-miix-coffee bg-miix-milk px-3 py-1.5">
              <Eye className="h-3.5 w-3.5" />
              <span className="miix-font-mono text-xs font-medium uppercase tracking-wider">
                05 / Boundaries
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
                className="border-2 border-miix-coffee bg-miix-milk p-6 transition-all hover:border-miix-cyan hover:shadow-[4px_4px_0px_#00e5cc]"
              >
                <div className="mb-3 flex items-center gap-2">
                  <span className="miix-font-mono text-lg font-bold text-miix-cyan">
                    ✕
                  </span>
                  <h3 className="text-xs font-bold uppercase tracking-wider">
                    {item.label}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-miix-coffee/60">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── UX PHILOSOPHY ─── */}
      <section className="border-b-2 border-miix-coffee bg-miix-milk miix-grid-bg">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <motion.div {...fadeUp} className="mb-16">
            <div className="mb-6 inline-flex items-center gap-2 border-2 border-miix-coffee bg-miix-oat px-3 py-1.5">
              <Zap className="h-3.5 w-3.5" />
              <span className="miix-font-mono text-xs font-medium uppercase tracking-wider">
                06 / UX
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
              },
              {
                role: "Assistant",
                question: '"ต้องทำอะไรต่อ"',
                answer: "ขั้นตอนงานถัดไป",
                icon: "10",
              },
              {
                role: "Manager",
                question: '"ระบบกำลังเกิดอะไรขึ้น"',
                answer: "ภาพรวม / Dashboard",
                icon: "11",
              },
            ].map((item, i) => (
              <motion.div
                key={item.role}
                {...stagger}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="border-2 border-miix-coffee bg-miix-coffee p-6"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="miix-font-mono text-xs font-bold text-miix-cyan">
                    [{item.icon}]
                  </span>
                  <span className="border border-miix-cyan/30 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-miix-cyan">
                    {item.role}
                  </span>
                </div>
                <p className="mb-2 text-lg font-bold text-miix-milk">
                  {item.question}
                </p>
                <p className="miix-font-mono text-xs text-miix-milk/50">
                  → {item.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="border-b-2 border-miix-coffee bg-miix-coffee text-miix-milk">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <motion.div {...fadeUp} className="text-center">
            <div className="mb-8 inline-flex items-center gap-2 border-2 border-miix-cyan bg-transparent px-3 py-1.5">
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
            <p className="mx-auto mb-10 max-w-lg text-sm leading-relaxed text-miix-milk/60">
              เข้าร่วมกับ Miix Studio — ที่ซึ่งความคิดแบบ Analog
              ผสานกับเทคโนโลยี Digital เพื่อสร้างผลิตภัณฑ์ที่มีลายเซ็นของตัวเอง
            </p>
            <button
              onClick={() => navigate("/auth?returnTo=/dashboard")}
              className="group inline-flex items-center gap-3 border-2 border-miix-milk bg-miix-milk px-10 py-5 text-sm font-bold uppercase tracking-wider text-miix-coffee transition-all hover:bg-miix-cyan hover:border-miix-cyan hover:shadow-[4px_4px_0px_#f5f0e8]"
            >
              Enter the System
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-miix-coffee text-miix-milk">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="flex flex-col items-center justify-between gap-4 border-t border-miix-milk/20 pt-8 sm:flex-row">
            <div className="flex items-center gap-3">
              <div className="flex h-6 w-6 items-center justify-center border border-miix-cyan">
                <span className="text-[8px] font-bold text-miix-cyan miix-font-mono">
                  M
                </span>
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.15em]">
                Miix Studio
              </span>
            </div>
            <div className="flex items-center gap-6">
              <span className="miix-font-mono text-[10px] text-miix-milk/30">
                Good Ideas, Well Mixed.
              </span>
              <span className="miix-font-mono text-[10px] text-miix-milk/30">
                © 2026
              </span>
            </div>
          </div>
        </div>
      </footer>
    </motion.div>
  );
}
