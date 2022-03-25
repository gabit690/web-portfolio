import { Component, OnInit } from '@angular/core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import logos from '../../../assets/logos.json';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: []
})
export class KnowledgeComponent implements OnInit {

  private _angleDownIcon = faAngleDown;
  private _languages: any[] = [];
  private _frameworks: object[] = [];
  private _libraries: object[] = [];
  private _tools: object[] = [];
  private _activeCurrentButton = '';

  constructor() {
    this._languages = logos.languages;
    this._frameworks = logos.frameworks;
    this._libraries = logos.libraries;
    this._tools = logos.devtools;
  }

  ngOnInit(): void {
  }

  get angleDownIcon(): any {
    return this._angleDownIcon;
  }

  get languages(): any[] {
    return this._languages;
  }

  get frameworks(): any[] {
    return this._frameworks;
  }

  get libraries(): any[] {
    return this._libraries;
  }

  get tools(): any[] {
    return this._tools;
  }

  toogleContent(buttonId: string): void {
    const sectionContent = document.querySelector(`#${buttonId} + div`);
    const closeOtherContent = (this._activeCurrentButton === buttonId);
    if (this._activeCurrentButton !== '') {
      const previousButton = document.querySelector(`#${this._activeCurrentButton} + div`);
      previousButton?.classList.replace('grid', 'hidden');
    }
    sectionContent?.classList.replace(closeOtherContent ? 'grid' : 'hidden', closeOtherContent ? 'hidden' : 'grid');
    this._activeCurrentButton = closeOtherContent ? '' : buttonId;
  }
}
