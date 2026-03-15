import {
  Bot,
  Calendar,
  Code,
  Database,
  Globe,
  Instagram,
  MessageSquare,
  Palette,
  Server,
  Share2,
  Sparkles,
  Trophy,
  Twitter,
  Zap,
  Facebook,
  BarChart3,
  Settings,
  Shield,
  CheckCircle2,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function FeaturesPage() {
  const mainFeatures = [
    {
      icon: Share2,
      title: "AI Social Media Automation",
      description:
        "Complete automation for your social media presence across all major platforms.",
      gradient: "from-blue-500 to-cyan-500",
      details: [
        {
          icon: Twitter,
          title: "Multi-Platform Integration",
          description: "Connect X (Twitter), Instagram, Facebook, LinkedIn, and more in one dashboard.",
        },
        {
          icon: Bot,
          title: "AI Content Generation",
          description: "Automatically generate engaging posts tailored to your brand voice and audience.",
        },
        {
          icon: MessageSquare,
          title: "Smart Reply System",
          description: "AI-powered responses to comments and messages that maintain your brand personality.",
        },
        {
          icon: Calendar,
          title: "Visual Content Calendar",
          description: "Plan, schedule, and visualize your entire content strategy in one intuitive calendar.",
        },
        {
          icon: BarChart3,
          title: "Performance Analytics",
          description: "Track engagement, reach, and ROI across all platforms with comprehensive analytics.",
        },
        {
          icon: Zap,
          title: "Optimal Timing",
          description: "AI determines the best times to post for maximum engagement on each platform.",
        },
      ],
    },
    {
      icon: Bot,
      title: "Intelligent Website Assistant",
      description:
        "Transform your website with an AI assistant that helps visitors, answers questions, and drives conversions.",
      gradient: "from-purple-500 to-pink-500",
      details: [
        {
          icon: Code,
          title: "Simple Embed Integration",
          description: "Add the AI assistant to any website with a single line of embed code—no complex setup required.",
        },
        {
          icon: MessageSquare,
          title: "Natural Conversations",
          description: "Advanced NLP understands user intent and provides helpful, contextual responses.",
        },
        {
          icon: Globe,
          title: "Website Navigation Help",
          description: "Guides visitors to the right pages, products, or information they're looking for.",
        },
        {
          icon: Server,
          title: "MCP Server Support",
          description: "Connect to your existing MCP servers for advanced customization and data integration.",
        },
        {
          icon: Database,
          title: "Postman to MCP Conversion",
          description: "Automatically convert your Postman collections into MCP servers for seamless integration.",
        },
        {
          icon: Settings,
          title: "Customizable Behavior",
          description: "Train the assistant on your specific business, products, and FAQs for accurate responses.",
        },
      ],
    },
    {
      icon: Trophy,
      title: "Interactive Reward System",
      description:
        "Gamify customer engagement with AI-powered quizzes that drive conversions and build loyalty.",
      gradient: "from-orange-500 to-red-500",
      details: [
        {
          icon: Bot,
          title: "AI Interest Detection",
          description: "Intelligent algorithms track user behavior to identify products they're interested in.",
        },
        {
          icon: MessageSquare,
          title: "Contextual Quiz Popups",
          description: "Display engaging quizzes at the perfect moment when users are most engaged.",
        },
        {
          icon: Trophy,
          title: "Instant Discount Rewards",
          description: "Automatically generate and apply personalized discount codes upon quiz completion.",
        },
        {
          icon: BarChart3,
          title: "Engagement Analytics",
          description: "Track quiz performance, completion rates, and conversion metrics in real-time.",
        },
        {
          icon: Palette,
          title: "Customizable Design",
          description: "Match quiz appearance to your brand with fully customizable themes and styling.",
        },
        {
          icon: Zap,
          title: "Dynamic Rewards",
          description: "Create tiered rewards, time-sensitive offers, and personalized incentives automatically.",
        },
      ],
    },
  ];

  const additionalFeatures = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption and compliance with industry standards including GDPR and SOC 2.",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive dashboards with real-time insights across all features and platforms.",
    },
    {
      icon: Zap,
      title: "Real-Time Updates",
      description: "Instant synchronization across all platforms and features with zero latency.",
    },
    {
      icon: Globe,
      title: "Multi-Language Support",
      description: "Communicate with customers in their language with AI-powered translation.",
    },
    {
      icon: Settings,
      title: "API Access",
      description: "Full API access for custom integrations and advanced automation workflows.",
    },
    {
      icon: Code,
      title: "Developer Friendly",
      description: "Comprehensive documentation, SDKs, and webhooks for seamless integration.",
    },
  ];

  const integrations = [
    { name: "X (Twitter)", icon: Twitter },
    { name: "Instagram", icon: Instagram },
    { name: "Facebook", icon: Facebook },
    { name: "LinkedIn", icon: Share2 },
    { name: "Custom APIs", icon: Server },
    { name: "MCP Servers", icon: Database },
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
              Powerful AI Features for Modern Businesses
            </h1>
            <p className="text-xl text-indigo-100">
              Discover how SRC Assistant combines cutting-edge AI with intuitive design to transform your business operations.
            </p>
          </div>
        </div>
      </section>

      {/* Main Features - Detailed */}
      {mainFeatures.map((feature, index) => (
        <section
          key={index}
          className={index % 2 === 0 ? "py-24 bg-white" : "py-24 bg-gray-50"}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Feature Header */}
            <div className="text-center mb-16">
              <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.gradient} mb-6 shadow-xl`}>
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold mb-4">{feature.title}</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">{feature.description}</p>
            </div>

            {/* Feature Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {feature.details.map((detail, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg hover:border-gray-300 transition-all"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 mb-4">
                    <detail.icon className="h-6 w-6 text-gray-700" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{detail.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{detail.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Social Automation Deep Dive */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Your Complete Social Media Command Center
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Manage all your social platforms from one unified dashboard. Schedule posts weeks in advance, respond to engagement automatically, and analyze performance—all powered by AI.
              </p>
              <div className="space-y-4">
                {[
                  "Unified inbox for all social messages",
                  "Bulk scheduling and content batching",
                  "Competitor analysis and benchmarking",
                  "Automated hashtag and keyword optimization",
                  "Team collaboration and approval workflows",
                  "Custom branded reports for clients",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1771054243991-e7b2d194ac96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxlbmRhciUyMHNjaGVkdWxlJTIwcGxhbm5pbmclMjBkaWdpdGFsfGVufDF8fHx8MTc3MzU1MDA3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Calendar Scheduling"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Assistant Deep Dive */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1649451844859-fdd73bf10f04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwaW50ZWdyYXRpb24lMjBjb2RlJTIwZGV2ZWxvcG1lbnR8ZW58MXx8fHwxNzczNTUwMDc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Website Integration"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold mb-6">
                Transform Your Website into an Intelligent Experience
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Add a sophisticated AI assistant to your website in minutes. No complex integration, no heavy development—just paste the embed code and you're live.
              </p>
              <div className="bg-white rounded-xl p-6 mb-6 border border-purple-200">
                <p className="text-sm text-gray-600 mb-2">Simple Integration Example:</p>
                <code className="block bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
                  {`<script src="https://assistant.src.ai/embed.js"
  data-api-key="YOUR_API_KEY">
</script>`}
                </code>
              </div>
              <div className="space-y-4">
                {[
                  "Customizable chat widget appearance",
                  "Multi-turn conversation memory",
                  "Seamless handoff to human support",
                  "Integration with your existing backend",
                  "Supports 50+ languages automatically",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Seamless Integrations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with all your favorite platforms and tools. More integrations added regularly.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all"
              >
                <integration.icon className="h-10 w-10 text-gray-700 mb-3" />
                <span className="text-sm font-medium text-gray-700 text-center">{integration.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Built for Scale & Security</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise-grade infrastructure with the features you need to grow confidently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-all"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 mb-4">
                  <feature.icon className="h-7 w-7 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Experience All Features with a Free Trial
          </h2>
          <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
            No credit card required. Get started in minutes and see the difference AI can make.
          </p>
          <a
            href="/pricing"
            className="inline-block rounded-xl bg-white px-8 py-4 font-semibold text-indigo-600 shadow-xl transition-all hover:scale-105"
          >
            Start Your Free Trial
          </a>
        </div>
      </section>
    </div>
  );
}
