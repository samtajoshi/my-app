import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { BlogHttpService } from '../blog-http.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {

  public blogId;
  public currentBlog:any;
  public blogTitle :string;
  public blogBodyHtml :string;
  public blogDescription :string;
  public blogCategory : string;
  public possibleCategories : any;


  constructor(public _route : ActivatedRoute , public router : Router, public bloghttpService : BlogHttpService, private toastr: ToastrService) {

    //to get the blogId
    this.blogId = this._route.snapshot.paramMap.get('blogId');
    this.possibleCategories = ["comedy","dream","action","technology"];
    

   }

  ngOnInit() {
     //getting blog information using blogId and feeding it to form 
     this.currentBlog = this.bloghttpService.getInformation(this.blogId).subscribe(

       response => {
         this.currentBlog = response.data;
         
       },
      error => {console.log(error.errorMessage)}
    );
    
  }

  public createBlog(){
    
    
    this.bloghttpService.editBlog(this.currentBlog.blogId,this.currentBlog).subscribe(
      data=>{
        console.log('blog created successfully');
        console.log(data);
        this.toastr.success('blog edited successfully');
        
        setTimeout(()=>{
          this.router.navigate(['/blog',this.blogId]);
        },1000);

      },
      errror =>{
        console.log('some error occured');
      
      }
    )

  }
  

}
