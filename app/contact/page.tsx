"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (you'll replace this with actual API call)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Replace with your actual Fiverr gig URL
  const fiverrGigUrl = "https://www.fiverr.com/your-username/your-gig-url";

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="section bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-6">
              Ready to Start Your <span className="gradient-text">Project</span>?
            </h1>
            <p className="text-xl text-neutral-600 mb-8">
              All projects are handled securely through Fiverr for your protection and peace of mind.
            </p>

            {/* Main CTA - Order on Fiverr */}
            <a
              href={fiverrGigUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#1DBF73] hover:bg-[#19A463] text-white font-bold text-lg px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg mb-6"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              Order on Fiverr
            </a>

            <div className="flex flex-col sm:flex-row gap-4 justify-center text-neutral-600 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#1DBF73]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Secure Payments</span>
              </div>
              <span className="hidden sm:block text-neutral-400">•</span>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#1DBF73]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Buyer Protection</span>
              </div>
              <span className="hidden sm:block text-neutral-400">•</span>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#1DBF73]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Clear Milestones</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Fiverr Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why We Work Through Fiverr</h2>
              <p className="text-neutral-600 text-lg">
                To protect both you and us, all projects are processed exclusively through Fiverr's secure platform.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Secure Payments</h3>
                <p className="text-neutral-600 text-sm">
                  Your payment is protected by Fiverr's escrow system. You only release payment when you're 100% satisfied.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Buyer Protection</h3>
                <p className="text-neutral-600 text-sm">
                  Fiverr's resolution center ensures fair treatment. If something goes wrong, you're covered.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Clear Milestones</h3>
                <p className="text-neutral-600 text-sm">
                  Track progress, communicate easily, and see exactly what you're paying for at each stage.
                </p>
              </div>
            </div>

            {/* Trust Message */}
            <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-lg mb-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-primary-900 mb-2">Professional & Transparent</h3>
                  <p className="text-primary-800 text-sm leading-relaxed">
                    Working through Fiverr isn't about distrust—it's about professionalism. It gives you verified transactions,
                    clear contracts, and a platform where both of us can focus on creating an amazing website for your business,
                    knowing the business side is handled securely.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Repeat */}
            <div className="text-center">
              <a
                href={fiverrGigUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#1DBF73] hover:bg-[#19A463] text-white font-bold text-lg px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg"
              >
                Get Started on Fiverr
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <p className="text-sm text-neutral-600 mt-4">
                Click the button to view our services and pricing on Fiverr
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Inquiry Form */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="card">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Have Questions First?</h2>
                <p className="text-neutral-600">
                  Not ready to order yet? Send us a quick message and we'll get back to you within 24 hours.
                </p>
              </div>

              {submitStatus === "success" && (
                <div className="bg-secondary-50 border-l-4 border-secondary-500 p-4 rounded-lg mb-6 animate-slide-down">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-secondary-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-secondary-800">Message Sent Successfully!</h3>
                      <p className="text-sm text-secondary-700">We'll respond within 24 hours. For faster response, message us on Fiverr!</p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                    Your Question *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                    placeholder="What would you like to know about our services?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send Question"
                  )}
                </button>

                <p className="text-sm text-neutral-600 text-center">
                  For project orders, please use the "Order on Fiverr" button above.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            <div className="card">
              <h3 className="font-bold text-lg mb-2">Why only Fiverr? Can't I just pay you directly?</h3>
              <p className="text-neutral-600">
                While direct payment might seem simpler, Fiverr provides crucial protections for both of us.
                You get buyer protection, dispute resolution, and escrow services. I get verified payments and
                protection from payment fraud. It's a win-win that lets us both focus on creating your perfect website.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-lg mb-2">Do I need a Fiverr account?</h3>
              <p className="text-neutral-600">
                Yes, but it's completely free and takes just 2 minutes to set up. You can sign up using your Google,
                Facebook, or email account. Think of it like creating an account on any other service—simple and secure.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-lg mb-2">How does payment work on Fiverr?</h3>
              <p className="text-neutral-600">
                When you place an order, Fiverr holds your payment securely. I start working on your project, and once
                you approve the delivery and are completely satisfied, the payment is released. You're always in control.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-lg mb-2">What if I'm not happy with the work?</h3>
              <p className="text-neutral-600">
                Fiverr's platform includes unlimited revisions (as stated in the package) and a resolution center.
                If there's any issue, Fiverr mediates to ensure fairness. Your money is protected until you're satisfied.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-lg mb-2">Can we still communicate directly?</h3>
              <p className="text-neutral-600">
                Absolutely! Fiverr has a built-in messaging system where we can chat in real-time. You can also reach out
                with questions before ordering using the form above. However, all project work and payments go through Fiverr.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-lg mb-2">Is this more expensive than working directly?</h3>
              <p className="text-neutral-600">
                No. Our prices on Fiverr are the same as what we'd charge directly. The value you get from Fiverr's
                protection, clear contracts, and professional platform is included at no extra cost to you.
              </p>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center mt-12">
            <a
              href={fiverrGigUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#1DBF73] hover:bg-[#19A463] text-white font-bold text-lg px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg"
            >
              View Our Fiverr Services
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="section bg-neutral-50">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Trusted by Small Businesses</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="card">
              <div className="text-4xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-sm text-neutral-600">Satisfaction Rate</div>
              <div className="text-xs text-neutral-500 mt-2">Via Fiverr Reviews</div>
            </div>
            <div className="card">
              <div className="text-4xl font-bold text-primary-600 mb-2">Secure</div>
              <div className="text-sm text-neutral-600">Payment Processing</div>
              <div className="text-xs text-neutral-500 mt-2">Protected by Fiverr</div>
            </div>
            <div className="card">
              <div className="text-4xl font-bold text-primary-600 mb-2">Fast</div>
              <div className="text-sm text-neutral-600">Project Delivery</div>
              <div className="text-xs text-neutral-500 mt-2">7-14 Days Average</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
