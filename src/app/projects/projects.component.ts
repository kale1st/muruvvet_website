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
        As the Team Lead at <a href="https://emm-it.de/" target="_blank">EMM-IT</a>, I am leading the development of a software application for  <a href="https://aero-bildung.de/de/ueber-aero-bildung/" target="_blank">Aero Bildung</a>, designed to manage the training courses for pilot candidates. This application enables the efficient organization and tracking of courses undertaken by pilots, including the management of certification details. My role extends beyond leadership; I am deeply involved in the hands-on development of the application.

        I personally contribute to both the backend and frontend aspects of the project, coding in Java with Hibernate and Spring Boot to build a robust and scalable backend. On the frontend, I utilize Angular to create a dynamic and responsive user interface. Additionally, I work with MSSQL for database management, ensuring accurate and reliable record-keeping of certifications and other essential data.

        While I oversee the development process, coordinate the team’s efforts, and ensure successful delivery, I also take pride in being directly involved in the technical implementation. My dual role as both a leader and a developer allows me to drive the project forward effectively, ensuring that the platform not only meets the client’s needs but also reflects high standards of software engineering.`,
      link: 'https://www.youtube.com/watch?v=sZFY0chh230',
      image: 'assets/img/projects/aero.png',
      technologies: {
        frontend: ['Angular'],
        backend: [
          'Java',
          'Spring Boot',
          'Hibernate',
          'REST APIs',
          'Spring Security',
        ],
        database: ['MSSQL'],
        devOps: ['Kubernetes (AKS)'],
        otherSkills: ['Team Leadership', 'Code Review'],
      },
    },
    {
      name: 'EMM-IT Website Enhancements and Bilingual Support',
      description: `I worked on enhancing the <a href="https://emm-it.de/career" target="_blank">EMM-IT</a> website by developing a new "Career" page, which provides information on job opportunities and encourages potential candidates to connect with the company. Using Java Spring Boot and RESTful APIs, I also developed the backend infrastructure from scratch for the site. Additionally, I implemented bilingual support, making the website fully accessible to both English and German-speaking users. These enhancements have significantly improved user experience and accessibility, helping EMM-IT reach a more diverse audience.`,
      link: 'https://emm-it.de',
      image: 'assets/img/projects/emmit.png',
      technologies: {
        frontend: ['Angular'],
        backend: ['Java', 'Spring Boot', 'Hibernate', 'REST APIs'],
        database: ['PostgreSQL'],
        devOps: ['Jenkins'],
        otherSkills: [],
      },
    },
    {
      name: 'Freelance Web Development Project',
      description: `I developed a custom website for a client as part of a freelance project, using plain JavaScript. I designed and implemented all site functionalities from the ground up, ensuring a seamless user experience and a fully responsive design. I completed the project on time, meeting all the client's specifications and successfully enhancing their online presence and functionality.`,
      link: 'http://tonysdienstleistungen.de/#!',
      image: 'assets/img/projects/tonny.png',
      technologies: {
        frontend: ['HTML', 'CSS', 'Plain JavaScript'],
        backend: [],
        database: [],
        devOps: [],
        otherSkills: [],
      },
    },
    {
      name: 'Freelance Car Dealership Website',
      description: `I created a custom website for a car dealership client as a freelance project. I implemented web scraping techniques to extract vehicle information from Autoscout24 and integrated it seamlessly into the client's site using EJS (Embedded JavaScript Templates). I also designed a user-friendly interface and ensured real-time data synchronization, which significantly enhanced the dealership’s online presence and improved its overall functionality.

      I chose to use a JSON file on the server for data storage, given the project’s minimal database needs. I also set up a cron job to automatically perform the data extraction at regular intervals, ensuring that the vehicle information remains up-to-date without requiring manual intervention.`,
      link: '',
      image: 'assets/img/projects/dundk.png',
      technologies: {
        frontend: ['HTML', 'CSS'],
        backend: ['Embedded JavaScript(EJS)'],
        database: [],
        devOps: [],
        otherSkills: ['Web Scraping', 'cronjob', 'JSON'],
      },
    },
  ];

  selectedProject: Project | null = null;

  constructor(private modalService: NgbModal) {}

  public open(modal: any, project: Project): void {
    this.modalService.open(modal);
    this.selectedProject = project;
  }

  ngOnInit(): void {}
}
