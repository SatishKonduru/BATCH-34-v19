import { CanDeactivateFn } from '@angular/router';
import { EditProfileComponent } from '../components/edit-profile/edit-profile.component';
import { MatDialog } from '@angular/material/dialog';
import { inject } from '@angular/core';
import { ConfirmDialogComponent } from '../components/confirm-dialog/confirm-dialog.component';
import { map } from 'rxjs';

export const editProfileGuard: CanDeactivateFn<EditProfileComponent> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  // if no unused changes => allow navigation
  if (!component.hasUnsavedChanges()) {
    return true;
  }
  const dialog = inject(MatDialog);
  const config = {
    width: '350px',
    data: {
      title: 'Unsaved Changes',
      message:
        'You have unsaved Changes. Do you really want to leave this page?',
    },
  };
  const dialogRef = dialog.open(ConfirmDialogComponent, config);

  //Return Observable<boolean> to the router
  return dialogRef.afterClosed().pipe(map((result) => !!result));
};
