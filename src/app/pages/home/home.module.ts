import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { Pagina1Component } from './pagina1/pagina1.component';
import { Pagina2Component } from './pagina2/pagina2.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [Pagina1Component, Pagina2Component],
  exports: [Pagina1Component, Pagina2Component],
  imports: [CommonModule, HomeRoutingModule, RouterModule],
})
export class HomeModule {}
