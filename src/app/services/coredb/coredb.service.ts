import { Injectable } from '@angular/core';
import { DbService } from './dbservices';
import { NedbService } from './nedb/nedb.service';

@Injectable({
  providedIn: 'root',
})
export class CoredbService {
  constructor(private dbService: DbService) {}

  initializeDb() {
    this.dbService.initialize();

    this.dbService.insert({ name: 'test' }).then((result: any) => {
      console.log(result);
    });
  }
}
