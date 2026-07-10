import { GraduationCap, MapPin, ChevronRight, Network, Shield, Server, Wifi } from 'lucide-react';
import type { Page } from '../App';

interface HomePageProps {
  setCurrentPage: (page: Page) => void;
}

const highlights = [
  { icon: Network, label: 'Routing & Switching', desc: 'Expert-level Cisco configuration' },
  { icon: Shield, label: 'Network Security', desc: 'Firewalls, VPNs, and access control' },
  { icon: Server, label: 'Windows Administration', desc: 'MCSA-certified server management' },
  { icon: Wifi, label: 'Infrastructure Design', desc: 'End-to-end network architecture' },
];

export default function HomePage({ setCurrentPage }: HomePageProps) {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'linear-gradient(rgba(6,182,212,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.5) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        {/* Radial glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 py-20 w-full">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
            {/* Text */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-1.5 text-cyan-400 text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                Available for opportunities
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                <span className="text-slate-100">Youssef</span>
                <br />
                <span className="text-cyan-400">Elsibaey</span>
                <br />
                <span className="text-slate-300 text-3xl sm:text-4xl lg:text-5xl">Youssef</span>
              </h1>

              <p className="text-xl text-cyan-300 font-semibold mb-3 tracking-wide uppercase text-sm">
                Network Engineer
              </p>

              <div className="flex items-center justify-center lg:justify-start gap-2 text-slate-400 text-sm mb-4">
                <GraduationCap className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                <span>Bachelor's Degree in Computers and Information &mdash; IT Department</span>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-2 text-slate-400 text-sm mb-8">
                <MapPin className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                <span>Alexandria, Egypt</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <button
                  onClick={() => setCurrentPage('skills')}
                  className="group flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/30"
                >
                  View My Skills
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
                <button
                  onClick={() => setCurrentPage('contact')}
                  className="flex items-center justify-center gap-2 border border-slate-700 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-400 font-medium px-6 py-3 rounded-xl transition-all duration-200 hover:bg-cyan-500/5"
                >
                  Get in Touch
                </button>
              </div>
            </div>

            {/* Photo */}
            <div className="flex-shrink-0 relative">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                {/* Decorative ring */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/30 to-blue-600/20 rotate-3" />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tl from-cyan-400/10 to-transparent -rotate-3" />
                <img
                  src="/images/photo_2026-07-10_18-37-36.jpg"
                  alt="Youssef Elsibaey Youssef"
                  className="relative w-full h-full object-cover object-top rounded-2xl shadow-2xl shadow-cyan-500/10 border border-slate-700"
                />
                {/* Badge */}
                <div className="absolute -bottom-4 -right-4 bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 shadow-xl">
                  <p className="text-xs text-slate-400">Certified</p>
                  <p className="text-sm font-bold text-cyan-400">CCNA / CCNP</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-100 mb-3">Core Expertise</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              A results-driven network engineer with deep expertise across enterprise networking, security, and systems administration.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map(({ icon: Icon, label, desc }) => (
              <div
                key={label}
                className="group bg-slate-900 border border-slate-800 hover:border-cyan-500/30 rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/5"
              >
                <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-500/20 transition-colors">
                  <Icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="font-semibold text-slate-100 mb-2">{label}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => setCurrentPage('skills')}
              className="group inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
            >
              See all certifications & skills
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
