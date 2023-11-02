import { Component } from '@angular/core';
import { DomService } from '../services/dom.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private domservice: DomService) { }

  ngOnInit(): void {

  }


}
