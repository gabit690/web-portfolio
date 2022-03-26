import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  initColorTheme(): void {
    const theme = localStorage.getItem('theme');
    const isDark = theme === 'dark';
    if (theme) {
      document.documentElement.classList.add(isDark ? 'dark' : 'bright');
    } else {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    }
  }

  existsTheme(): boolean {
    return localStorage.getItem('theme') !== null;
  }

  isDarkTheme(): boolean {
    return localStorage.getItem('theme') === 'dark';
  }

  toggleTheme(): void {
    const isDark = localStorage.getItem('theme') === 'dark';
    document.documentElement.classList.remove(isDark ? 'dark' : 'bright');
    document.documentElement.classList.add(isDark ? 'bright' : 'dark');
    localStorage.setItem('theme', isDark ? 'bright' : 'dark');
  }

  presentationViewed(): boolean {
    return localStorage.getItem('presentation') === 'viewed';
  }

  savePresentationViewed(): void {
    localStorage.setItem('presentation', 'viewed');
  }

}
