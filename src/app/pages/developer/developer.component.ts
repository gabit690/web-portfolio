import { Component, OnInit } from '@angular/core';
import { faBriefcase, faCircleUser, faLocationDot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: []
})
export class DeveloperComponent implements OnInit {

  private _userIcon = faCircleUser;
  private _briefcaseIcon = faBriefcase;
  private _locationIcon = faLocationDot;

  constructor() { }

  get user(): any {
    return this._userIcon;
  }

  get briefcase(): any {
    return this._briefcaseIcon;
  }

  get location(): any {
    return this._locationIcon;
  }

  ngOnInit(): void {
  }

}
