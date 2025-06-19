"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Image as ImageIcon, Youtube } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Game data
const game = {
  id: 'kurdish-legends',
  title: 'Kurdish Legends',
  description: 'An action-adventure game set in a fantasy world inspired by Kurdish mythology. Play as a legendary hero and embark on an epic journey through ancient lands.',
  shortDescription: 'Action-adventure inspired by Kurdish mythology',
  image: '/games/kurdish-legends-placeholder.jpg',
  steamLink: '#',
  features: [
    'Epic single-player campaign',
    'Beautiful visuals inspired by Kurdistan landscapes',
    'Original soundtrack featuring traditional Kurdish instruments',
    'Unique combat system blending modern and historical styles'
  ],
  galleryImages: [
    '/games/kurdish-legends-screenshot1.jpg',
    '/games/kurdish-legends-screenshot2.jpg',
    '/games/kurdish-legends-screenshot3.jpg',
  ],
  videoLinks: [
    'https://www.youtube.com/embed/dQw4w9WgXcQ',
    'https://www.youtube.com/embed/dQw4w9WgXcQ',
  ],
  blogContent: `
    <p>Development of Kurdish Legends began in early 2022, with a small team of passionate developers who wanted to create a game that celebrates Kurdish culture and mythology.</p>
    <p>The world of Kurdish Legends is inspired by the breathtaking landscapes of Kurdistan, from snow-capped mountains to lush valleys and ancient cities. Our art team spent months researching traditional Kurdish architecture, clothing, and artifacts to ensure authenticity.</p>
    <p>The game's storyline draws from ancient Kurdish tales and legends, reimagined in a fantasy setting that allows players to experience the rich cultural heritage of the Kurdish people in an interactive way.</p>
    <p>We're excited to share more details about the game as development progresses. Stay tuned for updates!</p>
  `
};

// Translations
const translations = {
  backToHome: "Back to Home",
  keyFeatures: "Key Features",
  gallery: "Gallery",
  images: "Images",
  videos: "Videos",
  blog: "Development Blog",
};

export default function GamePage() {
  const [activeTab, setActiveTab] = useState<'blog' | 'gallery'>('blog');
  const [galleryType, setGalleryType] = useState<'images' | 'videos'>('images');
  
  return (
    <div className="flex flex-col items-center">
      <div className="container py-12">
        <Link href="/en" className="inline-flex items-center text-primary hover:underline mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          {translations.backToHome}
        </Link>
        
        <div className="bg-secondary/10 backdrop-blur rounded-xl overflow-hidden border border-border/50 mb-12">
          <div className="relative h-96 w-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
            <div className="absolute inset-0 flex items-center justify-center bg-gaming-purple/20">
              {/* Game hero image would go here */}
              <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center">
                <span className="font-bold text-primary-foreground text-2xl">FXP</span>
              </div>
            </div>
          </div>
          
          <div className="p-8">
            <h1 className="text-4xl font-bold mb-4">{game.title}</h1>
            <p className="text-xl text-muted-foreground mb-8">{game.shortDescription}</p>
            <p className="mb-8 text-lg">{game.description}</p>
            
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">{translations.keyFeatures}</h2>
              <ul className="list-disc pl-5 space-y-2">
                {game.features.map((feature, index) => (
                  <li key={index} className="text-muted-foreground text-lg">{feature}</li>
                ))}
              </ul>
            </div>
            
            <div className="flex border-b border-border mb-8">
              <button
                onClick={() => setActiveTab('blog')}
                className={`px-4 py-2 font-medium text-sm ${
                  activeTab === 'blog'
                    ? 'border-b-2 border-primary text-primary'
                    : 'text-muted-foreground'
                }`}
              >
                {translations.blog}
              </button>
              <button
                onClick={() => setActiveTab('gallery')}
                className={`px-4 py-2 font-medium text-sm ${
                  activeTab === 'gallery'
                    ? 'border-b-2 border-primary text-primary'
                    : 'text-muted-foreground'
                }`}
              >
                {translations.gallery}
              </button>
            </div>
            
            <AnimatePresence mode="wait">
              {activeTab === 'blog' && (
                <motion.div
                  key="blog"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="prose prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: game.blogContent }}
                />
              )}
              
              {activeTab === 'gallery' && (
                <motion.div
                  key="gallery"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="flex gap-4 mb-6">
                    <button
                      onClick={() => setGalleryType('images')}
                      className={`flex items-center px-4 py-2 rounded-md ${
                        galleryType === 'images'
                          ? 'bg-secondary text-secondary-foreground'
                          : 'bg-transparent text-muted-foreground'
                      }`}
                    >
                      <ImageIcon className="mr-2 h-4 w-4" />
                      {translations.images}
                    </button>
                    <button
                      onClick={() => setGalleryType('videos')}
                      className={`flex items-center px-4 py-2 rounded-md ${
                        galleryType === 'videos'
                          ? 'bg-secondary text-secondary-foreground'
                          : 'bg-transparent text-muted-foreground'
                      }`}
                    >
                      <Youtube className="mr-2 h-4 w-4" />
                      {translations.videos}
                    </button>
                  </div>
                  
                  <AnimatePresence mode="wait">
                    {galleryType === 'images' && (
                      <motion.div
                        key="images"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                      >
                        {game.galleryImages.map((image, index) => (
                          <div key={index} className="aspect-video bg-secondary/20 rounded-lg overflow-hidden flex items-center justify-center">
                            {/* Image would be rendered here */}
                            <div className="text-muted-foreground">Image {index + 1}</div>
                          </div>
                        ))}
                      </motion.div>
                    )}
                    
                    {galleryType === 'videos' && (
                      <motion.div
                        key="videos"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                      >
                        {game.videoLinks.map((videoUrl, index) => (
                          <div key={index} className="aspect-video bg-secondary/20 rounded-lg overflow-hidden">
                            <iframe
                              width="100%"
                              height="100%"
                              src={videoUrl}
                              title={`${game.title} video ${index + 1}`}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            ></iframe>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
} 