import DevToIcon from '../assets/icons/dev-to.svg';
import GitHubIcon from '../assets/icons/git-hub.svg';
import LinkedinIcon from '../assets/icons/linkedin.png';
import MediumIcon from '../assets/icons/medium.webp';

export default {
  name: 'Katieli Dieter',
  avatar: 'kati.png',
  role: 'Software Engineer',
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
      name: 'Medium',
      src: 'https://medium.com/@katielidieter',
      icon: MediumIcon,
    },
    {
      name: 'GitHub',
      src: 'https://github.com/katidieter',
      icon: GitHubIcon,
    },
    {
      name: 'Dev.to',
      src: 'https://dev.to/katidieter',
      icon: DevToIcon,
    },
  ],
  intro: 'I am a software engineer based in sunny Brazil.',
  history: 'With for more than 8 years experiency in technology I had worked in different areas as technical support, quality assurance and now as developer and leader. I enjoy to solve complex problems with simple ideas. When I am not coding or leadering the team or writing something you will find me hanging out with friends, tasting a coffee, running or spending time at nature.',
  experiences: [
    {
      title: 'Wedy',
      subtitle: 'Software Engineering Lead',
      period: 'Jul 2019 -  Present',
      location: 'São Leopoldo, Rio Grande do Sul, Brazil',
    },
    {
      title: 'Wedy',
      subtitle: 'Software Engineer',
      period: 'Mar 2019 -  Jun 2019',
      location: 'São Leopoldo, Rio Grande do Sul, Brazil',
    },
  ],
  education: [
    {
      title: 'Universidade do Vale do Rio dos Sinos',
      subtitle: 'Bachelor of Information Systems',
      period: '2015 - 2021',
      location: 'São Leopoldo, Rio Grande do Sul, Brazil',
    },
    {
      title: 'Instituição Evangélica de Novo Hamburgo - IENH',
      subtitle: 'Information Technology',
      period: '2011 - 2013',
      location: 'Novo Hamburgo, Rio Grande do Sul, Brazil',
    },
  ],
  linkedinUrl: 'https://www.linkedin.com/in/katieli-dieter/',
};
