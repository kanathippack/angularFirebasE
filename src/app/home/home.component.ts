import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../core/user.service'
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public userService: UserService,) { }

  ngOnInit() {
  }
  get currentUser():boolean
  {
      var user = firebase.auth().currentUser;

      if (user) {
        return false
      } else {
        return true
      }
 }
}
