import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { PagesRoutingModule } from './pages/pages.routing';

import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
    { 
        path: '', 
        component: PagesComponent,
        children: [
            
        ]
    },
    { path: '**', component: NopagefoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true }),
        PagesRoutingModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
