import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import {BenzDocument} from "./document";
import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs";
import {ModuleNavPartition} from "./module-nav-partition";

@Injectable()
export class DocServiceService {

  constructor(private http : Http) {}

  private headers = new Headers({'Content-Type': 'application/json'});
  // private urlPrefix = "http://localhost:8080";
  private urlPrefix = "http://localhost:8080";


  public searchDoc(moduleid : string, keywords : string, listall : boolean): Observable<BenzDocument[]> {
    var queryall = listall ? "&listall=true" : "";
    var querymodule = moduleid == null ? "" : "&moduleid=" +moduleid
    var configurl = `${this.urlPrefix}/api/search?keyword=${keywords}${querymodule}${queryall}`;
    return this.http.get(configurl)
      .map(response => response.json().data.docs as BenzDocument[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  public getDocList(moduleid : string, partitionid : string): Promise<BenzDocument[][]> {
    var doclistUrl = `${this.urlPrefix}/api/doclist?moduleid=${moduleid}&partitionid=${partitionid}`;
    return this.http.get(doclistUrl)
      .toPromise()
      .then(resp => resp.json().data.docs as BenzDocument[][])
      .catch(this.handleError);
  }

  public getPartitions(moduleid : string): ModuleNavPartition[]{
    if (moduleid == "wog"){
      return [
        {
          pid : "P",
          moduleid : "wog",
          title : "P 保修处理",
          subtitle : null
        },
        {
          pid : "G",
          moduleid : "wog",
          title : "G 返厂保修零件",
          subtitle : "（GALA件）"
        },
        {
          pid : "A",
          moduleid : "wog",
          title : "A 保修审计",
          subtitle : null
        },
        {
          pid : "S",
          moduleid : "wog",
          title : "S 服务合约",
          subtitle : null
        }
      ];
    } else if (moduleid == "newsclips"){
      return [
        {
          pid : "2017",
          moduleid : "newsclips",
          title : "2017",
          subtitle : null
        },
        {
          pid : "2016",
          moduleid : "newsclips",
          title : "2016",
          subtitle : null
        },
        {
          pid : "2015",
          moduleid : "newsclips",
          title : "2015",
          subtitle : null
        },
        {
          pid : "2014",
          moduleid : "newsclips",
          title : "2014",
          subtitle : null
        },
        {
          pid : "2013",
          moduleid : "newsclips",
          title : "2013",
          subtitle : null
        }
      ];
    }
  }

}
