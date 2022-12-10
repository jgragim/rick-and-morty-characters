import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Character } from '../models/character.model';
import { ApiResponse, CharacterFilter, Info } from 'rickmortyapi/dist/interfaces';
import { getCharacters } from 'rickmortyapi';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private httpClient: HttpClient) { }

  // TODO
  // VERSIÓN USANDO HttpClient.
  // public getCharactersHttpClient(name: string, status: string, species: string, gender: string): Observable<Character[]> {
  //   let query = `${environment.baseUrlAPI}/?name=${name}&status=${status}&species=${species}&gender=${gender}`;
  //   return this.httpClient.get<Character[]>(query);
  // }

  // VERSIÓN USANDO la biblioteca https://github.com/afuh/rick-and-morty-api-node.
  public async getCharacters(filters: CharacterFilter): Promise<ApiResponse<Info<Character[]>>> {
    return getCharacters(filters);
  }

}
