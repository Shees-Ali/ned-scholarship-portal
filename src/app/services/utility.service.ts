import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject, Subscription } from 'rxjs';
import { ConfirmationDialogComponent } from '../components/confirmation-dialog/confirmation-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  isPages = new Subject<boolean>();
  isHome = new Subject<boolean>();
  isAuthenticationPage = new Subject<boolean>();
  isLoading = new Subject<boolean>();
  error_messages = "";
  constructor(private _snackBar: MatSnackBar, public dialog: MatDialog) {}

  showLoader() {
    this.isLoading.next(true);
  }

  hideLoader() {
    this.isLoading.next(false);
  }

  openSnackBar(message: string, action: string, className: string = 'error') {
    this._snackBar.open(message, action, {
      verticalPosition: 'top',
      panelClass: className,
    });
  }

  openConfirmationDialog(
    title: string,
    content: string,
    cancelText: string,
    okText: string
  ) {
    return new Promise<any>((resolve) => {
      const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
        data: {
          title,
          content,
          cancelText,
          okText,
        },
      });

      dialogRef.afterClosed().subscribe((result) => {
        console.log('The dialog was closed');
        resolve(result);
      });
    });
  }


  
}
