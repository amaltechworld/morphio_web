import Link from "next/link";
import { servicePackages, addOnServices, maintenancePackages } from "@/data/services";

export const metadata = {
  title: "Transparent Pricing | Morphio Web",
  description: "Clear, affordable pricing for small business websites. No hidden fees, no surprises. Choose the package that fits your needs.",
};

export default function PricingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="section bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-6">
              <span className="gradient-text">Transparent</span>, Affordable Pricing
            </h1>
            <p className="text-xl text-neutral-600 mb-8">
              No hidden fees. No surprises. Just honest pricing for quality websites.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-neutral-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-secondary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Money-Back Guarantee</span>
              </div>
              <span className="hidden sm:block text-neutral-400">•</span>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-secondary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Flexible Payment Plans</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Packages */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Website Packages</h2>
            <p className="section-subtitle mx-auto">
              Choose the package that matches your business needs
            </p>
          </div>

          {/* Comparison Table - Desktop */}
          <div className="hidden lg:block overflow-x-auto mb-12">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-neutral-50">
                  <th className="text-left p-4 font-semibold">Feature</th>
                  {servicePackages.map((pkg, index) => (
                    <th key={pkg.id} className={`p-4 text-center ${pkg.popular ? 'bg-primary-50' : index > 0 ? 'opacity-60' : ''}`}>
                      <div>
                        <div className="font-bold text-lg">{pkg.name}</div>
                        <div className="text-3xl font-bold text-primary-600 my-2">${pkg.price}</div>
                        {index === 0 ? (
                          <span className="inline-block bg-secondary-500 text-white px-3 py-1 rounded-full text-xs">
                            AVAILABLE NOW
                          </span>
                        ) : (
                          <span className="inline-block bg-neutral-400 text-white px-3 py-1 rounded-full text-xs">
                            COMING SOON
                          </span>
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-200">
                  <td className="p-4 font-medium">Pages Included</td>
                  <td className="p-4 text-center">3-5</td>
                  <td className="p-4 text-center bg-primary-50/30">5-10</td>
                  <td className="p-4 text-center">10+</td>
                </tr>
                <tr className="border-b border-neutral-200 bg-neutral-50">
                  <td className="p-4 font-medium">Custom Design</td>
                  <td className="p-4 text-center">Basic</td>
                  <td className="p-4 text-center bg-primary-50/30">✓ Full Custom</td>
                  <td className="p-4 text-center">✓ Full Custom</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="p-4 font-medium">Mobile Responsive</td>
                  <td className="p-4 text-center">✓</td>
                  <td className="p-4 text-center bg-primary-50/30">✓</td>
                  <td className="p-4 text-center">✓</td>
                </tr>
                <tr className="border-b border-neutral-200 bg-neutral-50">
                  <td className="p-4 font-medium">SEO Optimization</td>
                  <td className="p-4 text-center">Advanced</td>
                  <td className="p-4 text-center bg-primary-50/30">Advanced</td>
                  <td className="p-4 text-center">Advanced</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="p-4 font-medium">Contact Forms</td>
                  <td className="p-4 text-center">1</td>
                  <td className="p-4 text-center bg-primary-50/30">Multiple</td>
                  <td className="p-4 text-center">Multiple</td>
                </tr>
                <tr className="border-b border-neutral-200 bg-neutral-50">
                  <td className="p-4 font-medium">E-Commerce</td>
                  <td className="p-4 text-center">—</td>
                  <td className="p-4 text-center bg-primary-50/30">—</td>
                  <td className="p-4 text-center">✓ Full Featured</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="p-4 font-medium">Google Analytics</td>
                  <td className="p-4 text-center">—</td>
                  <td className="p-4 text-center bg-primary-50/30">✓</td>
                  <td className="p-4 text-center">✓</td>
                </tr>
                <tr className="border-b border-neutral-200 bg-neutral-50">
                  <td className="p-4 font-medium">Revisions</td>
                  <td className="p-4 text-center">1 round</td>
                  <td className="p-4 text-center bg-primary-50/30">2 rounds</td>
                  <td className="p-4 text-center">3 rounds</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="p-4 font-medium">Post-Launch Support</td>
                  <td className="p-4 text-center">1 week</td>
                  <td className="p-4 text-center bg-primary-50/30">2 weeks</td>
                  <td className="p-4 text-center">3 weeks</td>
                </tr>
                <tr className="border-b border-neutral-200 bg-neutral-50">
                  <td className="p-4 font-medium">Timeline</td>
                  <td className="p-4 text-center">5-7 days</td>
                  <td className="p-4 text-center bg-primary-50/30">1-2 weeks</td>
                  <td className="p-4 text-center">2-3 weeks</td>
                </tr>
                <tr>
                  <td className="p-4"></td>
                  {servicePackages.map((pkg, index) => (
                    <td key={pkg.id} className={`p-4 text-center ${pkg.popular ? 'bg-primary-50/30' : ''}`}>
                      {index === 0 ? (
                        <Link
                          href="/contact"
                          className="btn w-full btn-primary"
                        >
                          Get Started
                        </Link>
                      ) : (
                        <button
                          disabled
                          className="btn w-full bg-neutral-300 text-neutral-500 cursor-not-allowed"
                        >
                          Coming Soon
                        </button>
                      )}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          {/* Package Cards - Mobile */}
          <div className="grid lg:hidden md:grid-cols-2 gap-6 mb-12">
            {servicePackages.map((pkg, index) => (
              <div
                key={pkg.id}
                className={`card ${index === 0 ? 'border-2 border-secondary-500' : 'opacity-60'}`}
              >
                <div className="mb-4">
                  {index === 0 ? (
                    <span className="bg-secondary-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                      AVAILABLE NOW
                    </span>
                  ) : (
                    <span className="bg-neutral-400 text-white px-4 py-1 rounded-full text-sm font-bold">
                      COMING SOON
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary-600">${pkg.price}</span>
                  <span className="text-neutral-600"> flat rate</span>
                </div>
                <p className="text-neutral-600 mb-6">{pkg.description}</p>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <svg className="w-5 h-5 text-secondary-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                {index === 0 ? (
                  <Link
                    href="/contact"
                    className="btn w-full btn-primary"
                  >
                    Get Started
                  </Link>
                ) : (
                  <button
                    disabled
                    className="btn w-full bg-neutral-300 text-neutral-500 cursor-not-allowed"
                  >
                    Coming Soon
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Add-On Services</h2>
            <p className="section-subtitle mx-auto">
              Enhance your website with these optional services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {addOnServices.map((service, index) => (
              <div key={index} className="card">
                <h3 className="font-bold mb-2">{service.name}</h3>
                <p className="text-sm text-neutral-600 mb-3">{service.description}</p>
                <div className="text-2xl font-bold text-primary-600">${service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Packages */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Ongoing Maintenance</h2>
            <p className="section-subtitle mx-auto">
              Keep your website updated and running smoothly
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {maintenancePackages.map((pkg, index) => (
              <div key={index} className="card">
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-primary-600">${pkg.price}</span>
                  <span className="text-neutral-600">/{pkg.period}</span>
                </div>
                <ul className="space-y-3">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-secondary-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-neutral-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment & Guarantee */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card">
              <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Flexible Payment Terms</h3>
              <p className="text-neutral-600 mb-4">
                We offer payment plans to make professional web development accessible:
              </p>
              <ul className="space-y-2 text-neutral-700">
                <li>• 50% deposit to start</li>
                <li>• 50% before launch</li>
                <li>• Payment via PayPal, Stripe, or bank transfer</li>
                <li>• Custom payment plans available on request</li>
              </ul>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">100% Satisfaction Guarantee</h3>
              <p className="text-neutral-600 mb-4">
                We're confident you'll love our work. Here's our commitment:
              </p>
              <ul className="space-y-2 text-neutral-700">
                <li>• Full refund if unhappy with initial design</li>
                <li>• Unlimited revisions within agreed scope</li>
                <li>• No launch until you're 100% satisfied</li>
                <li>• Clear communication throughout the process</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="section-title">Pricing FAQs</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Are there any hidden fees?",
                answer: "No! The price you see is the price you pay. The only additional costs would be optional add-ons you choose, your domain name (~$15/year), and hosting if your site exceeds free tier limits (rare for small businesses).",
              },
              {
                question: "Do I own the website after launch?",
                answer: "Yes! Upon full payment, you own the website and all its content. We'll provide all necessary files and access. You're free to host it anywhere and make any changes you want.",
              },
              {
                question: "What if I need changes after the project is done?",
                answer: "All packages include post-launch support (1-3 weeks). After that, small text/image changes are often free. Larger updates can be quoted separately or you can choose a maintenance package.",
              },
              {
                question: "Can I upgrade my package later?",
                answer: "Absolutely! Start with a smaller package and add features as your business grows. We'll credit what you've already paid toward the upgrade.",
              },
              {
                question: "Do you offer refunds?",
                answer: "If you're not happy with the initial design concepts, we'll refund your deposit - no questions asked. After design approval, we don't offer refunds, but we guarantee unlimited revisions until you're satisfied.",
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

      {/* CTA */}
      <section className="section bg-gradient-to-br from-primary-500 to-secondary-600">
        <div className="container-custom text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Get a custom quote for your project. Free consultation, no obligations.
          </p>
          <Link href="/contact" className="btn bg-white text-primary-600 hover:bg-neutral-100 text-lg px-8 py-4">
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
