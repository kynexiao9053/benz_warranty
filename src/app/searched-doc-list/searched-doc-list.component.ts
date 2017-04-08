import {Component, OnInit, Input, SimpleChange} from '@angular/core';
import {BenzDocument} from "../document";
import {DocServiceService} from "../doc-service.service";

@Component({
  selector: 'app-searched-doc-list',
  templateUrl: './searched-doc-list.component.html',
  styleUrls: ['./searched-doc-list.component.css']
})
export class SearchedDocListComponent implements OnInit {


  @Input()
  private moduleid : string;
  @Input()
  private keywords : string;

  private doclist : BenzDocument[];

  constructor(private service : DocServiceService) {}

  ngOnInit() {

  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    for (let propName in changes) {
      if (propName == "moduleid" || propName == "keywords"){
        this.service.searchDoc(this.moduleid,this.keywords,true).subscribe(res => {
          this.doclist = res;
        });
        // console.log("moduleid changed " + changes[propName].currentValue);
        // } else if (propName == "partitionid"){
        //   console.log("partitionid changed " + changes[propName].currentValue);
      }
    }
  }

}
