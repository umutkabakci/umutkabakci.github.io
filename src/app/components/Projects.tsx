import { ProjectCard } from './ProjectCard';
import { motion } from 'motion/react';
import { Film, Sparkles } from 'lucide-react';
import img01 from '../../1 (1).JPG';
import img02 from '../../1 (2).jpg';
import img03 from '../../1 (3).jpg';
import img04 from '../../1 (4).JPG';
import img05 from '../../1 (5).JPG';
import img06 from '../../1-4000 f5.6 1600 cccc.JPG';
import img07 from '../../Kedi abla 2.JPG';
import img08 from '../../Kus besleyen abi 1.JPG';
import img09 from '../../ek 2.JPG';
import img10 from '../../ek 3.jpg';
import img11 from '../../kedili kız kompozisyona eklenebilir.jpg';
import img12 from '../../portfoly.jpg';

const projects = [
  {
    id: 1,
    title: 'Fuar Dergisi',
    category: 'Video Editing',
    description: 'Worked as a video editor under Fuar Dergisi and contributed to the editing of dozens of videos across a wide range of content.',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwcHJvZHVjdGlvbiUyMGNpbmVtYXRpY3xlbnwxfHx8fDE3NDQzODM2MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    videoUrls: [
      'https://www.youtube-nocookie.com/embed/ciTBoC-a4sI?rel=0&modestbranding=1&playsinline=1',
      'https://www.youtube-nocookie.com/embed/aQo70brYRBw?rel=0&modestbranding=1&playsinline=1',
      'https://www.youtube-nocookie.com/embed/IR2wmdk_zvk?rel=0&modestbranding=1&playsinline=1'
    ],
    tags: ['Premiere Pro', 'Color Grading', 'Storytelling']
  },
  {
    id: 2,
    title: 'Street Photography Series',
    category: 'Street Photography',
    description: 'A photography-focused series capturing everyday life, emotion, and atmosphere through carefully composed frames. Built around visual storytelling, light, and authentic moments.',
    image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb24lMjBzZXR8ZW58MXx8fHwxNzQ0MzgzNjAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    imageUrls: [
      img01,
      img02,
      img03,
      img04,
      img05,
      img06,
      img07,
      img08,
      img09,
      img10,
      img11,
      img12
    ],
    tags: ['After Effects', 'Motion Design', 'Social Media']
  },
  {
    id: 3,
    title: 'Music Video Production',
    category: 'Music Video',
    description: 'Visually driven music video with creative transitions and color work. Synchronized editing to enhance the emotional arc of the song.',
    image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHZpZGVvJTIwcHJvZHVjdGlvbnxlbnwxfHx8fDE3NDQzODM2MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    videoUrl: 'https://www.youtube-nocookie.com/embed/Qt1zViQM33M?rel=0&modestbranding=1&playsinline=1',
    tags: ['DaVinci Resolve', 'Sound Design', 'Visual Effects']
  },

  {
    id: 6,
    title: 'Short Film Project',
    category: 'Narrative',
    description: 'Character-driven short film with focus on narrative structure and emotional timing. Carefully crafted pacing to build tension and release.',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9ydCUyMGZpbG0lMjBwcm9kdWN0aW9ufGVufDF8fHx8MTc0NDM4MzYwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    videoUrl: 'https://drive.google.com/file/d/1LrwapB8-n_DY8RFVp6lBEb3o-8UOo3JP/preview',
    tags: ['Narrative Editing', 'Sound Mix', 'Post-Production']
  }
];

export function Projects() {
  return (
    <section id="projects" className="min-h-screen px-6 py-32 bg-black relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <Sparkles className="w-6 h-6 mx-auto mb-4 text-red-600" />
          <h2 className="text-4xl md:text-6xl text-white mb-6 tracking-tight">
            Featured <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A collection of visual stories crafted through precise editing,
            <br className="hidden md:block" />
            rhythm, and emotional timing
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

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
