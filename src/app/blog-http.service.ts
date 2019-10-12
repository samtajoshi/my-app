//remove krna hai
//import 'core-js/es7/reflect';

import { Injectable } from '@angular/core';
import { HttpClient , HttpErrorResponse } from '@angular/common/http';

//importing observable related codes
import { Observable } from 'rxjs/observable';

//import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do'
import { $ } from 'protractor';

@Injectable()
export class BlogHttpService {
  public allBlogs :any;
  public currentBlog : any;
  public myResponse :any;
  public baseUrl : 'https://blogapp.edwisor.com/api/v1/blogs';
  
  
  constructor( public _http : HttpClient ) { 
    
    console.log('constructor of blog-http.service is called');
  }

  //method to return all the blogs
  public getAllBlogs() : any{
    console.log('getAllBlog() function is running in blog-http.service.ts')
    this.myResponse = this._http.get('https://blogapp.edwisor.com/api/v1/blogs/all?authToken=YmZiNGExOTJjNmFmYzgwZWE4ZGUwOTAyMGU3ZjI5MmMyNjkxNmE3YWVkZTljZTcyZDc2ZjA0MjBkZWRhNDA3NDkyMDYyNzFlMmY0NTZiNjZkMWMzNDg2MzllY2E3MTQ0NTEwNjdlYjEwZTVjNzMwYmU3MmYxYmYwZjRiMTIzN2E3OQ==');
    console.log('http.get() response in blog-http.service.ts is = '+this.myResponse);
    console.log(this.myResponse);
    return this.myResponse;
  }

  
 
}
