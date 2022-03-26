import { Component, OnInit } from '@angular/core';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {

  private _angleLeftIcon = faAngleLeft;
  private _angleRightIcon = faAngleRight;
  private _showPresentation = true;

  constructor(private storage: LocalStorageService) { }

  ngOnInit(): void {
    this._showPresentation = !this.storage.presentationViewed();
    if (!this._showPresentation) {
      this.removePresentation();
    }
  }

  get angleLeft(): any {
    return this._angleLeftIcon;
  }

  get angleRight(): any {
    return this._angleRightIcon;
  }
  
  private removePresentation(): void {
    const presentation = document.querySelector(`app-root app-presentation`)!;
    document.querySelector('app-root > div')!.removeChild(presentation);
  }

  quitPresentation(): void {
    this.storage.savePresentationViewed();
    const presentation = document.getElementById('presentation')!;
    presentation.classList.add('-translate-x-full');
    setTimeout(() => this.removePresentation(), 30);
  }

}
