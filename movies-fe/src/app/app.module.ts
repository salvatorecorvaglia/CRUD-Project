import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RoutingModuleModule} from './routing-module.module';
import {AuthService} from './services/auth.service';
import { CompareValidatorDirective } from './shared/compare-validator.directive';
import { HomeComponent } from './home/home.component';
import { MyselfComponent } from './myself/myself.component';
import { ExamComponent } from './exam/exam.component';
import { UsersComponent } from './users/users.component';
import { GeneralsComponent } from './generals/generals.component';
import { ExampleComponent } from './example/example.component';
import { MovieComponent } from './movie/movie.component';
import {MovieService} from './services/movie.service';
import {NgxPaginationModule} from 'ngx-pagination';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RatingModule} from 'ng-starrating';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { ErrorComponent } from './error/error.component';
import { MovieViewerComponent } from './movie-viewer/movie-viewer.component';
import {DatePipe} from '@angular/common';
import { FavouriteMovieComponent } from './favourite-movie/favourite-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    CompareValidatorDirective,
    HomeComponent,
    MyselfComponent,
    ExamComponent,
    UsersComponent,
    GeneralsComponent,
    ExampleComponent,
    MovieComponent,
    AddMovieComponent,
    ErrorComponent,
    MovieViewerComponent,
    FavouriteMovieComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    NgbModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RoutingModuleModule,
    RatingModule
  ],
  providers: [AuthService, MovieService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
