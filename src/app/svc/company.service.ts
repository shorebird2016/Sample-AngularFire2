import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()

export class CompanyService {
  company$: Observable<any>;
  companies$: Observable<any>;
  itemsRef: AngularFireList<any>;
  meta$: Observable<object>; // contains "key" "payload" "prevKey" "type"

  constructor(private _db: AngularFireDatabase) {
    this.company$ = _db.object('company').valueChanges();

    this.itemsRef = _db.list('companies');
    this.companies$ = this.itemsRef.valueChanges();

    this.meta$ = _db.list('companies').snapshotChanges(); // 1 for metadata
  }

  // CRUD for single object in DB
  saveCompany(company) { this._db.object('company').set(company); }
  removeCompanyObj() { this._db.object('company').remove(); }
  updateCompany(co) { this._db.object('company').update(co); }


  // CRUD for list of objects
  addCompany(co) {this._db.list('companies').push(co); }
  removeAllCompanies() { this.itemsRef.remove(); }
  removeCompany(co_key) { this.itemsRef.remove(co_key); }
  updateCompanyByKey(co_key, co_obj) {this.itemsRef.update(co_key, co_obj);}
}
