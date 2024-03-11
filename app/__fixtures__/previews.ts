import _ from 'lodash'
import { Preview } from '../types'

const rawPreviews: Preview[] = [
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

export const previews = _.shuffle(rawPreviews)