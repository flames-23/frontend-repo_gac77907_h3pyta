import { useState } from 'react'
import { Menu, X, Mail, Github, Linkedin } from 'lucide-react'

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'interests', label: 'Interests' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const handleScroll = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/70 border-b border-neutral-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-300 to-rose-300 ring-2 ring-white overflow-hidden">
            {/* Avatar placeholder; actual image shown in Hero */}
          </div>
          <span className="font-semibold tracking-tight">Mantra Viralkumar Patel</span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="text-neutral-700 hover:text-black transition-colors"
            >
              {item.label}
            </button>
          ))}
          <div className="ml-2 flex items-center gap-3">
            <a href="mailto:mantra.8506@gmail.com" aria-label="Email" className="p-2 rounded-full hover:bg-neutral-100">
              <Mail size={18} />
            </a>
            <a href="https://www.linkedin.com/in/your-link" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-full hover:bg-neutral-100">
              <Linkedin size={18} />
            </a>
            <a href="https://github.com/your-handle" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-full hover:bg-neutral-100">
              <Github size={18} />
            </a>
          </div>
        </nav>

        <button onClick={() => setOpen((v) => !v)} className="md:hidden p-2 rounded-md hover:bg-neutral-100">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-neutral-200 bg-white">
          <div className="max-w-6xl mx-auto px-4 py-3 grid grid-cols-2 gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className="text-left py-2 text-neutral-700 hover:text-black"
              >
                {item.label}
              </button>
            ))}
            <div className="col-span-2 flex items-center gap-3 pt-2">
              <a href="mailto:mantra.8506@gmail.com" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-neutral-900 text-white"><Mail size={16}/> Email</a>
              <a href="https://www.linkedin.com/in/your-link" target="_blank" rel="noreferrer" className="px-3 py-2 rounded-md border hover:bg-neutral-50 inline-flex items-center gap-2"><Linkedin size={16}/> LinkedIn</a>
              <a href="https://github.com/your-handle" target="_blank" rel="noreferrer" className="px-3 py-2 rounded-md border hover:bg-neutral-50 inline-flex items-center gap-2"><Github size={16}/> GitHub</a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
