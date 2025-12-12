'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Mail, Globe2, ShieldCheck, Cable, Cloud, Network, Layers, Send, Building2, MapPin, CheckCircle2 } from 'lucide-react'
export default function Page() {
  const [submitted, setSubmitted] = useState(false)
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <header className="sticky top-0 bg-white/80 backdrop-blur z-40 border-b">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-white font-bold">F</span>
            <div className="leading-tight">
              <div className="font-semibold text-slate-900">Fidara Consulting Inc.</div>
              <div className="text-xs text-slate-500">Architecture • Infrastructure • Integration</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-slate-900 text-slate-600">Services</a>
            <a href="#capabilities" className="hover:text-slate-900 text-slate-600">Capabilities</a>
            <a href="#approach" className="hover:text-slate-900 text-slate-600">Approach</a>
            <a href="#rates" className="hover:text-slate-900 text-slate-600">Rates</a>
            <a href="#contact" className="hover:text-slate-900 text-slate-600">Contact</a>
          </nav>
          <a href="#contact" className="hidden md:inline-flex rounded-2xl bg-slate-900 px-4 py-2 text-white text-sm font-medium hover:bg-slate-800">Start a Project</a>
        </div>
      </header>

      <section className="relative bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight">
              Enterprise architecture that <span className="underline underline-offset-4 decoration-slate-300">actually ships</span>
            </h1>
            <p className="mt-5 text-slate-600 text-lg">
              Fidara helps organizations design, modernize, and interconnect complex systems: networking, infrastructure, cloud, identity, and application delivery.
              Remote across Canada with on‑site travel as needed.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#services" className="rounded-2xl bg-slate-900 px-4 py-2 text-white text-sm font-medium hover:bg-slate-800">What we do</a>
              <a href="#contact" className="rounded-2xl border px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">Talk to us</a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-slate-500">
              <div className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4"/> Independent • Incorporated</div>
              <div className="inline-flex items-center gap-2"><Globe2 className="h-4 w-4"/> Canada‑wide • TN‑eligible (US)</div>
            </div>
            <div className="mt-6 flex items-center gap-4">
              <Image src="/logos/cissp.svg" alt="CISSP" width={120} height={30} />
              <Image src="/logos/itil.svg" alt="ITIL" width={120} height={30} />
              <Image src="/logos/iso20000.svg" alt="ISO/IEC 20000" width={120} height={30} />
            </div>
          </div>
          <div className="bg-white border rounded-3xl p-6 shadow-sm">
            <ul className="space-y-3">
              {['Hybrid infrastructure roadmaps (on‑prem • cloud)',
                'Identity‑driven designs (Zero Trust, access patterns)',
                'Network & ADC modernization (load‑balancing, WAF)',
                'Cross‑cloud integration and automation',
                'Hands‑on delivery with clear SoWs and milestones'
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-slate-900 mt-0.5"/>
                  <span className="text-slate-700">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 md:py-24 border-t">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Services</h2>
          <p className="mt-2 text-slate-600">Engagements scoped by outcome, delivered via clear Statements of Work.</p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { icon: <Layers className="h-5 w-5"/>, title: 'Enterprise & Solution Architecture', body: 'Current‑state assessment, target architectures, roadmaps, governance, and decision records.' },
              { icon: <Network className="h-5 w-5"/>, title: 'Networking & Infrastructure', body: 'Core network, data center, virtualization (VMware/Nutanix), DR, observability, and performance.' },
              { icon: <Cloud className="h-5 w-5"/>, title: 'Cloud & Identity Integration', body: 'Azure/AWS/GCP patterns, Zero Trust, SSO/federation, privileged access, and automation.' }
            ].map((c, i) => (
              <div key={i} className="rounded-2xl border p-6 hover:shadow-sm transition">
                <div className="inline-flex items-center gap-2 text-slate-900 font-medium">{c.icon}{c.title}</div>
                <p className="mt-2 text-slate-600 text-sm leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="rates" className="py-16 md:py-24 border-t bg-slate-50">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Rates & engagement</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border bg-white p-6">
              <div className="text-slate-900 font-medium">Longer engagements</div>
              <div className="text-3xl font-semibold mt-2">$125<span className="text-base font-normal text-slate-500">/hr CAD</span></div>
              <p className="mt-2 text-sm text-slate-600">Contracts of 6 months or more.</p>
            </div>
            <div className="rounded-2xl border bg-white p-6">
              <div className="text-slate-900 font-medium">Shorter projects</div>
              <div className="text-3xl font-semibold mt-2">$150<span className="text-base font-normal text-slate-500">/hr CAD</span></div>
              <p className="mt-2 text-sm text-slate-600">Projects under 6 months, or rapid turn‑arounds.</p>
            </div>
            <div className="rounded-2xl border bg-white p-6">
              <div className="text-slate-900 font-medium">Travel</div>
              <p className="mt-2 text-sm text-slate-600">On‑site work across Canada & U.S. Travel billed at cost; billable travel hours by agreement.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 md:py-24 border-t">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Contact</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl border p-6 space-y-2">
              <div className="flex items-center gap-2 text-slate-700"><Mail className="h-4 w-4"/> <a className="underline hover:no-underline" href="mailto:info@fidarainc.com">info@fidarainc.com</a></div>
              <div className="flex items-center gap-2 text-slate-700"><Mail className="h-4 w-4"/> <a className="underline hover:no-underline" href="mailto:rene.gamache@fidarainc.com">rene.gamache@fidarainc.com</a></div>
              <div className="flex items-center gap-2 text-slate-700"><MapPin className="h-4 w-4"/> Remote across Canada • Travel available</div>
              <p className="text-sm text-slate-600">Prefer email first contact. We can schedule a short discovery call.</p>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="rounded-2xl border p-6 bg-slate-50">
              <div className="grid gap-4">
                <input className="rounded-xl border px-3 py-2" placeholder="Your name" required />
                <input className="rounded-xl border px-3 py-2" placeholder="Company / Organization" />
                <input className="rounded-xl border px-3 py-2" placeholder="Email" type="email" required />
                <textarea className="rounded-xl border px-3 py-2 min-h-[120px]" placeholder="Tell us about your project" required />
                <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-4 py-2 text-white text-sm font-medium hover:bg-slate-800">
                  <Send className="h-4 w-4"/> Send
                </button>
                {submitted && (<p className="text-sm text-emerald-600">Thanks! We’ll reply by email shortly.</p>)}
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t py-10">
        <div className="mx-auto max-w-7xl px-6 text-sm text-slate-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} Fidara Consulting Inc. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a href="#rates" className="hover:text-slate-700">Rates</a>
            <a href="#services" className="hover:text-slate-700">Services</a>
            <a href="#contact" className="hover:text-slate-700">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
