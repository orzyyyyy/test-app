import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { LoginComponent } from './login/login.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-app';
  zmienna: any;

  constructor(public matDialog: MatDialog) {

  }

  openModal() {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "70%";
    dialogConfig.width = "60%";
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(LoginComponent, dialogConfig);
  }



}
