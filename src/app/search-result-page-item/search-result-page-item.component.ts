import {Component, OnInit, Input} from '@angular/core';
import {BenzDocument} from "../document";

@Component({
  selector: 'app-search-result-page-item',
  templateUrl: './search-result-page-item.component.html',
  styleUrls: ['./search-result-page-item.component.css']
})
export class SearchResultPageItemComponent implements OnInit {

  @Input()
  private doc : BenzDocument;

  @Input()
  private modulelogo : string;

  constructor() {}

  ngOnInit() {
  }

  clickItem(){
    window.open(this.doc.url);
  }

}
