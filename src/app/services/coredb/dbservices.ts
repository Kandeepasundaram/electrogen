import { Injectable } from '@angular/core';

@Injectable()
export abstract class DbService {
  abstract initialize(): void;
  abstract insert(data: any): Promise<any>;
  abstract find(query: any): any;
}
