import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { EmailComponent } from './email/email.component';
import { MembersComponent } from './members/members.component';
import { AuthGuard } from './auth.service';
import { routes } from './app.routes';


/*export const firebaseConfig = {
  apiKey: "AIzaSyALCjLiSkBqDUGI7z6rAn8JxQg1tiFo7M0",
  authDomain: "angularchennai-7bf6f.firebaseapp.com",
  databaseURL: "https://angularchennai-7bf6f.firebaseio.com",
  projectId: "angularchennai-7bf6f",
  storageBucket: "angularchennai-7bf6f.appspot.com",
  messagingSenderId: "367520840056"
};*/

export const firebaseConfig = {
  apiKey: "AIzaSyAVQJgLiXjk4B8pJadIPatctkYA-zfEQGU",
  authDomain: "kindle-8d5b2.firebaseapp.com",
  databaseURL: "https://kindle-8d5b2.firebaseio.com",
  projectId: "kindle-8d5b2",
  storageBucket: "kindle-8d5b2.appspot.com",
  messagingSenderId: "497854928090"
};

@NgModule({
  declarations: [
    AppComponent, 
    EmailComponent,  
    MembersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routes
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
