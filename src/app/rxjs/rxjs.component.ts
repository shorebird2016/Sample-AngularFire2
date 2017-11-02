import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})

export class RxjsComponent implements OnInit {
  constructor(private _db: AngularFireDatabase) {
    const obsv = this._db.object('connected');
    obsv.valueChanges().take(3)
      .subscribe(
      next => console.log('next() called ', next),
      err => console.log('error() called ', err),
      () => console.log('complete() called')
    );
  }

  ngOnInit() {
  }

}
