'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

// Hardcoded translations
const translations = {
  title: "Fast X Play Gaming Studio",
  subtitle: "Immersive Gaming Experiences with a Kurdish Touch",
  description: "We create engaging games that blend modern gameplay with elements of Kurdish culture, delivering unique entertainment across multiple platforms.",
  cta: "Explore Our Games",
  gamesTitle: "Our Games",
  viewDetails: "View Details",
  downloadOnSteam: "Download on Steam",
  aboutTitle: "About Us",
  aboutDescription: "Learn more about our studio and mission",
  contactTitle: "Contact Us",
  contactDescription: "Get in touch with our team"
};

// Game data
const games = [
  {
    id: 'kurdish-legends',
    title: 'Kurdish Legends',
    description: 'An action-adventure game that draws on Kurdish folklore and mythology. Play as a legendary hero battling ancient evils and supernatural foes while exploring beautifully rendered landscapes inspired by Kurdistan.',
    shortDescription: 'An action-adventure inspired by Kurdish folklore',
    image: '/games/kurdish-legends-placeholder.jpg',
    steamLink: '#',
    comingSoon: true,
    features: [
      'Epic single-player campaign',
      'Stunning visuals inspired by Kurdish landscapes',
      'Original soundtrack featuring traditional Kurdish instruments',
      'Unique combat system blending modern mechanics with historical fighting styles'
    ]
  },
  {
    id: 'newroz-racing',
    title: 'Newroz Racing',
    description: 'A high-octane racing game set during the Newroz festival. Race through beautifully decorated cities and countryside while performing stunts and collecting power-ups.',
    shortDescription: 'Fast-paced racing during the Newroz festival',
    image: '/games/newroz-racing-placeholder.jpg',
    steamLink: 'https://store.steampowered.com/app/654321/Newroz_Racing/',
    features: [
      'Multiplayer races with up to 8 players',
      'Customizable vehicles with Kurdish-inspired designs',
      'Dynamic day/night cycle and weather effects',
      '20+ tracks across different Kurdish regions'
    ]
  }
];

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full h-screen flex items-center justify-center bg-gradient-to-b from-background to-background/80">
        <div className="container relative flex flex-col justify-center h-full py-6">
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Original effects - reduced thickness */}
            <div className="absolute -top-[10%] -left-[10%] w-1/3 h-1/3 bg-primary/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute top-[30%] -right-[5%] w-1/4 h-1/4 bg-gaming-neon/10 rounded-full blur-3xl animate-pulse" />
            
            {/* Additional animated elements - reduced thickness */}
            <div className="absolute top-[20%] left-[20%] w-16 h-16 bg-gaming-neon/10 rounded-full blur-xl animate-float" />
            <div className="absolute bottom-[10%] right-[30%] w-24 h-24 bg-gaming-purple/10 rounded-full blur-xl animate-pulse" />
            <div className="absolute top-[60%] left-[10%] w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse" />
            
            {/* Floating particles */}
            <div className="absolute top-[15%] right-[15%] w-3 h-3 bg-gaming-neon rounded-full animate-float" />
            <div className="absolute top-[45%] left-[25%] w-4 h-4 bg-primary rounded-full animate-float" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-[25%] right-[45%] w-3 h-3 bg-gaming-purple rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
            
            {/* Rotating elements - thinner borders */}
            <div className="absolute top-[10%] right-[40%] w-40 h-40 border border-gaming-neon/30 rounded-full animate-spin-slow" />
            <div className="absolute bottom-[20%] left-[30%] w-60 h-60 border border-primary/20 rounded-full animate-spin-slower" />

            {/* Additional interactive elements */}
            <div className="absolute top-[35%] right-[20%] w-16 h-16 border border-gaming-purple/20 rounded-full animate-orbit" />
            <div className="absolute bottom-[40%] left-[15%] w-12 h-12 border border-gaming-neon/40 rounded-full animate-orbit" style={{ animationDelay: '3s' }} />
            
            {/* Ripple effects */}
            <div className="absolute top-[70%] right-[25%] w-8 h-8 border border-primary rounded-full animate-ripple" />
            <div className="absolute top-[15%] left-[40%] w-6 h-6 border border-gaming-neon rounded-full animate-ripple" style={{ animationDelay: '1s' }} />
          </div>
          
          <div className="flex flex-col items-center text-center relative z-10 space-y-8">
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-gaming-neon to-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {translations.title}
            </motion.h1>
            
            <motion.h2 
              className="text-xl md:text-2xl lg:text-3xl font-medium text-foreground/80 px-4 max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {translations.subtitle}
            </motion.h2>
            
            <motion.p 
              className="max-w-2xl text-lg text-muted-foreground px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {translations.description}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6"
            >
              <Link 
                href="#games"
                className="relative inline-flex items-center justify-center overflow-hidden rounded-md btn-glow-gradient px-10 py-4 font-medium text-primary-foreground text-lg"
              >
                {translations.cta}
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </Link>
            </motion.div>
          </div>
          
          {/* Scroll down indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground">
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section id="games" className="w-full py-20 bg-gradient-to-b from-background/80 to-background relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Blue and orange glowing elements */}
          <div className="absolute top-[10%] right-[10%] w-60 h-60 bg-gaming-neon/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-[15%] left-[5%] w-48 h-48 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          
          {/* Rotating elements */}
          <div className="absolute top-[25%] left-[15%] w-32 h-32 border border-gaming-neon/20 rounded-full animate-spin-slow" />
          <div className="absolute bottom-[30%] right-[20%] w-24 h-24 border border-primary/15 rounded-full animate-spin-slower" />
          
          {/* Floating particles */}
          <div className="absolute top-[30%] right-[25%] w-2 h-2 bg-gaming-neon rounded-full animate-float" />
          <div className="absolute bottom-[20%] left-[40%] w-3 h-3 bg-primary rounded-full animate-float-delayed" />
          <div className="absolute top-[60%] right-[30%] w-2 h-2 bg-gaming-purple rounded-full animate-float" style={{ animationDelay: '2s' }} />
          
          {/* Ripple effect */}
          <div className="absolute top-[40%] left-[20%] w-6 h-6 border border-gaming-neon/50 rounded-full animate-ripple" />
          <div className="absolute bottom-[40%] right-[10%] w-8 h-8 border border-primary/50 rounded-full animate-ripple" style={{ animationDelay: '1.5s' }} />
        </div>

        <div className="container relative z-10">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-primary via-gaming-neon to-primary"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {translations.gamesTitle}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {games.map((game) => (
              <motion.div 
                key={game.id}
                className="bg-secondary/10 backdrop-blur rounded-xl overflow-hidden border border-border/50 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                {game.comingSoon && (
                  <div className="absolute top-0 right-0 z-20">
                    <div className="bg-primary text-primary-foreground font-bold text-sm px-4 py-1 rounded-bl-lg">
                      Coming Soon
                    </div>
                  </div>
                )}
                <div className="relative h-64 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
                  <div className="absolute inset-0 flex items-center justify-center bg-primary/20">
                    {/* Placeholder for game image */}
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                      <span className="font-bold text-primary-foreground">FXP</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{game.title}</h3>
                  <p className="text-muted-foreground mb-5">{game.shortDescription}</p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href={`/en/game/${game.id}`}
                      className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-2 rounded-md transition-colors"
                    >
                      {translations.viewDetails}
                    </Link>
                    {game.id !== 'kurdish-legends' && (
                      <Link
                        href={game.steamLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary text-primary-foreground hover:bg-primary/80 flex items-center gap-2 px-4 py-2 rounded-md transition-colors btn-glow-blue"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
                          <path d="M.329 10.333A8.01 8.01 0 0 0 7.99 16C12.414 16 16 12.418 16 8s-3.586-8-8.009-8A8.006 8.006 0 0 0 0 7.468l.003.006 4.304 1.769A2.198 2.198 0 0 1 5.62 8.88l1.96-2.844-.001-.04a3.046 3.046 0 0 1 3.042-3.043a3.046 3.046 0 0 1 3.042 3.043a3.047 3.047 0 0 1-3.111 3.044l-2.804 2a2.223 2.223 0 0 1-3.075 2.11a2.217 2.217 0 0 1-1.312-1.568L.33 10.333Z"/>
                          <path d="M4.868 12.683a1.715 1.715 0 0 0 1.318-3.165 1.705 1.705 0 0 0-1.263-.02l1.023.424a1.261 1.261 0 1 1-.97 2.33l-.99-.41a1.7 1.7 0 0 0 .882.84Zm3.726-6.687a2.03 2.03 0 0 0 2.027 2.029a2.03 2.03 0 0 0 2.027-2.029a2.03 2.03 0 0 0-2.027-2.027a2.03 2.03 0 0 0-2.027 2.027Zm2.03-1.527a1.524 1.524 0 1 1-.002 3.048 1.524 1.524 0 0 1 .002-3.048Z"/>
                        </svg>
                        {translations.downloadOnSteam}
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="w-full py-20 bg-gradient-to-b from-background/80 to-background/60 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Blue and orange glowing elements */}
          <div className="absolute -top-[10%] -right-[10%] w-64 h-64 bg-gaming-neon/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-[10%] -left-[5%] w-52 h-52 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-[40%] right-[20%] w-40 h-40 bg-gaming-purple/5 rounded-full blur-3xl animate-pulse" />
          
          {/* Rotating elements */}
          <div className="absolute top-[20%] left-[15%] w-28 h-28 border border-gaming-neon/15 rounded-full animate-spin-slow" />
          <div className="absolute bottom-[30%] right-[10%] w-36 h-36 border border-primary/10 rounded-full animate-spin-slower" />
          
          {/* Floating particles */}
          <div className="absolute top-[25%] right-[30%] w-3 h-3 bg-gaming-neon rounded-full animate-float" />
          <div className="absolute bottom-[15%] left-[25%] w-2 h-2 bg-primary rounded-full animate-float-delayed" />
          <div className="absolute top-[70%] right-[15%] w-2 h-2 bg-gaming-purple rounded-full animate-float" style={{ animationDelay: '1.2s' }} />
          
          {/* Ripple effect */}
          <div className="absolute top-[60%] left-[30%] w-5 h-5 border border-gaming-neon/40 rounded-full animate-ripple" />
          <div className="absolute bottom-[50%] right-[20%] w-7 h-7 border border-primary/40 rounded-full animate-ripple" style={{ animationDelay: '0.7s' }} />

          {/* Orbiting elements */}
          <div className="absolute top-[35%] left-[10%] w-12 h-12 border border-gaming-purple/20 rounded-full animate-orbit" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="container relative z-10">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-gaming-neon to-primary"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {translations.aboutTitle}
          </motion.h2>

          <motion.p 
            className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {translations.aboutDescription}
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <div className="relative h-80 w-80 rounded-full overflow-hidden border-4 border-primary/20">
                {/* Studio image placeholder */}
                <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-primary flex items-center justify-center">
                    <span className="font-bold text-primary-foreground text-4xl">FXP</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <h3 className="text-2xl font-bold mb-4">Kurdish Gaming Innovation</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Fast X Play is a pioneering Kurdish gaming studio committed to creating immersive gaming experiences that celebrate Kurdish culture and heritage. Founded in 2022, our team brings together talented developers, artists, and storytellers from across Kurdistan.
                </p>
                <p>
                  Our mission is to develop games that not only entertain but also educate players about the rich cultural heritage of Kurdistan. Through innovative gameplay mechanics and compelling narratives, we aim to share Kurdish stories with the world.
                </p>
                <p>
                  At Fast X Play, we believe in the power of games to connect people across cultures and borders. Each of our games is crafted with attention to detail, from the landscapes inspired by Kurdistan's beautiful scenery to the music featuring traditional Kurdish instruments.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-secondary/10 backdrop-blur rounded-xl p-6 border border-border/50"
            >
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                  <path d="m2 12 7 3 7-3"></path>
                  <path d="M9 7v0a3 3 0 0 1 6 0v11"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Our Vision</h3>
              <p className="text-muted-foreground">
                To become the leading game development studio in Kurdistan and the Middle East, creating games that resonate with players globally while showcasing Kurdish culture.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-secondary/10 backdrop-blur rounded-xl p-6 border border-border/50"
            >
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Our Approach</h3>
              <p className="text-muted-foreground">
                We blend traditional Kurdish storytelling with modern game design principles to create unique gaming experiences that are both entertaining and culturally authentic.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-secondary/10 backdrop-blur rounded-xl p-6 border border-border/50"
            >
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M12 2v20"></path>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Our Impact</h3>
              <p className="text-muted-foreground">
                Through our games, we aim to create jobs in the Kurdish tech sector, preserve cultural heritage, and put Kurdistan on the map in the global gaming industry.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Background Effects */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-[10%] -right-[10%] w-1/3 h-1/3 bg-primary/15 rounded-full blur-2xl animate-pulse" />
          <div className="absolute bottom-[10%] -left-[5%] w-1/4 h-1/4 bg-primary/15 rounded-full blur-2xl animate-pulse" />
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="w-full py-20 bg-gradient-to-b from-background/60 to-background relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Blue and orange glowing elements */}
          <div className="absolute top-[20%] -left-[10%] w-60 h-60 bg-gaming-neon/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-[20%] -right-[5%] w-48 h-48 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          
          {/* Rotating elements */}
          <div className="absolute top-[15%] right-[20%] w-40 h-40 border border-gaming-neon/15 rounded-full animate-spin-slower" />
          <div className="absolute bottom-[40%] left-[10%] w-32 h-32 border border-primary/15 rounded-full animate-spin-slow" />
          
          {/* Floating particles */}
          <div className="absolute top-[40%] left-[20%] w-3 h-3 bg-gaming-neon rounded-full animate-float-horizontal" />
          <div className="absolute bottom-[30%] right-[25%] w-2 h-2 bg-primary rounded-full animate-float" />
          <div className="absolute top-[60%] left-[30%] w-4 h-4 bg-gaming-purple rounded-full animate-float-delayed" />
          
          {/* Ripple and orbiting elements */}
          <div className="absolute bottom-[15%] left-[40%] w-6 h-6 border border-gaming-neon/30 rounded-full animate-ripple" style={{ animationDelay: '1s' }} />
          <div className="absolute top-[25%] right-[35%] w-8 h-8 border border-primary/30 rounded-full animate-orbit" style={{ animationDelay: '0.5s' }} />
        </div>
        
        <div className="container relative z-10">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-gaming-neon to-primary"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {translations.contactTitle}
          </motion.h2>

          <motion.p 
            className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {translations.contactDescription}
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-secondary/10 backdrop-blur rounded-xl p-8 border border-border/50"
            >
              <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
              
              <form className="space-y-6" action="mailto:contact@fastxplay.com" method="post" encType="text/plain">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="bg-primary text-primary-foreground hover:bg-primary/80 w-full rounded-md py-2 px-4 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Office Location</h4>
                      <p className="text-muted-foreground">
                        Erbil, Kurdistan Region<br />
                        Iraq
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Phone Number</h4>
                      <p className="text-muted-foreground">+964 750 123 4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Email Address</h4>
                      <p className="text-muted-foreground">contact@fastxplay.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Background Effects */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-[20%] -left-[10%] w-1/3 h-1/3 bg-primary/15 rounded-full blur-2xl animate-pulse" />
          <div className="absolute bottom-[20%] -right-[5%] w-1/4 h-1/4 bg-primary/15 rounded-full blur-2xl animate-pulse" />
        </div>
      </section>
    </div>
  );
}
