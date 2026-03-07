'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import {
  BriefcaseBusiness,
  CheckCircle2,
  ClipboardList,
  ContactRound,
  KeyRound,
  ShieldCheck,
  Users,
  Waypoints,
} from 'lucide-react'

export default function Page() {
  const [submitted, setSubmitted] = useState(false)
  const [activeSection, setActiveSection] = useState('services')

  const navItems = [
    { id: 'services', label: 'Services' },
    { id: 'engagement', label: 'Engagement Model' },
    { id: 'expertise', label: 'Expertise' },
    { id: 'outcomes', label: 'Outcomes' },
    { id: 'contact', label: 'Contact' },
  ] as const

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { threshold: 0.35, rootMargin: '-40% 0px -45% 0px' }
    )

    navItems.forEach((item) => {
      const section = document.getElementById(item.id)
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: <ClipboardList className="h-5 w-5" />,
      title: 'Identity Architecture Assessment',
      body: 'Comprehensive evaluation of enterprise identity platforms, including Active Directory, Microsoft Entra ID, and federated authentication systems.',
    },
    {
      icon: <Waypoints className="h-5 w-5" />,
      title: 'Active Directory and Hybrid Identity Modernization',
      body: 'Strategic architecture guidance for modernizing legacy AD and implementing secure hybrid identity models with Microsoft Entra ID.',
    },
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      title: 'Zero Trust Identity Architecture',
      body: 'Identity-centric Zero Trust designs covering conditional access, device trust, privileged identity, and least-privilege access controls.',
    },
    {
      icon: <KeyRound className="h-5 w-5" />,
      title: 'Multi-Cloud Identity Architecture',
      body: 'Identity federation and authorization architecture across AWS, Azure, and SaaS environments with clear trust boundaries.',
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: 'Privileged Access Architecture (PAM)',
      body: 'Architecture and governance design for privileged access, including just-in-time patterns, lifecycle controls, and vault strategy.',
    },
    {
      icon: <BriefcaseBusiness className="h-5 w-5" />,
      title: 'IAM Program Strategy and Governance',
      body: 'Executive advisory to define enterprise IAM strategy, governance models, and multi-year roadmaps aligned with compliance objectives.',
    },
  ] as const

  const deliverables = [
    'Architecture diagrams and reference architectures',
    'Identity and access control models',
    'Security gap and maturity assessments',
    'Strategic implementation roadmaps',
    'Governance and policy frameworks',
  ] as const

  const engagementTriggers = [
    'Active Directory environments need modernization',
    'Hybrid identity complexity introduces security risk',
    'Zero Trust initiatives stall before implementation',
    'Cloud identity models are inconsistent across platforms',
    'Privileged access lacks clear governance controls',
  ] as const

  const flagshipDeliverables = [
    'Identity architecture diagrams',
    'Security maturity analysis',
    'Zero Trust alignment review',
    'Modernization roadmap',
  ] as const

  const expertiseAreas = [
    'Enterprise Identity Architecture',
    'Microsoft Entra ID and Hybrid Identity',
    'Active Directory Security and Modernization',
    'Multi-Cloud IAM (AWS / Azure)',
    'Zero Trust Architecture',
    'Privileged Access Management',
    'Identity Governance and Lifecycle Management',
    'Security Architecture and Compliance Alignment',
  ] as const

  const outcomes = [
    {
      title: 'Identity architecture modernization roadmap',
      body: 'Defined phased modernization plans for enterprise identity platforms with clear ownership, sequencing, and risk reduction milestones.',
    },
    {
      title: 'Cross-cloud trust model design',
      body: 'Designed practical federation and authorization patterns across AWS, Azure, and SaaS ecosystems to improve control consistency.',
    },
    {
      title: 'Zero Trust identity control uplift',
      body: 'Established identity-centric control baselines for conditional access, privileged access governance, and least-privilege policy design.',
    },
    {
      title: 'IAM governance program acceleration',
      body: 'Built governance frameworks that connected architecture standards, policy controls, and executive reporting for sustained delivery.',
    },
  ] as const

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-3 md:gap-4">
            <Image
              src="/logos/fidara_logo_transparent.png"
              alt="Fidara Consulting Inc."
              width={767}
              height={241}
              className="h-8 w-auto object-contain md:h-10"
              priority
            />
            <div className="leading-tight">
              <p className="text-base font-semibold text-slate-900 md:text-lg">Fidara Consulting Inc.</p>
              <p className="text-xs text-slate-500 md:text-sm">Identity and Cloud Security Architecture</p>
            </div>
          </a>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 ${
                  activeSection === item.id ? 'font-medium text-slate-900' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="hidden rounded-2xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 md:inline-flex"
          >
            Book an Identity Discovery Call
          </a>
        </div>
      </header>

      <section className="relative hero-gradient">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-800">
              Independent advisory and architecture services
            </p>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
              Identity and Cloud Security Architecture for enterprise modernization
            </h1>
            <p className="mt-5 text-lg text-slate-600">
              Fidara helps organizations modernize identity platforms, secure multi-cloud environments, and design Zero Trust architectures aligned to business and compliance objectives.
            </p>
            <p className="mt-3 text-slate-600">
              Engagements are vendor-neutral, architecture-driven, and designed to produce practical implementation roadmaps.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-2xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
              >
                Book an Identity Architecture Discovery Call
              </a>
              <a
                href="#services"
                className="rounded-2xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
              >
                Explore Core Services
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">Primary Focus</h2>
              <Image src="/fidara_logo_favicon_512.png" alt="Fidara brand mark" width={44} height={44} className="rounded-xl border border-slate-200 bg-white p-1" />
            </div>
            <ul className="mt-4 space-y-3">
              {[
                'Identity architecture strategy and roadmap development',
                'Cloud security architecture aligned with IAM and Zero Trust principles',
                'Hybrid identity modernization across Active Directory and Entra ID',
                'Practical governance models for sustainable security outcomes',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-slate-900" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-6">
          <span className="mr-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Who this is for</span>
          {[
            'CISOs and security leadership',
            'IAM and identity engineering teams',
            'Cloud and platform architecture groups',
            'Enterprise transformation programs',
          ].map((item) => (
            <span key={item} className="rounded-full border border-slate-300 bg-white px-3 py-1 text-xs text-slate-700">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">When Organizations Engage Fidara</h2>
          <p className="mt-2 max-w-3xl text-slate-600">
            Most clients engage us when identity architecture decisions are blocking security progress, cloud consistency, or modernization outcomes.
          </p>
          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
            <ul className="space-y-3">
              {engagementTriggers.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-slate-900" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="services" className="border-t border-slate-200 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">Core Consulting Services</h2>
          <p className="mt-2 max-w-3xl text-slate-600">
            Architecture-first consulting engagements focused on enterprise identity modernization, cloud security, and long-term IAM governance.
          </p>
          <div className="mt-8 rounded-2xl border border-cyan-200 bg-cyan-50/60 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-800">Flagship Engagement</p>
            <h3 className="mt-2 text-xl font-semibold text-slate-900">Identity Architecture Assessment</h3>
            <p className="mt-2 text-slate-700">
              A 2-4 week advisory engagement delivering a practical, low-risk starting point for enterprise identity modernization.
            </p>
            <ul className="mt-4 grid gap-3 md:grid-cols-2">
              {flagshipDeliverables.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-xl border border-cyan-100 bg-white px-3 py-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-slate-900" />
                  <span className="text-sm text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="service-card h-full rounded-2xl border border-slate-200 bg-white p-6">
                <div className="inline-flex items-center gap-2 font-medium text-slate-900">
                  {service.icon}
                  {service.title}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">About the Principal</h2>
          <p className="mt-2 max-w-3xl text-slate-600">
            Fidara engagements are led directly by Rene Gamache, Principal Identity and Cloud Security Architect.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-base font-semibold text-slate-900">Leadership Profile</h3>
              <ul className="mt-3 space-y-3">
                {[
                  '20+ years of enterprise architecture experience',
                  'CISSP certified security architecture leadership',
                  'TOGAF-aligned architecture and governance practices',
                  'Hands-on cloud security architecture advisory',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-slate-900" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-base font-semibold text-slate-900">Why clients value principal-led delivery</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Clients work directly with the architect defining the strategy and roadmap. This shortens decision cycles,
                improves architecture quality, and keeps implementation guidance aligned to enterprise constraints.
              </p>
              <a
                href="#contact"
                className="mt-5 inline-flex rounded-2xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
              >
                Discuss your identity architecture priorities
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="engagement" className="border-t border-slate-200 bg-slate-50 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">Typical Engagement Model</h2>
          <p className="mt-2 max-w-3xl text-slate-600">
            Engagements typically range from 2 to 12 weeks depending on scope and organizational complexity.
          </p>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-base font-semibold text-slate-900">Expected Deliverables</h3>
              <ul className="mt-3 space-y-3">
                {deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-slate-900" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-base font-semibold text-slate-900">Engagement Principles</h3>
              <ul className="mt-3 space-y-3">
                {[
                  'Vendor-neutral advisory and architecture decisions',
                  'Clear scope, milestones, and executive-level communication',
                  'Roadmaps that connect architecture intent to implementation realities',
                  'Practical security alignment with regulatory and compliance requirements',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-slate-900" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">Identity Control Plane Architecture Example</h2>
          <p className="mt-2 max-w-3xl text-slate-600">
            A simplified architecture pattern illustrating trust relationships and governance boundaries across hybrid and cloud identity domains.
          </p>
          <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid gap-4 md:grid-cols-5 md:items-center">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center text-sm font-medium text-slate-900">
                Microsoft Entra ID
              </div>
              <div className="hidden text-center text-slate-400 md:block">↔</div>
              <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-4 text-center text-sm font-semibold text-slate-900">
                Identity Control Plane
              </div>
              <div className="hidden text-center text-slate-400 md:block">↔</div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center text-sm font-medium text-slate-900">
                AWS IAM
              </div>
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 text-center text-sm text-slate-700">SaaS Federation</div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4 text-center text-sm text-slate-700">Privileged Identity Controls</div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4 text-center text-sm text-slate-700">Governance and Policy Layer</div>
            </div>
          </div>
        </div>
      </section>

      <section id="expertise" className="border-t border-slate-200 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">Expertise Areas</h2>
          <p className="mt-2 max-w-3xl text-slate-600">
            Principal-led architecture expertise spanning identity, cloud security, privileged access, and governance.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {expertiseAreas.map((area) => (
              <span key={area} className="rounded-full border border-slate-300 bg-white px-3 py-1 text-xs text-slate-700">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="outcomes" className="border-t border-slate-200 bg-slate-50 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">Representative Outcomes</h2>
          <p className="mt-2 max-w-3xl text-slate-600">
            Examples of architecture and advisory results delivered for enterprise identity and cloud security programs.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {outcomes.map((item) => (
              <div key={item.title} className="service-card h-full rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-slate-200 py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">Contact</h2>
          <p className="mt-2 text-slate-600">
            Principal-led advisory for Identity and Cloud Security Architecture engagements.
          </p>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-6">
              <div className="flex items-center gap-2 text-slate-700">
                <ContactRound className="h-4 w-4" />
                <span className="font-medium">Rene Gamache</span>
              </div>
              <p className="mt-2 text-sm text-slate-600">Principal Identity and Cloud Security Architect</p>
              <div className="mt-4 space-y-2 text-sm text-slate-700">
                <p>
                  <a className="underline hover:no-underline" href="mailto:rene.gamache@fidarainc.com">
                    rene.gamache@fidarainc.com
                  </a>
                </p>
                <p>
                  <a className="underline hover:no-underline" href="tel:+17808876817">
                    +1 (780) 887-6817
                  </a>
                </p>
                <p>Global delivery</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="mailto:rene.gamache@fidarainc.com?subject=Identity%20Architecture%20Discovery%20Call"
                  className="rounded-2xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
                >
                  Book an Identity Architecture Discovery Call
                </a>
                <a
                  href="mailto:rene.gamache@fidarainc.com?subject=IAM%20Assessment%20Scope%20Request"
                  className="rounded-2xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
                >
                  Request IAM Assessment Scope
                </a>
              </div>
            </div>
            <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="grid gap-4">
                <input className="rounded-xl border border-slate-300 px-3 py-2" placeholder="Your name" required />
                <input className="rounded-xl border border-slate-300 px-3 py-2" placeholder="Company / Organization" />
                <input className="rounded-xl border border-slate-300 px-3 py-2" placeholder="Email" type="email" required />
                <select className="rounded-xl border border-slate-300 px-3 py-2 text-slate-700" defaultValue="">
                  <option value="" disabled>
                    Service of interest (optional)
                  </option>
                  <option>Identity Architecture Assessment</option>
                  <option>AD and Hybrid Identity Modernization</option>
                  <option>Zero Trust Identity Architecture</option>
                  <option>Multi-Cloud Identity Architecture</option>
                  <option>Privileged Access Architecture (PAM)</option>
                  <option>IAM Program Strategy and Governance</option>
                </select>
                <textarea className="min-h-[120px] rounded-xl border border-slate-300 px-3 py-2" placeholder="Tell us about your goals, constraints, and timeline" required />
                <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400">
                  Submit inquiry
                </button>
                {submitted && <p className="text-sm text-emerald-700">Thank you. We will reply by email shortly.</p>}
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-500 md:flex-row">
          <div>Copyright {new Date().getFullYear()} Fidara Consulting Inc. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-slate-700">
              Services
            </a>
            <a href="#contact" className="hover:text-slate-700">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
