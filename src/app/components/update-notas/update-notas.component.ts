import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NotasService } from 'src/app/service/notas.service';
import { GetDateService } from 'src/app/service/get-date.service';
import { Notas } from '../../models/notas';

@Component({
  selector: 'app-update-notas',
  templateUrl: './update-notas.component.html',
  styleUrls: ['./update-notas.component.css']
})
export class UpdateNotasComponent implements OnInit {
  loading = false;
  updateNotas: FormGroup;
  listNotas: Notas[] = [];
  listNotass: Notas[] = [];

  fecha: Date = null;
  notaInicio = null;

  notas: Notas;
  nota: Notas;

  id: number;
  title: string;
  content: string;
  priority: number;


  constructor(private fb: FormBuilder,
    private notasService: NotasService,
    private router: Router,
    private toastr: ToastrService,
    private getDate: GetDateService
  ) {
    this.updateNotas = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(20)]],
      content: ['', [Validators.required, Validators.maxLength(300)]],
      priority: ['', Validators.required],
    });
  }

  //NO SE PARA QUE ES ESTO CONSULTAR?????
  // get f() { return this.updateNotas.controls; }
  //----------------------------------------------

  ngOnInit(): void {
    this.listData();
    this.setValue();
  }

  setValue() {
    this.updateNotas.setValue({ title: this.title, content: this.content, priority: this.priority });
  }

  listData() {
    this.nota = this.getDate.nota
    this.id = this.getDate.nota.id;
    this.title = this.getDate.nota.title;
    this.content = this.getDate.nota.content;
    this.priority = this.getDate.nota.priority;
  }

  UpdateNote(): void {
    console.log(this.updateNotas);
    const notas: Notas = {
      id: this.id,
      title: this.updateNotas.value.title,
      content: this.updateNotas.value.content,
      priority: parseInt(this.updateNotas.value.priority),
    };
    this.loading = true;
    console.log(notas)
    this.notasService.UpdateNote(notas).subscribe(data => {
      console.log(data);
      this.loading = false;
      this.toastr.success('La nota fue modificada con exito', 'Nota modificada');
      this.router.navigate(['/inicio']);
    }, error => {
      console.log(error);
      this.loading = false;
      this.toastr.error('Error al guadar nota', 'Error guardar');
    });
  }
}
