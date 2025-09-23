import { Component, ElementRef } from '@angular/core';
import { AppMenu } from './app.menu';
import { ScrollPanel } from 'primeng/scrollpanel';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [AppMenu, ScrollPanel],
    template: ` <div class="layout-sidebar">
        <p-scrollpanel [style]="{ height: '100%' }">
        <app-menu></app-menu>
        </p-scrollpanel>
    </div>`
})
export class AppSidebar {
    constructor(public el: ElementRef) {}
}
