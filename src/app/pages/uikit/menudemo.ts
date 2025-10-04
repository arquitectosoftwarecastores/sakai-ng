import { Component } from '@angular/core';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ContextMenuModule } from 'primeng/contextmenu';
import { CommonModule } from '@angular/common';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { MegaMenuModule } from 'primeng/megamenu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { TabsModule } from 'primeng/tabs';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { StepperModule } from 'primeng/stepper';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { CardModule } from 'primeng/card';

@Component({
    selector: 'app-menu-demo',
    standalone: true,
    imports: [
        CardModule,
        CommonModule,
        BreadcrumbModule,
        TieredMenuModule,
        IconFieldModule,
        InputIconModule,
        MenuModule,
        ButtonModule,
        ContextMenuModule,
        MegaMenuModule,
        PanelMenuModule,
        TabsModule,
        MenubarModule,
        InputTextModule,
        TabsModule,
        StepperModule,
        TabsModule
    ],
    template: `
        <div class="flex flex-col gap-8">
            <div
                class="block rounded-[--content-border-radius] bg-[--surface-card] text-[--p-button-primary-color]">
                <div class="px-6 py-3 bg-[--p-button-primary-background] rounded-t-[--content-border-radius]" >
                    Menu
                </div>
                <div class="p-1">
                    <p-breadcrumb [model]="breadcrumbItems" [home]="breadcrumbHome"></p-breadcrumb>
                </div>
            </div>
        </div>

        <div class="flex flex-col md:flex-row gap-8 mt-6">
            <div class="md:w-1/2">
                <div class="card">
                    <div class="font-semibold text-xl mb-4">Steps</div>
                    <p-stepper [value]="1">
                        <p-step-list>
                            <p-step [value]="1">Header I</p-step>
                            <p-step [value]="2">Header II</p-step>
                            <p-step [value]="3">Header III</p-step>
                        </p-step-list>
                    </p-stepper>
                </div>
            </div>
            <div class="md:w-1/2">
                <div class="card">
                    <div class="font-semibold text-xl mb-4">TabMenu</div>
                    <p-tabs [value]="0">
                        <p-tablist>
                            <p-tab [value]="0">Header I</p-tab>
                            <p-tab [value]="1">Header II</p-tab>
                            <p-tab [value]="2">Header III</p-tab>
                        </p-tablist>
                    </p-tabs>
                </div>
            </div>
        </div>

        <div class="flex flex-col md:flex-row gap-8 mt-6">
            <div class="md:w-1/2">
                <div class="card">
                    <div class="font-semibold text-xl mb-4">Overlay Menu</div>
                    <p-menu #menu [popup]="true" [model]="overlayMenuItems"></p-menu>
                    <button type="button" pButton icon="pi pi-chevron-down" label="Options" (click)="menu.toggle($event)" style="width:auto"></button>
                </div>
            </div>
            <div class="md:w-1/2">
                <div class="card" #anchor>
                    <div class="font-semibold text-xl mb-4">Context Menu</div>
                    Right click to display.
                    <p-contextmenu [target]="anchor" [model]="contextMenuItems"></p-contextmenu>
                </div>
            </div>
        </div>

    `
})
export class MenuDemo {
    
    breadcrumbHome = { icon: 'pi pi-home', to: '/' };
    breadcrumbItems = [{ label: 'Menu' }];
    overlayMenuItems = [
        {
            label: 'Save',
            icon: 'pi pi-save'
        },
        {
            label: 'Update',
            icon: 'pi pi-refresh'
        },
        {
            label: 'Delete',
            icon: 'pi pi-trash'
        },
        {
            separator: true
        },
        {
            label: 'Home',
            icon: 'pi pi-home'
        }
    ];
    contextMenuItems = [
        {
            label: 'Save',
            icon: 'pi pi-save'
        },
        {
            label: 'Update',
            icon: 'pi pi-refresh'
        },
        {
            label: 'Delete',
            icon: 'pi pi-trash'
        },
        {
            separator: true
        },
        {
            label: 'Options',
            icon: 'pi pi-cog'
        }
    ];
}
