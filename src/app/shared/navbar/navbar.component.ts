import {Component} from '@angular/core';
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(private readonly viewportScroller: ViewportScroller) {
  }

  navigateToElement(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }
}
