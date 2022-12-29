import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips';
import { ReactiveFormsModule } from '@angular/forms';
import { CharacterCardComponent } from './character-card/character-card.component';
import { CharacterCardModule } from './character-card/character-card.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CharactersComponent,
    CharacterCardComponent
  ],
  exports: [
    CharactersComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    CharacterCardModule
  ]
})
export class CharactersModule { }
