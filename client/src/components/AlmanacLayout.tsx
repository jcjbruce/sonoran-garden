import { useState, useEffect, useRef, useMemo } from "react";
import { Link } from "wouter";
import { ChevronLeft, ChevronUp, List, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "./Layout";

export interface Section {
  id: string;
  title: string;
  icon?: string;
}

interface AlmanacLayoutProps {
  title: string;
  subtitle: string;
  year: string;
  heroImage: string;
  heroGradient: string;
  sections: Section[];
  children: React.ReactNode;
}

export default function AlmanacLayout({
  title,
  subtitle,
  year,
  heroImage,
  heroGradient,
  sections,
  children,
}: AlmanacLayoutProps) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || "");
  const [tocOpen, setTocOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-100px 0px -60% 0px", threshold: 0 }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [sections]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setTocOpen(false);
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <div className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <img
          src={heroImage}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Stronger overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
        <div className="absolute inset-0 flex flex-col justify-end pb-8 container">
          <Link href="/" className="inline-flex items-center gap-1 text-white/90 hover:text-white text-sm mb-3 transition-colors w-fit drop-shadow-md">
            <ChevronLeft className="w-4 h-4" />
            All Editions
          </Link>
          <div className="inline-block bg-white/25 backdrop-blur-sm rounded-full px-3 py-1 text-white text-xs font-medium mb-2 w-fit drop-shadow-md">
            {year}
          </div>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6), 0 1px 3px rgba(0,0,0,0.4)' }}>
            {title}
          </h1>
          <p className="text-white/90 mt-2 text-base md:text-lg max-w-2xl" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
            {subtitle}
          </p>
        </div>
      </div>

      {/* Sticky section nav pill */}
      <div className="sticky top-16 z-40 bg-parchment/90 backdrop-blur-md border-b border-border/50">
        <div className="w-full px-6">
          {/* Desktop nav - 2 rows on wide screens, wraps to more rows if needed */}
          {(() => {
            const total = sections.length;
            // Always aim for 2 rows on desktop
            const numRows = total <= 5 ? 1 : 2;
            const perRow = Math.ceil(total / numRows);
            const rows: typeof sections[] = [];
            for (let i = 0; i < total; i += perRow) {
              rows.push(sections.slice(i, i + perRow));
            }
            
            return (
              <div className="hidden lg:flex flex-col items-center gap-1 py-2">
                {rows.map((row, rowIdx) => (
                  <div key={rowIdx} className="flex items-center justify-center gap-1.5 flex-wrap">
                    {row.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                          activeSection === section.id
                            ? "bg-terracotta text-white shadow-sm"
                            : "text-mesquite/60 hover:text-mesquite hover:bg-sand"
                        }`}
                      >
                        {section.icon && <span className="mr-1 text-sm">{section.icon}</span>}
                        <span>{section.title}</span>
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            );
          })()}

          {/* Mobile dropdown nav */}
          <div className="lg:hidden flex items-center justify-between py-2">
            <span className="text-sm font-medium text-mesquite/60 truncate">
              {sections.find((s) => s.id === activeSection)?.icon}{" "}
              {sections.find((s) => s.id === activeSection)?.title}
            </span>
            <button
              onClick={() => setTocOpen(!tocOpen)}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-sand text-mesquite text-sm font-medium"
            >
              {tocOpen ? <X className="w-4 h-4" /> : <List className="w-4 h-4" />}
              Sections
            </button>
          </div>
        </div>

        {/* Mobile TOC dropdown */}
        <AnimatePresence>
          {tocOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden bg-parchment border-b border-border"
            >
              <div className="container py-3 flex flex-col gap-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      activeSection === section.id
                        ? "bg-terracotta/10 text-terracotta font-medium"
                        : "text-mesquite/70 hover:bg-sand"
                    }`}
                  >
                    {section.icon && <span className="mr-2">{section.icon}</span>}
                    {section.title}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="container py-8 lg:py-12">
        <div className="max-w-4xl mx-auto">{children}</div>
      </div>

      {/* Scroll to top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-terracotta text-white shadow-lg flex items-center justify-center hover:bg-terracotta/90 transition-colors"
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </Layout>
  );
}
