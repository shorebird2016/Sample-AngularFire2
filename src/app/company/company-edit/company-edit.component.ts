import { Component, OnInit } from '@angular/core';
import {CompanyService} from '../../svc/company.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.css']
})

export class CompanyEditComponent implements OnInit {
  company$: Observable<string>;

  companies$: Observable<object>;
  meta$: Observable<object>;
  createEntry: string; editEntry: string;
  companyNames;
  metaData; // mainly contains the key
  nodes; // key + name

  constructor(private _svc: CompanyService) {
    this.company$ = _svc.company$;
    this.companies$ = _svc.companies$;
    this.meta$ = _svc.meta$;
  }

  ngOnInit() {
    this.companies$.subscribe(cos => {
      console.log(cos);
      this.companyNames = cos;
      // do this sequentially, it depends on companyNames
      this.meta$.subscribe(meta => {
        console.log(meta);
        this.metaData = meta;
        // create nodes array to hold key and name pair
        this.nodes = [];
        for (let idx = 0; idx < this.metaData.length; idx++) {
          const node_obj = { dbKey: this.metaData[idx].key, name: this.companyNames[idx].name };
          this.nodes.push(node_obj);
        }
      });
    });
  }

  // ===== Methods for Single company =====
  saveCompany(co) { this._svc.saveCompany(co); }
  updateCompany(co) { this._svc.updateCompany(co); }
  removeAll() { this._svc.removeCompanyObj(); }

  // ===== Methods for list of companies =====
  getCompanies() {
    return this._svc.companies$;
  }
  addCompany() {
    this._svc.addCompany({name: this.createEntry});
    this.createEntry = '';
  }
  updateCompanyByKey(node_obj) { // NOTE: must send back object with name key, not just name
    this._svc.updateCompanyByKey(node_obj.dbKey, { name: node_obj.name } );
  }
  removeCompany(co_key) {
    this._svc.removeCompany(co_key);
  }
  removeAllCompanies() {
    this._svc.removeAllCompanies();
  }
}
