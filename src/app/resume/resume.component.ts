import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent {
  @ViewChild('resumeIFrame', { static: false }) resumeIFrame!: ElementRef;

  data: any = {
    title: 'Resume',
    description:
      'As a dynamic and adaptable coder, I thrive on learning and quickly adapting to new challenges. I excel in maintaining precision and focus in coding tasks, finding joy in collaborating with teams. Passionate about the interplay between humans and machines, I bring enthusiasm and teamwork to every project.',
  };

  downloadResume() {
    const iframeElement = this.resumeIFrame.nativeElement;
    const iframeSrc = iframeElement.src;

    // Create a temporary link element
    const a = document.createElement('a');
    a.href = iframeSrc;
    a.download = 'azizkale_resume.pdf'; // You can customize the downloaded file name here
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}
