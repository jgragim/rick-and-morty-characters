import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout.component';
import { HeaderModule } from './header/header.module';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [MainLayoutComponent],
  exports: [MainLayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    HeaderModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule
  ]
})
export class MainLayoutModule { }
