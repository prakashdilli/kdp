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
  pass: any;
  data = [
          { "chapter": "chapter 1", "description": "Amazon Course Introduction", "imgid": 1, "videourl": "https://s3.us-east-2.amazonaws.com/kdp-course/chapter+1+amazon+course+introduction.mp4", "$key": "0" },
          { "chapter": "chapter 2", "description": "Kindle Account Creation", "imgid": 2, "videourl": "https://s3.us-east-2.amazonaws.com/kdp-course/chapter+2+kindle+account+creation.mp4", "$key": "1" },
          { "chapter": "chaper 3", "description": "Tax and Address Info Update", "imgid": 3, "videourl": "https://s3.us-east-2.amazonaws.com/kdp-course/chapter+3+tax+and+address+info+update.mp4", "$key": "2" },
          { "chapter": "chapter 4", "description": "Keyword Searching", "imgid": 4, "videourl": "https://s3.us-east-2.amazonaws.com/kdp-course/chapter+4+keyword+searching.mp4", "$key": "3" },
          { "chapter": "chapter 5", "description": "Kindle Spy Key Word", "imgid": 5, "videourl": "https://s3.us-east-2.amazonaws.com/kdp-course/chapter+5+kindle+spy+key+word.mp4", "$key": "4" },
          { "chapter": "chapter 6", "description": "Uploading a Book Paperback", "imgid": 6, "videourl": "https://s3.us-east-2.amazonaws.com/kdp-course/chpater+6+uploading+a+book+paperback.mp4", "$key": "5" },
          { "chapter": "chapter 7", "description": "Uploading a Book Physical Book", "imgid": 7, "videourl": "https://s3.us-east-2.amazonaws.com/kdp-course/chapter+7+uploading+a+book+physical+book.mp4", "$key": "6" },
          { "chapter": "chapter 8", "description": "Earn 2k per Month", "imgid": 8, "videourl": "https://s3.us-east-2.amazonaws.com/kdp-course/chapter+8+earn+2k+per+month.mp4", "$key": "7" },
          { "chapter": "chapter 9", "description": "Kindle Price Statergy", "imgid": 9, "videourl": "https://s3.us-east-2.amazonaws.com/kdp-course/chapter+9+kindle+price+statergy.mp4", "$key": "8" },
          { "chapter": "chapter 10", "description": "Payooner Amazon Kindle Payment Gateway", "imgid": 10, "videourl": "https://s3.us-east-2.amazonaws.com/kdp-course/chapter+10+payooner+amazon+kindle+payment+gateway.mp4", "$key": "9" },
          { "chapter": "chapter 11", "description": "Books For Artist", "imgid": 11, "videourl": "https://s3.us-east-2.amazonaws.com/kdp-course/chapter+11+books+for+artist.mp4", "$key": "10" },
          { "chapter": "chapter 12", "description": "Facts Book For Kindle", "imgid": 12, "videourl": "https://s3.us-east-2.amazonaws.com/kdp-course/chapter+12+facts+book+for+kindle.mp4", "$key": "11" },
          { "chapter": "chapter 13", "description": "Coloring Book For Kindle", "imgid": 13, "videourl": "https://s3.us-east-2.amazonaws.com/kdp-course/chapter+13+coloring+book+for+kindle.mp4", "$key": "12" }
        ];
  

  constructor(public af: AngularFire,private router: Router) {
    //this.items = af.database.list('list');
    console.log("=======================", this.data)

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
    this.pass = src
  }
}
