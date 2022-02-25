import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Forfaits } from '../forfaits';

@Component({
  selector: 'app-dialog-form-forfaits',
  templateUrl: './dialog-form-forfaits.component.html',
  styleUrls: ['./dialog-form-forfaits.component.css']
})
export class DialogFormForfaitsComponent {

  constructor(public dialogRef: MatDialogRef<DialogFormForfaitsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Forfaits) { }

  fermerDialogue(): void {
    this.dialogRef.close();
  }

}
