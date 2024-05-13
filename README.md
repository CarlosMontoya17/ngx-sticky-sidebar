# Sticky-Sidebar

[![NPM](https://nodei.co/npm/ngx-sticky-sidebar.png?compact=true)](https://nodei.co/npm/ngx-sticky-sidebar/)

## Status 

[![npm version](https://img.shields.io/npm/v/ngx-sticky-sidebar?logo=npm&logoColor=fff)](https://www.npmjs.com/package/ngx-sticky-sidebar) ![NPM Unpacked Size](https://img.shields.io/npm/unpacked-size/ngx-sticky-sidebar) ![NPM License](https://img.shields.io/npm/l/ngx-sticky-sidebar) ![NPM Downloads](https://img.shields.io/npm/dm/ngx-sticky-sidebar)

***[DEMO](https://stickysidebar.carlosmontoya.com.mx)***  

***[REPOSITORY](https://github.com/CarlosMontoya17/ngx-sticky-sidebar)*** 

A Customizable Sidebar Angular Component

## Installation

```shell
npm install --save ngx-sticky-sidebar
```
## Usage

Add `NgxStickySidebarModule` to your project:

app module:
```typescript
import { NgxStickySidebarModule } from 'ngx-sticky-sidebar';

@NgModule({
  declarations: [ AppComponent ],
  imports: [ BrowserModule, NgxStickySidebarModule ],
  bootstrap: [ AppComponent ],
})
class AppModule {}
```
or layout component:

```typescript
import { NgxStickySidebarModule } from 'ngx-sticky-sidebar';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    NgxStickySidebarModule
  ],
  template: '',
  styles: []
})
export class LayoutComponent {}
```


Add `<ngx-sticky-sidebar>` to your layout template:

```html
<ngx-sticky-sidebar [items]="items" [backgroundColor]="backgroundColor" [color]="color">
    <div id="sidebar-header" style="text-align: center;">
        <span> Sticky Sidebar </span>
    </div>
    <div id="sidebar-content">
        <span>Page Content</span>
        <router-outlet></router-outlet>
    </div>
</ngx-sticky-sidebar>
```

## Inputs

| Property | Type | Default | Description |
|----------|------|---------|-------------|
|  items   | StickySidebarItems[] | [] | Elements for sidebar list. |
| backgroundColor | string | black | Sidebar background color. |
| color | string | white | Sidebar font color. |
| width | string | 220px | Sidebar width size. |
| padding | string | 1rem | Sidebar padding. |
| backdropColor | string | #00000054 | Backdrop color. |
| transitionDelay | string | 0.5s | Time (in sec) for each transition. |
| overWidth | number | 992 | If the screen width is equal to or less than that value, the sidebar should disappear.|
| dropWidth | number | 992 | If the screen width is equal to or less than that value, the sidebar should appear. |
| closeBtnSize | number | 15 | Close button size for small screen widths. |
| autoRoute | boolean | true | (Items with children) Determine the default route when clicking on the item without specifying a child. | 

## State

Add `NgxStickySidebarService` where you want get or set sidebar state:

```typescript
import { NgxStickySidebarService } from 'ngx-sticky-sidebar';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
    state: boolean;

    constructor( private sidebar: NgxStickySidebarService ) {
        this.sidebar.stateAsObs.subscribe((state: boolean) => {
            this.state = state;
        })
    }

    toogle(): void {
        this.sidebar.toggle();
    }

    set_value(value: boolean): void {
        this.sidebar.set_state = value;
    }
}
```

## Items

Declare your sidebar items.

E.g:

```typescript
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
      iconClass: 'bi bi-window-plus', // <-- using Boostrap Icons
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
]
```
### Properties

| Property | Type | Description |
| -------- | ---- | ----------- |
| label | string | Text of item to display on sidebar list |
| route | string | Route to navigate upon clicking |
| childs | { label: string, route: string }[] | Text and routes for item's children |
| collapse | boolean | Default value for collapse item if have children |
| iconClass | string | Class name for `<i>` element to display custom icon |