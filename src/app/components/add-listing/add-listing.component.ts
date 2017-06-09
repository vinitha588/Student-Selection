import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router} from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})
export class AddListingComponent implements OnInit {
  firstName:any;
  aggregate:any;
  projects:any;
  gender:any;
  c: any = false;
  java:any = false;
  python:any = false;
  email:any;
  image:any;

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

  onAddSubmit(){
    let listing = {
      firstName: this.firstName,
      aggregate: this.aggregate,
      projects: this.projects,
      gender: this.gender,
      c: this.c,
      java: this.java,
      python: this.python,
      image:this.image,
    }
    console.log(listing);
    this.firebaseService.addListing(listing);

    this.router.navigate(['/listings/'+this.firstName]);

}

}