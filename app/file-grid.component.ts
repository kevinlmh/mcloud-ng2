import { Component, OnInit } from '@angular/core';
import { File } from './file';
import { FileService } from './file.service';

@Component({
    selector: 'file-grid',
    templateUrl: 'app/file-grid.component.html',
    providers: [FileService]
})
export class FileGridComponent implements OnInit {
    files: File[];
    
    constructor(private fileService: FileService) { }

    ngOnInit() { 
        this.files = this.fileService.getFiles();
    }
}