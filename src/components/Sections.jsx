import { GraduationCap, Code, Shield, Gamepad2, Cpu, Mail, Phone, ChevronUp, Trophy, Briefcase } from 'lucide-react'

export function Education() {
  const items = [
    {
      title: 'B.Sc. Computer Science',
      org: 'ITMSLS Baroda University',
      detail: 'CGPA 8.64',
      period: 'Ongoing',
    },
    {
      title: 'Diploma in Information Technology',
      org: 'Diploma Program',
      detail: 'Core IT foundations',
      period: 'Completed',
    },
  ]
  return (
    <section id="education" className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-bold">Education</h2>
        <div className="mt-6 grid sm:grid-cols-2 gap-6">
          {items.map((it, i) => (
            <div key={i} className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm hover:shadow-md transition">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-amber-50 text-amber-900"><GraduationCap size={20} /></div>
                <div>
                  <h3 className="font-semibold">{it.title}</h3>
                  <p className="text-sm text-neutral-600">{it.org} • {it.period}</p>
                  <p className="mt-1 text-neutral-700 text-sm">{it.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Skills() {
  const items = [
    { name: 'HTML', icon: Code },
    { name: 'CSS', icon: Code },
    { name: 'JavaScript', icon: Code },
    { name: 'Python', icon: Cpu },
    { name: 'PHP', icon: Code },
    { name: 'C', icon: Code },
    { name: 'Cybersecurity', icon: Shield },
    { name: 'Android', icon: Phone },
    { name: 'Game Development', icon: Gamepad2 },
    { name: 'Problem Solving', icon: Trophy },
    { name: 'Collaboration', icon: Briefcase },
  ]
  return (
    <section id="skills" className="py-16 bg-gradient-to-b from-white to-neutral-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-bold">Skills</h2>
        <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((s) => (
            <div key={s.name} className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm hover:shadow-md transition flex items-center gap-3">
              <div className="p-2 rounded-lg bg-amber-50 text-amber-900">
                <s.icon size={18} />
              </div>
              <span className="text-sm">{s.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Experience() {
  const items = [
    {
      role: 'Web Developer Intern',
      org: 'Kode Creators',
      detail: 'Built playful Unity 2D games and participated in game jam events, collaborating with designers and developers to ship prototypes fast.',
    },
  ]
  return (
    <section id="experience" className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-bold">Experience</h2>
        <div className="mt-6 grid gap-6">
          {items.map((ex, i) => (
            <details key={i} className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
              <summary className="cursor-pointer list-none flex items-center justify-between font-medium">
                <div>
                  {ex.role} • <span className="text-neutral-600">{ex.org}</span>
                </div>
                <span className="text-neutral-400">(expand)</span>
              </summary>
              <p className="mt-3 text-neutral-700 leading-relaxed">{ex.detail}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Projects() {
  const items = [
    {
      name: 'Orbiaa Skill Swap App',
      stack: ['Android', 'Firebase', 'UI'],
      desc: 'A platform for learners to exchange skills and connect through communities.',
    },
    {
      name: 'IPL Winner Predictor',
      stack: ['Python', 'ML', 'Pandas'],
      desc: 'Predictive model experimenting with historical IPL data for outcomes.',
    },
    {
      name: 'Portfolio Website',
      stack: ['React', 'Tailwind'],
      desc: 'Clean, responsive personal site to showcase work and experience.',
    },
  ]
  return (
    <section id="projects" className="py-16 bg-gradient-to-b from-neutral-50 to-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-bold">Projects</h2>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p) => (
            <div key={p.name} className="group rounded-xl border border-neutral-200 bg-white p-5 shadow-sm hover:shadow-md transition">
              <div className="h-32 rounded-lg bg-gradient-to-tr from-amber-100 to-rose-100 mb-4" />
              <h3 className="font-semibold">{p.name}</h3>
              <p className="mt-1 text-sm text-neutral-700">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-neutral-100 text-neutral-700 border border-neutral-200">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Certifications() {
  const items = [
    'Android Development',
    'Cybersecurity Basics',
    'Web Development',
  ]
  return (
    <section id="certifications" className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-bold">Certifications</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {items.map((c) => (
            <span key={c} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-300 bg-amber-50 text-amber-900 text-sm">
              <Trophy size={16} /> {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Interests() {
  const items = [
    { name: 'Golf' },
    { name: 'Formula 1' },
    { name: 'Hackathons' },
  ]
  return (
    <section id="interests" className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-bold">Interests</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {items.map((i) => (
            <span key={i.name} className="px-3 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-800 text-sm">{i.name}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-white to-neutral-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-bold">Get in touch</h2>
        <p className="mt-2 text-neutral-700">Email mantra.8506@gmail.com or use the quick form below.</p>
        <form className="mt-6 grid gap-4 max-w-xl">
          <input className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-neutral-900" placeholder="Your name" />
          <input className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-neutral-900" placeholder="Your email" />
          <textarea rows={4} className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-neutral-900" placeholder="Your message" />
          <button type="button" onClick={() => alert('Thanks! This demo form does not send yet.')} className="w-fit px-5 py-2.5 rounded-full bg-neutral-900 text-white hover:bg-black">Send</button>
        </form>
      </div>

      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top" className="fixed bottom-6 right-6 p-3 rounded-full shadow-md bg-neutral-900 text-white hover:bg-black">
        <ChevronUp size={18} />
      </button>
    </section>
  )
}
