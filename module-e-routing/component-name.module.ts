import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PoModule } from '@portinari/portinari-ui';

import { ComponentNameRoutingModule } from './component-name-routing.module';
import { ComponentNameListComponent } from './list/component-name.list.component';

@NgModule({
    imports: [
        CommonModule,
        PoModule,
        FormsModule,
        HttpClientModule,
        ComponentNameRoutingModule
    ],
    declarations: [
        ComponentNameListComponent
    ],
    exports: [
        ComponentNameListComponent
    ],
    providers: [
    ],
})
export class ComponentNameModule { }
