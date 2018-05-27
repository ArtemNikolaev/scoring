import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NewGameComponent } from './new-game/new-game.component';
import { IndexComponent } from './index/index.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    NewGameComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
