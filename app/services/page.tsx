import Link from "next/link";
import { servicePackages, addOnServices } from "@/data/services";

export const metadata = {
  title: "Services & Packages | Morphio Web",
  description: "Explore our web development services designed specifically for small businesses. From starter websites to full e-commerce solutions.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="section bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-6">
              Professional <span className="gradient-text">Web Development</span> Services
            </h1>
            <p className="text-xl text-neutral-600 mb-8">
              Choose the package that fits your needs. All services include modern Next.js technology, mobile-responsive design, and fast delivery with AI-powered development.
            </p>
            <Link href="/contact" className="btn btn-primary text-lg">
              Get Custom Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Packages</h2>
            <p className="section-subtitle mx-auto">
              Transparent, all-inclusive pricing. No hidden fees or surprises.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {servicePackages.map((pkg) => (
              <div
                key={pkg.id}
                id={pkg.id}
                className={`card relative flex flex-col ${
                  pkg.popular ? 'border-2 border-primary-500 shadow-2xl scale-105' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      ⭐ MOST POPULAR
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-primary-600">${pkg.price}</span>
                    <span className="text-neutral-600"> flat rate</span>
                  </div>
                  <p className="text-neutral-600">{pkg.description}</p>
                </div>

                <div className="mb-6">
                  <div className="text-sm font-semibold text-neutral-500 uppercase mb-3">What's Included</div>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-secondary-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-neutral-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="text-sm font-semibold text-neutral-500 uppercase mb-3">Ideal For</div>
                  <div className="flex flex-wrap gap-2">
                    {pkg.idealFor.map((business, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-medium"
                      >
                        {business}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-center gap-2 text-neutral-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-medium">Timeline: {pkg.timeline}</span>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className={`btn w-full mt-auto ${pkg.popular ? 'btn-primary' : 'btn-outline'}`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>

          {/* Comparison Note */}
          <div className="bg-primary-50 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold mb-2">Not sure which package is right for you?</h3>
            <p className="text-neutral-600 mb-4">
              Schedule a free consultation and we'll help you choose the perfect solution for your business.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Schedule Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Add-On Services */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Add-On Services</h2>
            <p className="section-subtitle mx-auto">
              Enhance your package with these additional services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOnServices.map((service, index) => (
              <div key={index} className="card flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold mb-1">{service.name}</h3>
                  <p className="text-sm text-neutral-600 mb-2">{service.description}</p>
                  <p className="text-primary-600 font-bold">${service.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Next.js */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title">Why Next.js for Small Businesses?</h2>
              <p className="section-subtitle mx-auto">
                You might be wondering why we use Next.js instead of traditional website builders.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">3x Faster Loading</h3>
                    <p className="text-sm text-neutral-600">
                      Next.js websites load significantly faster than traditional sites, keeping customers engaged and improving your Google rankings.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Better Google Rankings</h3>
                    <p className="text-sm text-neutral-600">
                      Built-in SEO optimization means your website ranks higher in search results, bringing more customers to your door.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Perfect on All Devices</h3>
                    <p className="text-sm text-neutral-600">
                      Your website looks and works flawlessly on phones, tablets, and desktops. Mobile-first design as standard.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Scales as You Grow</h3>
                    <p className="text-sm text-neutral-600">
                      Start small and add features as your business grows. Easy to maintain and update without rebuilding from scratch.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Secure & Protected</h3>
                    <p className="text-sm text-neutral-600">
                      HTTPS encryption, secure hosting on Vercel platform, regular security updates, and protection against common web vulnerabilities.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Cost-Effective</h3>
                    <p className="text-sm text-neutral-600">
                      Free hosting on Vercel for most small business sites. Lower monthly costs compared to traditional web hosts.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-neutral-600 text-lg mb-6">
                You get enterprise-level technology at small business prices. That's the Morphio Web difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Development Process</h2>
            <p className="section-subtitle mx-auto">
              From first contact to launch and beyond.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                step: "01",
                title: "Free Consultation & Quote",
                description: "We start with a conversation about your business, goals, and needs. No pressure, just honest advice. You'll receive a transparent quote with no hidden fees.",
                duration: "30 minutes",
              },
              {
                step: "02",
                title: "Design Selection & Customization",
                description: "Choose from our template gallery or provide your own design inspiration. We'll customize your selected design to match your brand colors, content, and specific needs. Unlimited revisions until you're 100% happy.",
                duration: "1-2 days",
              },
              {
                step: "03",
                title: "Fast Development",
                description: "Once design is approved, we build your website quickly using AI-assisted development. We keep you updated on progress and share preview links so you can see it coming together. Most sites ready in 5-7 days.",
                duration: "5-7 days",
              },
              {
                step: "04",
                title: "Review & Refinement",
                description: "We share a staging link where you can test everything. Provide feedback, request changes, and ensure everything works perfectly before launch.",
                duration: "2-3 days",
              },
              {
                step: "05",
                title: "Launch & Training",
                description: "We launch your website and provide training on how to manage updates. You'll receive video tutorials and documentation for future reference.",
                duration: "1 day",
              },
              {
                step: "06",
                title: "Ongoing Support",
                description: "We don't disappear after launch! Included support period ensures any issues are quickly resolved. Optional maintenance packages available.",
                duration: "1-3 weeks included",
              },
            ].map((phase, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {phase.step}
                  </div>
                </div>
                <div className="flex-1 card">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{phase.title}</h3>
                    <span className="text-sm text-primary-600 font-medium">{phase.duration}</span>
                  </div>
                  <p className="text-neutral-600">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gradient-to-br from-primary-500 to-secondary-600">
        <div className="container-custom text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Let's discuss your project and find the perfect package for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn bg-white text-primary-600 hover:bg-neutral-100 text-lg px-8 py-4">
              Get Free Quote
            </Link>
            <Link href="/portfolio" className="btn border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-4">
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
