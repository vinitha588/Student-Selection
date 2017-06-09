import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-officer',
  templateUrl: './officer.component.html',
  styleUrls: ['./officer.component.css']
})
export class OfficerComponent implements OnInit {
  email:any;

  constructor(private firebaseService:FirebaseService) { }

  ngOnInit() {
   
  }
}
