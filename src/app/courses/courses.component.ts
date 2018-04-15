import { Component, OnInit,ViewChildren,QueryList } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import {  FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';



@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  
})
export class CoursesComponent implements OnInit {
@ViewChildren('styleElementComapany')courseElement: QueryList<any>;
  name: any;
  state: string = '';
  items: FirebaseListObservable<any[]>;
  arrayitems=[];
  pass;
  firstdata;
  username;
  isVideo:boolean;

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

  linkview(src,ele)
  {
      if(!src.download){
        this.isVideo = true;
      }
    this.courseElement.forEach(value => {
        value.nativeElement.style.background = "#f7f7f7";
        value.nativeElement.style.color = "black";
        console.log("value", value.nativeElement.style)
      })
      ele.style.background = "gray";
      ele.style.color = "white";
    console.log("works", src)
    this.firstdata = src
  }
}
