import ContactSection from '@/components/sections/ContactSection';
import { Metadata } from 'next';
import { FiDatabase, FiCpu, FiCheckCircle, FiLayers, FiZap, FiShield, FiCode, FiTrendingUp, FiUsers, FiTarget } from 'react-icons/fi';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Pods for SaaS: Deploy Data, AI, & QA Teams | Netsmartz',
    description: 'Deploy dedicated, outcome-driven pods that plug into your SaaS product lifecycle—data, AI, and quality—in weeks, not months.',
  };
}

export default function SaaSPodsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-10 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MTN8MHwxfHNlYXJjaHwyfHxTYWFTJTIwc29mdHdhcmUlMjBkZXZlbG9wbWVudCUyMHRlYW0lMjBjb2xsYWJvcmF0aW9ufGVufDB8fHx8MTc3NTU0MzI3N3ww&ixlib=rb-4.1.0&q=85"
            alt="SaaS Team"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Pods for SaaS: Deploy <span className="text-[#fe7725]">Data, AI, & QA Teams</span> That Deliver
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stop building in-house. Stop waiting on hiring. Deploy dedicated, outcome-driven pods that plug into your SaaS product lifecycle—data, AI, and quality—in weeks, not months.
            </p>
            <a
              href="#contact"
              className="inline-block bg-[#fe7725] hover:bg-[#e56815] text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg hover:shadow-xl"
            >
              Explore Pods for SaaS Now
            </a>
          </div>
        </div>
      </section>

      {/* The SaaS Execution Gap */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              The <span className="text-[#fe7725]">SaaS Execution Gap</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              80-90% of SaaS initiatives don't fail because of models, tools, or platforms. They fail because data pipelines, quality, and governance are not production-ready. SaaS leaders today face three pressing challenges:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#fe7725]/10 rounded-lg flex items-center justify-center mb-6">
                <FiCpu className="text-3xl text-[#fe7725]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI Features Stuck in PoC</h3>
              <p className="text-gray-600">
                Shortage of AI engineers and rising costs stall production deployment
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#fe7725]/10 rounded-lg flex items-center justify-center mb-6">
                <FiDatabase className="text-3xl text-[#fe7725]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Data Fragmentation</h3>
              <p className="text-gray-600">
                Critical data scattered across operational, customer, and product systems
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#fe7725]/10 rounded-lg flex items-center justify-center mb-6">
                <FiCheckCircle className="text-3xl text-[#fe7725]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">QA Bottlenecks</h3>
              <p className="text-gray-600">
                Regression issues with every release, CI/CD pipelines blocked by unstable tests
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              The Solution: <span className="text-[#fe7725]">Dedicated Pods for SaaS</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Netsmartz provides three specialized pod models, each designed as a complete delivery unit with clear accountability, predictable timelines, and measurable ROI.
            </p>
          </div>
        </div>
      </section>

      {/* Data Pods Section */}
      <section className="py-10 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-[#fe7725]/10 rounded-full px-4 py-2 mb-6">
                <span className="text-[#fe7725] font-semibold">1. Data Pods</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Fix Your <span className="text-[#fe7725]">Foundation First</span>
              </h2>
              <p className="text-gray-600 mb-6">
                Most AI initiatives don't fail because of models. They fail because data pipelines, quality, and governance are not production-ready. Data Pods are 90-day, outcome-driven delivery units that stabilize data pipelines, enforce quality, and deliver production-ready analytics and AI use cases.
              </p>

              <div className="bg-white rounded-xl p-6 mb-6 shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-4">What you own after 90 days:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <FiCheckCircle className="text-[#fe7725] mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Production-ready data architecture blueprint</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheckCircle className="text-[#fe7725] mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Governed, documented, and auditable data pipelines</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheckCircle className="text-[#fe7725] mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Three AI or advanced analytics use cases running in production</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheckCircle className="text-[#fe7725] mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">ROI models tied to measurable business outcomes</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-[#fe7725]/5 to-transparent rounded-lg p-5 mb-6">
                <p className="text-sm font-semibold text-gray-900 mb-2">Use cases enabled:</p>
                <p className="text-gray-600">
                  Predictive analytics on trusted datasets, revenue optimization, customer insights, forecasting, and AI models ready for production.
                </p>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center text-[#fe7725] font-semibold hover:underline"
              >
                Explore Data Pods for SaaS
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1667984390538-3dea7a3fe33d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2ODh8MHwxfHNlYXJjaHwzfHxjbG91ZCUyMGNvbXB1dGluZyUyMGRhdGElMjBwaXBlbGluZXMlMjB0ZWNobm9sb2d5fGVufDB8fHx8MTc3NTU0MzI3N3ww&ixlib=rb-4.1.0&q=85"
                alt="Data Pods Architecture"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* AI Pods Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <img
                src="https://images.unsplash.com/photo-1763568258235-f40425a94af9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAxODF8MHwxfHNlYXJjaHwxfHxBSSUyMGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2UlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3NzU1NDMyNzd8MA&ixlib=rb-4.1.0&q=85"
                alt="AI Development"
                className="rounded-2xl shadow-2xl"
              />
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-block bg-[#fe7725]/10 rounded-full px-4 py-2 mb-6">
                <span className="text-[#fe7725] font-semibold">2. AI Pods</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Launch <span className="text-[#fe7725]">Production-Ready AI Features</span> Without Hiring
              </h2>
              <p className="text-gray-600 mb-6">
                AI is no longer a differentiator—it's a baseline expectation for modern SaaS. AI Pods help SaaS companies deliver enterprise-ready AI features in weeks, not quarters, without increasing headcount or taking on delivery risk.
              </p>

              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">What you get:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <FiCheckCircle className="text-[#fe7725] mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Production-first pods with dedicated AI engineers</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheckCircle className="text-[#fe7725] mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Predictable delivery with fixed-scope, predictable spend</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheckCircle className="text-[#fe7725] mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Zero disruption to existing SaaS architecture</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheckCircle className="text-[#fe7725] mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Security, auditability, and compliance built in</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-[#fe7725]/5 to-transparent rounded-lg p-5 mb-6">
                <p className="text-sm font-semibold text-gray-900 mb-3">High-impact use cases:</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-[#fe7725] mr-2">→</span>
                    RAG-based assistants for product documentation and knowledge bases
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#fe7725] mr-2">→</span>
                    AI copilots and support assistants
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#fe7725] mr-2">→</span>
                    Semantic search over structured and unstructured data
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#fe7725] mr-2">→</span>
                    Workflow automation with review points for accuracy and compliance
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#fe7725] mr-2">→</span>
                    Task-oriented SaaS AI agents embedded directly within product workflows
                  </li>
                </ul>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center text-[#fe7725] font-semibold hover:underline"
              >
                Explore AI Pods for SaaS
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* QA Pods Section */}
      <section className="py-10 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-[#fe7725]/10 rounded-full px-4 py-2 mb-6">
                <span className="text-[#fe7725] font-semibold">3. QA Pods</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Scale <span className="text-[#fe7725]">Quality</span> Without Slowing Releases
              </h2>
              <p className="text-gray-600 mb-6">
                Modern SaaS teams release faster than ever. QA Pods help you maintain speed without sacrificing quality by embedding dedicated, automation-first QA teams aligned to your product and CI/CD workflows.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-lg p-5 shadow">
                  <h4 className="text-sm font-bold text-gray-900 mb-2">Why traditional QA fails:</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">✕</span>
                      Fragmented QA ownership
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">✕</span>
                      Manual-heavy regression
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">✕</span>
                      Late performance testing
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">✕</span>
                      Flaky tests blocking CI/CD
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-[#fe7725]/10 to-[#fe7725]/5 rounded-lg p-5 shadow">
                  <h4 className="text-sm font-bold text-gray-900 mb-2">How QA Pods solve it:</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <FiCheckCircle className="text-[#fe7725] mt-0.5 mr-2 flex-shrink-0" />
                      Dedicated QA teams
                    </li>
                    <li className="flex items-start">
                      <FiCheckCircle className="text-[#fe7725] mt-0.5 mr-2 flex-shrink-0" />
                      Automation-first delivery
                    </li>
                    <li className="flex items-start">
                      <FiCheckCircle className="text-[#fe7725] mt-0.5 mr-2 flex-shrink-0" />
                      CI/CD quality gates
                    </li>
                    <li className="flex items-start">
                      <FiCheckCircle className="text-[#fe7725] mt-0.5 mr-2 flex-shrink-0" />
                      Stable test execution
                    </li>
                  </ul>
                </div>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center text-[#fe7725] font-semibold hover:underline"
              >
                Explore QA Pods for SaaS
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1682562031271-94c870a5bc53?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMHF1YWxpdHklMjBhc3N1cmFuY2UlMjB0ZXN0aW5nJTIwYXV0b21hdGlvbnxlbnwwfHx8fDE3NzU1NDMyODR8MA&ixlib=rb-4.1.0&q=85"
                alt="QA Automation"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pod Packages Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Pod Packages Designed for <span className="text-[#fe7725]">Every SaaS Stage</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="grid md:col-span-2 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border-2 border-gray-100">
                <div className="w-14 h-14 bg-[#fe7725]/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <FiZap className="text-2xl text-[#fe7725]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-3">Starter Pod</h3>
                <p className="text-[#fe7725] font-semibold text-center mb-4">2 engineers</p>
                <p className="text-gray-600 text-center text-sm">
                  For POC and MVP-stage SaaS
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#fe7725]/5 to-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border-2 border-[#fe7725]/20">
                <div className="w-14 h-14 bg-[#fe7725]/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <FiTrendingUp className="text-2xl text-[#fe7725]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-3">Acceleration Pod</h3>
                <p className="text-[#fe7725] font-semibold text-center mb-4">4 engineers</p>
                <p className="text-gray-600 text-center text-sm">
                  For post-MVP scaling
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all text-white">
                <div className="w-14 h-14 bg-[#fe7725] rounded-full flex items-center justify-center mb-6 mx-auto">
                  <FiTarget className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-bold text-center mb-3">Enterprise Pod</h3>
                <p className="text-[#fe7725] font-semibold text-center mb-4">6 engineers</p>
                <p className="text-gray-300 text-center text-sm">
                  For in-market, revenue-generating products
                </p>
              </div>
            </div>

            <div className="md:col-span-2 bg-gradient-to-r from-[#fe7725] to-orange-600 rounded-xl p-8 shadow-xl text-white text-center">
              <FiLayers className="text-4xl mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Build Your Own Pod</h3>
              <p className="text-white/90 max-w-md mx-auto">
                Fully tailored quality engineering customized to your specific needs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Netsmartz Section */}
      <section className="py-10 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why <span className="text-[#fe7725]">Netsmartz</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-gray-800 rounded-xl p-6 text-center">
              <FiUsers className="text-4xl text-[#fe7725] mx-auto mb-4" />
              <p className="text-white font-semibold mb-2">26+ years</p>
              <p className="text-gray-300 text-sm">Enterprise technology delivery</p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 text-center">
              <FiCode className="text-4xl text-[#fe7725] mx-auto mb-4" />
              <p className="text-white font-semibold mb-2">1,500+ engineers</p>
              <p className="text-gray-300 text-sm">Global with offshore and onshore execution</p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 text-center">
              <FiShield className="text-4xl text-[#fe7725] mx-auto mb-4" />
              <p className="text-white font-semibold mb-2">Enterprise-grade</p>
              <p className="text-gray-300 text-sm">SOC2, ISO 27001, CMMI Level 3</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-bold text-[#fe7725] mb-3">Outcome-Driven</h3>
              <p className="text-gray-300 text-sm">
                Not staff augmentation, not consulting fluff—dedicated pods with clear deliverables
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-bold text-[#fe7725] mb-3">Platform Agnostic</h3>
              <p className="text-gray-300 text-sm">
                Azure, AWS, GCP, OpenAI, Anthropic, or open-source—we work with your stack
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-10 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Ready to Deploy Your <span className="text-[#fe7725]">First Pod?</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Let's discuss how our specialized pods can accelerate your SaaS product lifecycle
            </p>
          </div>
          <ContactSection />
        </div>
      </section>
    </div>
  );
}
