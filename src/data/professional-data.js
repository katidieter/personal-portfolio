import DevToIcon from '../assets/icons/dev-to.svg';
import GitHubIcon from '../assets/icons/git-hub.svg';
import LinkedinIcon from '../assets/icons/linkedin.png';
import MediumIcon from '../assets/icons/medium.webp';
import TwitterIcon from '../assets/icons/twitter.png';

export default {
  name: 'Katieli Dieter',
  avatar: 'kati_2.png',
  role: 'Software & Machine Learning Engineer',
  subscribe: {
    description: 'Are you wanna know more about <b>machine learning</b>?',
    button: {
      callToAction: 'Sign up my newsletter and follow my work!',
      url: 'https://katieli.substack.com/p/coming-soon?r=68bd4&utm_campaign=post&utm_medium=web&utm_source=copy',
    },
  },
  skills: [
    { name: 'Front-end', kind: 'hard', level: 'intermediate' },
    { name: 'Back-end', kind: 'hard', level: 'intermediate' },
    { name: 'Teamwork', kind: 'soft', level: 'advanced' },
    { name: 'Leadership', kind: 'soft', level: 'junior' },
    { name: 'Machine learning', kind: 'hard', level: 'junior' },
    { name: 'Problem solving', kind: 'soft', level: 'intermediate' },
    { name: 'Responsability', kind: 'soft', level: 'advanced' },
    { name: 'Proactively', kind: 'soft', level: 'intermediate' },
    { name: 'Goal-driven', kind: 'soft', level: 'intermediate' },
    { name: 'Cloud', kind: 'hard', level: 'junior' },
    { name: 'Unit Testing', kind: 'hard', level: 'intermediate' },
    { name: 'Clean code', kind: 'hard', level: 'advanced' },
  ],
  socialMedias: [
    {
      name: 'Linkedin',
      src: 'https://www.linkedin.com/in/katieli-dieter',
      icon: LinkedinIcon,
    },
    {
      name: 'Twitter',
      src: 'https://twitter.com/katidieter',
      icon: TwitterIcon,
    },
    {
      name: 'GitHub',
      src: 'https://github.com/katidieter',
      icon: GitHubIcon,
    },
    {
      name: 'Medium',
      src: 'https://medium.com/@katielidieter',
      icon: MediumIcon,
    },
    {
      name: 'Dev.to',
      src: 'https://dev.to/katidieter',
      icon: DevToIcon,
    },
  ],
  intro: 'I am a software engineer based in sunny Brazil.',
  history: 'With for more than 8 years experiency in technology I had worked in different areas as technical support, quality assurance and now as developer and leader. I enjoy to solve complex problems with simple ideas. When I am not coding or leadering the team or writing something you will find me hanging out with friends, tasting a coffee, running or spending time at nature.',
  linkedinUrl: 'https://www.linkedin.com/in/katieli-dieter/',
  projects: [
    {
      title: 'NASA Space Apps Challenge',
      image: 'https://www.nasa.gov/sites/default/files/thumbnails/image/solve_international_space_apps_challenge.png',
      repositoryLink: 'https://github.com/katidieter/nasa-space-challenge',
      tags: [
        { name: 'javascript' }, { name: 'vuejs' }, { name: 'nodejs' },
      ],
    },
    {
      title: 'GraphQL API',
      image: 'https://miro.medium.com/max/1200/1*RiEzZRJuIuurCJnAphLxHA.png',
      repositoryLink: 'https://github.com/katidieter/graphql-api',
      tags: [
        { name: 'nodejs' }, { name: 'graphql' }, { name: 'mongodb' },
      ],
    },
    {
      title: 'UI Testing project with TestCafe',
      image: 'https://raw.githubusercontent.com/DevExpress/testcafe-gh-page-assets/master/src/images/testcafe-ogp-icon.png',
      repositoryLink: 'https://github.com/katidieter/teste-cafe-testing-project',
      tags: [
        { name: 'javascript' }, { name: 'testcafe' }, { name: 'testing' }, { name: 'nodejs' }, { name: 'page-objects' },
      ],
    },
    {
      title: 'UI Testing project with TestNG',
      image: 'https://miro.medium.com/max/3200/1*Iu_5N-oT73aFPyvXrbZlag.png',
      repositoryLink: 'https://github.com/katidieter/phptravels-automation-testing/tree/master/prova-tecnica',
      tags: [
        { name: 'testng' }, { name: 'java' }, { name: 'testing' },
      ],
    },
  ],
};
