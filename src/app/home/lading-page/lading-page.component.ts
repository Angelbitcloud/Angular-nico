import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lading-page',
  templateUrl: './lading-page.component.html',
  styleUrls: ['./lading-page.component.css']
})
export class LadingPageComponent {
  constructor(private router: Router) { }

  redirigir(vista: string) {
    switch (vista) {
      case 'vista1':
        this.router.navigate(['/home/crear-db']);
        break;
      case 'vista2':
        this.router.navigate(['/home/crear-tabla']);
        break;
      case 'vista3':
        this.router.navigate(['/home/crear-registros']);
        break;
      case 'vista4':
        this.router.navigate(['/home/keys']);
        break;
      case 'vista5':
        this.router.navigate(['/home/tipos-datos']);
        break;
      case 'vista6':
        this.router.navigate(['/home/funciones-tablas']);
        break;
      case 'vista7':
        this.router.navigate(['/home/alter-tablas']);
        break;
      case 'vista8':
        this.router.navigate(['/home/joins']);
        break;
      case 'vista9':
        this.router.navigate(['/home/subconsultas']);
        break;
      case 'vista10':
        this.router.navigate(['/home/pruebas']);
        break;
    }
  }
}
