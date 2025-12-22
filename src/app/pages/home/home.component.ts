import { Component, OnInit, inject } from '@angular/core';
import { MealService } from '../../services/meal.service';
import { Meal } from '../../models/meal.interface';
import { MealCardComponent } from '../../components/meal-card/meal-card.component';
import { MealGridComponent } from '../../components/meal-grid/meal-grid.component';

// Material Imports
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MealCardComponent,
    MealGridComponent,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private mealService = inject(MealService);

  // Variables para el control de flujo
  meals: Meal[] = [];
  loading = true;
  viewMode: 'cards' | 'grid' = 'cards'; // Estado de la vista por defecto

  ngOnInit(): void {
    this.loadMeals();
  }

  loadMeals() {
    this.loading = true;
    this.mealService.getMeals().subscribe({
      next: (data) => {
        this.meals = data;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }

  // Método para cambiar la vista desde el botón toggle
  setView(mode: 'cards' | 'grid') {
    this.viewMode = mode;
  }
}