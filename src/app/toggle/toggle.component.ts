import { Component, Input, OnChanges, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
    templateUrl: './toggle.component.html',
    styleUrls: [ './toggle.component.scss' ],
    encapsulation: ViewEncapsulation.ShadowDom
})
export class ToggleComponent implements OnChanges {
    styles: any = {};

    @ViewChild('cb') cb;
    @Input() size = 90;
    @Input() width = 200;
    @Input() height = 100;

    constructor() {
    }

    ngOnChanges(changes) {
        this.updateStyles();
    }

    updateStyles() {
        const hMargin = (this.width - (this.size * 2)) / 2;
        const vMargin = (this.height - this.size) / 2;
        this.styles = {
            dot: {
                width: `${this.size}px`,
                height: `${this.size}px`,
                top: `${vMargin}px`,
                left: `${hMargin}px`
            },
            label: {
                width: `${this.width}px`,
                height: `${this.height}px`
            },
            on: {
                'font-size': `${this.size / 40}rem`
            },
            off: {
                'font-size': `${this.size / 40}rem`
            }
        };

        if (this.cb.nativeElement.checked) {
            this.styles.dot.left = `calc(100% - ${hMargin}px)`;
        }
    }

    onClick() {
        this.updateStyles();
    }
}
