import { Component } from '@angular/core';
import { FileGridComponent } from './file-grid.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  directives: [FileGridComponent]
})

export class AppComponent {
  title = 'File Manager';
  navLinks = [
    {
      title: 'Files',
      link: '#'
    },
    {
      title: 'Users',
      link: '#'
    },
    {
      title: 'Settings',
      link: '#'
    }
  ];
}
