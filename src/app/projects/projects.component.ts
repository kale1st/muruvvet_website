import { Component, OnInit } from '@angular/core';

interface Project {
  name: string;
  description: string;
  link: string;
  image: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      name: 'Project One',
      description: 'A brief description of Project One.',
      link: 'https://github.com/yourusername/project-one',
      image: 'assets/images/project-one.png',
    },
    {
      name: 'Project Two',
      description: 'A brief description of Project Two.',
      link: 'https://github.com/yourusername/project-two',
      image: 'assets/images/project-two.png',
    },
    {
      name: 'Project Three',
      description: 'A brief description of Project Three.',
      link: 'https://github.com/yourusername/project-three',
      image: 'assets/images/project-three.png',
    },
    // Add more projects as needed
  ];

  selectedProject: Project | null = null;

  constructor() {}

  ngOnInit(): void {}

  openModal(project: Project): void {
    this.selectedProject = project;
  }

  closeModal(event: Event): void {
    event.stopPropagation();
    this.selectedProject = null;
  }
}
