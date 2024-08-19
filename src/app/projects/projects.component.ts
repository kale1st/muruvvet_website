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
      githubLink: '',
      date: 'Mar 2024 - Present',
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
        devOps: ['Kubernetes (AKS)', 'Github Actions'],
        otherSkills: ['Team Leadership', 'Code Review'],
      },
    },
    {
      name: 'EMM-IT Website Enhancements and Bilingual Support',
      description: `I worked on enhancing the <a href="https://emm-it.de/career" target="_blank">EMM-IT</a>'s website by developing a new "Career" page, which provides information on job opportunities and encourages potential candidates to connect with the company. Using Java Spring Boot and RESTful APIs, I also developed the backend infrastructure from scratch for the site. Additionally, I implemented bilingual support, making the website fully accessible to both English and German-speaking users. These enhancements have significantly improved user experience and accessibility, helping EMM-IT reach a more diverse audience.`,
      link: 'https://emm-it.de',
      image: 'assets/img/projects/emmit.png',
      date: 'Nov 2023 - Mar 2024',
      githubLink: '',
      technologies: {
        frontend: ['Angular'],
        backend: ['Java', 'Spring Boot', 'Hibernate', 'REST API'],
        database: ['PostgreSQL'],
        devOps: ['Jenkins'],
        otherSkills: ['Bitbucket'],
      },
    },
    {
      name: 'Freelance Web Development Project',
      description: `I developed a custom website for a client as part of a freelance project while working within the <a href="https://github.com/cronycommunity"  target="_blank">cronycommunity</a> organization, using plain JavaScript. I designed and implemented all site functionalities from the ground up, ensuring a seamless user experience and a fully responsive design. I completed the project on time, meeting all the client's specifications and successfully enhancing their online presence and functionality.`,

      link: 'http://tonysdienstleistungen.de/#!',
      image: 'assets/img/projects/tonny.png',
      date: 'Jul 2022 - Sep 2022',
      githubLink:
        'https://github.com/cronycommunity/hausmeister-web-site-javascript',
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
      description: `I created a custom website for a car dealership client as a freelance project while working within the <a href="https://github.com/cronycommunity"  target="_blank">cronycommunity</a> organization. I implemented web scraping techniques to extract vehicle information from Autoscout24 and integrated it seamlessly into the client's site using EJS (Embedded JavaScript Templates). I also designed a user-friendly interface and ensured real-time data synchronization, which significantly enhanced the dealership’s online presence and improved its overall functionality.

      I chose to use a JSON file on the server for data storage, given the project’s minimal database needs. I also set up a cron job to automatically perform the data extraction at regular intervals, ensuring that the vehicle information remains up-to-date without requiring manual intervention.`,
      link: 'https://d-und-k-automobile.de/#page-top',
      image: 'assets/img/projects/dundk.png',
      date: 'Jun 2022 - Aug 2022',
      githubLink: '',
      technologies: {
        frontend: ['HTML', 'CSS'],
        backend: [
          'Embedded JavaScript(EJS)',
          'NodeJS',
          'REST API',
          'axios',
          'cherio',
        ],
        database: [],
        devOps: [],
        otherSkills: ['Web Scraping', 'cronjob', 'JSON'],
      },
    },
    {
      name: '100Number - 2D Unity Game Project',
      description: `This is a Unity-based game where numbers from 1 to 100 need to be placed into boxes according to a specific set of rules. I developed the backend using C#, ensuring a smooth and responsive gameplay experience. The game is available on multiple platforms, including Android, iOS, and others, making it accessible to a wide range of players.`,
      link: 'https://play.google.com/store/apps/details?id=com.kale.num100&gl=DE',
      image: 'assets/img/projects/100number.png',
      date: 'Nov 2021 - Dec 2021',
      githubLink: 'https://github.com/azizkale/No_100_2D_Unity_Project',
      technologies: {
        frontend: ['Unity'],
        backend: ['C#'],
        database: [],
        devOps: [],
        otherSkills: [],
      },
    },
    {
      name: 'Product - Price - Invoice Manager',
      description: `This project is a comprehensive solution consisting of three separate components: a <a href="https://github.com/azizkale/CSharp-Form-Project-Selling-Price-Calculator"  target="_blank">Microsoft desktop application</a>  , a <a href="https://github.com/azizkale/Price-Calculator-Unity-Project"  target="_blank">mobile application</a> developed with Unity, and a <a href="https://github.com/azizkale/Price-Calculator-websocket-In-Nodejs"  target="_blank">Node.js WebSocket service</a> . It was developed specifically for a client in the commerce industry. The system allows the client to manage product pricing, invoice calculations, stock records, and product entries. Thanks to the WebSocket service, the desktop and mobile applications can operate simultaneously in real-time. Based on the client's request, Excel was used as the database for this project.`,
      link: '',
      image: 'assets/img/projects/yenimar.png',
      date: 'Dec 2021 - Jul 2022',
      githubLink:
        'https://github.com/azizkale/CSharp-Form-Project-Selling-Price-Calculator',
      technologies: {
        frontend: ['Unity', 'C# Forms'],
        backend: ['C#', 'NodeJS', 'REST API'],
        database: ['Excel'],
        devOps: [],
        otherSkills: ['Websocket Service'],
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
