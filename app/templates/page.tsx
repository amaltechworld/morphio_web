"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { templates, templateCategories } from "@/data/templates";

export default function TemplatesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Templates");

  const filteredTemplates = selectedCategory === "All Templates"
    ? templates
    : templates.filter((template) => template.category === selectedCategory);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
              Template Gallery
            </h1>
            <p className="text-xl text-neutral-600 mb-8">
              Browse our collection of professionally designed templates. Each template is fully customizable and built with Next.js for maximum performance.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
              <span className="text-primary-600 font-semibold">{templates.length}</span>
              <span className="text-neutral-600">Premium Templates Available</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {templateCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-primary-500 text-white shadow-lg"
                    : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Templates Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTemplates.map((template) => (
              <div
                key={template.id}
                className="card p-0 overflow-hidden group hover:shadow-2xl transition-all duration-300"
              >
                {/* Template Preview Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={template.previewImage}
                    alt={template.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-primary-500 text-white text-sm font-medium rounded-full">
                      {template.category}
                    </span>
                  </div>
                  {/* View Demo Button - appears on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link
                      href={template.demoUrl}
                      target="_blank"
                      className="btn btn-primary"
                    >
                      View Live Demo
                    </Link>
                  </div>
                </div>

                {/* Template Details */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{template.name}</h3>
                  <p className="text-neutral-600 mb-4 line-clamp-2">
                    {template.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-neutral-700 mb-2">
                      Key Features:
                    </h4>
                    <ul className="space-y-1">
                      {template.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-neutral-600">
                          <svg className="w-4 h-4 text-secondary-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {template.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-neutral-100 text-neutral-600 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Link
                      href={template.demoUrl}
                      target="_blank"
                      className="flex-1 btn btn-outline text-sm"
                    >
                      Live Demo
                    </Link>
                    <Link
                      href="/contact"
                      className="flex-1 btn btn-primary text-sm"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredTemplates.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-neutral-600">
                No templates found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-600">
        <div className="container-custom text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need a Custom Design?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Don't see exactly what you're looking for? We can create a completely custom design tailored to your brand and business needs.
          </p>
          <Link href="/contact" className="btn bg-white text-primary-600 hover:bg-neutral-100">
            Request Custom Design
          </Link>
        </div>
      </section>
    </div>
  );
}
