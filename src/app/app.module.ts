import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LocalStorageService } from './services/local-storage.service';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SocialMediaButtonsComponent } from './social-media-buttons/social-media-buttons.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './header/menu/menu.component';
import { DarkModeComponent } from './header/dark-mode/dark-mode.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { FooterComponent } from './footer/footer.component';

const routes: Route[] = [
  {path:'', component:HomeComponent},
  {path:'aboutme', component:AboutMeComponent},
  {path:'skills', component:SkillsComponent},
  {path:'projects', component:ProjectsComponent},
  {path:'contact', component:ContactComponent},
  {path:'**', component:ErrorPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SocialMediaButtonsComponent,
    HeaderComponent,
    MenuComponent,
    DarkModeComponent,
    HomeComponent,
    AboutMeComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    ErrorPageComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    RouterModule.forRoot(routes)
  ],
  providers: [LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
