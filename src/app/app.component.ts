import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet,
        FooterComponent,
        NavbarComponent,
        NgbAccordionModule
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {

}
