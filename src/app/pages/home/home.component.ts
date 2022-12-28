import { Component } from '@angular/core';
import { FadeInAnimation } from '@app/shared/animations/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [FadeInAnimation]
})
export class HomeComponent {

}
