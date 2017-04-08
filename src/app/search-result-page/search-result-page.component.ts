import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, Params} from "@angular/router";
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import {BenzDocument} from "../document";
import {DocServiceService} from "../doc-service.service";



@Component({
  selector: 'app-search-result-page',
  templateUrl: './search-result-page.component.html',
  styleUrls: ['./search-result-page.component.css']
})

export class SearchResultPageComponent implements OnInit {

  private keywords : string;
  private doclist : BenzDocument[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service : DocServiceService
  ) {}

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        console.log("params keywords:" + params['keywords']);
        this.keywords = params['keywords'];
        this.service.searchDoc(null,this.keywords,true).subscribe(res => {
          this.doclist = res;
        });
      });
  }

  returnToMainPage(){
    this.router.navigate(["/main"]);
  }

  getModuleLogo(doc : BenzDocument){
    var id = doc.module;
    switch (id){
      case "wog":
        return "assets/search_result_wog.png";
      case "newsclips":
        return "assets/search_result_news.png";
      case "faq":
        return "assets/search_result_faq.png";
      case "feedback":
        return "assets/search_result_fb.png";
    }
  }

}
