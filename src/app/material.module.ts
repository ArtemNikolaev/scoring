import { NgModule } from '@angular/core';
import {
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    MatButtonModule,
    MatCardModule
} from '@angular/material';

const modules = [
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    MatButtonModule,
    MatCardModule
];

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule { }
