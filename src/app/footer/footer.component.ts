import { Component } from '@angular/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
  ]
})
export class FooterComponent {

  private _currentYear: number;

  constructor() {
    this._currentYear = (new Date()).getFullYear();
   
  }

  get currentYear(): number {
    return this._currentYear;
  }
  
}
