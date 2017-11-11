import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import {  FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  
})
export class MembersComponent implements OnInit {
  name: any;
  state: string = '';
  items: FirebaseListObservable<any[]>;
  arrayitems=[];

  constructor(public af: AngularFire,private router: Router) {
    this.items = af.database.list('list');
 
   
console.log(this.arrayitems);
    this.af.auth.subscribe(auth => {
      if(auth) {
        this.name = auth;
      }
    });



  }

  logout() {
     this.af.auth.logout();
     this.router.navigateByUrl('');
  }


  ngOnInit() {
  }
}
