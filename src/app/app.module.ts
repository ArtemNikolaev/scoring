import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NewGameComponent } from './new-game/new-game.component';
import { IndexComponent } from './index/index.component';
import { MaterialModule } from './material.module';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    NewGameComponent,
    IndexComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule
  ],
  entryComponents: [ DialogComponent ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
