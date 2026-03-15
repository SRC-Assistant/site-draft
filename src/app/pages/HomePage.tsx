import { Link } from "react-router";
import {
  ArrowRight,
  Bot,
  Calendar,
  MessageSquare,
  Share2,
  Sparkles,
  Trophy,
  Zap,
  CheckCircle2,
  TrendingUp,
  Users,
  Clock,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function HomePage() {
  const features = [
    {
      icon: Share2,
      title: "AI Social Automation",
      description: "Automate job postings and replies across X, Instagram, Facebook, and more with intelligent AI.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Bot,
      title: "Smart AI Assistant",
      description: "Embed an intelligent assistant on your website to help visitors navigate, answer questions, and place orders.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Trophy,
      title: "Interactive Rewards",
      description: "Engage customers with AI-powered quizzes and reward them with personalized discounts.",
      color: "from-orange-500 to-red-500",
    },
  ];

  const benefits = [
    "Automate social media posting across all platforms",
    "AI-powered response generation",
    "Visual content calendar with scheduling",
    "Seamless website integration via embed code",
    "MCP server support for advanced customization",
    "Postman collection to MCP server conversion",
    "Intelligent customer engagement quizzes",
    "Personalized discount rewards system",
  ];

  const stats = [
    { value: "10,000+", label: "Active Users", icon: Users },
    { value: "5M+", label: "Posts Automated", icon: Share2 },
    { value: "98%", label: "Customer Satisfaction", icon: TrendingUp },
    { value: "24/7", label: "AI Support", icon: Clock },
  ];

  const useCases = [
    {
      title: "E-Commerce Businesses",
      description: "Automate product promotions, answer customer queries instantly, and boost sales with targeted rewards.",
      image: "https://images.unsplash.com/photo-1762330464006-46181dfe3381?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMGVuZ2FnZW1lbnQlMjBtb2JpbGUlMjBhcHB8ZW58MXx8fHwxNzczNTUwMDc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Digital Agencies",
      description: "Manage multiple client social accounts, streamline content scheduling, and deliver exceptional results.",
      image: "https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MzQ3MDYxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "SaaS Companies",
      description: "Provide intelligent on-site assistance, reduce support tickets, and increase user engagement.",
      image: "https://images.unsplash.com/photo-1646153114001-495dfb56506d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MzUxMjgwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] bg-[size:40px_40px]"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-indigo-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm mb-6 border border-indigo-100">
                <Sparkles className="h-4 w-4 text-indigo-600" />
                <span className="text-sm font-medium text-gray-700">AI-Powered Business Automation</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Transform Your Business with{" "}
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  AI Magic
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                Automate social media, engage customers with AI assistants, and reward your audience—all powered by cutting-edge artificial intelligence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/pricing"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 font-semibold text-white shadow-lg shadow-indigo-500/50 transition-all hover:shadow-xl hover:shadow-indigo-500/50 hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  to="/features"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-gray-300 bg-white px-8 py-4 font-semibold text-gray-700 transition-all hover:border-indigo-300 hover:bg-indigo-50"
                >
                  Explore Features
                </Link>
              </div>

              <div className="mt-8 flex items-center gap-6 justify-center lg:justify-start text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>14-day free trial</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-purple-500/10 rounded-3xl transform rotate-3 scale-105"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1655393001768-d946c97d6fd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neSUyMGZ1dHVyaXN0aWN8ZW58MXx8fHwxNzczNDU4MzYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="AI Technology"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-y">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100">
                    <stat.icon className="h-6 w-6 text-indigo-600" />
                  </div>
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-indigo-100 rounded-full px-4 py-2 mb-4">
              <Zap className="h-4 w-4 text-indigo-600" />
              <span className="text-sm font-semibold text-indigo-600">Powerful Features</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Everything You Need in{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                One Platform
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Harness the power of AI to automate your business, engage customers, and drive growth like never before.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-xl hover:border-transparent transition-all duration-300"
              >
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity bg-gradient-to-br ${feature.color}`}></div>
                
                <div className={`inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color} mb-6 shadow-lg`}>
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                
                <Link 
                  to="/features" 
                  className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-indigo-600 hover:gap-3 transition-all"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Feature Sections */}
      {/* Social Automation */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-6">
                <Share2 className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-semibold text-blue-600">Social Automation</span>
              </div>
              
              <h2 className="text-4xl font-bold mb-6">
                Automate Your Social Media with AI Intelligence
              </h2>
              
              <p className="text-xl text-gray-600 mb-8">
                Connect your social platforms and let our AI handle posting, engagement, and scheduling. Save hours every week while maintaining an active presence.
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: Share2, text: "Multi-platform integration (X, Instagram, Facebook & more)" },
                  { icon: Bot, text: "AI-powered content generation and replies" },
                  { icon: Calendar, text: "Visual calendar with smart scheduling" },
                  { icon: Zap, text: "Automated posting at optimal times" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 flex-shrink-0">
                      <item.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="pt-2">
                      <p className="text-gray-700">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1769596722541-40dedee6789d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGF1dG9tYXRpb24lMjBtYXJrZXRpbmd8ZW58MXx8fHwxNzczNTUwMDcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Social Media Automation"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* AI Assistant */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1757310998437-b2e8a7bd2e97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGF0Ym90JTIwYWklMjBhc3Npc3RhbnQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzczNTUwMDcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="AI Assistant Interface"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-purple-100 rounded-full px-4 py-2 mb-6">
                <Bot className="h-4 w-4 text-purple-600" />
                <span className="text-sm font-semibold text-purple-600">AI Assistant</span>
              </div>
              
              <h2 className="text-4xl font-bold mb-6">
                Embed Intelligent Assistant on Your Website
              </h2>
              
              <p className="text-xl text-gray-600 mb-8">
                Add a powerful AI assistant to your website with a simple embed code. Help visitors navigate, answer questions, and even complete purchases—24/7.
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: MessageSquare, text: "Natural language understanding and responses" },
                  { icon: Zap, text: "Easy integration with embed code" },
                  { icon: Bot, text: "MCP server support for advanced customization" },
                  { icon: ArrowRight, text: "Postman to MCP server conversion" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 flex-shrink-0">
                      <item.icon className="h-5 w-5 text-purple-600" />
                    </div>
                    <div className="pt-2">
                      <p className="text-gray-700">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rewards System */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-100 rounded-full px-4 py-2 mb-6">
                <Trophy className="h-4 w-4 text-orange-600" />
                <span className="text-sm font-semibold text-orange-600">Reward System</span>
              </div>
              
              <h2 className="text-4xl font-bold mb-6">
                Engage Customers with Interactive Rewards
              </h2>
              
              <p className="text-xl text-gray-600 mb-8">
                Turn browsing into engagement with AI-powered quizzes that reward customers with personalized discounts on products they're interested in.
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: Bot, text: "AI detects customer product interests" },
                  { icon: MessageSquare, text: "Interactive quiz popups at the right moment" },
                  { icon: Trophy, text: "Instant discount rewards upon completion" },
                  { icon: TrendingUp, text: "Boost conversions and customer satisfaction" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 flex-shrink-0">
                      <item.icon className="h-5 w-5 text-orange-600" />
                    </div>
                    <div className="pt-2">
                      <p className="text-gray-700">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwbmV0d29yayUyMGNvbm5lY3Rpb24lMjBkaWdpdGFsfGVufDF8fHx8MTc3MzU1MDA3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Reward System"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Built for Modern Businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whatever your industry, SRC Assistant helps you automate, engage, and grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={useCase.image}
                    alt={useCase.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
                  <p className="text-gray-600">{useCase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">All-in-One Solution</h2>
              <p className="text-xl text-gray-600">
                Everything you need to transform your business operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                  <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Sparkles className="h-16 w-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
              Join thousands of businesses already using SRC Assistant to automate, engage, and grow with AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/pricing"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-indigo-600 shadow-xl transition-all hover:scale-105"
              >
                Start Your Free Trial
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-sm px-8 py-4 font-semibold text-white transition-all hover:bg-white/20"
              >
                Schedule a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}