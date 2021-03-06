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
  pass;
  firstdata;
  username;

  constructor(public af: AngularFire,private router: Router) {
    this.items = af.database.list('list');
  this.items.subscribe(val=>{
      console.log('val',val)
    })
    // this.items.first(null,x=>x[0]).subscribe(val=>this.firstdata=val);
    this.items.map(x=>x[0]).subscribe(val=>{this.firstdata=val;console.log('firstdata',val)});
    console.log('print',this.firstdata);
 
   
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

  linkview(src)
  {
    console.log("works", src)
    this.firstdata = src
  }
}
