import { Component, OnInit } from '@angular/core';

//import blog-http service
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnInit {  

public allBlogs : any;

  constructor(public blogHttpService : BlogService) { 
    console.log("constructor of home.component.ts...initialising blogHttpService after installing")
    
  }

  ngOnInit() {
    console.log('ngOnit of home.component.ts is called , and then getAllBlogs() from blog-http.service is called');

    this.allBlogs = this.blogHttpService.getAllBlogs();
    /*this.allBlogs = this.blogHttpService.getAllBlogs().subscribe(

      data => {
        console.log(data);
        this.allBlogs = data["data"];
      },

      error => {
        console.log('some error occured , (file is home.component.ts)');
        console.log(error.errorMessage);
      }
      
    );*/
    console.log('final result is = '+this.allBlogs);
    console.log('that readable result is = '+JSON.stringify(this.allBlogs))
  }

 


}
