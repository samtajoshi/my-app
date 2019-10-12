import { Component, OnInit } from '@angular/core';

//importing route related code, which captures the route parameter passed to it
import {ActivatedRoute} from '@angular/router';

//import blog service
import { BlogService } from '../blog.service';



@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})


export class BlogViewComponent implements OnInit {

  public currentBlog : any; 



  constructor(public blogService : BlogService, private _route: ActivatedRoute ) {
    console.log('constructor is called');
   }

  ngOnInit() {

    //getting the blogId from the route
    let myId : string = this._route.snapshot.paramMap.get('blogId');    
    this.currentBlog = this.blogService.getInformation(myId);
  }

 

}
