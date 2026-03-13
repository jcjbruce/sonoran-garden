import { Link } from "wouter";
import { motion } from "framer-motion";
import { BookOpen, ArrowRight, Leaf, Sun, Droplets, Sprout } from "lucide-react";
import Layout from "@/components/Layout";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/DFVUKAcoDGjab34rQHvoTT/hero-landing-e5EzZ7rcVy84QsAUyKmQWu.webp";
const FALL_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/DFVUKAcoDGjab34rQHvoTT/season-fall-3RuscjoYkzESmg6xFMkiBJ.webp";
const SPRING_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/DFVUKAcoDGjab34rQHvoTT/season-spring-e9b6hvSmPFkV5rjTqmVeSp.webp";
const MONSOON_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/DFVUKAcoDGjab34rQHvoTT/season-monsoon-UnyKj49oPXMMejfrGeiCV5.webp";
const WINTER_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/DFVUKAcoDGjab34rQHvoTT/season-winter-fpj96QYnLQ3yciFtg4Qfbd.webp";

const editions = [
  {
    title: "2020–21 Edition",
    year: "2020–21",
    description: "The first Sonoran Desert School Gardener's Almanac — a foundational guide connecting students to the five seasons of the Sonoran Desert through gardening, recipes, and cultural knowledge.",
    href: "/almanac/original",
    image: SPRING_IMG,
    color: "from-saguaro/80 to-saguaro/40",
    sections: ["5 Desert Seasons", "Planting Guides", "Desert Ecology", "Recipes"],
  },
  {
    title: "2021–22 Edition",
    year: "2021–22",
    description: "An expanded bilingual edition featuring Indigenous food traditions, rainwater harvesting, seed saving, and deeper connections to Tohono O'odham, Yaqui, and Mexican heritage.",
    href: "/almanac/2022",
    image: FALL_IMG,
    color: "from-terracotta/80 to-terracotta/40",
    sections: ["Bilingual Content", "Indigenous Knowledge", "Seed Saving", "Traditional Recipes"],
  },
  {
    title: "2023–24 Edition",
    year: "2023–24",
    description: "Featuring moon gardening practices, curanderismo healing traditions, flower anatomy, agrivoltaics, and a love letter to cilantro — all in English and Spanish.",
    href: "/almanac/2023-24",
    image: MONSOON_IMG,
    color: "from-monsoon-teal/80 to-monsoon-teal/40",
    sections: ["Moon Gardening", "Curanderismo", "Agrivoltaics", "Cultural Stories"],
  },
  {
    title: "2024–25 Edition",
    year: "2024–25",
    description: "The latest edition exploring desert food forests, traditional Pascua Yaqui practices, Día de los Muertos traditions, and the connections between food, culture, and community.",
    href: "/almanac/2024-25",
    image: WINTER_IMG,
    color: "from-sage-blue/80 to-sage-blue/40",
    sections: ["Food Forests", "Pascua Yaqui Heritage", "Día de los Muertos", "Community Gardens"],
  },
];

