import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Output() componentSelected = new EventEmitter<string>();

  selectComponent(component: string) {
    this.componentSelected.emit(component);
  }
}
