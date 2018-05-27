import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewGameComponent } from './new-game/new-game.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
    { path: 'new-game', component: NewGameComponent },
    { path: '**', component: IndexComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule { }
