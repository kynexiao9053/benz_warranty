import {Component, OnInit, Input} from '@angular/core';
import {BenzDocument} from "../document";

@Component({
  selector: 'app-doc-list-section',
  templateUrl: './doc-list-section.component.html',
  styleUrls: ['./doc-list-section.component.css']
})
export class DocListSectionComponent implements OnInit {

  @Input()
  private docs : BenzDocument[];

  constructor() { }

  ngOnInit() {
  }

}
