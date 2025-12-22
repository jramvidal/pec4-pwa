import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Meal } from '../../models/meal.interface';

@Component({
  selector: 'app-meal-grid',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './meal-grid.component.html',
  styleUrl: './meal-grid.component.scss'
})
export class MealGridComponent {
  // Recibimos el array completo de recetas
  @Input({ required: true }) meals: Meal[] = [];

  // Definimos las columnas que Material Table va a renderizar
  displayedColumns: string[] = ['image', 'id', 'name', 'actions'];
}