"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Image as ImageIcon, Youtube } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Game data
const game = {
  id: 'kurdish-legends',
  title: 'أساطير كردستان',
  description: 'لعبة أكشن ومغامرة تدور أحداثها في عالم خيالي مستوحى من الميثولوجيا الكردية. العب بدور بطل أسطوري وانطلق في رحلة ملحمية عبر الأراضي القديمة.',
  shortDescription: 'أكشن ومغامرة مستوحاة من الميثولوجيا الكردية',
  image: '/games/kurdish-legends-placeholder.jpg',
  steamLink: '#',
  features: [
    'حملة لاعب واحد ملحمية',
    'رسومات جميلة مستوحاة من مناظر كردستان الطبيعية',
    'موسيقى أصلية تضم آلات كردية تقليدية',
    'نظام قتال فريد يمزج بين الأساليب الحديثة والتاريخية'
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
    <p>بدأ تطوير أساطير كردستان في أوائل عام 2022، مع فريق صغير من المطورين المتحمسين الذين أرادوا إنشاء لعبة تحتفي بالثقافة والميثولوجيا الكردية.</p>
    <p>عالم أساطير كردستان مستوحى من المناظر الطبيعية الخلابة لكردستان، من الجبال المغطاة بالثلوج إلى الوديان الخضراء والمدن القديمة. أمضى فريق الفنون لدينا شهورًا في البحث عن العمارة الكردية التقليدية والملابس والقطع الأثرية لضمان الأصالة.</p>
    <p>تستمد قصة اللعبة من الحكايات والأساطير الكردية القديمة، أُعيد تخيلها في إطار خيالي يسمح للاعبين بتجربة التراث الثقافي الغني للشعب الكردي بطريقة تفاعلية.</p>
    <p>نحن متحمسون لمشاركة المزيد من التفاصيل حول اللعبة مع تقدم التطوير. ترقبوا التحديثات!</p>
  `
};

// Translations
const translations = {
  backToHome: "العودة إلى الرئيسية",
  keyFeatures: "الميزات الرئيسية",
  gallery: "معرض الصور",
  images: "الصور",
  videos: "الفيديوهات",
  blog: "مدونة التطوير",
};

export default function GamePage() {
  const [activeTab, setActiveTab] = useState<'blog' | 'gallery'>('blog');
  const [galleryType, setGalleryType] = useState<'images' | 'videos'>('images');
  
  return (
    <div className="flex flex-col items-center rtl ar">
      <div className="container py-12">
        <Link href="/ar" className="inline-flex items-center text-primary hover:underline mb-8">
          <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
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
              <ul className="list-disc pr-5 space-y-2">
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
                      <ImageIcon className="ml-2 h-4 w-4" />
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
                      <Youtube className="ml-2 h-4 w-4" />
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
                            <div className="text-muted-foreground">صورة {index + 1}</div>
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
                              title={`${game.title} فيديو ${index + 1}`}
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