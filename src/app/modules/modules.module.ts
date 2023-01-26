import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';

import { ReactiveComponent } from './reactive/reactive.component';
import { TemplateComponent } from './template/template.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ReactiveComponent,
    TemplateComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ModulesRoutingModule,
    ReactiveFormsModule
  ]
})
export class ModulesModule { }
