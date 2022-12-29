import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutModule } from './main-layout/main-layout.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MainLayoutModule
  ],
  exports: [
    MainLayoutModule
  ]
})
export class SharedModule { }
