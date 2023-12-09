import { Component, ElementRef, Renderer2, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  data: any;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.data = {
      "title": "Skills",
      "description": "I continuously enhance my coding skills gained during my university years, particularly in JavaScript and Java programming languages, by utilizing various libraries and CI/CD tools. I have proficiency in Docker and Jenkins, and I am experienced in both NoSQL and relational databases.",
      "skills": {
        "frontend": [
          "https://img.shields.io/badge/javascript-%23323330.svg?logo=javascript&logoColor=yellow",
          "https://img.shields.io/badge/typescript-%23007ACC.svg?logo=typescript&logoColor=white",
          "https://img.shields.io/badge/rxjs-%23B7178C.svg?logo=reactivex&logoColor=white",
          "https://img.shields.io/badge/angular-%23DD0031.svg?logo=angular&logoColor=white", "https://img.shields.io/badge/bootstrap-%23563D7C.svg?logo=bootstrap&logoColor=white",
          "https://img.shields.io/badge/html-%23E34F26.svg?style=for-the-badge&logo=html&logoColor=white",
          "https://img.shields.io/badge/css-%231572B6.svg?style=for-the-badge&logo=css&logoColor=white"],
        "backend": [
          "https://img.shields.io/badge/node.js-6DA55F?logo=node.js&logoColor=white",
          "https://img.shields.io/badge/express.js-%23404d59.svg?logo=express&logoColor=%2361DAFB",
          "https://img.shields.io/badge/-GraphQL-E10098?logo=graphql&logoColor=white",
          "https://img.shields.io/badge/java-%23ED8B00.svg?logo=java&logoColor=white",
          "https://img.shields.io/badge/spring-%236DB33F.svg?logo=spring&logoColor=white",
          "https://img.shields.io/badge/Maven-C71A36?style=for-the-badge&logo=Maven&logoColor=white"],
        "database": [
          "https://img.shields.io/badge/firebase-%23039BE5.svg?logo=firebase",
          "https://img.shields.io/badge/MongoDB-%234ea94b.svg?logo=mongodb&logoColor=white",
          "https://img.shields.io/badge/mysql-%2300f.svg?style=flat&logo=mysql&logoColor=white",
          "https://img.shields.io/badge/-Swagger-%23Clojure?logo=swagger&logoColor=white",
          "https://img.shields.io/badge/Hibernate-59666C?style=for-the-badge&logo=Hibernate&logoColor=white",
          "https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white",
          "https://img.shields.io/badge/Microsoft%20SQL-CC2927?style=for-the-badge&logo=microsoft%20sql&logoColor=white"],
        "devops": [
          "https://img.shields.io/badge/Unity-%2320232a.svg?logo=unity&logoColor=white",
          "https://img.shields.io/badge/docker-%230db7ed.svg?logo=docker&logoColor=white",
          "https://img.shields.io/badge/jira-%230A0FFF.svg?logo=jira&logoColor=white",
          "https://img.shields.io/badge/jenkins-%232C5263.svg?style=for-the-badge&logo=jenkins&logoColor=white",
          "https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white",
          "https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white", "https://img.shields.io/badge/bitbucket-%230047B3.svg?style=for-the-badge&logo=bitbucket&logoColor=white",
          "https://img.shields.io/badge/confluence-%23172BF4.svg?style=for-the-badge&logo=confluence&logoColor=white",
        ]
      }

    }
  }

  ngOnInit(): void {
    // Initial call to set progress bar widths on component load
    this.checkSkillsSection();

    // Listen for scroll events
    this.checkSkillsSectionOnScroll();
  }

  private checkSkillsSection() {
    const progressBars = this.el.nativeElement.querySelectorAll('.progress .progress-bar');
    progressBars.forEach((el: any) => {
      el.style.width = el.getAttribute('aria-valuenow') + '%';
    });
  }

  private checkSkillsSectionOnScroll() {
    window.addEventListener('scroll', () => {
      this.checkSkillsSection();
    });
  }
}

