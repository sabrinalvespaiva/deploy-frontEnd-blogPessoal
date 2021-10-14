import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  //tras um array de objetos tema e não apenas um
  getAllTema(): Observable<Tema[]>{
    return this.http.get<Tema[]>('https://blogpessoaldasasa.herokuapp.com/tema', this.token)
  }

  getByIdTema(id: number): Observable<Tema>{
    return this.http.get<Tema>(`https://blogpessoaldasasa.herokuapp.com/tema/${id}`, this.token)

  }

  getByNomeTema(nome: string): Observable<Tema[]>{
    return this.http.get<Tema[]>(`https://blogpessoaldasasa.herokuapp.com/tema/nome/${nome}`, this.token)
  }

  //agora é apenas um tema pois vou postar um por vez
  postTema(tema: Tema): Observable<Tema>{
    return this.http.post<Tema>('https://blogpessoaldasasa.herokuapp.com/tema', tema, this.token)
  }

  putTema(tema: Tema): Observable<Tema>{
    return this.http.put<Tema>('https://blogpessoaldasasa.herokuapp.com/tema', tema, this.token)
  }

  deleteTema(id: number){
    return this.http.delete(`https://blogpessoaldasasa.herokuapp.com/tema/${id}`, this.token)
  }
}
