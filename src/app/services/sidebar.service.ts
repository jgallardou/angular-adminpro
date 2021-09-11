import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      titulo: 'dashboard',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'main', url: '/' },
        { titulo: 'progressBar', url: 'progress' },
        { titulo: 'graficas', url: 'grafica1' }
      ]
    }
  ];
  constructor() { }
}
