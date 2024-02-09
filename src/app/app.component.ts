import { Component } from '@angular/core';
import { ClienteService } from './services/cliente/cliente.service';
import { PrestamoService } from './services/prestamos/prestamo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public clientes: any[];
  public opcionSeleccionada: string;

  data: any = {};
  selectedMonth: string = '';
  selectedMonthData: any[] = [];
Object: any;

  constructor(private prestamoService: PrestamoService,
              private clienteService: ClienteService) {
    this.opcionSeleccionada = 'todos';
    this.clientes = [];

  }

  public ngOnInit() {
    this.getClientes();
    this.getPrestamos();
  }

  public getClientes() {
    this.clienteService.getClientes().subscribe(
      (data) => {
        console.log(data.data);
        this.clientes = data.data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  public getPrestamos() {
    this.prestamoService.getPrestamos().subscribe(
      (data: any) => {
        this.data = data;
        console.log(this.data.data);
        this.selectedMonth = Object.keys(this.data)[0];
        this.selectedMonthData = this.data[this.selectedMonth];
      },
      (error: any) => {
        console.error('Error al obtener los datos de préstamos', error);
      }
    );
  }

  filtrarEndpoint(event: any) {
    this.opcionSeleccionada = event.target?.value || 'todos'; 

    if (this.opcionSeleccionada === 'librosVencidos') {
      this.clienteService.getLibrosVencidos().subscribe(
        (data) => {
          console.log(data.data);
          this.clientes = data.data;
        },
        (error) => {
          console.error(error);
        }
      );
    }  else {
      this.getClientes();
    }
  }


}
