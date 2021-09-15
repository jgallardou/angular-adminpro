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
        { titulo: 'Promesas', url: 'promesas' },
        { titulo: 'graficas', url: 'grafica1' },
        { titulo: 'rxjs', url: 'rxjs' }
      ]
    }
  ];
  constructor() { }
}
