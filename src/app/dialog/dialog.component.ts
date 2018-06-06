import { Component } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
    public name: string;

    constructor(
        public dialogRef: MatDialogRef<DialogComponent>) { }

    onSubmit(): void {
      if (this.name && this.name.length) {
        this.dialogRef.close(this.name);
      } else {
        this.dialogRef.close('');
      }
    }

    onNoClick(): void {
        this.dialogRef.close('');
    }

}
