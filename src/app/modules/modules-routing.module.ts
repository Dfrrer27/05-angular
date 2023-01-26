import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { TemplateComponent } from './template/template.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'reactive', component: ReactiveComponent },
      { path: 'template', component: TemplateComponent },
      { path: 'home', component: HomeComponent },
      { path: '**', redirectTo: 'home'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class ModulesRoutingModule { }
