import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxStickySidebarModule } from 'ngx-sticky-sidebar';
import { LayoutModule } from './layout/layout.module';
import { OneComponent } from './features/apps/one/one.component';
import { TwoComponent } from './features/apps/two/two.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
