import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth.routing';
import { PagesRoutingModule } from './pages/pages.routing';

/* Components */
import { NotFoundComponent } from './not-found/not-found.component';



const ROUTES: Routes =
  [
    //path: '/dashboard PagesRoutingModule'
    //path: '/login AuthRoutingModule'
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent }
  ];


@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES, { useHash: false }),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }

