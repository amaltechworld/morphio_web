import Image from "next/image";
import Link from "next/link";
import { getAllPortfolioProjects } from '@/lib/sanity.queries';

export const metadata = {
  title: "About Us | Morphio Web",
  description: "Learn about our mission to empower small businesses with modern, affordable web development.",
};

// This makes the page dynamic and fetches fresh data on each request
export const dynamic = 'force-dynamic';

export default async function AboutPage() {
  const projects = await getAllPortfolioProjects();
  const totalProjects = projects.length;
  const teamMembers = [
    {
      name: "Your Name",
      role: "Technical Lead & Developer",
      bio: "Specialized in Next.js and React development with a passion for helping small businesses succeed online. I leverage AI tools like Claude to deliver high-quality websites faster than traditional agencies.",
      skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "AI-Assisted Development"],
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    },
    {
      name: "Marketing Lead",
      role: "Marketing & Client Relations",
      bio: "Focused on connecting with small business owners and understanding their unique needs. I manage our social media, client communications, and ensure every project exceeds expectations.",
      skills: ["Social Media Marketing", "Content Creation", "Client Relations", "Lead Generation"],
      imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    },
  ];

  const values = [
    {
      title: "Transparency",
      description: "We show real work progress through daily showcases. No smoke and mirrors, just honest work you can see and track.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
    {
      title: "Accessibility",
      description: "Professional web development should be affordable for everyone. We offer competitive pricing without compromising on quality.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Quality",
      description: "We use modern technology (Next.js) typically reserved for enterprise clients, bringing premium quality to small businesses.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      title: "Speed",
      description: "Websites delivered in days, not months. AI-assisted development means faster turnaround without sacrificing quality.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Partnership",
      description: "We build long-term relationships, not one-time transactions. Your success is our success, and we're here to support your growth.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="section bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-6">
              We Empower Small Businesses <span className="gradient-text">to Compete Online</span>
            </h1>
            <p className="text-xl text-neutral-600 mb-8">
              We're a boutique web development studio focused on making modern, high-performance websites accessible and affordable for local shops and small businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title mb-6">Our Story</h2>
              <div className="space-y-4 text-neutral-700 leading-relaxed">
                <p>
                  Morphio Web was founded on a simple belief: <span className="font-semibold">every small business deserves a professional online presence</span>, regardless of budget.
                </p>
                <p>
                  We saw too many talented small business owners struggling with expensive agencies, cookie-cutter website builders, or outdated websites that didn't represent their brand. Meanwhile, modern technology like Next.js was only accessible to large companies with big budgets.
                </p>
                <p>
                  <span className="font-semibold">We decided to change that.</span>
                </p>
                <p>
                  By combining cutting-edge technology with AI-assisted development, we can deliver enterprise-quality websites at prices small businesses can afford. Our unique work diary model ensures complete transparency – you see exactly what we're building, every single day.
                </p>
                <p>
                  Today, we're proud to have helped {totalProjects}+ small businesses establish their online presence and grow their customer base.
                </p>
              </div>
            </div>
            <div className="relative h-96 md:h-full rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800"
                alt="Team collaboration"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Mission & Values</h2>
            <p className="section-subtitle mx-auto">
              These principles guide everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {values.map((value, index) => (
              <div key={index} className="card">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 text-primary-600">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-neutral-600">{value.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-warm rounded-2xl p-8 md:p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
            <p className="text-xl max-w-3xl mx-auto">
              "To empower small businesses with modern, fast, and affordable web presence that drives growth and customer engagement."
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Meet the Team</h2>
            <p className="section-subtitle mx-auto">
              The people behind Morphio Web.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="card text-center">
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-4">{member.role}</p>
                <p className="text-neutral-600 mb-6">{member.bio}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Small Businesses */}
      <section className="section bg-primary-50">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="section-title">Why We Focus on Small Businesses</h2>
          </div>

          <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
            <p>
              <span className="font-semibold">Small businesses are the heart of our communities.</span> They create jobs, support local economies, and add character to our neighborhoods. But they often lack the resources that larger companies have for marketing and web development.
            </p>
            <p>
              We believe small businesses should have access to the same quality of web development as Fortune 500 companies – just tailored to their needs and budgets.
            </p>
            <p>
              That's why we specialize in small business websites. We understand your challenges: limited time, tight budgets, and the need to wear many hats. Our streamlined process, transparent communication, and affordable pricing are designed specifically for you.
            </p>
            <div className="bg-white rounded-xl p-8 border-l-4 border-primary-500">
              <p className="text-xl font-semibold text-primary-600 mb-2">
                "When small businesses thrive online, entire communities benefit."
              </p>
              <p className="text-neutral-600">— Morphio Web Team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Everything Under One Umbrella */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Everything Under One Umbrella</h2>
            <p className="section-subtitle mx-auto">
              Complete website solutions with all services included. From design to deployment, we handle everything so you can focus on your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Row 1 */}
            <div className="card hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Custom Design</h3>
              <p className="text-neutral-600 text-sm">
                Tailored to your brand identity and business goals
              </p>
            </div>

            <div className="card hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Lightning Fast Performance</h3>
              <p className="text-neutral-600 text-sm">
                Next.js technology for superior speed and SEO
              </p>
            </div>

            <div className="card hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Mobile-First Development</h3>
              <p className="text-neutral-600 text-sm">
                Perfect on every device, from phones to desktops
              </p>
            </div>

            <div className="card hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-accent-100 to-accent-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Secure & Reliable</h3>
              <p className="text-neutral-600 text-sm">
                HTTPS, data protection, and secure hosting
              </p>
            </div>

            {/* Row 2 */}
            <div className="card hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">SEO Optimized</h3>
              <p className="text-neutral-600 text-sm">
                Built to rank on Google from day one
              </p>
            </div>

            <div className="card hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Payment Integration</h3>
              <p className="text-neutral-600 text-sm">
                Stripe, PayPal, and secure checkout systems
              </p>
            </div>

            <div className="card hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Analytics Setup</h3>
              <p className="text-neutral-600 text-sm">
                Google Analytics to track your growth
              </p>
            </div>

            <div className="card hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-pink-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Ongoing Support</h3>
              <p className="text-neutral-600 text-sm">
                Post-launch support and maintenance packages
              </p>
            </div>

            {/* Row 3 */}
            <div className="card hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-indigo-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Contact Forms & APIs</h3>
              <p className="text-neutral-600 text-sm">
                Automated email notifications and integrations
              </p>
            </div>

            <div className="card hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-cyan-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Template Customization</h3>
              <p className="text-neutral-600 text-sm">
                Start with a template, customize to perfection
              </p>
            </div>

            <div className="card hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-red-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Performance Optimization</h3>
              <p className="text-neutral-600 text-sm">
                98+ Google PageSpeed scores guaranteed
              </p>
            </div>

            <div className="card hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary-100 to-secondary-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Transparent Process</h3>
              <p className="text-neutral-600 text-sm">
                Clear communication, no surprises, flat rates
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn btn-primary">
              View Our Packages
            </Link>
          </div>
        </div>
      </section>

      {/* Technology We Use */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Technology</h2>
            <p className="section-subtitle mx-auto">
              We use modern, proven technologies to build fast, reliable websites.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="inline-block px-4 py-2 bg-neutral-900 text-white rounded-lg mb-4 font-mono text-sm">
                Next.js 15
              </div>
              <h3 className="text-xl font-bold mb-2">Next.js Framework</h3>
              <p className="text-neutral-600">
                The React framework trusted by Netflix, TikTok, and Hulu. Lightning-fast performance and excellent SEO.
              </p>
            </div>

            <div className="card text-center">
              <div className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg mb-4 font-mono text-sm">
                TypeScript
              </div>
              <h3 className="text-xl font-bold mb-2">TypeScript</h3>
              <p className="text-neutral-600">
                Type-safe code means fewer bugs and more reliable websites that just work.
              </p>
            </div>

            <div className="card text-center">
              <div className="inline-block px-4 py-2 bg-cyan-500 text-white rounded-lg mb-4 font-mono text-sm">
                Tailwind CSS
              </div>
              <h3 className="text-xl font-bold mb-2">Tailwind CSS</h3>
              <p className="text-neutral-600">
                Modern utility-first CSS framework for beautiful, responsive designs.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-neutral-600 mb-6">
              Plus: Vercel hosting, Google Analytics, SEO optimization, and more.
            </p>
            <Link href="/services" className="btn btn-primary">
              Learn About Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gradient-to-br from-primary-500 to-secondary-600">
        <div className="container-custom text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Let's build something amazing for your business. Get a free consultation and quote today.
          </p>
          <Link href="/contact" className="btn bg-white text-primary-600 hover:bg-neutral-100 text-lg px-8 py-4">
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
