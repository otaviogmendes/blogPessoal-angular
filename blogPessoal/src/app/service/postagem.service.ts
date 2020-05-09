import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  // todo modulo criado colocar dentro do parenteses do construtor
  constructor( private http: HttpClient) { }

  /* 
  
  CRUD - Create = get, Ready = post, Update = put e Delete = delete
  */

  // importar modulo de HTTP

getAllPostagens()
{
  return this.http.get('http://31.220.57.14:8080/postagens')
}
}
