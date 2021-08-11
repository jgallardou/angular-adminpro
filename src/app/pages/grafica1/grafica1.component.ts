import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: []
})
export class Grafica1Component implements OnInit {


  public labels1: string[] = ['Queso', 'Bebida', 'Pan'];
  public data: any = [700, 200, 100];

  constructor() { }

  ngOnInit(): void {
  }

}
