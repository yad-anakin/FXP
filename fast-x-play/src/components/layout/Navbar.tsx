'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import Image from 'next/image';

// Language labels for each locale
const localeLabels = {
  en: {
    en: "English",
    ku: "Kurdish",
    ar: "Arabic",
    home: "Home",
    games: "Games",
    about: "About Us",
    contact: "Contact",
    news: "News",
    dark: "Dark Mode",
    light: "Light Mode"
  },
  ku: {
    en: "ئینگلیزی",
    ku: "کوردی",
    ar: "عەرەبی",
    home: "سەرەکی",
    games: "یارییەکان",
    about: "دەربارەی ئێمە",
    contact: "پەیوەندی",
    news: "هەواڵەکان",
    dark: "دۆخی تاریک",
    light: "دۆخی ڕووناک"
  },
  ar: {
    en: "الإنجليزية",
    ku: "الكردية",
    ar: "العربية",
    home: "الرئيسية",
    games: "الألعاب",
    about: "من نحن",
    contact: "اتصل بنا",
    news: "الأخبار",
    dark: "الوضع الداكن",
    light: "الوضع الفاتح"
  }
};

interface NavbarProps {
  locale: string;
}

const Navbar = ({ locale = 'en' }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  
  const labels = localeLabels[locale as keyof typeof localeLabels] || localeLabels.en;

  // After mounting, we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  // Function to handle locale change
  const changeLocale = (newLocale: string) => {
    // If the URL contains the locale, replace it
    const currentPathname = pathname;
    const segments = currentPathname.split('/');
    
    // The first segment after the leading slash is the locale
    if (segments.length > 1) {
      segments[1] = newLocale;
    }
    
    router.push(segments.join('/'));
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // For RTL languages
  const isRtl = locale === 'ar';
  
  // Define nav links
  const navLinks = [
    { href: `/${locale}`, label: labels.home },
    { href: `/${locale}#games`, label: labels.games },
    { href: `/${locale}#about`, label: labels.about },
    { href: `/${locale}#contact`, label: labels.contact },
  ];

  const localeOptions = [
    { code: 'en', label: labels.en },
    { code: 'ku', label: labels.ku },
    { code: 'ar', label: labels.ar },
  ];

  return (
    <header className={`sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur ${isRtl ? 'rtl' : 'ltr'}`}>
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href={`/${locale}`} className="flex items-center">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="mr-2 overflow-hidden rounded-md"
            >
              {/* Logo placeholder - replace with actual logo */}
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <span className="font-bold">FXP</span>
              </div>
            </motion.div>
            <span className="hidden font-bold sm:inline-block">Fast X Play</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === link.href.split('#')[0] && !link.href.includes('#') ? 'text-primary' : 'text-foreground/70'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          {/* Language Selector */}
          <div className="relative">
            <select
              value={locale}
              onChange={(e) => changeLocale(e.target.value)}
              className="appearance-none rounded-md border border-border bg-background px-2 py-1 text-sm"
            >
              {localeOptions.map((option) => (
                <option key={option.code} value={option.code}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="rounded-full p-2 hover:bg-accent/10"
              aria-label={theme === 'dark' ? labels.light : labels.dark}
            >
              {theme === 'dark' ? (
                <motion.svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </motion.svg>
              ) : (
                <motion.svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round"  
                  strokeLinejoin="round"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </motion.svg>
              )}
            </button>
          )}

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden rounded-md p-2 hover:bg-accent/10"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {isMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-border md:hidden"
          >
            <nav className="container py-4">
              <ul className="grid gap-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`block rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent/10 hover:text-primary ${
                        pathname === link.href.split('#')[0] && !link.href.includes('#') ? 'bg-accent/10 text-primary' : 'text-foreground/70'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar; 