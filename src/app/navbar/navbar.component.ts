import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-navbar',
    imports: [
        RouterLink,
        RouterLinkActive
    ],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Output() componentSelected = new EventEmitter<string>();

  selectComponent(component: string) {
    this.componentSelected.emit(component);
  }
}
