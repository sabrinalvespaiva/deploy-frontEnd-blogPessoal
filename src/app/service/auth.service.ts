import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entrar(userLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>(' https://blogpessoaldasasa.herokuapp.com/usuarios/logar', userLogin)
  }

  cadastrar(user: User): Observable<User>{
    return this.http.post<User>('https://blogpessoaldasasa.herokuapp.com/usuarios/cadastrar', user)
  }

  getByIdUser(id: number): Observable<User>{
    return this.http.get<User>('https://blogpessoaldasasa.herokuapp.com/usuarios/${id}')
  }

  logado(){
    //começo minha execução com ok falso
    let ok: boolean = false

    //se ok for diferente de vazio ele sera um true
    if(environment.token != ''){
      ok = true
    }

    //retorna o ok true o false, depende se ele vai entrar na condição
    return ok
  }

  adm(){
    let ok: boolean = false

    if (environment.tipo == 'adm'){
      ok = true
    } return ok
  }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  atualizar(user: User): Observable<User>{
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
    return this.http.put<User>('https://blogpessoaldasasa.herokuapp.com/usuarios/atualizar', user, this.token)
  }

}
