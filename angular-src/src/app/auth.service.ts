import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: any;
  user: any;

  constructor(private http: Http) { }

  register(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:4000/users/register', user, {headers})
      .map(res => res.json());
  }

  login(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:4000/users/auth', user, {headers})
      .map(res => res.json());
  }

  loggedIn() {
    return tokenNotExpired('id_token');
  }

  getProfile() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.token);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:4000/users/profile', {headers})
      .map(res => res.json());
  }

  loadToken() {
    this.token = localStorage.getItem('id_token'); 
  }

  storeData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user)); // localstorage doesn't store objects, just string
    this.token = token;
    this.user = user;
  }

  logout() {
    this.token = null;
    this.user = null;
    localStorage.clear();
  }
}
