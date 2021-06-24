import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-users',
  templateUrl: './login-users.component.html',
  styleUrls: ['./login-users.component.css']
})
export class LoginUsersComponent implements OnInit {

  loginUsers: FormGroup;
  constructor(
    private fb: FormBuilder,

  ) {
    this.loginUsers = this.fb.group({
      username: ['', [Validators.required, Validators.maxLength(10)]],
      password: ['', [Validators.required, Validators.maxLength(20)]],
    });
  }

  ngOnInit(): void {
  }

}
