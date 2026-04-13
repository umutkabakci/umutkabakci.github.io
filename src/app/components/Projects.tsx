import { ProjectCard } from './ProjectCard';
import { motion } from 'motion/react';
import { Film, Sparkles } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Brand Documentary Series',
    category: 'Documentary',
    description: 'A multi-episode documentary exploring the evolution of innovative tech startups. Crafted compelling narratives through interview editing and B-roll sequencing.',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwcHJvZHVjdGlvbiUyMGNpbmVtYXRpY3xlbnwxfHx8fDE3NDQzODM2MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Premiere Pro', 'Color Grading', 'Storytelling']
  },
  {
    id: 2,
    title: 'Social Media Campaign',
    category: 'Commercial',
    description: 'High-impact short-form content for a global lifestyle brand. Focused on rhythm, pacing, and emotional engagement to maximize viewer retention.',
    image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb24lMjBzZXR8ZW58MXx8fHwxNzQ0MzgzNjAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['After Effects', 'Motion Design', 'Social Media']
  },
  {
    id: 3,
    title: 'Music Video Production',
    category: 'Music Video',
    description: 'Visually driven music video with creative transitions and color work. Synchronized editing to enhance the emotional arc of the song.',
    image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHZpZGVvJTIwcHJvZHVjdGlvbnxlbnwxfHx8fDE3NDQzODM2MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['DaVinci Resolve', 'Sound Design', 'Visual Effects']
  },
  {
    id: 4,
    title: 'Corporate Event Highlight',
    category: 'Event',
    description: 'Fast-paced event recap that captures the energy and key moments. Strategic use of music and pacing to keep audiences engaged.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMHZpZGVvJTIwcHJvZHVjdGlvbnxlbnwxfHx8fDE3NDQzODM2MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Multi-Cam', 'Live Edit', 'Quick Turnaround']
  },
  {
    id: 5,
    title: 'Product Launch Video',
    category: 'Commercial',
    description: 'Sleek product showcase combining motion graphics and live-action footage. Emphasis on visual storytelling and brand consistency.',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwdmlkZW8lMjBzaG9vdHxlbnwxfHx8fDE3NDQzODM2MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Cinema 4D', 'Product Visualization', 'Branding']
  },
  {
    id: 6,
    title: 'Short Film Project',
    category: 'Narrative',
    description: 'Character-driven short film with focus on narrative structure and emotional timing. Carefully crafted pacing to build tension and release.',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9ydCUyMGZpbG0lMjBwcm9kdWN0aW9ufGVufDF8fHx8MTc0NDM4MzYwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Narrative Editing', 'Sound Mix', 'Post-Production']
  },
  {
    id: 7,
    title: 'Fuar Dergisi - Edit 1',
    category: 'Fuar Dergisi',
    description: 'Fuar Dergisi için videographer olarak hazırlanmış edit. Premiere, After Effects ve DaVinci Resolve ile kurgu, renk ve tempo çalışması yapıldı.',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXVyfGVufDB8fHx8MTc0NDM4MzYwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    videoUrl: 'https://www.youtube.com/embed/ciTBoC-a4sI',
    tags: ['Fuar Dergisi', 'Videographer', 'Premiere Pro', 'After Effects', 'DaVinci Resolve']
  },
  {
    id: 8,
    title: 'Fuar Dergisi - Edit 2',
    category: 'Fuar Dergisi',
    description: 'Fuar Dergisi kapsamında videographer olarak hazırlanmış ikinci edit. Premiere, After Effects ve DaVinci Resolve kullanılarak dinamik bir sunum oluşturuldu.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXVyfGVufDB8fHx8MTc0NDM4MzYwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    videoUrl: 'https://www.youtube.com/embed/aQo70brYRBw',
    tags: ['Fuar Dergisi', 'Videographer', 'Premiere Pro', 'After Effects', 'DaVinci Resolve']
  }
];

export function Projects() {
  return (
    <section id="projects" className="min-h-screen px-6 py-32 bg-black relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.03]"
           style={{
             backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
             backgroundSize: '50px 50px'
           }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-600/10 border border-orange-600/30 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-orange-500" />
            <span className="text-orange-400 text-sm tracking-wider uppercase">Selected Works</span>
          </div>

          <h2 className="text-4xl md:text-6xl text-white mb-6 tracking-tight">
            Featured <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A collection of visual stories crafted through precise editing,
            <br className="hidden md:block" />
            rhythm, and emotional timing
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

        {/* Bottom Decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-24"
        >
          <div className="h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />
          <div className="text-center mt-12">
            <Film className="w-6 h-6 text-red-600 mx-auto mb-3" />
            <p className="text-gray-500 text-sm tracking-widest uppercase">Post-Production Excellence</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
