import { Injectable } from '@angular/core';
import { DbService } from '../dbservices';

@Injectable()
export class NedbService implements DbService {
  datastore: any;

  initialize() {
    const Datastore = window.require('nedb-promises');
    this.datastore = Datastore.create({
      filename: './data/nedb.db',
      autoload: true,
    });
  }

  insert(data: any) {
    return this.datastore.insert(data).then((result: any) => {
      return result;
    });
  }

  find(query: any) {
    return this.datastore.find(query);
  }
}
