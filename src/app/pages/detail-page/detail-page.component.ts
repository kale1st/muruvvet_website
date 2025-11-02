import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { IPost } from 'src/app/models/IPost';

@Component({
  selector: 'app-detail-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail-page.component.html',
  styleUrl: './detail-page.component.css',
})
export class DetailPageComponent {
  post: IPost | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private appService: AppService
  ) {}

  ngOnInit(): void {
    const postId = Number(this.route.snapshot.paramMap.get('id'));
    this.post = this.appService.posts.find((p) => p.id === postId) || null;

    if (!this.post) {
      this.router.navigate(['/']);
    }
  }

  trackByFn(index: number, item: any): number {
    return index;
  }
}
