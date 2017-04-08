import {Component, OnInit, Input} from '@angular/core';
import {BenzDocument} from "../document";

@Component({
  selector: 'app-search-bar-result-item',
  templateUrl: './search-bar-result-item.component.html',
  styleUrls: ['./search-bar-result-item.component.css']
})
export class SearchBarResultItemComponent implements OnInit {

  @Input()
  private doc: BenzDocument;

  constructor() { }

  ngOnInit() {
  }

  clickDoc(){
    console.log("item clicked");
    window.open(this.doc.url);
  }

}
