import { Component } from '@angular/core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-social-media-buttons',
  templateUrl: './social-media-buttons.component.html',
  styleUrls: ['./social-media-buttons.component.css']
})
export class SocialMediaButtonsComponent {

  private _githubIcon: any = faGithub;
  private _linkedinIcon: any = faLinkedin;


  constructor() {  }

  get github(): any {
    return this._githubIcon;
  }

  get linkedin(): any {
    return this._linkedinIcon;
  }
}
