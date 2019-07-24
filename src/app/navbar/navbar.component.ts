import { Component, OnInit } from '@angular/core';
import { AuthService } from "../core/auth.service";
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( 
    private router:Router,
    private location : Location,
    public authService: AuthService,
    ) { }

  ngOnInit() {
  }
  
  logout(){
    this.authService.doLogout()
    .then((res) => {
      this.location.back();
    }, (error) => {
      console.log("Logout error", error);
    });
  }



}
