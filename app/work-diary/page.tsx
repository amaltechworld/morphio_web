"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { diaryEntries } from "@/data/diary";
import { projects } from "@/data/projects";

export default function WorkDiaryPage() {
  const [filter, setFilter] = useState("all");

  const projectNames = ["all", ...Array.from(new Set(diaryEntries.map(e => e.projectName)))];

  const filteredEntries = filter === "all"
    ? diaryEntries
    : diaryEntries.filter(e => e.projectName === filter);

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="section bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-600">
        <div className="container-custom text-center text-white">
          <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6 animate-fade-in">
            <span className="font-medium">✨ Our Unique Transparency Feature</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up">
            Live Work Diary
          </h1>

          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90 animate-slide-up animate-delay-200">
            See exactly how we work. Real project updates, real progress, complete transparency.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animate-delay-400">
            <div className="flex items-center gap-2 text-white/90">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Daily Updates</span>
            </div>
            <span className="hidden sm:block text-white/40">•</span>
            <div className="flex items-center gap-2 text-white/90">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Real Projects</span>
            </div>
            <span className="hidden sm:block text-white/40">•</span>
            <div className="flex items-center gap-2 text-white/90">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>100% Transparent</span>
            </div>
          </div>
        </div>
      </section>

      {/* What is Work Diary */}
      <section className="section bg-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="section-title">What is a Work Diary?</h2>
          </div>

          <div className="space-y-6 text-lg text-neutral-700 leading-relaxed mb-12">
            <p>
              <span className="font-semibold">We believe in complete transparency.</span> Instead of leaving you in the dark wondering "what are they doing with my money?", we share our daily progress on real client projects.
            </p>
            <p>
              Every entry below is a real update from an actual project (shared with client permission). You'll see what we built, challenges we solved, client feedback, and code snippets – everything that goes into creating a professional website.
            </p>
            <p className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-lg">
              <span className="font-semibold text-primary-800">For potential clients:</span> This shows you exactly how we work, communicate, and deliver results. No smoke and mirrors.
              <br/><br/>
              <span className="font-semibold text-primary-800">For current clients:</span> You'll get your own private work diary with daily updates just like these!
            </p>
          </div>

          <div className="bg-neutral-50 rounded-xl p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold mb-2">Privacy Note</h3>
                <p className="text-sm text-neutral-600">
                  All client information is shared with explicit written permission. Some projects are anonymized to protect client privacy while still demonstrating our capabilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter & Entries */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {projectNames.map((projectName) => (
              <button
                key={projectName}
                onClick={() => setFilter(projectName)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  filter === projectName
                    ? "bg-primary-500 text-white shadow-lg"
                    : "bg-white text-neutral-700 hover:bg-neutral-100"
                }`}
              >
                {projectName === "all" ? "All Projects" : projectName}
              </button>
            ))}
          </div>

          {/* Entries */}
          <div className="space-y-8 max-w-5xl mx-auto">
            {filteredEntries.map((entry, index) => {
              const project = projects.find(p => p.id === entry.projectId);

              return (
                <div key={entry.id} id={entry.id} className="card scroll-mt-24">
                  {/* Entry Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 pb-6 border-b border-neutral-200">
                    <div>
                      <div className="text-sm text-neutral-500 mb-2">
                        {new Date(entry.date).toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                      <h2 className="text-2xl font-bold mb-2">{entry.title}</h2>
                      <Link
                        href={`/portfolio/${entry.projectId}`}
                        className="inline-flex items-center gap-2 text-primary-600 font-medium hover:underline"
                      >
                        <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                        {entry.projectName}
                      </Link>
                    </div>

                    {/* Progress Circle */}
                    <div className="mt-4 md:mt-0">
                      <div className="relative w-24 h-24">
                        <svg className="w-full h-full transform -rotate-90">
                          <circle
                            cx="48"
                            cy="48"
                            r="40"
                            stroke="currentColor"
                            strokeWidth="8"
                            fill="none"
                            className="text-neutral-200"
                          />
                          <circle
                            cx="48"
                            cy="48"
                            r="40"
                            stroke="currentColor"
                            strokeWidth="8"
                            fill="none"
                            strokeDasharray={`${2 * Math.PI * 40}`}
                            strokeDashoffset={`${2 * Math.PI * 40 * (1 - entry.progress / 100)}`}
                            className="text-primary-500 transition-all duration-1000"
                            strokeLinecap="round"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-xl font-bold text-primary-600">{entry.progress}%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-neutral-700 mb-6 leading-relaxed">{entry.description}</p>

                  {/* Image if exists */}
                  {entry.imageUrl && (
                    <div className="relative h-64 md:h-80 rounded-lg overflow-hidden mb-6">
                      <Image
                        src={entry.imageUrl}
                        alt={entry.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}

                  {/* Tasks Completed */}
                  <div className="mb-6">
                    <h3 className="font-bold mb-3 flex items-center gap-2">
                      <svg className="w-5 h-5 text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Tasks Completed Today
                    </h3>
                    <ul className="space-y-2">
                      {entry.tasksCompleted.map((task, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-secondary-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-neutral-700">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Code Snippet if exists */}
                  {entry.codeSnippet && (
                    <div className="mb-6">
                      <h3 className="font-bold mb-3 flex items-center gap-2">
                        <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                        Code Highlight
                      </h3>
                      <div className="bg-neutral-900 rounded-lg p-4 overflow-x-auto">
                        <div className="text-xs text-neutral-400 mb-2">{entry.codeSnippet.language}</div>
                        <pre className="text-sm text-neutral-100 font-mono">
                          <code>{entry.codeSnippet.code}</code>
                        </pre>
                      </div>
                    </div>
                  )}

                  {/* Client Feedback if exists */}
                  {entry.clientFeedback && (
                    <div className="mb-6 bg-primary-50 border-l-4 border-primary-500 p-4 rounded-r-lg">
                      <h3 className="font-bold mb-2 text-primary-800 flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        Client Feedback
                      </h3>
                      <p className="text-neutral-700 italic">"{entry.clientFeedback}"</p>
                    </div>
                  )}

                  {/* Next Steps */}
                  <div>
                    <h3 className="font-bold mb-3 flex items-center gap-2">
                      <svg className="w-5 h-5 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                      Next Steps
                    </h3>
                    <ul className="space-y-2">
                      {entry.nextSteps.map((step, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-neutral-400">→</span>
                          <span className="text-neutral-600">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gradient-to-br from-primary-500 to-secondary-600">
        <div className="container-custom text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Want Your Own Work Diary?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            When you work with us, you'll get daily updates just like these. Complete transparency, every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn bg-white text-primary-600 hover:bg-neutral-100 text-lg px-8 py-4">
              Start Your Project
            </Link>
            <Link href="/portfolio" className="btn border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-4">
              View Completed Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
