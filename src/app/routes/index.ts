import {Routes} from '@angular/router';
import {BaseScreenComponent} from '../base-screen/base-screen.component';
import {AssignmentModuleFourComponent} from '../assignment-module-four/assignment-module-four.component';
import {AssigmnetModuleTwoComponent} from '../assignmet-module-two/assigmnet-module-two.component';

import {SectionFiveComponent} from '../section-five/section-five.component';
import {RecipesComponent} from '../recipes/recipes.component';
import {ShoppingListComponent} from '../shopping-list/shopping-list.component';
import {SectionNineComponent} from '../section-nine/section-nine.component';
import {AssignmentSectionNineComponent} from '../assignment-section-nine/assignment-section-nine.component';

export const routes: Routes = [
  {
    path: '',
    component: BaseScreenComponent
  },
  {
    path: 'assignment-four',
    component: AssignmentModuleFourComponent
  },
  {
    path: 'assignment-module-two',
    component: AssigmnetModuleTwoComponent
  },
  {
    path: 'recipes',
    component: RecipesComponent
  },
  {
    path: 'shopping-list',
    component: ShoppingListComponent
  },
  {
    path: 'section-five',
    component: SectionFiveComponent
  },
  {
    path: 'section-nine',
    component: SectionNineComponent
  },
  {
    path: 'assignment-nine',
    component: AssignmentSectionNineComponent
  }
];
