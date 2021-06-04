import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  goBack(){
    this.location.back();
  }

  // tslint:disable-next-line: typedef
  goForward(){
    this.location.forward();
  }

}
