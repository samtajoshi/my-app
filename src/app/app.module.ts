import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//abhi abhi
//import { HttpClientModule } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'; 
//router module used for setting up the application level route
import { RouterModule , Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { from } from 'rxjs';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';

//importing blog service
import { BlogService } from './blog.service';
import { BlogHttpService } from './blog-http.service';


//decorator
@NgModule({
  //array which is just declaring something
  declarations: [
    AppComponent,
    HomeComponent,
    BlogViewComponent,
    BlogCreateComponent,
    BlogEditComponent,
    AboutComponent,
    NotFoundComponent,
    
  ],
  
  //array importing something
  imports: [
    HttpClientModule,
    BrowserModule,

    //router module forRoot methood to declare the possible routes in application
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: '',redirectTo: 'home',pathMatch:'full'},
      {path : 'create' , component : BlogCreateComponent},
      {path : 'about' , component : AboutComponent},      
      {path : 'blog/:blogId', component : BlogViewComponent},
      {path : 'edit/:blogId', component:BlogEditComponent},
      {path : '**', component : NotFoundComponent},
      
      
      
    ])

  ],
  providers: [BlogService, BlogHttpService],
  bootstrap: [AppComponent]  //to tell angular to load this page first when the whole application is loading
})
export class AppModule { }
