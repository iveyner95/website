
import { BackgroundBeams } from './components/ui/background-beams';
import { HeroParallax } from './components/ui/hero-parallax';

export default function Home() {
  // TODO: hide scrollbar
  return (
    <main>
      {/* TODO: rename products */}
      <HeroParallax products={previews} />
      <ContactSection />
    </main>
  );
}

interface Previews {
  title: string;
  link: string;
  thumbnail: string;
}

const previews: Previews[] = [
  {
    title: "React",
    link: "https://react.dev/",
    thumbnail: "/react.png"
  },
  {
    title: "Next.js",
    link: "https://nextjs.org/",
    thumbnail: "/nextjs.png"
  },
  {
    title: "Node.js",
    link: "https://nodejs.org/en",
    thumbnail: "/nodejs.png"
  },
  {
    title: "Jest",
    link: "https://jestjs.io/",
    thumbnail: "/jest.png"
  },
  {
    title: "Cypress",
    link: "https://www.cypress.io/",
    thumbnail: "/cypress.png"
  },
  {
    title: "Storybook",
    link: "https://storybook.js.org/",
    thumbnail: "/storybook.png"
  },
  {
    title: "Playwright",
    link: "https://playwright.dev/",
    thumbnail: "/playwright.png"
  },
  {
    title: "React Testing Library",
    link: "https://testing-library.com/docs/react-testing-library/intro/",
    thumbnail: "/testing-library.png"
  },
  {
    title: "Grafana",
    link: "https://grafana.com/",
    thumbnail: "/grafana.png"
  },
  {
    title: "Circle CI",
    link: "https://circleci.com/",
    thumbnail: "/circleci.png"
  },
  {
    title: "Code Fresh",
    link: "https://codefresh.io/",
    thumbnail: "/codefresh.png"
  },
  {
    title: "SonarQube",
    link: "https://www.sonarsource.com/",
    thumbnail: "/sonarqube.png"
  },
  {
    title: "Docker",
    link: "https://www.docker.com/",
    thumbnail: "/docker.png"
  },
  {
    title: "Kubernetes",
    link: "https://kubernetes.io/",
    thumbnail: "/k8s.png"
  },
  {
    title: "Unleash",
    link: "https://www.getunleash.io/",
    thumbnail: "/unleash.png"
  },
]

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
            Let's connect and explore how we can collaborate together!
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