import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { NgxStickySidebarModule } from 'ngx-sticky-sidebar';
import { FormsModule } from '@angular/forms';
import { OneComponent } from '../features/apps/one/one.component';
import { TwoComponent } from '../features/apps/two/two.component';


@NgModule({
  declarations: [
    LayoutComponent,
    OneComponent,
    TwoComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FormsModule,
    NgxStickySidebarModule
  ],
  exports: [ LayoutComponent ]
})
export class LayoutModule { }
