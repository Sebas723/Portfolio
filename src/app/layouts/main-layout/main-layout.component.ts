import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { HomeComponent } from "../../views/home/home.component";
import { ExperienceComponent } from "../../views/experience/experience.component";

@Component({
  selector: 'app-main-layout',
  imports: [NavbarComponent, HomeComponent, ExperienceComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {

}
