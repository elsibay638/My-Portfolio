import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '01554211522', href: 'tel:01554211522' },
  { icon: Mail, label: 'Email', value: 'youssefelsibay53@gmail.com', href: 'mailto:youssefelsibay53@gmail.com' },
  { icon: MapPin, label: 'Location', value: 'Alexandria, Egypt', href: null },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'linear-gradient(rgba(6,182,212,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.5) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-1.5 text-cyan-400 text-sm font-medium mb-6">
            <Mail className="w-4 h-4" />
            Get in Touch
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-100 mb-4">Contact Me</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            I'm open to network engineering opportunities and collaborations. Feel free to reach out through any of the channels below.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact info cards */}
            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div
                  key={label}
                  className="group flex items-center gap-4 bg-slate-900 border border-slate-800 hover:border-cyan-500/30 rounded-2xl p-5 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/20 transition-colors">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-0.5">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="text-slate-200 font-medium hover:text-cyan-400 transition-colors break-all"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-slate-200 font-medium">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact form */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-bold text-slate-100 mb-6">Send a Message</h2>

              {submitted && (
                <div className="flex items-center gap-3 bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-4 mb-6">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <p className="text-cyan-300 text-sm">Message sent! I'll get back to you soon.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm text-slate-400 mb-1.5">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-slate-800 border border-slate-700 focus:border-cyan-500/50 text-slate-100 rounded-xl px-4 py-3 text-sm outline-none transition-colors placeholder:text-slate-500"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm text-slate-400 mb-1.5">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-slate-800 border border-slate-700 focus:border-cyan-500/50 text-slate-100 rounded-xl px-4 py-3 text-sm outline-none transition-colors placeholder:text-slate-500"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm text-slate-400 mb-1.5">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-slate-800 border border-slate-700 focus:border-cyan-500/50 text-slate-100 rounded-xl px-4 py-3 text-sm outline-none transition-colors placeholder:text-slate-500 resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-lg shadow-cyan-500/20"
                >
                  Send Message
                  <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
