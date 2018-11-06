import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ToggleComponent } from './toggle/toggle.component';

@Component({
    selector: 'ngx-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
    constructor(injector: Injector) {
        const toggle = createCustomElement(ToggleComponent, { injector });
        customElements.define('ngx-toggle', toggle);
    }

    onChange(event: CustomEvent) {
        console.log('emit from Angular', event.detail);
    }

    onChangeWebComponent(event: CustomEvent) {
        console.log('emit from Web Component', event.detail);
    }

    onClick() {
        const el = document.createElement('ngx-toggle');
        const on = document.createElement('span');
        on.setAttribute('slot', 'on');
        on.classList.add('text');
        on.innerText = 'YES';

        const off = document.createElement('span');
        off.setAttribute('slot', 'off');
        off.classList.add('text');
        off.innerText = 'NO';

        el.appendChild(on);
        el.appendChild(off);
        el.addEventListener('change', this.onChangeWebComponent.bind(this));

        document.body.appendChild(el);
    }
}
