import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PasswordModule } from 'primeng/password';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { DividerModule } from 'primeng/divider';
import { CarouselComponent } from './components/shared/carousel/carousel.component';
import { HomeComponent } from './components/home/home.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { RecipeCardComponent } from './components/shared/recipe-card/recipe-card.component';
import { DetailComponent } from './components/recipes/detail/detail.component';
import { RecipesListComponent } from './components/recipes/recipes-list/recipes-list.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrazioneComponent } from './components/user/registrazione/registrazione.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    HomeComponent,
    RecipesComponent,
    HeaderComponent,
    RecipeCardComponent,
    DetailComponent,
    RecipesListComponent,
    RegistrazioneComponent,


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    PasswordModule,
    DividerModule,
    NgbCollapseModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
