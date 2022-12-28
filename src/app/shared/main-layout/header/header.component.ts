import { Component } from '@angular/core';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public layoutService: LayoutService) { }

  public navigateExternalUrl(url: string) {
    window.open(url, "_blank");
  }

}
