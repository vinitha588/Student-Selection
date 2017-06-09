import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseService {
  listings: FirebaseListObservable<any[]>;
  listing: FirebaseObjectObservable<any>;
  folder: any;

  constructor(private af: AngularFire) {
    this.folder = "listingimages";
    this.listings = this.af.database.list('/listings/') as FirebaseListObservable<Listing[]>;
   }

  getListings() {
    return this.listings;
  }
  getListingDetails(id){
    this.listing = this.af.database.object('/listings/'+id) as FirebaseObjectObservable<Listing>
    return this.listing; 

  }
  addListing(listing){
    let storageRef = firebase.storage().ref();
    for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){
      let Path = '/${this.folder}/${selectedFile.name}';
      let iRef = storageRef.child(Path);
      iRef.put(selectedFile).then((snapshot) => {
        listing.image = selectedFile.name;
       listing.Path = Path;
        return this.listings.push(listing);
      })
    }
  }

  updateListing(id , listing){
    return this.listings.update(id, listing);
  }
  }
interface Listing{
  firstName?:string;
  aggregate?:string;
  projects?:string;
  gender?:string;
  c?:string;
  java?:string;
  python?:string;
  image?:string;

}