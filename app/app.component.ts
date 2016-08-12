import { Component } from '@angular/core';
import { FileGridComponent } from './file-grid.component';
import { NAVLINKS } from './navigation-links';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  directives: [FileGridComponent]
})

export class AppComponent {
  title = 'File Manager';
  navLinks = NAVLINKS;
}
