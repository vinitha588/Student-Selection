import { Component, OnInit } from '@angular/core';
import {AngularFire} from 'angularfire2';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public af:AngularFire,
    public FlashMessage:FlashMessagesService,
    public router:Router
    ) { }

  ngOnInit() {

  }
  login(){
    this.af.auth.login();
  }
  logout(){
    this.af.auth.logout();
    this.router.navigate(['/']);
    this.FlashMessage.show('you are logged out', {cssClass: 'alert-success', timeout: 3000});
  }

}
