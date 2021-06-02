import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Notas } from 'src/app/models/notas';
import { NotasService } from 'src/app/service/notas.service';

@Component({
  selector: 'app-inicio-notas',
  templateUrl: './inicio-notas.component.html',
  styleUrls: ['./inicio-notas.component.css']
})
export class InicioNotasComponent implements OnInit {
  listNotas: Notas[] = [];
  listNotasFecha: Notas[] = [];
  fecha: Date = null;
  SearchDate: FormGroup;
  myDate = new Date();
  dataNull = 0;


  loading = false;
  constructor(private notasService: NotasService,
    private toastr: ToastrService,
    private fb: FormBuilder,
  ) {
    this.SearchDate = this.fb.group({
      Search: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.GetNote();
  }

  refresh(): void {
    window.location.reload();
  }


  GetNote(): void {
    this.loading = true;
    this.notasService.GetNotes().subscribe(data => {
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

  SearchByDateNote(fecha: Date): void {
    this.loading = true;
    fecha = this.fecha;
    this.notasService.SearchByDateNote(fecha).subscribe(data => {

      this.listNotasFecha = data;
      if (this.listNotasFecha.length == 0) {
        console.log("No se encontraron notas");
        this.toastr.warning('No se encontro notas en la fecha indicada', 'Sin notas');
        this.dataNull = 1;
        this.fecha =null;
      }
      this.dataNull = 1;
      this.fecha =null;
      this.loading = false;
      this.toastr.info('Notas filtradas con exito', 'Notas');
    }, error => {
      console.log(error);
      this.loading = false;
      this.toastr.error('Ocurrio un error', 'Error');
    });

  }

  eliminarNota(idNota: number): void {
    if (confirm('Esta seguro que desea eliminar la nota')) {
      this.loading = true;
      this.notasService.DeleteNote(idNota).subscribe(data => {
        this.loading = false;
        this.toastr.success('La nota fue eliminado con exito', 'Nota eliminada');
        this.GetNote();
      }, error => {
        console.log(error)
        this.loading = false;
        this.toastr.error('Ocurrio un error', 'Error');
      });
    }
  }
}
