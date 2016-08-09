import { Injectable } from '@angular/core';
import { File } from './file';
import { FILES } from './mock-files';

@Injectable()
export class FileService {

    constructor() { }

    getFiles() {
        return FILES;
    }
}