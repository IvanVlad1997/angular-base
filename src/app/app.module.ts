import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BaseScreenComponent } from './base-screen/base-screen.component';
import { AssigmnetModuleTwoComponent } from './assignmet-module-two/assigmnet-module-two.component';
import { AssignmentModuleFourComponent } from './assignment-module-four/assignment-module-four.component';
import {ExtendedModule, FlexModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { CourseAppComponent } from './course-app/course-app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import { SectionFiveComponent } from './section-five/section-five.component';
import { FormFieldsComponent } from './section-five/form-fields/form-fields.component';
import { ShowListComponent } from './section-five/show-list/show-list.component';
import { GameControlComponent } from './assignment-module-four/game-control/game-control.component';
import { OddComponent } from './assignment-module-four/odd/odd.component';
import { EvenComponent } from './assignment-module-four/even/even.component';
import { SubMenuComponent } from './sub-menu/sub-menu.component';
import {BasicHighlightDirective} from './directives/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './directives/better-highlight/better-highlight.directive';
import { InteracitveHighlightDirective } from './directives/interactive-highlight/interacitve-highlight.directive';
import { SectionNineComponent } from './section-nine/section-nine.component';
import { AccountComponent } from './section-nine/account/account.component';
import { NewAccountComponent } from './section-nine/new-account/new-account.component';
import {MatSelectModule} from '@angular/material/select';
import { AssignmentSectionNineComponent } from './assignment-section-nine/assignment-section-nine.component';
import { ActiveUsersComponent } from './assignment-section-nine/active-users/active-users.component';
import { InactiveUsersComponent } from './assignment-section-nine/inactive-users/inactive-users.component';
import {ChangeUserStatus} from './services/change-user-status';
import {Counter} from './services/counter';
import {RecipeService} from './services/recipe.service';
import {ShoppingList} from './services/shopping-list';

@NgModule({
  declarations: [
    AppComponent,
    BaseScreenComponent,
    AssigmnetModuleTwoComponent,
    AssignmentModuleFourComponent,
    CourseAppComponent,
    ShoppingListComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingEditComponent,
    SectionFiveComponent,
    FormFieldsComponent,
    ShowListComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    SubMenuComponent,

    BasicHighlightDirective,

    BetterHighlightDirective,

    InteracitveHighlightDirective,

    SectionNineComponent,

    AccountComponent,

    NewAccountComponent,

    AssignmentSectionNineComponent,

    ActiveUsersComponent,

    InactiveUsersComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    ExtendedModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSelectModule
  ],
  providers: [ChangeUserStatus, Counter, RecipeService, ShoppingList],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg'));
  }
}
