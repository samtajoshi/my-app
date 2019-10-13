import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { FormsModule } from '@angular/forms';

//importing observable related codes
import { Observable } from 'rxjs';


//import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/do';

import { $ } from 'protractor';

@Injectable({
  providedIn : 'root'
})
export class BlogHttpService {
  public allBlogs :any;
  public currentBlog : any;
  public myResponse :any;
  public baseUrl :any ; 
  public authToken : any ;
  public currentResponse :any;
  
  
  constructor( private _http : HttpClient ) { 
    this.baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs';
    this.authToken = 'YmZiNGExOTJjNmFmYzgwZWE4ZGUwOTAyMGU3ZjI5MmMyNjkxNmE3YWVkZTljZTcyZDc2ZjA0MjBkZWRhNDA3NDkyMDYyNzFlMmY0NTZiNjZkMWMzNDg2MzllY2E3MTQ0NTEwNjdlYjEwZTVjNzMwYmU3MmYxYmYwZjRiMTIzN2E3OQ==';
    this.myResponse = this._http.get(this.baseUrl + '/all?authToken=' + this.authToken); 
    console.log('url is = '+this.baseUrl + '/all?authToken=' + this.authToken)
  }

  //method to return all the blogs
  public getAllBlogs() {   
    this.myResponse = this._http.get(this.baseUrl + '/all?authToken=' + this.authToken);
       return this.myResponse;
  }

  
  //function to return single blog information of the array
  public getInformation(myId) {
    this.currentResponse = this._http.get(this.baseUrl+'/view/'+myId+'?authToken='+this.authToken);
    console.log('current blog is = '+this.baseUrl+'/view/'+myId+'?authToken='+this.authToken);
    return this.currentResponse;
    
  }

  //function to create blog
public createBlog(blogData){
  console.log('blogData is= '+JSON.stringify(blogData));
  this.myResponse = this._http.post(this.baseUrl+'/create?authToken='+this.authToken,blogData);
  console.log('myResponse is= '+JSON.stringify(this.myResponse));
  return this.myResponse;

}

//function to delete blog
public deleteBlog(blogId){
  let data =[];
  this.myResponse = this._http.post(this.baseUrl+'/'+blogId+'/delete?authToken='+this.authToken,data);
  return this.myResponse;

}

//function to edit blog
public editBlog(blogId,blogData){
  this.myResponse = this._http.put(this.baseUrl+'/'+blogId+'/edit?authToken='+this.authToken,blogData);
  return this.myResponse;
}

}

