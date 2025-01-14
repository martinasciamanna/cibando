import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Recipe } from '../models/recipes.model';
import { RECIPES } from '../mocks/recipes.mock';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  getRecipes():Observable<Recipe[]>{
    return of (RECIPES)

  }

  getDetail(id:number):Observable<Recipe | undefined>{
    const recipe = RECIPES.find(ricetta => ricetta._id === id);
    return of(recipe);

  }
}
