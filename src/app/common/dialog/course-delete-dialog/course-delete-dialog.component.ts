import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-course-delete-dialog',
  templateUrl: './course-delete-dialog.component.html',
  styleUrls: ['./course-delete-dialog.component.scss']
})
export class CourseDeleteDialogComponent {

  constructor(
    private dialogRef: MatDialogRef<CourseDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public courseId: string
  ) {}

  public close(option: boolean): void {
    this.dialogRef.close(option);
  }

}
