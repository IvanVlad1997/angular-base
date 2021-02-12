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
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import { SectionElevenComponent } from './section-eleven/section-eleven.component';
import { HomeComponent } from './section-eleven/home/home.component';
import { ServerListComponent } from './section-eleven/server-list/server-list.component';
import { ServerItemComponent } from './section-eleven/server-item/server-item.component';
import { ServerEditComponent } from './section-eleven/server-edit/server-edit.component';
import { UserListComponent } from './section-eleven/user-list/user-list.component';
import { UserItemComponent } from './section-eleven/user-item/user-item.component';
import {UserService} from './services/user.service';
import {ServerService} from './services/server.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {FakeAuthGuard} from './guards/fake-auth-guard';
import {FakeAuthService} from './services/fake-auth-service';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { HttpTestComponent } from './http-test/http-test.component';
import {HttpTestPost} from './services/http-test-post';
import { AuthComponent } from './auth/auth/auth.component';
import {Auth} from './services/auth';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner/loading-spinner.component';
import {AuthInterceptor} from './services/auth-interceptor';
import {AuthGuard} from './guards/auth-guard';
import { FrontendComponent } from './frontend/frontend.component';
import { PostsComponent } from './frontend/post-list/posts.component';
import { PostCreateComponent } from './frontend/post-create/post-create.component';
import {MatExpansionModule} from '@angular/material/expansion'
import {PostService} from './frontend/services/post';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FullcalendarComponent } from './fullcalendar/fullcalendar.component';
import {FullCalendarModule} from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction'; // a plugin

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);


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

    SectionElevenComponent,

    HomeComponent,

    ServerListComponent,

    ServerItemComponent,

    ServerEditComponent,

    UserListComponent,

    UserItemComponent,

    PageNotFoundComponent,

    RecipeStartComponent,

    RecipeEditComponent,

    HttpTestComponent,

    AuthComponent,

    LoadingSpinnerComponent,

    FrontendComponent,

    PostsComponent,

    PostCreateComponent,

    FullcalendarComponent,

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
    MatSelectModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    FullCalendarModule,
  ],
  providers: [ChangeUserStatus,
    Counter,
    Auth,
    RecipeService,
    ShoppingList,
    UserService,
    ServerService,
    FakeAuthGuard,
    FakeAuthService,
    HttpTestPost,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg'));
  }
}
