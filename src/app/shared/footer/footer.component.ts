import { Component } from '@angular/core';
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(private readonly viewportScroller: ViewportScroller) {
  }

  navigateToElement(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }
}
