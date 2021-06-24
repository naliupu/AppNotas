import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
import { ToastrService } from 'ngx-toastr';
import { Notas } from 'src/app/models/notas';
import { NotasService } from 'src/app/service/notas.service';
import { GetDateService } from 'src/app/service/get-date.service';
import { Router } from '@angular/router';

// import { UpdateNotasComponent} from '../update-notas/update-notas.component';

@Component({
  selector: 'app-inicio-notas',
  templateUrl: './inicio-notas.component.html',
  styleUrls: ['./inicio-notas.component.css']
})
export class InicioNotasComponent implements OnInit {
  loading = false;
  myDate = new Date();//Para sacar la fecha de hoy
  fecha: Notas = null;
  updateDate: Notas;
  SearchDate: FormGroup; //formGroup de formulario para ingresar fecha
  dataNull = 0;
  listNotas: Notas[] = []; //Guarda un listado de notas 
  listNotasFecha: Notas[] = []; //Guarda un listado de notas que se buscan por fecha
  idNota = null;


  notas: Notas;
  nota: any;
  listNotass: Notas[] = [];

  constructor(
    private notasService: NotasService,
    private getDate: GetDateService,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.SearchDate = this.fb.group({
      updateDate: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.GetNote();
  }

  refresh(): void {
    window.location.reload();
  }

  saveNota(nota) {
    this.getDate.nota = nota;
    console.log(this.getDate);
    this.router.navigate(['/update']);
  }

  GetNote(): void {
    this.loading = true;
    this.notasService.GetNotes().subscribe(data => {
      this.listNotas = data.notas;
      console.log(this.listNotas);
      this.loading = false;
      this.toastr.info('Notas listadas con exito', 'Notas');
    }, error => {
      console.log(error);
      this.loading = false;
      this.toastr.error('Ocurrio un error', 'Error');
    });
  }

  SearchByDateNote(): void {
    this.loading = true;
    const notas: Notas = {
      updateDate: this.SearchDate.value.updateDate,
    };
    this.notasService.SearchByDateNote(notas).subscribe(data => {
      this.listNotasFecha = data.notas;
      if (this.listNotasFecha.length > 0) {
        console.log(this.listNotasFecha);
        this.listNotasFecha = data.notas;
        this.toastr.info('Notas filtradas con exito', 'Notas');
      }

      if (this.listNotasFecha.length === 0) {
        this.toastr.warning('No se encontro notas en la fecha indicada', 'Sin notas');
        console.log(this.listNotasFecha.length);
        this.updateDate = null;
        this.dataNull = 1;
      }
      this.loading = false;
    }, error => {
      console.log(this.listNotasFecha);
      console.log(error);
      this.loading = false;
      this.toastr.error('Ocurrio un error', 'Error');
    });

  }

  eliminarNota(nota: Notas): void {
    Swal.fire({
      title: 'Estas seguro de eliminar esta nota?',
      text: `No podras recuperar la nota al eliminar!`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si, Eleminar nota!'
    }).then(result => {
      if (result.value) {
        this.notasService.DeleteNote(nota).subscribe(() => {
          Swal.fire('Nota eliminada!', 'La nota fue eliminado con exito', 'success');
          this.GetNote();
          this.loading = false;
        }, error => {
          Swal.fire('Error!', 'Ocurrio un error', 'error');
          console.log(error)
          this.loading = false;
          this.toastr.error('Ocurrio un error', 'Error');
          this.GetNote();
        });
      }
    });
  }
}
