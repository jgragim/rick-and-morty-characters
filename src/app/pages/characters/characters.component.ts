import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { EpisodeService } from '@app/shared/services/episode.service';
import { CharacterFilter } from 'rickmortyapi/dist/interfaces';
import { Subscription } from 'rxjs';
import { CardAnimation, FadeInAnimation } from 'src/app/shared/animations/animations';
import { Character, CharacterGender, CharacterStatus, Episode } from 'src/app/shared/models/character.model';
import { CharacterService } from 'src/app/shared/services/character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
  animations: [CardAnimation, FadeInAnimation]
})
export class CharactersComponent implements OnInit, OnDestroy {

  // TODO: SIEMPRE QUE PUEDAS USA CONST.

  public CharacterStatus = CharacterStatus;
  public CharacterGender = CharacterGender;
  public formGroup: FormGroup;
  public loading: boolean = true;
  public noDataFound: boolean = false;
  public error: boolean = false;
  public name: string;
  public status: string;
  public species: string;
  public gender: string;
  public characters: Character[] | undefined = [];
  public queryParamsSubscription: Subscription;

  constructor(private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private router: Router, private characterService: CharacterService, private episodeService: EpisodeService) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      name: new FormControl(''),
      status: new FormControl(''),
      species: new FormControl(''),
      gender: new FormControl('')
    });
    // Recepción parámetros de navegación y carga de valores de los filtros.
    this.queryParamsSubscription = this.activatedRoute.queryParams.subscribe(params => {
      // Comprobamos si hay parámetros de navegación.
      if (Object.keys(params).length > 0) {
        // Obtenemos los valores de los filtos de la URL.
        this.name = params["name"];
        this.status = params["status"];
        this.species = params["species"];
        this.gender = params["gender"];
        // Los filtros de listas de valores solo los aplicamos si son valores válidos.
        if (this.status && !Object.values(CharacterStatus).includes(this.status as CharacterStatus)) this.status = '';
        if (this.gender && !Object.values(CharacterGender).includes(this.gender as CharacterGender)) this.gender = '';
      }
      this.search();
    });
  }

  public onSubmit() {
    this.name = this.formGroup.get('name')?.value;
    this.status = this.formGroup.get('status')?.value;
    this.species = this.formGroup.get('species')?.value;
    this.gender = this.formGroup.get('gender')?.value;
    this.navigateWithParams();
  }

  public removeFilter(key: string) {
    switch (key) {
      case 'name': {
        this.name = '';
        break;
      }
      case 'status': {
        this.status = '';
        break;
      }
      case 'species': {
        this.species = '';
        break;
      }
      case 'gender': {
        this.gender = '';
        break;
      }
      default: {
        console.error('Invalid key');
        break;
      }
    }
    this.navigateWithParams();
  }

  public clearAll() {
    this.name = '';
    this.status = '';
    this.species = '';
    this.gender = '';
  }

  public navigateWithParams() {
    let navigationExtras: NavigationExtras = {queryParams: {}};
    if (this.name) navigationExtras.queryParams!["name"] = this.name;
    if (this.status) navigationExtras.queryParams!["status"] = this.status;
    if (this.species) navigationExtras.queryParams!["species"] = this.species;
    if (this.gender) navigationExtras.queryParams!["gender"] = this.gender;
    this.router.navigate(["/characters"], navigationExtras);
  }

  public async search() {
    this.loading = true;
    this.characters = [];
    this.noDataFound = false;
    this.error = false;
    let filters: CharacterFilter = {
      name: this.name ? this.name : '',
      status: this.status ? this.status : '',
      species: this.species ? this.species : '',
      gender: this.gender ? this.gender : ''
    }
    let resCharacters = await this.characterService.getCharacters(filters);
    if (resCharacters.data?.results) {
      this.characters = resCharacters.data.results;
      // Para saber el nombre del primer episodio es necesario llamar a la API de episodios, pues con el personaje sólo nos viene la url con su id.
      // Asumo que la lista de episodios ya está ordenada por fecha.
      // Obtenemos los ids de las urls y eliminamos los repetidos, si los hay.
      let episodeIds: number[] = Array.from(new Set(this.characters.map(character => Number(character.episode[0].split('episode/')[1]))));
      let resEpisodes = await this.episodeService.getEpisode(episodeIds);
      let episodios: Episode[] = episodeIds.length > 1 ? (<Episode[]>resEpisodes.data) : [(<Episode>resEpisodes.data)];
      this.characters?.forEach(character => {
        character.firstEpisode = episodios.find(episode => episode.url === character.episode[0])?.name;
      });
    }
    else {
      // Tratamiento de errores.
      if (resCharacters.status = 404) this.noDataFound = true;
      else this.error = true;
    }
    this.loading = false;
  }

  ngOnDestroy() {
    // Cancelamos la suscripción a los queryParams.
    this.queryParamsSubscription.unsubscribe();
  }

}
