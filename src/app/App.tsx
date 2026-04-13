import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <ScrollProgress />
      <Hero />
      <Projects />
      <Footer />
    </div>
  );
}
