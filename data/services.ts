import { ServicePackage } from "@/lib/types";

export const servicePackages: ServicePackage[] = [
  {
    id: "starter",
    name: "Quick Start Website",
    price: 100,
    description: "Perfect for brand new businesses needing a professional online presence fast.",
    features: [
      "3-5 responsive pages",
      "Mobile-first design",
      "Contact form with email notifications",
      "Google Maps integration",
      "Social media links",
      "Advanced SEO optimization",
      "1 round of revisions",
      "1 week post-launch support",
    ],
    idealFor: [
      "Salons & Barbershops",
      "Small Cafes",
      "Consultants",
      "Solo Service Providers",
    ],
    timeline: "5-7 days",
  },
  {
    id: "business",
    name: "Business Website",
    price: 300,
    description: "Complete website solution for established small businesses with custom features.",
    features: [
      "5-10 custom pages",
      "Custom design tailored to your brand",
      "Advanced contact forms",
      "Image galleries & portfolios",
      "Blog/News section",
      "Advanced SEO with schema markup",
      "Google Analytics integration",
      "2 rounds of revisions",
      "2 weeks post-launch support",
    ],
    idealFor: [
      "Restaurants & Cafes",
      "Retail Shops",
      "Professional Services",
      "Health & Wellness",
    ],
    timeline: "1-2 weeks",
    popular: true,
  },
  {
    id: "ecommerce",
    name: "E-Commerce Integration",
    price: 500,
    description: "Full-featured website with online ordering and payment processing capabilities.",
    features: [
      "Everything in Business package",
      "Product catalog with search & filters",
      "Shopping cart functionality",
      "Secure payment processing (Stripe)",
      "Order management system",
      "Inventory tracking",
      "Customer accounts",
      "Email order confirmations",
      "3 rounds of revisions",
      "3 weeks post-launch support",
    ],
    idealFor: [
      "Retail Shops",
      "Bakeries & Food Services",
      "Flower Shops",
      "Product-Based Businesses",
    ],
    timeline: "2-3 weeks",
  },
];

export const addOnServices = [
  {
    name: "Professional Copywriting",
    description: "SEO-optimized content writing for all pages",
    price: 10,
  },
  {
    name: "Additional Pages",
    description: "Per extra page beyond package limits",
    price: 10,
  },
  {
    name: "Booking System Integration",
    description: "Calendly or similar booking system setup",
    price: 10,
  },
  {
    name: "Social Media Integration",
    description: "Live Instagram/Facebook feed integration",
    price: 10,
  },
  {
    name: "Newsletter Setup",
    description: "Mailchimp or similar email marketing integration",
    price: 10,
  },
  {
    name: "API Integration",
    description: "Third-party service integration (per API)",
    price: 10,
  },
  {
    name: "Priority Support",
    description: "24-hour response time guarantee",
    price: 10,
  },
];

export const maintenancePackages = [
  {
    name: "Basic Maintenance",
    price: 50,
    period: "month",
    features: [
      "Content updates (text, images)",
      "Security monitoring",
      "Backup management",
      "Monthly performance report",
      "Email support (48hr response)",
    ],
  },
  {
    name: "Premium Maintenance",
    price: 100,
    period: "month",
    features: [
      "Everything in Basic",
      "Weekly content updates",
      "SEO monitoring & optimization",
      "A/B testing support",
      "Priority email support (24hr response)",
      "Monthly strategy call",
    ],
  },
];
