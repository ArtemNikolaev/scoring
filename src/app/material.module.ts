import { NgModule } from '@angular/core';
import {
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule
} from '@angular/material';

const modules = [
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule
];

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule { }
