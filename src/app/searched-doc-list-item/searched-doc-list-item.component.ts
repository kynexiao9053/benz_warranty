import {Component, OnInit, Input} from '@angular/core';
import {BenzDocument} from "../document";

@Component({
  selector: 'app-searched-doc-list-item',
  templateUrl: './searched-doc-list-item.component.html',
  styleUrls: ['./searched-doc-list-item.component.css']
})

export class SearchedDocListItemComponent implements OnInit {

  @Input()
  private doc : BenzDocument;

  constructor() { }

  ngOnInit() {

  }

  clickItem(){
    window.open(this.doc.url);
  }

}
