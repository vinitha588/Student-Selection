import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router} from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent implements OnInit {
  email:any;

  constructor(
    private firebaseService:FirebaseService,
    private router:Router
  ) { }

  ngOnInit() {
     var user :any=firebase.auth().currentUser;
    if(user != null){
      this.email = user.email;
      console.log(this.email + "in listingcomponent")
    }
  }
  onSubmit(){
    this.router.navigate(['add-listing/']);
  }
  onEditSubmitt(){
    this.router.navigate(['requirements/']);
  }

}
