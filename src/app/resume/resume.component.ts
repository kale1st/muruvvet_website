import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  data: any = {
    title: 'Resume',
    description: 'As a dynamic and adaptable coder, I thrive on learning and quickly adapting to new challenges. I excel in maintaining precision and focus in coding tasks, finding joy in collaborating with teams. Passionate about the interplay between humans and machines, I bring enthusiasm and teamwork to every project.'
  }
}
