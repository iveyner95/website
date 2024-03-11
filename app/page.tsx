
import { previews } from './__fixtures__/previews';
import { ContactSection } from './components/contact-section';
import { HeroParallax } from './components/hero-parallax';

export default function Home() {
  // TODO: hide scrollbar
  return (
    <main>
      <HeroParallax previews={previews} />
      <ContactSection />
    </main>
  );
}