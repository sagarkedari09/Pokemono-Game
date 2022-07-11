import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICreatePoke,IPoke, IData } from 'src/app/app.types';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
baseURL:string = 'http://localhost:3000'
  constructor(private http:HttpClient) { }

  getPoke():Observable<IData>{
    return this.http.get(`${this.baseURL}/pokemon`) as Observable<IData>;
  }

    updatePokemon(data:IPoke):Observable<IPoke>{
      return this.http.put(`${this.baseURL}/pokemon`,data) as Observable<IPoke>
    }

    createPokemon(data:ICreatePoke):Observable<ICreatePoke>{
      return this.http.post(`${this.baseURL}/pokemon`, data) as Observable<ICreatePoke>;
    }

    deletePokemon(id:string):Observable<any>{
      return this.http.delete(`${this.baseURL}/pokemon/${id}`);        
    }
}
