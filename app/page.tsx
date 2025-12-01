import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  ArrowRight,
  Wind,
  Wrench,
  Star,
  Clock,
  Sparkles,
  TrendingUp,
  Calculator,
  MapPin,
  Shield,
  Leaf,
  Users,
  CheckCircle2,
  Target,
  Zap,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <header className="glass-card fixed top-4 left-1/2 -translate-x-1/2 z-50 rounded-full px-6 py-3 w-[95%] max-w-5xl">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-muted flex items-center justify-center">
              <Wind className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-semibold text-foreground">LightEcoPacks</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#gear"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Gear
            </a>
            <a
              href="#labs"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Zero-Waste Labs
            </a>
            <a
              href="#guides"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Guides
            </a>
            <a
              href="#tools"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Tools
            </a>
          </div>
          <Button size="sm" className="rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
            Join Club
          </Button>
        </nav>
      </header>

      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-background to-primary/5" />
        <div className="absolute inset-0 opacity-40">
          <svg className="w-full h-full" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,200 Q300,100 600,200 T1200,200 L1200,0 L0,0 Z" fill="url(#gradient1)" opacity="0.3" />
            <path d="M0,400 Q300,300 600,400 T1200,400 L1200,0 L0,0 Z" fill="url(#gradient2)" opacity="0.2" />
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="oklch(0.82 0.08 165)" />
                <stop offset="100%" stopColor="oklch(0.96 0.01 200)" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="oklch(0.7 0.12 35)" />
                <stop offset="100%" stopColor="oklch(0.82 0.08 165)" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full text-sm font-medium animate-fade-in">
              <Sparkles className="h-4 w-4 text-primary" />
              Light gear. Clear mind. Zero waste.
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance leading-[1.1] animate-fade-in-up">
              Travel Ultra-Light.
              <br />
              Repair. Reuse.
              <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Explore Longer.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-pretty animate-fade-in-up">
              Smart reviews for zero-waste adventurers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
              <Button
                size="lg"
                className="rounded-full gap-2 bg-secondary text-secondary-foreground hover:bg-secondary/90"
              >
                Explore Lightest Gear
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full gap-2 glass-card bg-transparent">
                Zero-Waste Starter Kit
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Star, value: "500+", label: "Gear Tested" },
              { icon: TrendingUp, value: "98%", label: "Repair Rate" },
              { icon: Clock, value: "10+", label: "Years Average Lifespan" },
              { icon: Wind, value: "423g", label: "Avg Pack Weight" },
            ].map((stat, i) => (
              <div
                key={i}
                className="glass-card rounded-3xl p-6 text-center hover:scale-105 transition-transform duration-300"
              >
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                <p className="text-4xl font-bold mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-4 text-balance">Why Zero-Waste Matters</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                Every piece of gear has an environmental footprint. Choose wisely.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Leaf,
                  stat: "82M tons",
                  label: "Textile waste annually",
                  description: "Fast-fashion outdoor gear contributes significantly to global textile waste.",
                },
                {
                  icon: Shield,
                  stat: "3-5 years",
                  label: "Average gear lifespan",
                  description: "Quality repairable gear lasts 10-20 years, reducing waste by 70%.",
                },
                {
                  icon: Zap,
                  stat: "300kg CO₂",
                  label: "Saved per repaired item",
                  description: "Repairing instead of replacing reduces carbon emissions dramatically.",
                },
              ].map((item, i) => (
                <Card key={i} className="glass-card border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                    <p className="text-5xl font-bold">{item.stat}</p>
                    <p className="text-sm font-mono text-primary uppercase">{item.label}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="gear" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-balance">Featured Gear</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Engineered for decades, not seasons
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Osprey Exos 58",
                category: "Backpacks",
                rating: 4.5,
                image: "/ultralight-backpack-on-mountain-trail.jpg",
                repairability: 80,
                durability: 85,
                weight: "423g",
                lifespan: "12+ years",
                zeroWaste: "Excellent",
              },
              {
                title: "Patagonia Nano Puff",
                category: "Insulation",
                rating: 5,
                image: "/sustainable-insulated-jacket-in-nature.jpg",
                repairability: 70,
                durability: 90,
                weight: "337g",
                lifespan: "10+ years",
                zeroWaste: "Excellent",
              },
              {
                title: "MSR PocketRocket Deluxe",
                category: "Cooking",
                rating: 4.8,
                image: "/compact-camping-stove-lightweight.jpg",
                repairability: 95,
                durability: 95,
                weight: "73g",
                lifespan: "15+ years",
                zeroWaste: "Excellent",
              },
            ].map((gear, i) => (
              <Card
                key={i}
                className="glass-card overflow-hidden group hover:shadow-2xl transition-all duration-300 border-0"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={gear.image || "/placeholder.svg"}
                    alt={gear.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 right-4 glass-card border-0 backdrop-blur-md">{gear.category}</Badge>
                </div>
                <CardContent className="p-6 space-y-5">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-balance">{gear.title}</h3>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(gear.rating) ? "fill-primary text-primary" : "text-muted"
                          }`}
                        />
                      ))}
                      <span className="text-sm text-muted-foreground ml-2 font-mono">{gear.rating}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-mono text-muted-foreground">REPAIRABILITY</span>
                        <span className="text-xs font-mono font-semibold">{gear.repairability}/100</span>
                      </div>
                      <Progress value={gear.repairability} className="h-1.5" />
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-mono text-muted-foreground">DURABILITY</span>
                        <span className="text-xs font-mono font-semibold">{gear.durability}/100</span>
                      </div>
                      <Progress value={gear.durability} className="h-1.5" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-3 border-t border-border/50">
                    <div>
                      <p className="text-xs font-mono text-muted-foreground mb-1">WEIGHT</p>
                      <p className="text-sm font-mono font-bold text-foreground">{gear.weight}</p>
                    </div>
                    <div>
                      <p className="text-xs font-mono text-muted-foreground mb-1">LIFESPAN</p>
                      <p className="text-sm font-mono font-bold text-foreground">{gear.lifespan}</p>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full rounded-full glass-card border-border/50 hover:bg-primary/10 bg-transparent"
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-4 text-balance">Our Testing Process</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                Real trails. Real conditions. Real results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  step: "01",
                  title: "Field Testing",
                  description:
                    "Every piece of gear is tested on multi-day trails in various weather conditions. We push equipment to its limits.",
                  icon: Target,
                },
                {
                  step: "02",
                  title: "Repairability Assessment",
                  description:
                    "We intentionally break, wear, and stress-test gear, then evaluate how easily it can be repaired with basic tools.",
                  icon: Wrench,
                },
                {
                  step: "03",
                  title: "Durability Analysis",
                  description:
                    "Long-term testing over 12+ months tracks material degradation, seam integrity, and component failure rates.",
                  icon: Shield,
                },
                {
                  step: "04",
                  title: "Sustainability Audit",
                  description:
                    "We research manufacturing processes, material sourcing, brand repair programs, and end-of-life recyclability.",
                  icon: Leaf,
                },
              ].map((item, i) => (
                <Card key={i} className="glass-card border-0 hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-8 space-y-4">
                    <div className="flex items-start justify-between">
                      <span className="text-6xl font-bold text-muted/20 group-hover:text-primary/20 transition-colors">
                        {item.step}
                      </span>
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="tools" className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-balance">Interactive Tools</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Make smarter gear decisions with data
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="glass-card border-0 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Calculator className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Gear Lifespan Calculator</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Calculate expected lifespan based on usage patterns and materials
                </p>
                <Button variant="outline" className="rounded-full glass-card border-border/50 w-full bg-transparent">
                  Try Calculator
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-card border-0 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Wind className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Pack Weight Visualizer</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  See how your pack weight compares to ultra-light standards
                </p>
                <Button variant="outline" className="rounded-full glass-card border-border/50 w-full bg-transparent">
                  Analyze Weight
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-card border-0 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary via-secondary to-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Repair Map</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Interactive guide showing repairable parts of your gear
                </p>
                <Button variant="outline" className="rounded-full glass-card border-border/50 w-full bg-transparent">
                  Explore Map
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="guides" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-balance">Zero-Waste Labs</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Educational guides for smarter, lighter travel
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                emoji: "🌬️",
                title: "How to Pack Ultra-Light Without Losing Essentials",
                excerpt: "Master the art of minimalist packing while staying prepared for any adventure.",
                readTime: "8 min",
              },
              {
                emoji: "🔧",
                title: "Field Repairs Every Backpacker Should Know",
                excerpt: "Essential repair skills to keep your gear functional on the trail for years.",
                readTime: "12 min",
              },
              {
                emoji: "♻️",
                title: "How to Reduce Waste on Long-Term Travel",
                excerpt: "Practical strategies for zero-waste travel without sacrificing comfort.",
                readTime: "10 min",
              },
              {
                emoji: "⚡",
                title: "Energy-Efficient Gear Choices",
                excerpt: "Choose equipment that minimizes environmental impact throughout its lifecycle.",
                readTime: "15 min",
              },
            ].map((guide, i) => (
              <Card
                key={i}
                className="glass-card border-0 hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <CardContent className="p-8 space-y-4">
                  <div className="text-5xl mb-4">{guide.emoji}</div>
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors text-balance">
                    {guide.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-pretty">{guide.excerpt}</p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-sm font-mono text-muted-foreground">{guide.readTime} read</span>
                    <ArrowRight className="h-5 w-5 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-4 text-balance">Brands We Trust</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                Companies committed to durability, repairability, and sustainability
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Patagonia",
                  rating: "A+",
                  features: ["Lifetime warranty", "Worn Wear program", "1% for the Planet"],
                  highlight: "Industry-leading repair program",
                },
                {
                  name: "Osprey",
                  rating: "A",
                  features: ["Lifetime guarantee", "Free repairs", "Sustainable materials"],
                  highlight: "All Mighty Guarantee",
                },
                {
                  name: "MSR",
                  rating: "A",
                  features: ["Field-repairable design", "Long-lasting quality", "Spare parts available"],
                  highlight: "Built for decades of use",
                },
              ].map((brand, i) => (
                <Card key={i} className="glass-card border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8 space-y-4">
                    <div className="flex items-start justify-between">
                      <h3 className="text-3xl font-bold">{brand.name}</h3>
                      <Badge className="glass-card border-0 bg-primary text-primary-foreground text-lg px-3 py-1">
                        {brand.rating}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground font-medium">{brand.highlight}</p>
                    <div className="space-y-2 pt-2">
                      {brand.features.map((feature, j) => (
                        <div key={j} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-4 text-balance">Community Stories</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                Real travelers sharing their zero-waste journeys
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  name: "Rachel Kim",
                  location: "Pacific Crest Trail",
                  quote:
                    "I completed the entire PCT with the same pack I've had for 8 years. Just replaced the hip belt buckle once.",
                  miles: "2,650 miles",
                  gear: "Osprey Exos 58",
                },
                {
                  name: "Liam Foster",
                  location: "Continental Divide Trail",
                  quote:
                    "Learning field repairs changed everything. My gear lasts years longer and I save thousands of dollars.",
                  miles: "3,100 miles",
                  gear: "Multiple repairs",
                },
                {
                  name: "Maya Patel",
                  location: "Appalachian Trail",
                  quote:
                    "Switching to repairable gear meant less waste and more money for experiences instead of equipment.",
                  miles: "2,190 miles",
                  gear: "Zero replacements",
                },
                {
                  name: "James Anderson",
                  location: "Te Araroa",
                  quote: "The repair community saved my hike multiple times. Now I teach others the skills I learned.",
                  miles: "1,864 miles",
                  gear: "15+ repairs made",
                },
              ].map((story, i) => (
                <Card key={i} className="glass-card border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8 space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-bold">{story.name}</h3>
                        <p className="text-sm text-muted-foreground font-mono">{story.location}</p>
                      </div>
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <blockquote className="text-muted-foreground italic leading-relaxed border-l-2 border-primary pl-4">
                      {story.quote}
                    </blockquote>
                    <div className="flex gap-4 pt-2">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span className="text-sm font-mono">{story.miles}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Wrench className="h-4 w-4 text-primary" />
                        <span className="text-sm font-mono">{story.gear}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-5xl md:text-6xl font-bold text-balance">
              Choose gear engineered
              <br />
              for decades, not seasons.
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              The outdoor industry produces millions of tons of waste annually. We champion brands that design for
              longevity, support repairs, and prioritize the planet over profit margins.
            </p>
            <div className="flex flex-wrap gap-6 justify-center pt-8">
              {[
                { icon: Wind, label: "Ultra-Lightweight" },
                { icon: Wrench, label: "Easily Repairable" },
                { icon: Star, label: "Tested & Proven" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 glass-card px-6 py-3 rounded-full">
                  <item.icon className="h-5 w-5 text-primary" />
                  <span className="font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-4 text-balance">Latest Reviews & Articles</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                Fresh insights from the trail
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  type: "Review",
                  title: "Arc'teryx Beta LT: 5-Year Long-Term Test",
                  excerpt: "After 5 years and countless adventures, here's how this shell performed.",
                  date: "2 days ago",
                  image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&auto=format&fit=crop",
                },
                {
                  type: "Guide",
                  title: "The Complete Ultralight Repair Kit",
                  excerpt: "Everything you need to fix gear on trail, weighing under 200g.",
                  date: "5 days ago",
                  image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=800&auto=format&fit=crop",
                },
                {
                  type: "Review",
                  title: "Best Zero-Waste Cookware for 2025",
                  excerpt: "Durable, repairable cooking systems that last a lifetime.",
                  date: "1 week ago",
                  image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800&auto=format&fit=crop",
                },
              ].map((article, i) => (
                <Card
                  key={i}
                  className="glass-card border-0 overflow-hidden group hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <Badge className="absolute top-4 left-4 glass-card border-0">{article.type}</Badge>
                  </div>
                  <CardContent className="p-6 space-y-3">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors text-balance">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{article.excerpt}</p>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-xs font-mono text-muted-foreground">{article.date}</span>
                      <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <Card className="glass-card border-0 max-w-3xl mx-auto overflow-hidden">
            <CardContent className="p-12 text-center space-y-6">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">Join Light Travel Club</h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Get weekly insights on zero-waste gear, field repair tips, and ultra-light packing strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-4">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-6 py-3 rounded-full glass-card border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                />
                <Button size="lg" className="rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">No spam. Unsubscribe anytime.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-muted flex items-center justify-center">
                <Wind className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-sm font-medium text-foreground">LightEcoPacks</span>
            </div>
            <p className="text-sm text-muted-foreground">Buy once. Repair often. Explore forever.</p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
