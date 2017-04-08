import {Component, OnInit, Input} from '@angular/core';
import {ModuleNavPartition} from "../module-nav-partition";

@Component({
  selector: 'app-module-nav-item',
  templateUrl: './module-nav-item.component.html',
  styleUrls: ['./module-nav-item.component.css']
})
export class ModuleNavItemComponent implements OnInit {

  @Input()
  private partition : ModuleNavPartition;

  @Input()
  private selected : boolean;

  constructor() { }

  ngOnInit() {
  }

}
