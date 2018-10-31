import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ToggleComponent } from './toggle/toggle.component';

@Component({
  selector: 'ngx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(injector: Injector) {
        const toggle = createCustomElement(ToggleComponent, { injector });
        customElements.define('ngx-toggle', toggle);
    }
}
