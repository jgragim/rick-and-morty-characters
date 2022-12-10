import { Injectable } from '@angular/core';
import { getEpisode } from 'rickmortyapi';
import { ApiResponse, Episode } from 'rickmortyapi/dist/interfaces';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  constructor() { }

  public getEpisode(id: number | number[]): Promise<ApiResponse<Episode | Episode[]>> {
    return getEpisode(id);
  }

}
