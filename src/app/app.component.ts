import { Component } from '@angular/core';
import { CoredbService } from './services/coredb/coredb.service';
import { ElectronService } from './services/electron/electron.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'devdiaryv1';

  constructor(
    private electronService: ElectronService,
    private coreDb: CoredbService
  ) {
    console.log('AppComponent');
  }

  handleClick(): void {
    console.log('handleClick');

    let a = this.electronService.clipboard?.readText('clipboard');

    this.coreDb.initializeDb();
    console.log(a);
  }
}
