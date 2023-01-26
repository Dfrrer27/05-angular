import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'form',
    loadChildren: () => import('./modules/modules.module').then( m => m.ModulesModule)
  },
  
  {
    path: '**',
    redirectTo:'form'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
