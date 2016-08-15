import { Component, OnInit } from '@angular/core';
import { FileGridComponent } from './file-grid.component';
import { NAVLINKS } from './navigation-links';

@Component({
    selector: 'files',
    templateUrl: 'app/files.component.html',
    directives: [FileGridComponent]
})
export class FilesComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    title = 'File Manager';
    navLinks = NAVLINKS;
}