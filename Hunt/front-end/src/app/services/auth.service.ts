import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';
 
@Injectable()
export class AuthService {
  authToken: any;
  user: any;
  master: Boolean;

  constructor(private http:Http) {
    this.master = false; 
   }

  registerUser(user){
    let headers = new Headers(); 
    headers.append('Content-Type','application/json');
    return this.http.post('users/register', user,{headers: headers})
      .map(res => res.json());
  }

  removeDefect(id){
    let headers = new Headers();
    this.loadToken();
    headers.append('Content-Type','application/json');
    headers.append('Authorization', this.authToken);
    return this.http.delete('defects/delete/'+ id, {headers: headers})
      .map(res => res.json());
  }

  updateDefect(id ,defect){
    let headers = new Headers();
    this.loadToken();
    headers.append('Content-Type','application/json');
    headers.append('Authorization', this.authToken);
    return this.http.put('defects/update/'+ id, defect, {headers: headers})
      .map(res => res.json());
  }

  reportDefect(defect){
    let headers = new Headers();
    this.loadToken();
    headers.append('Content-Type','application/json');
    headers.append('Authorization', this.authToken);
    return this.http.post('defects/report', defect, {headers: headers})
      .map(res => res.json());
  }

  authenticateUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('users/authenticate', user,{headers: headers})
      .map(res => res.json());
  }

  getProfile(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Content-Type','application/json');
    headers.append('Authorization', this.authToken);
    return this.http.get('users/profile', {headers: headers})
      .map(res => res.json());   
  }

  getAllDefects(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Content-Type','application/json');
    headers.append('Authorization', this.authToken);
    return this.http.get('defects/listDefects', {headers: headers})
      .map(res => res.json());   
  }

  getIndividualDefects(username){
    let headers = new Headers();
    this.loadToken();
    headers.append('Content-Type','application/json');
    headers.append('Authorization', this.authToken);
    return this.http.get('defects/listDefects/1?username='+username, {headers: headers})
      .map(res => res.json());   
  }


  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user.username));
    this.authToken = token;
    this.user = user;
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn() {
    return tokenNotExpired('id_token');
  }

  logout(){
    this.authToken = null;
    this.user = null;
    this.master = false;
    localStorage.clear();
  }

/////////////////////////////////////User

  getAllUsers(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Content-Type','application/json');
    headers.append('Authorization', this.authToken);
    return this.http.get('users/listUsers', {headers: headers})
      .map(res => res.json());   
  }

  getCountAndDistinctDefects(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Content-Type','application/json');
    headers.append('Authorization', this.authToken);
    return this.http.get('defects/distAndcount', {headers: headers})
      .map(res => res.json());   
  }
}
