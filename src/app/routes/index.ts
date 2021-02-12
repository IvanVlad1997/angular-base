import {Routes} from '@angular/router';
import {BaseScreenComponent} from '../base-screen/base-screen.component';
import {AssignmentModuleFourComponent} from '../assignment-module-four/assignment-module-four.component';
import {AssigmnetModuleTwoComponent} from '../assignmet-module-two/assigmnet-module-two.component';

import {SectionFiveComponent} from '../section-five/section-five.component';
import {RecipesComponent} from '../recipes/recipes.component';
import {ShoppingListComponent} from '../shopping-list/shopping-list.component';
import {SectionNineComponent} from '../section-nine/section-nine.component';
import {AssignmentSectionNineComponent} from '../assignment-section-nine/assignment-section-nine.component';
import {SectionElevenComponent} from '../section-eleven/section-eleven.component';
import {HomeComponent} from '../section-eleven/home/home.component';
import {ServerListComponent} from '../section-eleven/server-list/server-list.component';
import {UserListComponent} from '../section-eleven/user-list/user-list.component';
import {UserItemComponent} from '../section-eleven/user-item/user-item.component';
import {PageNotFoundComponent} from '../page-not-found/page-not-found.component';
import {FakeAuthGuard} from '../guards/fake-auth-guard';
import {RecipeDetailComponent} from '../recipe-detail/recipe-detail.component';
import {RecipeStartComponent} from '../recipe-start/recipe-start.component';
import {RecipeEditComponent} from '../recipe-edit/recipe-edit.component';
import {HttpTestComponent} from '../http-test/http-test.component';
import {AuthComponent} from '../auth/auth/auth.component';
import {AuthGuard} from '../guards/auth-guard';
import {FrontendComponent} from '../frontend/frontend.component';
import {PostCreateComponent} from '../frontend/post-create/post-create.component';
import {PostsComponent} from '../frontend/post-list/posts.component';
import {FullcalendarComponent} from '../fullcalendar/fullcalendar.component';

export const routes: Routes = [
  {
    path: '',
    component: BaseScreenComponent
  },
  {
    path: 'frontend',
    component: FrontendComponent,
    children: [
      {
        path: '',
        component: PostsComponent,
      },
      {
        path: 'create',
        component: PostCreateComponent
      },
      {
        path: 'edit/:postId',
        component: PostCreateComponent
      },
    ]
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
    component: RecipesComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: RecipeStartComponent,
      },
      {
        path: 'new',
        component: RecipeEditComponent
      },
      {
        path: ':id',
        component: RecipeDetailComponent,
      },
      {
        path: ':id/edit',
        component: RecipeEditComponent
      }
    ]
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
  },
  {
    path: 'section-eleven',
    component: SectionElevenComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'servers-list',
        canActivate: [FakeAuthGuard],
        component: ServerListComponent,
      },
      {
        path: 'users-list',
        component: UserListComponent
      },
      {
        path: 'users-list/:id',
        component: UserItemComponent
      }
    ]
  },
  {
    path: 'fullcalendar',
    component: FullcalendarComponent
  },
  {
    path: 'http-test',
    component: HttpTestComponent,
  },
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: 'not-found',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/not-found'
  }

];
