import { Component, OnInit } from '@angular/core';

//import blog-http service
import { BlogHttpService } from '../blog-http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnInit {  

public allBlogs : any;

  constructor(public blogHttpService : BlogHttpService) {    
   
    
  }

  ngOnInit() {
    

    //this.allBlogs = this.blogHttpService.getAllBlogs();
    this.allBlogs = this.blogHttpService.getAllBlogs().subscribe(

      response => {
        console.log(response);
        this.allBlogs = response.data;
      },

      error => {
        console.log('some error occured , (file is home.component.ts)');
        console.log(error.errorMessage);
      }
      
    )
    
    
  }

 


}
