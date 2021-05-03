import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NotasService } from 'src/app/service/notas.service';
import { Notas } from '../../models/notas';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  register: FormGroup;
  loading= false;

  constructor(
    private fb: FormBuilder,
    private NotasService: NotasService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.register = this.fb.group({
      Title: ['', Validators.required],
      Content: ['', Validators.required],
      Priority: ['', Validators.required]
    });
  }
 
  ngOnInit(): void {}

  AddNote(): void {
    this.loading = true;
    console.log(this.register);
    const notas: Notas = {
      Id: this.register.value.Id,
      Title: this.register.value.Title,
      Content: this.register.value.Content,
      Priority: this.register.value.Priority,
      CreationDate: this.register.value.CreationDate,
      UpdateDate: this.register.value.UpdateDate
    };
    this.NotasService.SaveNote(notas).subscribe(data => {
      console.log(data);
      this.loading = false;
      this.toastr.success('La nota fue registrada con exito', 'Nota registrada');
      this.router.navigate(['/inicio']);
    }, error => {
      this.loading = false;
      this.toastr.error('Error al guadar nota', 'Error guardar');
    });
  }

  UpdateNote(): void {
    this.loading = true;
    console.log(this.register);
    const notas: Notas = {
      Id: this.register.value.Id,
      Title: this.register.value.Title,
      Content: this.register.value.Content,
      Priority: this.register.value.Priority,
      CreationDate: this.register.value.CreationDate,
      UpdateDate: this.register.value.UpdateDate
    };
    this.NotasService.UpdateNote(notas).subscribe(data => {
      console.log(data);
      this.loading = false;
      this.toastr.info('La nota fue modificada con exito', 'Nota modificada');
      this.router.navigate(['/inicio']);
    }, error => {
      this.loading = false;
      this.toastr.error('Error al guadar nota', 'Error guardar');
    });
  }

}
