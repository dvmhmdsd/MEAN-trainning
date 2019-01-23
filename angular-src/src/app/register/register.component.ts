import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {

  name: String;
  username: String;
  email: String;
  password: String;

  constructor(private toaster: ToastrService, private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    const {name, username, email, password} = this;
    const user = {name, username, email, password};

    this.auth.register(user).subscribe(data => {
      if(data.success) {
        this.success();
        this.router.navigate(['/login']);
      } else {
        this.failed();
      }
    })
    
  }

  success() {
    this.toaster.success('Submit', 'Form submitted', {
      timeOut: 2000,
      positionClass: 'toast-bottom-left'
    });
  }

  failed() {
    this.toaster.success('Submit', 'Form submitted', {
      timeOut: 30000
    });
  }

}
