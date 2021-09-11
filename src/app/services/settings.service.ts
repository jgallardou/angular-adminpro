import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private elementLink = document.querySelector("#theme");

  constructor() {
    console.log("Setting servioce init");
    let themeUrl = localStorage.getItem('theme') || './assets/css/colors/default-dark.css';
    this.elementLink?.setAttribute('href', themeUrl);
  }

  changeTheme(theme: string) {
    let urlTheme = `./assets/css/colors/${theme}.css`;
    this.elementLink?.setAttribute('href', urlTheme);
    localStorage.setItem('theme', urlTheme);
    this.checkCurrentTheme();
  }

  checkCurrentTheme() {

    const links: any = document.getElementsByClassName("selector");
    for (let elemento of links) {

      elemento.classList.remove('working');
      const btnTheme = elemento.getAttribute('data-theme');
      let urlTheme = `./assets/css/colors/${btnTheme}.css`;
      let currentheme = this.elementLink?.getAttribute('href');

      if (urlTheme === currentheme) {
        elemento.classList.add('working');
      }
    }

  }

}
