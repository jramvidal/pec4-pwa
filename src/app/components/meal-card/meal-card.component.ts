import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Meal } from '../../models/meal.interface';

@Component({
  selector: 'app-meal-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterLink], // Importamos los módulos de Material necesarios
  templateUrl: './meal-card.component.html',
  styleUrl: './meal-card.component.scss'
})
export class MealCardComponent {
  // Recibimos una receta individual
  @Input({ required: true }) meal!: Meal;
}