import { ImageWithFallback } from './figma/ImageWithFallback';
import { Play, Film } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
}

export function ProjectCard({ title, category, description, image, tags }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative overflow-hidden rounded-lg bg-zinc-900 border border-zinc-800 hover:border-red-600/50 transition-all duration-500"
    >
      {/* Film Frame Borders */}
      <div className="absolute inset-0 pointer-events-none z-20">
        <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-b from-black/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      {/* Image Container with Cinematic Aspect Ratio */}
      <div className="relative aspect-[21/9] overflow-hidden bg-black">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
        />

        {/* Overlay with Play Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: isHovered ? 1 : 0.8 }}
            className="w-20 h-20 rounded-full bg-gradient-to-r from-orange-600 to-red-600 flex items-center justify-center shadow-2xl shadow-red-600/50"
          >
            <Play className="w-10 h-10 text-white ml-1" fill="white" />
          </motion.div>
        </motion.div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-30">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-black/80 backdrop-blur-sm border border-red-600/30 rounded-full">
            <Film className="w-3.5 h-3.5 text-red-500" />
            <span className="text-xs text-red-400 uppercase tracking-wider">{category}</span>
          </div>
        </div>

        {/* Timecode Effect */}
        <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/80 backdrop-blur-sm rounded font-mono text-xs text-green-400 border border-green-600/30 z-30">
          00:00:00:00
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
