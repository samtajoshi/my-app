import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class BlogService {

  public currentBlog : any;
  public data={
    "error": false,
    "message": "All Blog Details Found",
    "status": 200,
   //dummy blog variable
    "allBlogs" : [
    {
      "blogId" : "1",
      "lastmodified" : "2017-10-20T12:47:51.6782",
      "created" : "2017-10-20T12:47:51.6782",
      "tags" : [],
      "author" : "Admin",
      "category" : "comedy",
      "isPublished" : true,
      "views" : 0,
      "bodyHtml" : "this is blog body",
      "description" : "This is blog 1 description.",
      "title" : "This is blog 1 ...tada!.."

    },
    {
      "blogId" : "2",
      "lastmodified" : "2017-10-21T12:47:51.6782",
      "created" : "2017-10-21T12:47:51.6782",
      "tags" : ["humor","emotion","comedy"],
      "author" : "AdminOnly",
      "category" : "comedyHi",
      "isPublished" : true,
      "views" : 0,
      "bodyHtml" : "<h1>Hello Public</h1><p>this is blog2 body</p>",
      "description" : "This is blog 2 description.",
      "title" : "This is blog 2 ...tada!.."

    },

    {
      "blogId" : "3",
      "lastmodified" : "2017-10-21T12:47:51.6782",
      "created" : "2017-10-21T12:47:51.6782",
      "tags" : ["humor","emotion","comedy","anger"],
      "author" : "AdminOnly",
      "category" : "comedyHi",
      "isPublished" : true,
      "views" : 0,
      "bodyHtml" : "<h1>What's up people</h1><p>Be Happy :)</p>",
      "description" : "This is blog 2 description.",
      "title" : "This is blog 2 ...tada!.."

    },
    
  ]
}
 


  constructor() { 
    console.log('service constructor is called')
  }

  //function to return whole array
  public getAllBlogs(){
       
    return this.data.allBlogs;
  }

  //function to return single blog information of the array
  public getInformation(myId):any {
    for(let blog of this.data.allBlogs){
      if(blog.blogId==myId){
        this.currentBlog=blog;
      }
    }
    return this.currentBlog;
  }
  
}
