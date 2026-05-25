import { useState, useEffect, useRef } from "react";
import "./index.css";


// ─── Shared ───────────────────────────────────────────────────────────────────

function ChevronDown() {
  return (
    <svg
      className="w-4 h-4 inline ml-1"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}
function GlobeIcon() {
  return (
    <svg
      className="w-5 h-5 inline"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="10" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"
      />
    </svg>
  );
}

const C = { navy: "#041cb3", sky: "#5e9cf2" };

// ─── Navbar ───────────────────────────────────────────────────────────────────

function Navbar() {
  const [aiOpen, setAiOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  return (
    <nav className="bg-white shadow-sm sticky self-center w-full max-w-275 rounded-2xl mt-4 z-50 shrink-0">
      <div className="max-w-screen-xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <img
            src="/logo.png"
            alt="CareerSwift"
            className="h-9 w-auto object-contain"
          />
          <div className="relative hidden md:block">
            <button
              className="flex items-center font-medium text-[#041cb3] hover:opacity-75"
              onClick={() => {
                setAiOpen((o) => !o);
                setLangOpen(false);
              }}
            >
              AI Tools <ChevronDown />
            </button>
            {aiOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50">
                {[
                  "LinkedIn Score",
                  "Resume Builder",
                  "Cover Letter",
                  "AI Interviewer",
                  "Chrome Extension",
                ].map((i) => (
                  <a
                    key={i}
                    href="#"
                    className="block px-4 py-2 text-sm text-[#041cb3] hover:bg-gray-50"
                  >
                    {i}
                  </a>
                ))}
              </div>
            )}
          </div>
          {["Pricing", "Blog", "Contact Us"].map((l) => (
            <a
              key={l}
              href="#"
              className="hidden md:block font-medium text-[#041cb3] hover:opacity-75"
            >
              {l}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-5">
          <div className="relative">
            <button
              className="flex items-center gap-1 text-[#041cb3] hover:opacity-75"
              onClick={() => {
                setLangOpen((o) => !o);
                setAiOpen(false);
              }}
            >
              <GlobeIcon />
              <ChevronDown />
            </button>
            {langOpen && (
              <div className="absolute top-full right-0 mt-2 w-36 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50">
                {["English", "Español", "Français", "Deutsch"].map((l) => (
                  <a
                    key={l}
                    href="#"
                    className="block px-4 py-2 text-sm text-[#041cb3] hover:bg-gray-50"
                  >
                    {l}
                  </a>
                ))}
              </div>
            )}
          </div>
          <a href="#" className="font-medium text-[#041cb3] hover:opacity-75">
            Log In
          </a>
          <a
            href="#"
            className="px-5 py-2 rounded-lg bg-[#041cb3] text-white font-semibold text-sm hover:bg-[#0318a0] transition-colors"
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
}

// ─── LEFT: Social proof ───────────────────────────────────────────────────────


function LeftColumn() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 px-4 py-6 max-w-60 h-full">
      <div className="text-center">
        <p
          style={{ fontSize: "clamp(1.22rem, 2.2vw, 2.4rem)", color: C.navy }}
          className="font-extrabold leading-none"
        >
          14,200+
        </p>
        <p
          style={{ fontSize: "clamp(0.6rem, 0.9vw, 0.75rem)", color: C.navy }}
          className="opacity-50 uppercase tracking-widest mt-1"
        >
          careers launched
        </p>
      </div>

      <div className="flex flex-col items-center gap-1">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg key={i} className="w-3.5 h-3.5 text-yellow-400 fill-current shrink-0" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <span style={{ fontSize: "clamp(0.6rem, 0.85vw, 0.7rem)", color: C.navy }} className="opacity-50">
          4.9 · 2,100 reviews
        </span>
      </div>

      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 w-full">
        <p
          style={{ fontSize: "clamp(0.68rem, 1vw, 0.82rem)", color: C.navy }}
          className="opacity-80 leading-snug mb-3"
        >
          "I struggle to tailor my resume for each job application. It's time-consuming and I'm never sure if I'm highlighting the right skills. With CareerSwift I found an easier way to make sure my resume fits every job I apply for."
        </p>
        <div className="flex items-center gap-2.5">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
            style={{ background: C.navy }}
          >
            MC
          </div>
          <p style={{ fontSize: "clamp(0.65rem, 0.95vw, 0.78rem)", color: C.navy }} className="font-semibold">
            Marcus Chen
          </p>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 w-full">
        <p
          style={{ fontSize: "clamp(0.68rem, 1vw, 0.82rem)", color: C.navy }}
          className="opacity-80 leading-snug mb-3"
        >
          "I'll be honest! It's brilliant! And I loved it. Especially the design. It's well implemented and the user experience is on the highest level. Still there are few things I haven't yet figured out, but yes, it's overall brilliant!"
        </p>
        <div className="flex items-center gap-2.5">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
            style={{ background: "#2d2d2d" }}
          >
            KK
          </div>
          <p style={{ fontSize: "clamp(0.65rem, 0.95vw, 0.78rem)", color: C.navy }} className="font-semibold">
            Ketty Klaim
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── MIDDLE: Headline + image + chat form + CTA ───────────────────────────────

const STEPS = [
  {
    key: "role",
    question: "What role are you targeting?",
    placeholder: "e.g. Product Manager",
    type: "text" as const,
  },
  {
    key: "level",
    question: "What level?",
    type: "select" as const,
    options: ["Entry", "Mid-level", "Senior", "Lead / Manager"],
  },
  {
    key: "location",
    question: "Where are you based?",
    placeholder: "e.g. New York, Remote",
    type: "text" as const,
  },
];

function ChatForm({
  step,
  onAdvance,
}: {
  step: number;
  onAdvance: (v: string) => void;
}) {
  const [val, setVal] = useState("");
  const taRef = useRef<HTMLTextAreaElement>(null);
  const s = STEPS[step];

  const submit = (v: string) => {
    if (!v.trim()) return;
    onAdvance(v.trim());
    setVal("");
    if (taRef.current) taRef.current.style.height = "auto";
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setVal(e.target.value);
    if (taRef.current) {
      taRef.current.style.height = "auto";
      taRef.current.style.height = `${taRef.current.scrollHeight}px`;
    }
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white w-full shadow-sm overflow-hidden">
      {s.type === "select" && (
        <div className="flex flex-wrap gap-2 px-4 pt-3 pb-1">
          {s.options!.map((o) => (
            <button
              key={o}
              onClick={() => submit(o)}
              className="px-3 py-1.5 rounded-full border text-sm hover:bg-gray-50 transition-colors"
              style={{ borderColor: C.navy, color: C.navy }}
            >
              {o}
            </button>
          ))}
        </div>
      )}
      <div className="flex items-center gap-2 px-4 py-3">
        <button className="text-gray-400 hover:text-gray-600 text-xl font-light leading-none shrink-0">+</button>
        <textarea
          ref={taRef}
          autoFocus
          value={val}
          onChange={handleChange}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              submit(val);
            }
          }}
          placeholder={s.type === "text" ? s.placeholder : "or type a custom answer…"}
          rows={1}
          className="flex-1 outline-none text-sm text-gray-700 placeholder:text-gray-400 bg-transparent resize-none overflow-hidden leading-5"
          style={{ maxHeight: "120px", overflowY: "auto" }}
        />
        <button
          onClick={() => submit(val)}
          className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 hover:opacity-80 transition-opacity"
          style={{ background: C.navy }}
        >
          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

function MiddleColumn() {
  const [step, setStep] = useState(0);
  const [history, setHistory] = useState<{ q: string; a: string }[]>([]);
  const [done, setDone] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleAdvance = (v: string) => {
    setHistory((h) => [...h, { q: STEPS[step].question, a: v }]);
    if (step + 1 < STEPS.length) setStep((s) => s + 1);
    else setDone(true);
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <div className="flex flex-col py-0 px-2 self-center h-full min-w-0 max-w-165 w-full">
      {/* Hero copy — fixed at top */}
      <div className="text-center shrink-0 pt-4 pb-6">
        <h1
          style={{ fontSize: "clamp(2.4rem, 3.6vw, 3.3rem)", color: C.navy }}
          className="font-extrabold pb-8 leading-tight"
        >
          Finding a career is tough.
          <br />
          Why fight fair?
        </h1>
        <div className="flex justify-center">
          <img src="/swiftbot1.png" alt="winking robot" className="w-90" />
        </div>
        <div className="flex justify-center pt-4">
          <h1
            style={{ fontSize: "clamp(2.4rem, 3.6vw, 3.3rem)", color: C.navy }}
            className="font-extrabold leading-tight"
          >
            Follow the <span className="text-[#6a0486]">swift and <span className="land-target">land</span></span>
          </h1>
        </div>
      </div>

      {/* Scrollable output — fades behind hero at top */}
      <div className="relative flex-1 min-h-0 overflow-hidden">
        <div
          className="absolute top-0 inset-x-0 h-16 pointer-events-none z-10"
          style={{ background: "linear-gradient(to bottom, #f8f3e4, transparent)" }}
        />
        <div ref={scrollRef} className="h-full overflow-y-auto flex flex-col justify-end gap-3 pb-4 px-1">
          {history.map((item, i) => (
            <div key={i} className="flex flex-col gap-1">
              <div className="self-start rounded-2xl rounded-tl-sm px-3 py-2 max-w-[80%] bg-white border border-gray-100 shadow-sm">
                <span className="text-sm text-gray-500">{item.q}</span>
              </div>
              <div
                className="self-end rounded-2xl rounded-tr-sm px-3 py-2 max-w-[80%]"
                style={{ background: C.navy }}
              >
                <span className="text-sm text-white font-medium">{item.a}</span>
              </div>
            </div>
          ))}
          {!done && (
            <div className="self-start rounded-2xl rounded-tl-sm px-3 py-2 max-w-[80%] bg-white border border-gray-100 shadow-sm">
              <span className="text-sm text-gray-600">
                {step === 0
                  ? "Let's customize your swift plan. What role are you targeting?"
                  : STEPS[step].question}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Chat box + CTA pinned at bottom */}
      <div className="shrink-0 flex flex-col items-center gap-3 pb-4 pt-2">
        {!done ? (
          <ChatForm key={step} step={step} onAdvance={handleAdvance} />
        ) : (
          <div className="bg-white rounded-2xl border border-[#5e9cf2] px-4 py-4 text-center w-full">
            <p style={{ fontSize: "clamp(0.72rem, 1.05vw, 0.83rem)", color: C.navy }} className="opacity-60">
              Ready to build your plan 🎯
            </p>
          </div>
        )}
        <button
          style={{ fontSize: "clamp(0.8rem, 1.2vw, 0.95rem)" }}
          className="w-55 py-3 mt-6 bg-[#041cb3] text-white font-bold rounded-xl shadow-lg hover:bg-[#0318a0] transition-colors"
        >
          Start Now For Free →
        </button>
      </div>
    </div>
  );
}

// ─── MODALS ───────────────────────────────────────────────────────────────────

function ResumeModal() {
  return (
    <div className="overflow-hidden rounded-b-2xl h-120">
      <img src="/resume.png" alt="Resume Builder" className="w-full h-full object-cover object-center" />
    </div>
  );
}

function CoverLetterModal() {
  return (
    <div className="overflow-hidden rounded-b-2xl h-120">
      <img src="/cover-letter.png" alt="Cover Letter" className="w-full h-full object-cover object-center" />
    </div>
  );
}

function LinkedInModal() {
  return (
    <div className="overflow-hidden rounded-b-2xl h-120">
      <img src="/linkedin-score.png" alt="LinkedIn Score" className="w-full h-full object-cover object-center" />
    </div>
  );
}

function InterviewModal() {
  return (
    <div className="overflow-hidden rounded-b-2xl h-120">
      <img src="/ai-interview.png" alt="Mock Interview" className="w-full h-full object-cover object-center" />
    </div>
  );
}

function TrackerModal() {
  return (
    <div className="overflow-hidden rounded-b-2xl h-120">
      <img src="/job-tracker.png" alt="Job Tracker" className="w-full h-full object-cover object-center" />
    </div>
  );
}

const MODAL_CONTENT: Record<
  string,
  { title: string; component: () => ReturnType<typeof ResumeModal> }
> = {
  resume: { title: "Resume Builder", component: ResumeModal },
  coverletter: { title: "Cover Letter", component: CoverLetterModal },
  linkedin: { title: "LinkedIn Score", component: LinkedInModal },
  interview: { title: "Mock Interview", component: InterviewModal },
  tracker: { title: "Job Tracker", component: TrackerModal },
};

function Modal({ id, onClose }: { id: string; onClose: () => void }) {
  const m = MODAL_CONTENT[id];
  if (!m) return null;
  const Content = m.component;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/75 backdrop-blur-lg" />
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[80vh] overflow-y-auto flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 pt-4 pb-2 border-b border-gray-100 shrink-0">
          <p
            style={{ fontSize: "clamp(0.85rem, 1.3vw, 1rem)", color: C.navy }}
            className="font-bold"
          >
            {m.title}
          </p>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-lg leading-none"
          >
            ✕
          </button>
        </div>
        <Content />
      </div>
    </div>
  );
}

// ─── RIGHT: Feature panel ─────────────────────────────────────────────────────

const FEATURES = [
  {
    id: "resume",
    title: "Resume Builder",
    desc: "ATS-optimized in minutes",
    icon: (
      <svg
        className="w-5 h-5 shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    id: "coverletter",
    title: "Cover Letter",
    desc: "Tailored to every role",
    icon: (
      <svg
        className="w-5 h-5 shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    id: "linkedin",
    title: "LinkedIn Score",
    desc: "Rank higher in searches",
    icon: (
      <svg
        className="w-5 h-5 shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
  {
    id: "interview",
    title: "Mock Interview",
    desc: "AI-powered practice rounds",
    icon: (
      <svg
        className="w-5 h-5 shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 016 0v6a3 3 0 01-3 3z"
        />
      </svg>
    ),
  },
  {
    id: "tracker",
    title: "Job Tracker",
    desc: "Pipeline at a glance",
    icon: (
      <svg
        className="w-5 h-5 shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
];

function FeaturePanel({ onOpen }: { onOpen: (id: string) => void }) {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setInterval(
      () => setActive((i) => (i + 1) % FEATURES.length),
      2000,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <aside className="w-[150px] shrink-0 h-full flex flex-col gap-10 py-2 pr-2">
      {FEATURES.map((f, i) => {
        const lit = i === active;
        return (
          <div
            key={f.id}
            onClick={() => onOpen(f.id)}
            className="bg-white rounded-xl px-3 py-3 cursor-pointer flex-1 flex flex-col justify-center"
            style={{
              border: `1.5px solid ${lit ? C.sky : "#f3f4f6"}`,
              boxShadow: lit ? `0 0 0 3px ${C.sky}33` : undefined,
            }}
          >
            <div
              className="flex flex-col items-center gap-1 mb-0.5"
              style={{ color: lit ? C.sky : "#4b5563" }}
            >
              {f.icon}
              <span
                style={{ fontSize: "clamp(0.65rem, 0.95vw, 0.78rem)" }}
                className="font-semibold leading-tight text-center"
              >
                {f.title}
              </span>
            </div>
            <span
              style={{
                fontSize: "clamp(0.58rem, 0.85vw, 0.68rem)",
                color: lit ? C.sky : "#4b5563",
              }}
              className="opacity-55 leading-tight text-center"
            >
              {f.desc}
            </span>
          </div>
        );
      })}
    </aside>
  );
}

// ─── Swift bird animation ─────────────────────────────────────────────────────

function SwiftBirdAnimation() {
  const [state, setState] = useState<{ pathD: string; key: number } | null>(null);

  useEffect(() => {
    let debounce: ReturnType<typeof setTimeout>;
    let runCount = 0;

    const calc = () => {
      const logoImg = document.querySelector(
        'nav img[alt="CareerSwift"]',
      ) as HTMLImageElement | null;
      const landEl = document.querySelector(".land-target") as HTMLElement | null;
      if (!logoImg || !landEl) return;

      const lr = logoImg.getBoundingClientRect();
      const ld = landEl.getBoundingClientRect();
      const vw = window.innerWidth;

      const sx = lr.right - lr.width * 0.07;
      const sy = lr.top + lr.height * 0.5;

      const ex = ld.left + ld.width * 0.65 + 20;
      const ey = ld.top + ld.height * 0.08 + 1;

      // Cap control points so the arc stays within the viewport at any width
      const cp1x = Math.min(vw * 0.92, Math.max(sx, ex) + 460);
      const cp1y = sy + 15;
      const cp2x = Math.min(vw * 0.88, ex + 290);
      const cp2y = ey - 210;

      const pathD =
        `M ${sx.toFixed(1)},${sy.toFixed(1)} ` +
        `C ${cp1x.toFixed(1)},${cp1y.toFixed(1)} ` +
        `${cp2x.toFixed(1)},${cp2y.toFixed(1)} ` +
        `${ex.toFixed(1)},${ey.toFixed(1)}`;

      setState({ pathD, key: ++runCount });
    };

    const onResize = () => {
      clearTimeout(debounce);
      debounce = setTimeout(calc, 200);
    };

    const t = setTimeout(calc, 150);
    window.addEventListener("resize", onResize);
    return () => {
      clearTimeout(t);
      clearTimeout(debounce);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  if (!state) return null;

  return (
    <>
      <style>{`
        @keyframes swiftPath {
          from { offset-distance: 0%; }
          to   { offset-distance: 100%; }
        }
        @keyframes swiftSpin {
          0%  { transform: rotate(45deg); animation-timing-function: linear; }
          80% { transform: rotate(45deg); animation-timing-function: cubic-bezier(0, 0, 0.2, 1); }
          100%{ transform: rotate(0deg); }
        }
        .swift-bird {
          position: fixed;
          top: 0;
          left: 0;
          width: 36px;
          height: auto;
          z-index: 999;
          pointer-events: none;
          offset-path: path('${state.pathD}');
          offset-rotate: 0deg;
          animation:
            swiftPath 2.8s ease-in-out 0.5s both,
            swiftSpin 2.8s linear      0.5s both;
        }
      `}</style>
      <img key={state.key} className="swift-bird" src="/swift-animated.png" alt="" />
    </>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [modal, setModal] = useState<string | null>(null);

  return (
    <div
      className="h-screen flex flex-col overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 55% 50%, #f3efd3 0%, #f6e3ba 45%, #fdf9ee 85%, #fffef8 100%)",
      }}
    >
      <Navbar />

      {/* Three-column body — no scroll */}
      <div
        className="flex flex-1 min-h-0 w-full p-4 md:p-6 xl:p-10 gap-4 xl:gap-6
                      flex-col md:flex-row md:overflow-hidden overflow-y-auto"
      >
        {/* Left — hidden below 1200px */}
        <div className="hidden min-[1200px]:block min-[1200px]:w-55 shrink-0 overflow-y-auto">
          <LeftColumn />
        </div>

        {/* Middle */}
        <div className="flex-1 min-w-0 flex flex-col md:overflow-y-auto">
          <MiddleColumn />
        </div>

        {/* Right — hidden below 1050px */}
        <div className="hidden min-[1050px]:flex min-[1050px]:flex-col shrink-0">
          <FeaturePanel onOpen={(id) => setModal(id)} />
        </div>
      </div>

      {modal && <Modal id={modal} onClose={() => setModal(null)} />}
      <SwiftBirdAnimation />
    </div>
  );
}
