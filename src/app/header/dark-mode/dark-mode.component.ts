import { Component, OnInit } from '@angular/core';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-dark-mode',
  templateUrl: './dark-mode.component.html',
  styleUrls: []
})
export class DarkModeComponent implements OnInit {

  private _sunIcon = faSun;
  private _moonIcon = faMoon;

  constructor(private storage: LocalStorageService) { }

  ngOnInit(): void {
    this.storage.initColorTheme();
    const switchButton = document.getElementById('switch')!;
    const iconActive = document.getElementById(this.storage.isDarkTheme() ? 'moonIcon' : 'sunIcon');
    const iconUnactive = document.getElementById(this.storage.isDarkTheme() ? 'sunIcon' : 'moonIcon');
    switchButton.classList.add(this.storage.isDarkTheme() ? 'float-right' : 'float-left');
    iconActive?.classList.add(this.storage.isDarkTheme() ? 'text-slate-900' : 'text-orange-400');
    iconUnactive?.classList.add('text-slate-600');
  }

  get sunIcon(): any {
    return this._sunIcon;
  }

  get moonIcon(): any {
    return this._moonIcon;
  }

  toggleColor(): void {
    if (this.storage.existsTheme()) {
      const switchButton = document.getElementById('switch')!;
      const darkModeActive = switchButton.classList.contains('float-right');
      const currentIconActive = document.getElementById(darkModeActive ? 'moonIcon' : 'sunIcon');
      const nextIconActive = document.getElementById(darkModeActive ? 'sunIcon' : 'moonIcon');
      switchButton.classList.remove(darkModeActive ? 'float-right' : 'float-left');
      switchButton.classList.add(darkModeActive ? 'float-left' : 'float-right');
      currentIconActive?.classList.remove(darkModeActive ? 'text-slate-900' : 'text-orange-400');
      currentIconActive?.classList.add('text-slate-600');
      nextIconActive?.classList.add(darkModeActive ? 'text-orange-400' : 'text-slate-900');
      nextIconActive?.classList.remove('text-slate-600');
      this.storage.toggleTheme();
    } else {
      alert('There is a problem with this button. Reload the page could fix it.');
    }
  }
}
