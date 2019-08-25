import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  blogtext:string;
  bloglist:Array<string>=[];

  constructor() { }
  i=1;
  submitBlog():void{
    if(!this.blogtext){
      return;
    }
    this.bloglist.push(this.blogtext);
    this.blogtext='';
  }

  ngOnInit() {
  }

}
