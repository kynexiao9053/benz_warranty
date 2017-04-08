import {Component, EventEmitter, OnInit, Input, Output} from '@angular/core';
import {BenzDocument} from "../document";

@Component({
  selector: 'app-search-bar-result',
  templateUrl: './search-bar-result.component.html',
  styleUrls: ['./search-bar-result.component.css']
})
export class SearchBarResultComponent implements OnInit {

  @Input()
  private keywords : string;

  @Input()
  private doclist : BenzDocument[];

  @Output()
  onSearchMore = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  clickMore(){
    this.onSearchMore.emit(this.keywords);
  }

}
