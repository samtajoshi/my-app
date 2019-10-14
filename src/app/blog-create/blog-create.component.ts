import { Component, OnInit } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';

//to activate navigation
import {ActivatedRoute,Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  public blogTitle :string;
  public blogBodyHtml :string;
  public blogDescription :string;
  public blogCategory : string;
  public possibleCategories : any;


  constructor(private blogHttpServive : BlogHttpService , public _route :ActivatedRoute, public router : Router, public toastr : ToastrService) { 
    //this.blogTitle ='my name is'
     this.possibleCategories = ["comedy","dream","action","technology"];
  }

  ngOnInit() {}


  public createBlog(){
    let blogData = {
      title: this.blogTitle,
      description :this.blogDescription,
      blogBody : this.blogBodyHtml,
      category : this.blogCategory,
    }
    
    this.blogHttpServive.createBlog(blogData).subscribe(
      data=>{
        console.log('blog created successfully');
        console.log(data);
        this.toastr.success('blog posted successfully');
        
        setTimeout(()=>{
          this.router.navigate(['/blog',data.data.blogId]);
        },1000);

      },
      errror =>{
        console.log('some error occured');
      
      }
    )

  }

}
