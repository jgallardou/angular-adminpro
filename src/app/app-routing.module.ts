import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PagesComponent } from './pages/pages.component';
import { ProgressComponent } from './pages/progress/progress.component';

const ROUTES: Routes =
  [
    {
      path: '', component: PagesComponent,
      children: [
        { path: 'dashboard', component: DashboardComponent },
        { path: 'progress', component: ProgressComponent },
        { path: 'grafica1', component: Grafica1Component },
        { path: '', redirectTo: '/dashboard', pathMatch: 'full' }

      ]
    },

    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', component: NotFoundComponent }
  ];


@NgModule({
  imports: [RouterModule.forRoot(ROUTES, { useHash: false })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
