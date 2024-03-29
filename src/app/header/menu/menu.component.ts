import { Component, OnInit } from '@angular/core';
import { faBars, faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  private _buttonMenuActived = false;
  private _currentButtonSectionActive: string = '';
  private _checkIcon = faCheck;
  private _menuIcon = faBars;

  constructor() { }

  ngOnInit(): void {
    const currentRuote = window.location.pathname;
    const checkIcons = document.querySelectorAll('#menuSections fa-icon');
    switch(currentRuote) {
      case '/':
        checkIcons[0].classList.replace('invisible', 'visible');
        this._currentButtonSectionActive = 'introductionButton';
        break;
      case '/knowledge':
        checkIcons[1].classList.replace('invisible', 'visible');
        this._currentButtonSectionActive = 'knowledgeButton';
        break;
      case '/projects':
        checkIcons[2].classList.replace('invisible', 'visible');
        this._currentButtonSectionActive = 'projectsButton';
        break;
      case '/contact':
        checkIcons[3].classList.replace('invisible', 'visible');
        this._currentButtonSectionActive = 'contactButton';
        break;
      default:
        this._currentButtonSectionActive = '';
        break;
    }
    if (this._currentButtonSectionActive !== '') {
      document.getElementById(this._currentButtonSectionActive)?.classList.add('!border-b-teal-400', 'md:!border-b-8');
    }
  }

  get checkIcon(): any {
    return this._checkIcon;
  }

  get menuIcon(): any {
    return this._menuIcon;
  }

  showMenuContent(): void {
    if (!this._buttonMenuActived) {
      const menuSections = document.getElementById('menuSections');
      this._menuIcon = faXmark;
      menuSections?.classList.remove('h-0');
      menuSections?.classList.add('h-[178px]');
      this._buttonMenuActived = true;
    }
  }

  hideMenuContent(): void {
    if (this._buttonMenuActived) {
      const menuSections = document.getElementById('menuSections');
      this._menuIcon = faBars;
      menuSections?.classList.replace('h-[178px]', 'h-0');
      this._buttonMenuActived = false;
    }
  }

  toggleMenuContent(): void {
    if (this._buttonMenuActived) {
      this.hideMenuContent();
    } else {
      this.showMenuContent();
    }
  }

  selectSection(event: any): void {
    const buttonPressed = event.target;
    if (buttonPressed.id !== this._currentButtonSectionActive) {
      if (this._currentButtonSectionActive) {
        const previousButtonActive = document.getElementById(this._currentButtonSectionActive);
        previousButtonActive?.classList.remove('!border-b-teal-400', 'md:!border-b-8');
        const currentMarkActive = document.querySelector(`#${this._currentButtonSectionActive} fa-icon`);
        currentMarkActive?.classList.replace('visible', 'invisible');
      }
      buttonPressed?.classList.add('!border-b-teal-400', 'md:!border-b-8');
      const nextMarkActive = document.querySelector(`#${buttonPressed.id} fa-icon`);
      nextMarkActive?.classList.replace('invisible', 'visible');
      this._currentButtonSectionActive = buttonPressed.id;
    }
    this.hideMenuContent();
  }
}
