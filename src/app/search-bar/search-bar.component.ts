import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {BenzDocument} from "../document";
import {Subject} from "rxjs";
import {DocServiceService} from "../doc-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Input()
  private moduleid : string = null;

  @Output()
  onSearchMoreOut = new EventEmitter<string>();

  private doclist : BenzDocument[] = [];
  private searchTerms = new Subject<string>();

  constructor(
    private router : Router,
    private service : DocServiceService) {}

  ngOnInit() {
    this.searchTerms
      .debounceTime(50)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .subscribe(term => {
        if (term)
        this.service.searchDoc(this.moduleid,term,false).subscribe(result=>{
          this.doclist = result;
        });
        else
          this.doclist = [];
      });
  }

  loseFocus(){
    this.doclist = [];
  }

  inputChange(keywords : string){
    this.searchTerms.next(keywords);
  }

  onSearchMore(keywords : string){
    if (this.moduleid == null){
      this.router.navigate(["/search",{keywords:keywords}]);
    } else {
      this.onSearchMoreOut.emit(keywords);
    }
  }

}
