import { Component, OnInit, Input, Inject } from '@angular/core';
import { IClass } from '../class';
import {MatDialog, MatDialogRef, MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-class-list-item',
  templateUrl: './class-list-item.component.html',
  styleUrls: ['./class-list-item.component.css']
})
export class ClassListItemComponent {

  @Input() class: IClass;

  constructor(public dialog: MatDialog) { }

  openDialog(c): void {
    const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      const dialogRef = this.dialog.open(DialogComponent, {
        height: '360px',
        width: '500px',
        data: {
          title: c.classes.title,
          description: c.classes.description,
          instructorName: c.classes.instructorName,
          date: c.date,
          time: c.classes.time
        }
    });
  }
}

//modal dialog when a class is clicked
@Component({
  selector: 'app-dialog',
  templateUrl: '../dialog/dialog.component.html',
})
export class DialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IClass) { }

    onNoClick(): void {
      this.dialogRef.close();
    }
}
