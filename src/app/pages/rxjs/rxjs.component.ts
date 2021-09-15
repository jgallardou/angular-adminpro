import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { map, retry, take, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy {

  public intervalsus: Subscription = new Subscription;

  constructor() {



    /*     this.retornarObservable().pipe(retry(2)
        ).subscribe(valor => {
          console.log("valor:", valor);
        }, err => {
          console.log("error:", err);
        }, () => {
          console.log("obs termindo");
        }); */


    this.intervalsus = this.retornaIntervalo().subscribe(response => console.log(response));

  }
  ngOnDestroy(): void {
    this.intervalsus.unsubscribe();
  }

  retornaIntervalo(): Observable<number> {
    return interval(500).pipe(
      map(value => value + 1),
      filter(value => (value % 2 === 0 ? true : false)),
      take(10)
    );

  }

  retornarObservable(): Observable<number> {

    let i = -1;

    const ob$ = new Observable<number>(observer => {

      const interval = setInterval(() => {
        i++;
        observer.next(i);

        if (i == 4) {
          clearInterval(interval);
          observer.complete();
        } if (i == 2) observer.error("un error :o");


      }, 1000);

    });

    return ob$;
  }

}
