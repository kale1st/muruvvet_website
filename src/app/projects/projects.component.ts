import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Project } from 'src/models/Project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      name: `Pilot Training Management Application for Aero Bildung LLC`,
      description: `
        Here’s a revised version of your project description that emphasizes your personal contributions, including your coding work with Java, Hibernate, Spring Boot, and Angular:

        As the Team Lead at <a href="https://emm-it.de" target="_blank">EMM-IT</a>, I am leading the development of a software application for  <a href="https://aero-bildung.de/de/ueber-aero-bildung/" target="_blank">Aero Bildung</a>, designed to manage the training courses for pilot candidates. This application enables the efficient organization and tracking of courses undertaken by pilots, including the management of certification details. My role extends beyond leadership; I am deeply involved in the hands-on development of the application.

        I personally contribute to both the backend and frontend aspects of the project, coding in Java with Hibernate and Spring Boot to build a robust and scalable backend. On the frontend, I utilize Angular to create a dynamic and responsive user interface. Additionally, I work with MSSQL for database management, ensuring accurate and reliable record-keeping of certifications and other essential data.

        While I oversee the development process, coordinate the team’s efforts, and ensure successful delivery, I also take pride in being directly involved in the technical implementation. My dual role as both a leader and a developer allows me to drive the project forward effectively, ensuring that the platform not only meets the client’s needs but also reflects high standards of software engineering.`,
      link: 'https://www.youtube.com/watch?v=sZFY0chh230',
      image: 'assets/img/projects/aero.png',
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

  constructor(private modalService: NgbModal) {}

  public open(modal: any, project: Project): void {
    this.modalService.open(modal);
    this.selectedProject = project;
  }

  ngOnInit(): void {}
}
