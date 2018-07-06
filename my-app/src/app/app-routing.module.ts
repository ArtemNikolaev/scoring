import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { NewGameComponent } from "./new-game/new-game.component";
import { GameComponent } from "./game/game.component";
import {PlayersComponent} from "./players/players.component";

const routes: Routes = [
    {path: '', redirectTo:'/game', pathMatch: 'full'},
    {path: 'game', component: GameComponent},
    {path: 'new-game', component: NewGameComponent },
    {path: 'players', component: PlayersComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
