import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { OneComponent } from '../features/apps/one/one.component';
import { TwoComponent } from '../features/apps/two/two.component';
import { HomeComponent } from '../features/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'apps',
        children: [
          {
            path: 'one',
            component: OneComponent
          },
          {
            path: 'two',
            component: TwoComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
