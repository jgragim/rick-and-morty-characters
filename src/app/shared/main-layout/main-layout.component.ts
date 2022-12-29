import { Component } from '@angular/core';
import { LayoutService } from '../services/layout.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {

  constructor(public layoutService: LayoutService) {}

}
