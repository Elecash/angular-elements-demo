import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToggleComponent } from './toggle/toggle.component';

@NgModule({
    declarations: [
        AppComponent,
        ToggleComponent
    ],
    imports: [
        BrowserModule
    ],
    bootstrap: [ AppComponent ],
    entryComponents: [
        ToggleComponent
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class AppModule {
}
