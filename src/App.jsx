import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { Education, Skills, Experience, Projects, Certifications, Interests, Contact } from './components/Sections'

function App() {
  const photoUrl = '/profile.jpg' // Replace with the attached image path when available
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <main>
        <Hero photoUrl={photoUrl} />
        <section className="py-12">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-xl font-semibold">Profile Summary</h2>
            <p className="mt-3 text-neutral-700 max-w-3xl leading-relaxed">
              I’m a B.Sc. Computer Science student focused on Android development, web game development, and cybersecurity. I enjoy building things that people can touch and play with—mobile apps, interactive web experiences—and learning fast through hackathons and hands-on projects.
            </p>
          </div>
        </section>
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Interests />
        <Contact />
      </main>
      <footer className="border-t border-neutral-200 py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-neutral-500">© {new Date().getFullYear()} Mantra Viralkumar Patel. All rights reserved.</div>
          <div className="flex items-center gap-3">
            <a href="mailto:mantra.8506@gmail.com" className="px-4 py-2 rounded-full border hover:bg-neutral-50">Email</a>
            <a href="https://www.linkedin.com/in/your-link" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-full border hover:bg-neutral-50">LinkedIn</a>
            <a href="https://github.com/your-handle" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-full border hover:bg-neutral-50">GitHub</a>
            <a href="/resume.pdf" download className="px-4 py-2 rounded-full bg-neutral-900 text-white hover:bg-black">Download Resume</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
