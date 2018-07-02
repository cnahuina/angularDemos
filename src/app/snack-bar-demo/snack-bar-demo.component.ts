import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-snack-bar-demo',
  templateUrl: './snack-bar-demo.component.html',
  styleUrls: ['./snack-bar-demo.component.css']
})
export class SnackBarDemoComponent implements OnInit {

  constructor( public snackBar: MatSnackBar ) { }

  ngOnInit() {
  }

  openSnackbar(){
    this.snackBar.open("This is the SnackBar" , "Got it Snack Bar");
  }
}
