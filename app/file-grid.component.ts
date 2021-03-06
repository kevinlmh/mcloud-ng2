import { Component, OnInit } from '@angular/core';
import { File } from './file';
import { FileService } from './file.service';
import { CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass, NgStyle } from '@angular/common';
import { FILE_UPLOAD_DIRECTIVES, FileUploader } from 'ng2-file-upload/ng2-file-upload';

const URL = 'http://localhost:5000/api/v1/';

@Component({
    selector: 'file-grid',
    templateUrl: 'app/file-grid.component.html',
    directives: [FILE_UPLOAD_DIRECTIVES, NgClass, NgStyle, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class FileGridComponent implements OnInit {
    uploader: FileUploader;
    files: File[];
    
    constructor(private fileService: FileService) {
        this.uploader = new FileUploader({url: URL});
        this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
            this.getFiles();
        };
        // this.uploader.onCompleteAll = () => {

        // };
    }

    ngOnInit() { 
        this.getFiles();
    }

    getFiles() {
        this.fileService.getFiles().then(files => this.files = files);
    }

    onDownload(id: string) {
        console.log('download button click, id: ' + id);
        this.fileService.getFile(id);
    }
}