import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { servicePackages } from "@/data/services";

export default function Home() {
  const featuredProjects = projects.slice(0, 3);
  const totalProjects = projects.length;

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-300 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container-custom relative py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-6 animate-fade-in">
              <span className="text-2xl">⭐</span>
              <span className="text-sm font-medium text-neutral-700">
                5-Star Rated • {totalProjects}+ Happy Clients • Fast Delivery
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-neutral-900 mb-6 text-balance animate-slide-up">
              Beautiful <span className="gradient-text">Next.js Websites</span> for Small Businesses
            </h1>

            <p className="text-xl md:text-2xl text-neutral-600 mb-8 max-w-3xl mx-auto animate-slide-up animate-delay-200">
              Delivered in <span className="font-semibold text-primary-600">days, not months</span>.
              Transparent pricing, real-time progress tracking, and affordable packages designed for local shops.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up animate-delay-400">
              <Link href="/templates" className="btn btn-primary text-lg px-8 py-4">
                Browse Templates
              </Link>
              <Link href="/contact" className="btn btn-outline text-lg px-8 py-4">
                Get Free Quote
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-neutral-200 animate-fade-in animate-delay-600">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-1">{totalProjects}+</div>
                <div className="text-sm text-neutral-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-1">1 Week</div>
                <div className="text-sm text-neutral-600">Avg Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-1">100%</div>
                <div className="text-sm text-neutral-600">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-1">98/100</div>
                <div className="text-sm text-neutral-600">Performance</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Why Choose Morphio Web?</h2>
            <p className="section-subtitle mx-auto">
              We're not just another web agency. Here's what makes us different.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card group hover:border-primary-200 border-2 border-transparent">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Live Work Diary</h3>
              <p className="text-neutral-600">
                Watch us build in real-time. See our daily progress on actual client projects. Complete transparency, no surprises.
              </p>
            </div>

            <div className="card group hover:border-primary-200 border-2 border-transparent">
              <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Modern Technology</h3>
              <p className="text-neutral-600">
                We use Next.js – the same tech Netflix and TikTok use – for your small business website. Lightning fast & SEO-friendly.
              </p>
            </div>

            <div className="card group hover:border-primary-200 border-2 border-transparent">
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">AI-Powered Speed</h3>
              <p className="text-neutral-600">
                Faster delivery without compromising quality. AI-assisted development means you get your website in days, not months.
              </p>
            </div>

            <div className="card group hover:border-primary-200 border-2 border-transparent">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Small Business Focused</h3>
              <p className="text-neutral-600">
                We understand your budget and needs. Affordable pricing, no hidden fees, and packages designed specifically for local shops.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle mx-auto">
              Choose the package that fits your needs. All include modern Next.js technology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {servicePackages.map((pkg, index) => (
              <div
                key={pkg.id}
                className={`card relative ${pkg.popular ? 'border-2 border-primary-500 shadow-xl' : ''}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary-600">${pkg.price}</span>
                  <span className="text-neutral-600"> flat rate</span>
                </div>
                <p className="text-neutral-600 mb-6">{pkg.description}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.slice(0, 5).map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-secondary-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-neutral-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/services"
                  className={`btn w-full ${pkg.popular ? 'btn-primary' : 'btn-outline'}`}
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/pricing" className="btn btn-outline">
              View All Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Recent Projects</h2>
            <p className="section-subtitle mx-auto">
              See what we've built for small businesses like yours.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                href={`/portfolio/${project.id}`}
                className="group card p-0 overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="text-sm opacity-90 mb-1">{project.industry}</div>
                    <h3 className="text-xl font-bold">{project.clientName}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-neutral-600 mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex items-center text-primary-600 font-medium">
                    View Case Study
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link href="/portfolio" className="btn btn-primary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Everything Under One Umbrella */}
      <section className="section bg-gradient-to-br from-primary-500 to-secondary-600 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="text-8xl mb-6">☂️</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Everything Under One Umbrella</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Complete website solutions with all services included. From design to deployment, we handle everything so you can focus on your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: "🎨",
                title: "Custom Design",
                description: "Tailored to your brand identity and business goals"
              },
              {
                icon: "⚡",
                title: "Lightning Fast Performance",
                description: "Next.js technology for superior speed and SEO"
              },
              {
                icon: "📱",
                title: "Mobile-First Development",
                description: "Perfect on every device, from phones to desktops"
              },
              {
                icon: "🔒",
                title: "Secure & Reliable",
                description: "HTTPS, data protection, and secure hosting"
              },
              {
                icon: "🔍",
                title: "SEO Optimized",
                description: "Built to rank on Google from day one"
              },
              {
                icon: "💳",
                title: "Payment Integration",
                description: "Stripe, PayPal, and secure checkout systems"
              },
              {
                icon: "📊",
                title: "Analytics Setup",
                description: "Google Analytics to track your growth"
              },
              {
                icon: "🛠️",
                title: "Ongoing Support",
                description: "Post-launch support and maintenance packages"
              },
              {
                icon: "📧",
                title: "Contact Forms & APIs",
                description: "Automated email notifications and integrations"
              },
              {
                icon: "🖼️",
                title: "Template Customization",
                description: "Start with a template, customize to perfection"
              },
              {
                icon: "📈",
                title: "Performance Optimization",
                description: "98+ Google PageSpeed scores guaranteed"
              },
              {
                icon: "🤝",
                title: "Transparent Process",
                description: "Clear communication, no surprises, flat rates"
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <div className="text-4xl mb-3">{service.icon}</div>
                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                <p className="text-white/80 text-sm">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn bg-white text-primary-600 hover:bg-neutral-100 text-lg px-8 py-4">
              View Our Packages
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle mx-auto">
              From concept to launch in four simple steps.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Free Consultation",
                description: "We discuss your needs, goals, and budget. Get a transparent quote with no obligations.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                ),
              },
              {
                step: "02",
                title: "Design & Approval",
                description: "We create mockups for your approval. No development starts until you're 100% happy with the design.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                ),
              },
              {
                step: "03",
                title: "Development & Updates",
                description: "We build your website with daily progress updates in our work diary. You see everything as it happens.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                ),
              },
              {
                step: "04",
                title: "Launch & Training",
                description: "We launch your site and train you on how to manage it. Plus ongoing support to ensure your success.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                ),
              },
            ].map((step, index) => (
              <div key={index} className="text-center relative">
                {index < 3 && (
                  <div className="hidden md:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary-500 to-primary-300"></div>
                )}
                <div className="relative z-10 mx-auto w-32 h-32 bg-gradient-warm rounded-full flex items-center justify-center text-white mb-6">
                  {step.icon}
                </div>
                <div className="text-sm font-bold text-primary-600 mb-2">STEP {step.step}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-neutral-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle mx-auto">
              Don't just take our word for it. Here's what small business owners say about working with us.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project) => project.testimonial && (
              <div key={project.id} className="card bg-white">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-neutral-700 mb-6 italic">"{project.testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-primary-600 font-bold text-lg">
                      {project.testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold">{project.testimonial.author}</div>
                    <div className="text-sm text-neutral-600">{project.testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle mx-auto">
              Got questions? We've got answers.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What is Next.js and why do you use it?",
                answer: "Next.js is a modern React framework that makes websites incredibly fast, SEO-friendly, and scalable. It's used by major companies like Netflix, TikTok, and Hulu. For small businesses, it means faster loading times (better Google rankings), excellent mobile performance, and a website that can grow with your business.",
              },
              {
                question: "How long does it take to build my website?",
                answer: "Most websites are delivered within 1-2 weeks from start to finish. E-commerce sites may take 2-3 weeks. With AI-assisted development, we work incredibly fast while maintaining top quality. You'll see your website come to life in days, not months.",
              },
              {
                question: "How is this different from Wix, Squarespace, or Shopify?",
                answer: "Website builders are great for DIY, but they have limitations: template restrictions, slower performance, monthly fees that add up, and you don't own the code. With a custom Next.js website, you get: (1) Complete ownership - no ongoing platform fees, (2) Superior performance - 2-3x faster load times, (3) Unlimited customization - not restricted by templates, (4) Better SEO - custom code ranks better on Google, and (5) Lower long-term costs - one-time payment vs. $20-50/month forever.",
              },
              {
                question: "What if I need changes after the website is live?",
                answer: "All packages include post-launch support (1-3 weeks depending on package). After that, we offer affordable maintenance packages where you simply tell us what changes you need and we handle everything. No technical knowledge required - just email us your requests.",
              },
              {
                question: "Do you help with hosting and domain setup?",
                answer: "Yes! We can guide you through purchasing a domain and setting up hosting, or handle it completely for you. We typically recommend Vercel for hosting (free for small sites) and Namecheap for domains.",
              },
              {
                question: "What makes you different from other web developers?",
                answer: "We focus exclusively on small businesses with three key advantages: (1) Speed - AI-assisted development means faster delivery at lower cost, (2) Modern technology - we use Next.js (same tech as Netflix) which most local developers don't offer, (3) Transparent pricing - flat rates, no hidden fees, and you can see all our past work and pricing upfront.",
              },
            ].map((faq, index) => (
              <details key={index} className="card group">
                <summary className="cursor-pointer list-none flex justify-between items-center">
                  <h3 className="text-lg font-semibold pr-8">{faq.question}</h3>
                  <svg className="w-5 h-5 text-primary-500 flex-shrink-0 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-neutral-600 mt-4 pt-4 border-t border-neutral-100">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-600">
        <div className="container-custom text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Grow Your Business Online?
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
            Join {totalProjects}+ happy small business owners who transformed their online presence with Morphio Web.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn bg-white text-primary-600 hover:bg-neutral-100 text-lg px-8 py-4">
              Get Your Free Quote
            </Link>
            <Link href="/portfolio" className="btn border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-4">
              See Our Work
            </Link>
          </div>
          <p className="mt-8 text-white/80">
            ✓ No obligations • ✓ Free consultation • ✓ Fast response
          </p>
        </div>
      </section>
    </div>
  );
}
