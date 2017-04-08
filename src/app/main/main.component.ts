import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  clickModule(index : number){
    if (index == 1){
      this.router.navigate(["/module/wog"]);
    } else if (index == 2){
      this.router.navigate(["/module/newsclips"])
    }
  }

}
