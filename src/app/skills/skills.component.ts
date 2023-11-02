import { Component, ElementRef, Renderer2, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) { }

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
