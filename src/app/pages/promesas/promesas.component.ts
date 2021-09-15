import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getUsuarios().then(user => console.log(user)
    )
    /*     const promesa = new Promise((resolve, reject) => {
          if (false)
            resolve("hola mundo");
          else {
            reject("Error de noseque");
          }
        });


        promesa.then((test) => {
          console.log(test);

        }).catch(err => {
          console.log(err);

        })
        console.log("Fin del init"); */

  }

  getUsuarios() {

    const promesa: Promise<Object[]> = new Promise((resolve) => {
      fetch("https://reqres.in/api/users").then(resolve => resolve.json()).then(final => resolve(final.data));
    });

    return promesa;
  };

}



