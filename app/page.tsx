
import { BackgroundBeams } from './components/ui/background-beams';
import { HeroParallax } from './components/ui/hero-parallax';

export default function Home() {
  return (
    <main>
      <HeroParallax products={products} />
      <ContactSection />
    </main>
  );
}

// TODO: update this with different items of libraries, frameworks, etc.
export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  },
  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },
  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },
  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];

function ContactSection() {
  return (
    <div className="h-[100vh] w-full rounded-md black relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <div className='my-8'>
          <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text dark:text-white text-center font-sans font-bold">
            Contact Me
          </h1>
        </div>
        <div className='my-8'>
          <p className="dark:text-neutral-200 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
            Let's connect and explore how we can collaborate on exciting projects together!
          </p>
        </div>
        <div className='my-8'>
          {/* TODO use icons instead of these two */}
          <p className="dark:text-neutral-200 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
            <a href='https://www.linkedin.com/in/igorveyner/' target="_blank">LinkedIn</a> | <a href="mailto: igorveyner95@gmail.com">📧</a>
          </p>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  )
}