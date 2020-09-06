import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentNameListComponent } from './list/component-name.list.component';

const routes: Routes = [
    {
        path: '',
        component: ComponentNameListComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ComponentNameRoutingModule { }
