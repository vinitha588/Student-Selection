import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router, ActivatedRoute, Params} from '@angular/router'; 

@Component({
  selector: 'app-edit-listing',
  templateUrl: './edit-listing.component.html',
  styleUrls: ['./edit-listing.component.css']
})
export class EditListingComponent implements OnInit {
  id;
  firstName;
  aggregate;
  projects;
  gender;
  c;
  java;
  python;

  constructor(
    private firebaseService:FirebaseService,
    private router:Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];


    this.firebaseService.getListingDetails(this.id).subscribe(listing => {
      this.firstName = listing.firstName;
      this.aggregate = listing.aggregate;
      this.projects = listing.projects;
      this.gender = listing.gender;
      this.c = listing.c;
      this.java = listing.java;
      this.python = listing.python;
    });
  }

  onEditSubmit(){
    let listing = {
      firstName: this.firstName,
      aggregate: this.aggregate,
      projects: this.projects,
      gender: this.gender,
      c: this.c,
      java: this.java,
      python: this.python,
    }

   this.firebaseService.updateListing(this.id, listing);

    this.router.navigate(['listings/'+this.firstName]);
  }
}
