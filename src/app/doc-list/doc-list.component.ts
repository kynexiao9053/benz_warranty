import {Component, OnInit, OnChanges, Input, SimpleChange} from '@angular/core';
import {BenzDocument} from "../document";
import {DocServiceService} from "../doc-service.service";

@Component({
  selector: 'app-doc-list',
  templateUrl: './doc-list.component.html',
  styleUrls: ['./doc-list.component.css']
})
export class DocListComponent implements OnInit {

  private doc : BenzDocument;

  private doclist : BenzDocument[][];

  @Input()
  private moduleid : string;

  @Input()
  private partitionid : string;

  constructor(private service : DocServiceService) { }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    for (let propName in changes) {
      if (propName == "moduleid" || propName == "partitionid"){
        this.service.getDocList(this.moduleid,this.partitionid).then(res => {
          this.doclist = res;
        });
        // console.log("moduleid changed " + changes[propName].currentValue);
      // } else if (propName == "partitionid"){
      //   console.log("partitionid changed " + changes[propName].currentValue);
      }
    }
  }

  ngOnInit() {

  }

}
