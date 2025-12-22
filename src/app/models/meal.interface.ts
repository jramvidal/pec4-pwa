// La API siempre envuelve la respuesta en un objeto con la propiedad "meals"
export interface MealResponse {
  meals: Meal[] | null;
}

export interface Meal {
  idMeal: string;
  strMeal: string;
  strDrinkAlternate: string | null;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string | null;
  strYoutube: string | null;
  [key: string]: string | null | undefined; 
}