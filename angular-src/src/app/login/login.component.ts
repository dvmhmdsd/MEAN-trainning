import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String;
  password: String;

  constructor(private toaster: ToastrService, private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  loginUser() {
    const {username, password} = this;
    const user = {username, password};

    this.auth.login(user).subscribe(data => {
      if (data.success) {
          this.auth.storeData(data.token, data.user);
          this.toaster.success(data.msg, 'Login');
          this.router.navigate(['/dashboard']);
      } else {
        this.toaster.error(data.msg, 'Login');
        this.router.navigate(['/login']);
      }
    });
  }

}
