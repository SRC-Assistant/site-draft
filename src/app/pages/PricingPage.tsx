import { Check, X, Sparkles } from "lucide-react";

export function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      description: "Perfect for small businesses and solopreneurs getting started with AI automation.",
      features: [
        { name: "Up to 3 social media accounts", included: true },
        { name: "100 AI-generated posts/month", included: true },
        { name: "Basic AI assistant (1,000 conversations/month)", included: true },
        { name: "Reward system (up to 500 quizzes/month)", included: true },
        { name: "Email support", included: true },
        { name: "Basic analytics dashboard", included: true },
        { name: "Content calendar", included: true },
        { name: "Advanced analytics & reporting", included: false },
        { name: "MCP server integration", included: false },
        { name: "Priority support", included: false },
        { name: "Custom branding", included: false },
        { name: "API access", included: false },
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Professional",
      price: "$149",
      period: "/month",
      description: "Ideal for growing businesses that need advanced automation and customization.",
      features: [
        { name: "Up to 10 social media accounts", included: true },
        { name: "Unlimited AI-generated posts", included: true },
        { name: "Advanced AI assistant (10,000 conversations/month)", included: true },
        { name: "Unlimited reward system quizzes", included: true },
        { name: "Priority email & chat support", included: true },
        { name: "Advanced analytics & reporting", included: true },
        { name: "Visual content calendar", included: true },
        { name: "MCP server integration", included: true },
        { name: "Custom assistant training", included: true },
        { name: "Custom branding", included: true },
        { name: "Team collaboration (up to 5 users)", included: true },
        { name: "API access", included: false },
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Comprehensive solution for large organizations with complex automation needs.",
      features: [
        { name: "Unlimited social media accounts", included: true },
        { name: "Unlimited AI-generated content", included: true },
        { name: "Enterprise AI assistant (unlimited conversations)", included: true },
        { name: "Unlimited reward system quizzes", included: true },
        { name: "24/7 phone & priority support", included: true },
        { name: "Enterprise analytics suite", included: true },
        { name: "Advanced content calendar", included: true },
        { name: "Full MCP server integration", included: true },
        { name: "Dedicated AI training & customization", included: true },
        { name: "White-label solution", included: true },
        { name: "Unlimited team members", included: true },
        { name: "Full API access", included: true },
        { name: "Dedicated account manager", included: true },
        { name: "Custom SLAs", included: true },
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  const features = [
    {
      category: "Social Media Automation",
      items: [
        "AI-powered post generation",
        "Automated reply management",
        "Multi-platform scheduling",
        "Content calendar",
        "Performance analytics",
      ],
    },
    {
      category: "AI Website Assistant",
      items: [
        "Embed code integration",
        "Natural language processing",
        "Website navigation help",
        "MCP server support",
        "Customizable behavior",
      ],
    },
    {
      category: "Reward System",
      items: [
        "AI interest detection",
        "Interactive quiz popups",
        "Instant discount rewards",
        "Engagement analytics",
        "Customizable design",
      ],
    },
  ];

  const faqs = [
    {
      question: "What's included in the free trial?",
      answer:
        "The 14-day free trial includes full access to all features of your chosen plan. No credit card required to start. You'll get hands-on experience with AI automation, the website assistant, and reward system.",
    },
    {
      question: "Can I switch plans later?",
      answer:
        "Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate the difference for the current billing period.",
    },
    {
      question: "What social media platforms do you support?",
      answer:
        "We currently support X (Twitter), Instagram, Facebook, LinkedIn, and are constantly adding more platforms. Enterprise plans can request custom platform integrations.",
    },
    {
      question: "How does the AI assistant work?",
      answer:
        "Simply add our embed code to your website, and the AI assistant will appear as a chat widget. It uses advanced NLP to understand visitor questions and can be trained on your specific business information, products, and FAQs.",
    },
    {
      question: "What is MCP server integration?",
      answer:
        "MCP (Model Context Protocol) servers allow you to connect your existing APIs and databases to our AI assistant for advanced customization. We can also convert your Postman collections into MCP servers automatically.",
    },
    {
      question: "How does billing work?",
      answer:
        "We bill monthly or annually (save 20% with annual billing). All plans include a 14-day free trial. You can cancel anytime, and there are no hidden fees or setup charges.",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 text-white py-24">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Sparkles className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-indigo-100 mb-8">
              Choose the perfect plan for your business. All plans include a 14-day free trial with full feature access.
            </p>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <Check className="h-5 w-5" />
              <span>Save 20% with annual billing</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-3xl bg-white p-8 shadow-lg transition-all ${
                  plan.popular
                    ? "ring-2 ring-indigo-600 scale-105 shadow-2xl"
                    : "hover:shadow-xl"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-0 right-0 mx-auto w-fit">
                    <div className="rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-2 text-sm font-semibold text-white shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    {plan.period && <span className="text-gray-600">{plan.period}</span>}
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="h-5 w-5 text-gray-300 flex-shrink-0 mt-0.5" />
                      )}
                      <span className={feature.included ? "text-gray-700" : "text-gray-400"}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full rounded-xl px-6 py-4 font-semibold transition-all ${
                    plan.popular
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/50 hover:shadow-xl hover:scale-105"
                      : "bg-gray-900 text-white hover:bg-gray-800"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600">
              All plans include 14-day free trial • No credit card required • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">All Plans Include</h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
              Every subscription comes with our complete suite of AI-powered features.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((category, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold mb-6">{category.category}</h3>
                  <ul className="space-y-3">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 text-center mb-16">
              Got questions? We've got answers.
            </p>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Need a Custom Solution?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our Enterprise plan can be tailored to your specific needs with custom integrations, dedicated support, and flexible pricing.
            </p>
            <a
              href="/contact"
              className="inline-block rounded-xl bg-white px-8 py-4 font-semibold text-gray-900 transition-all hover:scale-105"
            >
              Contact Sales Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
