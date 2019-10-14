import { Component, OnInit } from '@angular/core';

//importing route related code, which captures the route parameter passed to it
import {ActivatedRoute,Router} from '@angular/router';

//import blog service
import { BlogHttpService } from '../blog-http.service';

//importing Location related code for goBack button
import {Location} from '@angular/common';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  providers:[Location]
})


export class BlogViewComponent implements OnInit {

  public currentBlog : any; 
  public myId : any;


  constructor(public bloghttpService : BlogHttpService, private _route: ActivatedRoute , public router : Router , public location : Location,public toastr : ToastrService) {
    console.log('constructor is called');
     //getting the blogId from the route
     this.myId = this._route.snapshot.paramMap.get('blogId'); 
   }

  ngOnInit() {

   
     //getting blog information using blogId  
    this.currentBlog = this.bloghttpService.getInformation(this.myId).subscribe(

      response => {this.currentBlog = response.data},
      error => {console.log(error.errorMessage)}
    );
  }

  //function to delete the blog
  public deleteThisBlog() {
    this.bloghttpService.deleteBlog(this.myId).subscribe(

      response => { console.log(response.message);
                    this.toastr.success(response.message);
                    this.router.navigate(['/home'])
      },
      error => { console.log(error.errorMessage) }
    );
  }

  //function to go back to the previous page
  public goBackToPreviousPage(){
    this.location.back();
  }

}
