import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [HomeComponent, LoginComponent],
  exports: [HomeComponent, LoginComponent],
  imports: [CommonModule, RouterModule, HomeModule],
})
export class PagesModule {}
