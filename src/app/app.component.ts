import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: FirebaseListObservable<any>;
  name: any;
  msgVal: string = '';
  user: Observable<firebase.User>
  constructor(private db: AngularFireDatabase,public afauth: AngularFireAuth) {
    this.user = afauth.authState;
    this.items = this.db.list('/Chat', {
      query: {
        limitToLast: 5
      }
    });

    this.afauth.authState.subscribe(auth => { 
      if(auth) {
        this.name = auth;
      }
    });
  }

  chatSend(theirMessage: string) {
    this.items.push({ message: theirMessage});
    this.msgVal = '';
}

//  loginWithFacebook() {
//   this.afauth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
//  }

  LoginWithGoogle() {
    this.afauth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afauth.auth.signOut();
  }
}
