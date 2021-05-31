import { Component, OnInit } from '@angular/core';
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
  loading = false;
  constructor(private notasService: NotasService,
              private toastr: ToastrService) { 
              
  }

  ngOnInit(): void {
    this.GetNote();
  }


  GetNote(): void{
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

  SearchByDateNote(fecha: Date): void{
    this.loading = true;
    this.notasService.SearchByDateNote(fecha).subscribe(data => {
      console.log(data);
      this.listNotas = data;
      this.loading = false;
    }, error => {
      console.log(error);
      this.loading = false;
      this.toastr.error('Opss.. ocurrio un error', 'Error');
    });

  }

  eliminarNota(idNota: number): void{
    if(confirm('Esta seguro que desea eliminar la nota')){
      this.loading = true;
      this.notasService.DeleteNote(idNota).subscribe(data => {
        this.loading = false;
        this.toastr.success('La nota fue eliminado con exito', 'Nota eliminada');
        this.GetNote();
      }, error => {
        this.loading = false;
        this.toastr.error('Opss.. ocurrio un error', 'Error');
      });
    }
  }
}
