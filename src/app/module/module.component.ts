import { Component, OnInit } from '@angular/core';
import {ModuleNavPartition} from "../module-nav-partition";
import {DocServiceService} from "../doc-service.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-module',
  templateUrl: 'module.component.html',
  styleUrls: ['module.component.css']
})
export class ModuleComponent implements OnInit {

  private mode : string = "default";

  private moduleid : string;
  private current_partition_id : string;
  private modulelogo : string;

  private keywords : string;

  private navitems : ModuleNavPartition[];

  onNavItemClick(pid : string){
    this.current_partition_id = pid;
    this.mode = "default";
  }

  constructor(
    private route: ActivatedRoute,
    private router : Router,
    private service : DocServiceService) { }

  ngOnInit() {
    this.route.params
      .subscribe((params : Params) => {
        var id = params['id'];
        this.navitems = this.service.getPartitions(id);
        this.current_partition_id = this.navitems[0].pid;
        this.moduleid = id;
        this.setModuleLogo(id);
      });
  }

  onSearchMoreOut(keywords : string){
    this.keywords = keywords;
    this.mode = "search";
    this.current_partition_id = null;
  }

  setModuleLogo(id : string){
    if (id == "wog"){
      this.modulelogo = "assets/WOG.png";
    } else if (id == "newsclips"){
      this.modulelogo = "assets/NewsClips.png";
    }
  }

  returnToMainPage(){
    this.router.navigate(["/main"]);
  }

  returnToModulePage(){
    this.onNavItemClick(this.navitems[0].pid);
  }

}
