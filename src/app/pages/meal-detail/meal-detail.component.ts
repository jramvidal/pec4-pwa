import { Component, Input, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MealService } from '../../services/meal.service';
import { Meal } from '../../models/meal.interface';

// Material Imports
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs'; 
import { MatProgressBarModule } from '@angular/material/progress-bar'; 
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-meal-detail',
  standalone: true,
  imports: [
    MatButtonModule, 
    MatIconModule, 
    MatTabsModule, 
    MatProgressBarModule, 
    MatChipsModule,
    RouterLink
  ],
  templateUrl: './meal-detail.component.html',
  styleUrl: './meal-detail.component.scss'
})
export class MealDetailComponent implements OnInit {
  // Input Binding: Recibe el parámetro ':id' de la ruta directamente como variable
  @Input() id!: string; 
  
  private mealService = inject(MealService);
  
  meal: Meal | undefined;
  showDetails = false; // Controla si se muestran los detalles extendidos
  ingredients: string[] = [];

  ngOnInit(): void {
    if (this.id) {
      this.mealService.getMealById(this.id).subscribe(data => {
        this.meal = data;
        this.extractIngredients();
      });
    }
  }

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }

  // Helper para extraer ingredientes no nulos de la API
  private extractIngredients() {
    if (!this.meal) return;
    this.ingredients = [];
    // La API tiene hasta 20 ingredientes posibles
    for (let i = 1; i <= 20; i++) {
      const ingredient = this.meal[`strIngredient${i}`];
      const measure = this.meal[`strMeasure${i}`];
      if (ingredient && ingredient.trim() !== '') {
        this.ingredients.push(`${measure} ${ingredient}`);
      }
    }
  }
}