import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private toaster: ToastrService, private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onLogout() {
    this.auth.logout();
    this.toaster.success('Logged out successfully', 'Logout', {
      timeOut: 2000,
      positionClass: 'toast-bottom-left'
    });
    this.router.navigate(['/login']);
    return false;
  }

}
