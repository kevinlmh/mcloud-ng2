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
        this.fileService.getFiles().then(files => this.files = files);
    }

    onDownload(id: string) {
        console.log('download button click, id: ' + id);
        this.fileService.getFile(id);
    }
}