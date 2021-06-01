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
  loading = false;
  register: FormGroup;
  constructor(private fb: FormBuilder,
              private NotasService: NotasService,
              private router: Router,
              private toastr: ToastrService){
    this.register = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      priority: ['', Validators.required],
    });
  }

  get f() { return this.register.controls; }
 
  ngOnInit(): void {}

  AddNote(): void {
    console.log(this.register);
    const notas: Notas = {
      title: this.register.value.title,
      content:  this.register.value.content,
      priority: parseInt(this.register.value.priority),
    };
    this.loading = true;
    this.NotasService.SaveNote(notas).subscribe(data => {
      console.log(data);
      this.loading = false;
      this.toastr.success('La nota fue registrada con exito', 'Nota registrada');
      this.router.navigate(['/inicio']);
    }, error => {
      console.log(error);
      this.loading = false;
      this.toastr.error('Error al guadar nota', 'Error guardar');
    });
  }

  UpdateNote(): void {
    console.log(this.register);

    const notas: Notas = {
      id: this.register.value.id,
      title: this.register.value.title,
      content: this.register.value.content,
      priority: this.register.value.priority,
    };
    this.loading = true;
    this.NotasService.UpdateNote(notas).subscribe(data => {
      console.log(data);
      this.loading = false;
      this.toastr.info('La nota fue modificada con exito', 'Nota modificada');
      this.router.navigate(['/inicio']);
    }, error => {
      console.log(error);
      this.loading = false;
      this.toastr.error('Error al guadar nota', 'Error guardar');
    });
  }

}
