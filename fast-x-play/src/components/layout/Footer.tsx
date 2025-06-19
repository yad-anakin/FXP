'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

// Footer translations for each locale
const footerTranslations = {
  en: {
    rights: "© 2025 Fast X Play. All Rights Reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
  },
  ku: {
    rights: "© ٢٠٢٥ فاست ئێکس پڵەی. هەموو مافەکان پارێزراون.",
    privacy: "سیاسەتی تایبەتمەندی",
    terms: "مەرجەکانی بەکارهێنان",
  },
  ar: {
    rights: "© ٢٠٢٥ فاست إكس بلاي. جميع الحقوق محفوظة.",
    privacy: "سياسة الخصوصية",
    terms: "شروط الخدمة",
  }
};

interface FooterProps {
  locale: string;
}

const Footer = ({ locale = 'en' }: FooterProps) => {
  const translations = footerTranslations[locale as keyof typeof footerTranslations] || footerTranslations.en;
  const isRtl = locale === 'ar';
  
  // Current year for copyright
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`border-t border-border/40 bg-background ${isRtl ? 'rtl' : 'ltr'}`}>
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {/* Logo and description */}
          <div className="flex flex-col">
            <Link href={`/${locale}`} className="inline-block">
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-center">
                {/* Logo placeholder */}
                <div className="mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <span className="font-bold">FXP</span>
                </div>
                <span className="font-bold">Fast X Play</span>
              </motion.div>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Kurdish Gaming Studio creating immersive gaming experiences with a touch of Kurdish culture.
            </p>
            
            <div className="mt-4 pt-4 border-t border-border/40">
              <div className="flex items-center">
                <span className="text-xs text-muted-foreground shrink-0">Designed & Developed by</span>
                <motion.a
                  href="https://www.instagram.com/yad_qasim"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="text-xs font-medium font-bold ml-1 text-[#FF6B00] flex items-center whitespace-nowrap"
                >
                  Yad Qasim
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </motion.a>
              </div>
              <div className="md:hidden mt-2 border-t border-border/40 pt-2"></div>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`/${locale}`} className="text-muted-foreground transition-colors hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/games`} className="text-muted-foreground transition-colors hover:text-primary">
                  Games
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/about`} className="text-muted-foreground transition-colors hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/news`} className="text-muted-foreground transition-colors hover:text-primary">
                  News
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`/${locale}/privacy`} className="text-muted-foreground transition-colors hover:text-primary">
                  {translations.privacy}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/terms`} className="text-muted-foreground transition-colors hover:text-primary">
                  {translations.terms}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 text-muted-foreground">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span className="text-muted-foreground">
                  Erbil, Kurdistan Region, Iraq
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span className="text-muted-foreground">
                  +964 750 123 4567
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span className="text-muted-foreground">
                  contact@fastxplay.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="mt-8 border-t border-border pt-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-xs text-muted-foreground">
              {translations.rights.replace('2025', currentYear.toString())}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 