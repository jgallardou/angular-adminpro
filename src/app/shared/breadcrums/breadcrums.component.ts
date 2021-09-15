import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrums',
  templateUrl: './breadcrums.component.html'
})
export class BreadcrumsComponent implements OnDestroy {



  public titulo: string = "";
  public tituloSub$: Subscription = new Subscription();

  constructor(private router: Router) {
    this.tituloSub$ = this.configTitulo();
  }
  ngOnDestroy(): void {
    this.tituloSub$.unsubscribe();
  }

  configTitulo(): Subscription {
    return this.router.events.pipe
      (
        filter((event: any) => event instanceof ActivationEnd),
        filter((event: ActivationEnd) => event.snapshot.children.length == 0),
        map((event: ActivationEnd) => event.snapshot.data)
      ).subscribe(({ titulo }) => {
        this.titulo = titulo
        document.title = this.titulo
      }
      );

  }



}
