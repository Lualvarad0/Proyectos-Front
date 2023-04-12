import { Component, OnInit } from '@angular/core';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  paises: any[] = [];
  favoritos: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Realizar petición HTTP para obtener la lista de países
    this.http.get<any[]>('https://restcountries.com/v2/all').subscribe(
      data => {
        this.paises = data;
      },
      error => {
        console.log(error);
      }
    );
  }
  agregarFavorito(pais: any): void {
    if (!this.esFavorito(pais)) {
      this.favoritos.push(pais);
      localStorage.setItem('favoritos', JSON.stringify(this.favoritos));
    }
  }

  eliminarFavorito(pais: any): void {
    const index = this.favoritos.indexOf(pais);
    if (index !== -1) {
      this.favoritos.splice(index, 1);
      localStorage.setItem('favoritos', JSON.stringify(this.favoritos));
    }
  }

  esFavorito(pais: any): boolean {
    return this.favoritos.includes(pais);
  }

}


