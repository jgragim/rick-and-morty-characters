import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  constructor() { }

  public menuOpened: boolean = true;

  public toggleMenu() {
    this.menuOpened = !this.menuOpened;
  }

}
