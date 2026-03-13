import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X, BookOpen } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663407421710/DFVUKAcoDGjab34rQHvoTT/logo-sonoran-JxLuLtwfQmgKVbofq6m2VA.webp";
import { motion, AnimatePresence } from "framer-motion";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const isHome = location === "/";

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header
        className={`sticky top-0 z-50 backdrop-blur-md transition-colors duration-300 ${
          isHome
            ? "bg-parchment/80 border-b border-border/50"
            : "bg-parchment/95 border-b border-border"
        }`}
      >
        <div className="container flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <img src={LOGO_URL} alt="Sonoran Garden Almanac" className="w-9 h-9 rounded-full object-cover" />
            <span className="font-display font-semibold text-lg text-mesquite hidden sm:block">
              Garden Almanac
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            <NavLink href="/almanac/original" label="2020–21" active={location === "/almanac/original"} />
            <NavLink href="/almanac/2022" label="2021–22" active={location === "/almanac/2022"} />
            <NavLink href="/almanac/2023-24" label="2023–24" active={location === "/almanac/2023-24"} />
            <NavLink href="/almanac/2024-25" label="2024–25" active={location === "/almanac/2024-25"} />
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-sand transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden bg-parchment/95 border-b border-border"
            >
              <nav className="container py-4 flex flex-col gap-1">
                <MobileNavLink href="/" label="Home" icon={<img src={LOGO_URL} alt="" className="w-4 h-4 rounded-full" />} onClick={() => setMobileMenuOpen(false)} />
                <MobileNavLink href="/almanac/original" label="2020–21 Almanac" icon={<BookOpen className="w-4 h-4" />} onClick={() => setMobileMenuOpen(false)} />
                <MobileNavLink href="/almanac/2022" label="2021–22 Almanac" icon={<BookOpen className="w-4 h-4" />} onClick={() => setMobileMenuOpen(false)} />
                <MobileNavLink href="/almanac/2023-24" label="2023–24 Almanac" icon={<BookOpen className="w-4 h-4" />} onClick={() => setMobileMenuOpen(false)} />
                <MobileNavLink href="/almanac/2024-25" label="2024–25 Almanac" icon={<BookOpen className="w-4 h-4" />} onClick={() => setMobileMenuOpen(false)} />
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-mesquite text-parchment/80 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src={LOGO_URL} alt="Sonoran Garden Almanac" className="w-8 h-8 rounded-full object-cover" />
                <span className="font-display font-semibold text-lg text-parchment">
                  Garden Almanac
                </span>
              </div>
              <p className="text-sm leading-relaxed text-parchment/60">
                The Sonoran Desert School Gardener's Almanac is a love letter to the Sonoran Desert,
                its people, and its food heritage.
              </p>
            </div>
            <div>
              <h4 className="font-display font-semibold mb-4 text-parchment">Almanac Editions</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/almanac/original" className="hover:text-desert-gold transition-colors">2020–21 Edition</Link></li>
                <li><Link href="/almanac/2022" className="hover:text-desert-gold transition-colors">2021–22 Edition</Link></li>
                <li><Link href="/almanac/2023-24" className="hover:text-desert-gold transition-colors">2023–24 Edition</Link></li>
                <li><Link href="/almanac/2024-25" className="hover:text-desert-gold transition-colors">2024–25 Edition</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-semibold mb-4 text-parchment">About</h4>
              <p className="text-sm leading-relaxed text-parchment/60">
                Created by the School Garden Workshop (SGW) at the University of Arizona in partnership
                with Sprouts Healthy Communities Foundation and Tucson Unified School District.
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-parchment/10 text-center text-xs text-parchment/40">
            <p>A digital archive of the Sonoran Desert School Gardener's Almanac series.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function NavLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link
      href={href}
      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
        active
          ? "bg-terracotta/10 text-terracotta"
          : "text-mesquite/70 hover:text-mesquite hover:bg-sand"
      }`}
    >
      {label}
    </Link>
  );
}

function MobileNavLink({ href, label, icon, onClick }: { href: string; label: string; icon: React.ReactNode; onClick: () => void }) {
  return (
    <Link href={href} onClick={onClick} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-mesquite/80 hover:bg-sand hover:text-mesquite transition-colors">
      {icon}
      <span className="font-medium text-sm">{label}</span>
    </Link>
  );
}
