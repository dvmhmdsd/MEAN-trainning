import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name: String;
  username: String;
  email: String;
  password: String;

  constructor(private toaster: ToastrService) { }

  ngOnInit() {
  }

  onSubmit() {
    const {name, username, email, password} = this;
    this.click();
  }

  click() {
    this.toaster.success('Submit', 'Form submitted', {
      timeOut: 30000
    });
  }

}
