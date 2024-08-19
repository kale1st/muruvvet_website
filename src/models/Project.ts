import { TechnologiesUsed } from './TecnologiesUsed';

export interface Project {
  name: string;
  description: string;
  link: string;
  image: string;
  githubLink: string;
  date: string;
  technologies: TechnologiesUsed;
}
