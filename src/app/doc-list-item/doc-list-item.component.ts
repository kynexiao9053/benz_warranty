import {Component, OnInit, Input} from '@angular/core';
import {BenzDocument} from "../document";

@Component({
  selector: 'app-doc-list-item',
  templateUrl: './doc-list-item.component.html',
  styleUrls: ['./doc-list-item.component.css']
})
export class DocListItemComponent implements OnInit {

  @Input()
  private doc : BenzDocument;

  constructor() { }

  ngOnInit() {
  }

  clickDoc(){
    window.open(this.doc.url);
  }

}
