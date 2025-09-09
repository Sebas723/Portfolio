import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { HomeComponent } from "../../views/home/home.component";
import { ExperienceComponent } from "../../views/experience/experience.component";
import { ProjectsComponent } from "../../views/projects/projects.component";
import { AboutMeComponent } from "../../views/about-me/about-me.component";

@Component({
  selector: 'app-main-layout',
  imports: [NavbarComponent, HomeComponent, ExperienceComponent, ProjectsComponent, AboutMeComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {

}
