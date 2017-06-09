import { Component, OnInit } from '@angular/core';
import {AngularFire} from 'angularfire2';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router, ActivatedRoute, Params} from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  email:any;

  constructor(
    public af:AngularFire,
    public flashMessage:FlashMessagesService,
    private router:Router,
    private route:ActivatedRoute  ) { }

  ngOnInit() {
     var user :any=firebase.auth().currentUser;
    if(user != null){
      this.email = user.email;
      console.log(this.email + "in home component")
    }
  }
  login(){
    this.af.auth.login();
  }
  logout(){
    this.af.auth.logout();
    this.router.navigate(['/']);

  }
  }