const seasons = [
  { name: "Fall Harvest", icon: <Leaf className="w-5 h-5" />, color: "text-terracotta", months: "Oct–Nov" },
  { name: "Winter Rest", icon: <Droplets className="w-5 h-5" />, color: "text-sage-blue", months: "Dec–Feb" },
  { name: "Spring Bloom", icon: <Sprout className="w-5 h-5" />, color: "text-saguaro", months: "Mar–Apr" },
  { name: "Dry Summer", icon: <Sun className="w-5 h-5" />, color: "text-desert-gold", months: "May–Jun" },
  { name: "Monsoon", icon: <Droplets className="w-5 h-5" />, color: "text-monsoon-teal", months: "Jul–Sep" },
];

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img
          src={HERO_IMG}
          alt="Sonoran Desert School Garden at sunset"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
        <div className="absolute inset-0 flex flex-col justify-end pb-12 md:pb-16 container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-1.5 mb-4">
              <Leaf className="w-4 h-4 text-desert-gold" />
              <span className="text-white/90 text-sm font-medium">School Garden Workshop</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.7), 0 1px 3px rgba(0,0,0,0.5)' }}>
              The Sonoran Desert School Gardener's Almanac
            </h1>
            <p className="text-white/90 mt-4 text-lg md:text-xl max-w-2xl leading-relaxed" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
              A love letter to the Sonoran Desert, its people, and its food heritage.
              Connecting teachers and learners to the land through gardening, recipes, and cultural knowledge.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Five Seasons Strip */}
      <section className="bg-sand py-6 border-b border-border">
        <div className="container">
          <div className="flex items-center justify-between overflow-x-auto gap-4 md:gap-0">
            {seasons.map((season) => (
              <div key={season.name} className="flex items-center gap-2 whitespace-nowrap px-2">
                <span className={season.color}>{season.icon}</span>
                <div>
                  <span className="text-sm font-semibold text-mesquite block leading-tight">{season.name}</span>
                  <span className="text-xs text-muted-foreground">{season.months}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-mesquite mb-6">
              Rooted in the Desert
            </h2>
            <p className="text-foreground/80 text-lg leading-relaxed mb-4">
              The Sonoran Desert is the most biodiverse desert in North America, home to the iconic saguaro cactus
              and a rich tapestry of Indigenous, Mexican, and multicultural food traditions. The School Gardener's
              Almanac is organized around the desert's five unique seasons — Fall Harvest, Winter Rest, Spring Bloom,
              Dry Summer, and Monsoon — each bringing its own rhythms of planting, harvesting, and celebration.
            </p>
            <p className="text-foreground/60 text-base leading-relaxed">
              Created by the School Garden Workshop (SGW) at the University of Arizona in partnership with
              Sprouts Healthy Communities Foundation and Tucson Unified School District, these almanacs are
              free resources for teachers, students, and the community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Almanac Editions Grid */}
      <section className="py-12 md:py-16 bg-sand/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-mesquite mb-3">
              Explore the Almanac Series
            </h2>
            <p className="text-foreground/60 text-base max-w-xl mx-auto">
              Four editions of desert wisdom, recipes, cultural stories, and gardening knowledge — all digitized and organized for easy exploration.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {editions.map((edition, i) => (
              <motion.div
                key={edition.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link href={edition.href} className="block group">
                  <div className="season-card rounded-2xl overflow-hidden bg-card border border-border">
                    <div className="relative h-48 md:h-56 overflow-hidden">
                      <img
                        src={edition.image}
                        alt={edition.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="inline-block bg-white/25 backdrop-blur-sm rounded-full px-3 py-1 text-white text-xs font-medium mb-2 drop-shadow-md">
                          {edition.year}
                        </div>
                        <h3 className="font-display text-xl md:text-2xl font-bold text-white" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.6), 0 1px 3px rgba(0,0,0,0.4)' }}>
                          {edition.title}
                        </h3>
                      </div>
                    </div>
                    <div className="p-5 md:p-6">
                      <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                        {edition.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {edition.sections.map((section) => (
                          <span
                            key={section}
                            className="inline-block bg-sand text-mesquite/70 text-xs px-2.5 py-1 rounded-full"
                          >
                            {section}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-2 text-terracotta font-medium text-sm group-hover:gap-3 transition-all">
                        <BookOpen className="w-4 h-4" />
                        Read this edition
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Find Section */}
      <section className="py-16 md:py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-mesquite mb-3">
              What You'll Discover
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🌵", title: "Desert Ecology", desc: "Learn about the five seasons of the Sonoran Desert, native plants, wildlife, and the interconnected web of desert life." },
              { icon: "🍳", title: "Traditional Recipes", desc: "From chiltepín salsa to mesquite pancakes, prickly pear agua fresca to sunflower scones — recipes rooted in the desert." },
              { icon: "🌱", title: "Planting Guides", desc: "Season-by-season guides for what to plant, when to harvest, and how to garden in the unique Sonoran Desert climate." },
              { icon: "🎭", title: "Cultural Heritage", desc: "Stories from Tohono O'odham, Yaqui, and Mexican traditions — curanderismo, ceremonial planting, Día de los Muertos, and more." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border text-center"
              >
                <span className="text-3xl mb-3 block">{item.icon}</span>
                <h3 className="font-display font-bold text-mesquite mb-2">{item.title}</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
