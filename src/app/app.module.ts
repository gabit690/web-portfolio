import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LocalStorageService } from './services/local-storage.service';
import { Route, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SocialMediaButtonsComponent } from './social-media-buttons/social-media-buttons.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './header/menu/menu.component';
import { DarkModeComponent } from './header/dark-mode/dark-mode.component';
import { KnowledgeComponent } from './pages/knowledge/knowledge.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { FooterComponent } from './footer/footer.component';
import { DeveloperComponent } from './pages/developer/developer.component';

const routes: Route[] = [
  {path:'', component:DeveloperComponent},
  {path:'knowledge', component:KnowledgeComponent},
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
    DeveloperComponent,
    KnowledgeComponent,
    ProjectsComponent,
    ContactComponent,
    ErrorPageComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
