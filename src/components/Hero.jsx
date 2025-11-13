import Spline from '@splinetool/react-spline'

export default function Hero({ photoUrl }) {
  return (
    <section id="about" className="relative pt-24 sm:pt-28">
      <div className="absolute inset-0 h-[520px]">
        {/* Spline canvas */}
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/70 to-white pointer-events-none"></div>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-8 items-center min-h-[520px]">
          <div className="order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900">
              Mantra Viralkumar Patel
            </h1>
            <p className="mt-4 text-neutral-700 leading-relaxed max-w-2xl">
              Android app developer and web game enthusiast with hands-on cybersecurity experience. Passionate about building engaging mobile apps, playful web experiences, and participating in hackathons.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#projects" className="px-5 py-2.5 rounded-full bg-neutral-900 text-white hover:bg-black transition">View Projects</a>
              <a href="#contact" className="px-5 py-2.5 rounded-full border border-neutral-300 hover:border-neutral-900 hover:bg-neutral-50 transition">Contact</a>
              <a href="/resume.pdf" download className="px-5 py-2.5 rounded-full border border-amber-300 text-amber-900 bg-amber-50 hover:bg-amber-100 transition">Download Resume</a>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full ring-4 ring-white shadow-xl overflow-hidden bg-neutral-200">
              {photoUrl ? (
                <img src={photoUrl} alt="Mantra Viralkumar Patel" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-neutral-500">Profile</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
