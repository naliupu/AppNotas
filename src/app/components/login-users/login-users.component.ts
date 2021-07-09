import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Users } from 'src/app/models/users';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NotasService } from 'src/app/service/notas.service';
import { GetDateService } from 'src/app/service/get-date.service';
import { JwtService } from 'src/app/service/jwt.service';

@Component({
  selector: 'app-login-users',
  templateUrl: './login-users.component.html',
  styleUrls: ['./login-users.component.css']
})
export class LoginUsersComponent implements OnInit {

  loading = false;
  data: any[] = [];

  loginUsers: FormGroup;
  constructor(
    private fb: FormBuilder,
    private NotasService: NotasService,
    private router: Router,
    private toastr: ToastrService,
    private getDate: GetDateService
  ) {
    this.loginUsers = this.fb.group({
      username: ['', [Validators.required, Validators.maxLength(10)]],
      password: ['', [Validators.required, Validators.maxLength(20)]],
    });
  }

  ngOnInit(): void {
  }

  Authorization(): void {
    console.log(this.loginUsers);
    const users: Users = {
      username: this.loginUsers.value.username,
      password: this.loginUsers.value.password,
    };
    this.loading = true;
    this.NotasService.Authorization(users).subscribe(data => {
      this.getDate.dataLogin = data;
      localStorage.setItem('token', data.token);
      this.getDate.token = data.token;
      this.loading = false;
      this.toastr.success('Login completado', 'Login correcto');
      this.router.navigate(['/inicio']);
    }, error => {
      console.log(error);
      this.loading = false;
      this.toastr.error('Contraseña o usuario incorrecto', 'Error');
    });
  }

}
