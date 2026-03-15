import { Target, Eye, Award, Users, TrendingUp, Sparkles, Zap, Globe, Heart } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function AboutPage() {
  const values = [
    {
      icon: Sparkles,
      title: "Innovation First",
      description: "We push the boundaries of AI technology to deliver cutting-edge solutions that transform businesses.",
    },
    {
      icon: Users,
      title: "Customer Success",
      description: "Your success is our success. We're committed to providing tools and support that drive real results.",
    },
    {
      icon: Heart,
      title: "Ethical AI",
      description: "We develop AI responsibly, ensuring transparency, fairness, and respect for user privacy.",
    },
    {
      icon: Zap,
      title: "Continuous Improvement",
      description: "We're constantly evolving our platform based on user feedback and emerging technologies.",
    },
  ];

  const stats = [
    { number: "10,000+", label: "Active Users" },
    { number: "5M+", label: "Posts Automated" },
    { number: "150+", label: "Countries Served" },
    { number: "99.9%", label: "Uptime SLA" },
  ];

  const timeline = [
    {
      year: "2022",
      title: "The Vision",
      description: "Founded by AI researchers and business automation experts with a vision to democratize AI-powered business tools.",
    },
    {
      year: "2023",
      title: "Product Launch",
      description: "Launched SRC Assistant with social media automation and AI assistant features to early adopters.",
    },
    {
      year: "2024",
      title: "Rapid Growth",
      description: "Added reward system, MCP server integration, and expanded to serve customers in 150+ countries.",
    },
    {
      year: "2025",
      title: "Industry Leader",
      description: "Recognized as a leading AI automation platform, serving 10,000+ businesses worldwide.",
    },
    {
      year: "2026",
      title: "Future Forward",
      description: "Continuing to innovate with advanced AI capabilities and expanded integrations.",
    },
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "CEO & Co-Founder",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      bio: "AI researcher with 15+ years experience in machine learning and natural language processing.",
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      bio: "Former engineering lead at major tech companies, expert in scalable AI infrastructure.",
    },
    {
      name: "Emily Williams",
      role: "Head of Product",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      bio: "Product strategist passionate about creating intuitive AI experiences for businesses.",
    },
    {
      name: "David Kumar",
      role: "VP of Engineering",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      bio: "Systems architect specializing in AI integration and enterprise-scale platforms.",
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
              Empowering Businesses with AI Innovation
            </h1>
            <p className="text-xl text-indigo-100">
              We're on a mission to make advanced AI automation accessible to businesses of all sizes, helping them grow smarter and faster.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MzQ3MDYxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Team Meeting"
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>

            <div className="space-y-12">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100">
                    <Target className="h-7 w-7 text-indigo-600" />
                  </div>
                  <h2 className="text-4xl font-bold">Our Mission</h2>
                </div>
                <p className="text-xl text-gray-700 leading-relaxed">
                  To democratize AI automation by providing businesses with powerful, intuitive tools that save time, reduce costs, and drive growth. We believe every business, regardless of size, deserves access to enterprise-grade AI technology.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-purple-100 to-pink-100">
                    <Eye className="h-7 w-7 text-purple-600" />
                  </div>
                  <h2 className="text-4xl font-bold">Our Vision</h2>
                </div>
                <p className="text-xl text-gray-700 leading-relaxed">
                  To become the global standard for AI-powered business automation, empowering millions of businesses worldwide to operate more efficiently, engage customers more effectively, and achieve unprecedented growth through intelligent automation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl hover:border-indigo-200 transition-all"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 mb-6">
                  <value.icon className="h-7 w-7 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a vision to a global platform transforming how businesses operate.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className="relative pl-8 pb-8 border-l-2 border-indigo-200 last:border-l-0 last:pb-0"
                >
                  <div className="absolute -left-3 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 ring-4 ring-white">
                    <div className="h-2 w-2 rounded-full bg-white"></div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                    <div className="text-sm font-semibold text-indigo-600 mb-2">{item.year}</div>
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet Our Leadership</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A team of passionate innovators dedicated to transforming business automation with AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-indigo-600 font-medium mb-3">{member.role}</p>
                <p className="text-sm text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 mx-auto mb-6">
                <Globe className="h-10 w-10 text-indigo-600" />
              </div>
              <h2 className="text-4xl font-bold mb-6">Global Reach, Local Impact</h2>
              <p className="text-xl text-gray-700 mb-12">
                With teams across the globe and customers in 150+ countries, we're committed to delivering exceptional AI solutions wherever you are. Our diverse, multicultural team brings together the best minds in AI, engineering, and business automation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-200">
                <h3 className="font-bold text-xl mb-2">Americas</h3>
                <p className="text-gray-600">San Francisco, CA<br />New York, NY</p>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-200">
                <h3 className="font-bold text-xl mb-2">Europe</h3>
                <p className="text-gray-600">London, UK<br />Berlin, Germany</p>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-200">
                <h3 className="font-bold text-xl mb-2">Asia-Pacific</h3>
                <p className="text-gray-600">Singapore<br />Sydney, Australia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
            Be part of the AI revolution. Start automating your business today.
          </p>
          <a
            href="/pricing"
            className="inline-block rounded-xl bg-white px-8 py-4 font-semibold text-indigo-600 shadow-xl transition-all hover:scale-105"
          >
            Get Started Free
          </a>
        </div>
      </section>
    </div>
  );
}
