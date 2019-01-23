import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  logged = false;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    if (!this.auth.loggedIn()) {
      this.logged = true
    } else {
      this.logged = false;
    }
  }

}
