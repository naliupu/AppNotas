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


  listNotas: Notas[] = [];
  listNotasFecha: Notas[] = [];
  fecha: Date = null;
  SearchDate: FormGroup;
  myDate = new Date();
  dataNull = 0;
  deleteOk = null;

  constructor(private fb: FormBuilder,
              private NotasService: NotasService,
              private router: Router,
              private toastr: ToastrService){
    this.register = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(20)]],
      content: ['', [Validators.required, Validators.maxLength(300)]],
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
    this.GetNote();
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

  GetNote(): void {
    this.loading = true;
    this.NotasService.GetNotes().subscribe(data => {
      console.log(data);
      this.listNotas = data;
      this.loading = false;
      this.toastr.info('Notas listadas con exito', 'Notas');
    }, error => {
      console.log(error);
      this.loading = false;
      this.toastr.error('Ocurrio un error', 'Error');
    });
  }

}
