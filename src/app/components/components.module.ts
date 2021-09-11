import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncrementComponent } from './increment/increment.component';
import { FormsModule } from '@angular/forms';
import { DonnutComponent } from './donnut/donnut.component';
import { ChartsModule } from 'ng2-charts';
@NgModule({
  declarations: [IncrementComponent, DonnutComponent],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule
  ],
  exports: [IncrementComponent, DonnutComponent]
})
export class ComponentsModule { }
