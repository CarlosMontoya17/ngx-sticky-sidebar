import { Component, OnInit } from '@angular/core';
import { NgxStickySidebarService } from 'ngx-sticky-sidebar';
import { StickySidebarItems } from 'ngx-sticky-sidebar/lib/interfaces/simple-items.interface';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  backgroundColor: string = '#D12929';
  color: string = '#ffffff'
  items: StickySidebarItems[] = [
    {
      label: 'Home',
      route: '/',
      childs: []
    },
    {
      label: 'Apps',
      route: '/apps',
      collapse: true,
      iconClass: 'bi bi-window-plus',
      childs: [
        {
          label: 'One',
          route: '/one'
        },
        {
          label: 'Two',
          route: '/two'
        }
      ]
    }
  ];
  credits: string[] = [ 'Copyright (c) - 2024' ];
  status!: boolean;

  constructor(
    private sidebar: NgxStickySidebarService
  ) { }

  ngOnInit(): void {
    this.sidebar.stateAsObs.subscribe((state: boolean) => {
      this.status = state;
    })
  }

  toogle(): void {
    this.sidebar.toggle();
  }

  set_value(value: boolean) {
    this.sidebar.set_state = value;
  }

}
