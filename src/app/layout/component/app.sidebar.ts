import { Component, ElementRef } from '@angular/core';
import { AppMenu } from './app.menu';
import { ScrollPanel } from 'primeng/scrollpanel';
import { SimpleProfileCardComponent } from "./simple-profile-card/simple-profile-card.component";

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [AppMenu, ScrollPanel, SimpleProfileCardComponent],
    template: ` 
    <div class="layout-sidebar">
        <div class="border-b border-gray-200">
                <app-simple-profile-card />
            </div>
        <p-scrollpanel [style]="{ height: '60vh' }">
            <app-menu></app-menu>
        </p-scrollpanel>
    </div>`
})
export class AppSidebar {
    constructor(public el: ElementRef) {}
}
