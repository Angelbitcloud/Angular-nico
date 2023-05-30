import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent {
    items: MenuItem[] = [];

    ngOnInit() {
        this.items = [
            {
                label: 'Inicio',
                icon: 'pi pi-fw pi-desktop',
                routerLink: '/home/inicio'
            },
            {
                label: 'Modulos',
                icon: 'pi pi-fw pi-folder',
                items: [
                    {
                        label: 'Crear Y Eliminar Db',
                        icon: 'pi pi-fw pi-database',
                        routerLink: '/home/crear-db'
                    },
                    {
                        label: 'Crear Y Eliminar Tablas',
                        icon: 'pi pi-fw pi-database',
                        routerLink: '/home/crear-tabla'
                    },
                    {
                        label: 'Crear Y Obtener Registros',
                        icon: 'pi pi-fw pi-database',
                        routerLink: '/home/crear-registros'
                    },
                    {
                        label: 'Manejo De Tipos De Datos',
                        icon: 'pi pi-fw pi-database',
                        routerLink: '/home/tipos-datos'
                    },
                    {
                        label: 'Keys',
                        icon: 'pi pi-fw pi-database',
                        routerLink: '/home/keys'
                    },
                    {
                        label: 'Funciones En Las Tablas',
                        icon: 'pi pi-fw pi-database',
                        routerLink: '/home/funciones-tablas'
                    },
                    {
                        label: 'Alteraciones De Tablas',
                        icon: 'pi pi-fw pi-database',
                        routerLink: '/home/alter-tablas'
                    },
                    {
                        label: 'Tipos De Joins',
                        icon: 'pi pi-fw pi-database',
                        routerLink: '/home/joins'
                    },
                    {
                        label: 'Subconsultas',
                        icon: 'pi pi-fw pi-database',
                        routerLink: '/home/subconsultas'
                    },
                    {
                        label: 'Pruebas',
                        icon: 'pi pi-fw pi-database',
                        routerLink: '/home/pruebas'
                    },
                ]
            },
        ];
    }
}

