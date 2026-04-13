import { ImageWithFallback } from './figma/ImageWithFallback';
import { Film, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  imageUrls?: string[];
  videoUrl?: string;
  videoUrls?: string[];
  tags: string[];
}

export function ProjectCard({ title, category, description, image, imageUrls, videoUrl, videoUrls, tags }: ProjectCardProps) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const hasVideoCarousel = Array.isArray(videoUrls) && videoUrls.length > 0;
  const hasImageCarousel = Array.isArray(imageUrls) && imageUrls.length > 0;
  const activeVideoUrl = hasVideoCarousel ? videoUrls[currentVideoIndex] : videoUrl;
  const activeImageUrl = hasImageCarousel ? imageUrls[currentImageIndex] : image;

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [title]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="group relative overflow-hidden rounded-lg bg-zinc-900 border border-zinc-800 hover:border-red-600/50 transition-all duration-500"
    >
      {/* Film Frame Borders */}
      <div className="absolute inset-0 pointer-events-none z-20">
        <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-b from-black/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      {/* Image Container with Cinematic Aspect Ratio */}
      <div className={`relative overflow-hidden bg-black ${hasImageCarousel && !activeVideoUrl ? 'aspect-[4/3] md:aspect-[3/2]' : 'aspect-[21/9]'}`}>
        {hasVideoCarousel ? (
          <>
            <iframe
              src={activeVideoUrl}
              title={title}
              frameBorder="0"
              className="w-full h-full object-cover"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
              allowFullScreen
            />

            <button
              type="button"
              onClick={() => setCurrentVideoIndex((prev) => (prev + 1) % videoUrls.length)}
              className="absolute right-4 top-1/2 z-40 -translate-y-1/2 rounded-full bg-black/70 border border-white/15 p-3 text-white hover:bg-red-600/80 transition pointer-events-auto"
              aria-label="Next video"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="absolute bottom-4 left-4 z-40 px-3 py-1 rounded-full bg-black/70 text-xs text-gray-200 border border-white/10">
              {currentVideoIndex + 1} / {videoUrls.length}
            </div>
          </>
        ) : videoUrl ? (
          <iframe
            src={videoUrl}
            title={title}
            className="w-full h-full object-cover"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <>
            <ImageWithFallback
              src={activeImageUrl}
              alt={title}
              className={`w-full h-full transition-all duration-700 group-hover:scale-105 ${hasImageCarousel ? 'object-contain bg-black' : 'object-cover'}`}
            />

            {hasImageCarousel && (
              <>
                <button
                  type="button"
                  onClick={() => setCurrentImageIndex((prev) => (prev + 1) % imageUrls.length)}
                  className="absolute right-4 top-1/2 z-40 -translate-y-1/2 rounded-full bg-black/70 border border-white/15 p-3 text-white hover:bg-red-600/80 transition pointer-events-auto"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                <div className="absolute bottom-4 left-4 z-40 px-3 py-1 rounded-full bg-black/70 text-xs text-gray-200 border border-white/10">
                  {currentImageIndex + 1} / {imageUrls.length}
                </div>
              </>
            )}
          </>
        )}


        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-30">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-black/80 backdrop-blur-sm border border-red-600/30 rounded-full">
            <Film className="w-3.5 h-3.5 text-red-500" />
            <span className="text-xs text-red-400 uppercase tracking-wider">{category}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 bg-zinc-900/50 backdrop-blur-sm">
        <h3 className="text-xl text-white mb-2 tracking-wide group-hover:text-red-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-zinc-800/50 border border-zinc-700/50 text-gray-300 rounded text-xs tracking-wide hover:border-red-600/50 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
