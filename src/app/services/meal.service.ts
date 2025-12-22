import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Meal, MealResponse } from '../models/meal.interface';

@Injectable({
  providedIn: 'root',
})
export class MealService {
  private http = inject(HttpClient);

  private apiUrl = 'https://www.themealdb.com/api/json/v1/1/';

  // Obtiene el listado de recetas de una categoría.

  getMeals(): Observable<Meal[]> {
    return this.http
      .get<MealResponse>(`${this.apiUrl}filter.php?c=Seafood`)
      .pipe(map((response) => response.meals || []));
  }

  // Obtiene el detalle completo de una receta por su ID.

  getMealById(id: string): Observable<Meal | undefined> {
    return this.http
      .get<MealResponse>(`${this.apiUrl}lookup.php?i=${id}`)
      .pipe(
        map((response) => (response.meals ? response.meals[0] : undefined))
      );
  }
}
