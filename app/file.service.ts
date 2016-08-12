import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { File } from './file';

@Injectable()
export class FileService {
    private filesUrl = 'http://localhost:5000/api/v1';

    constructor(private http: Http) { }

    getFiles() {
        return this.http.get(this.filesUrl)
            .toPromise()
            .then((res: Response) => res.json() as File[])
            .catch(this.handleError);
    }

    getFile(id: string) {
        console.log('GET ' + this.filesUrl + '/download/' + id);
        this.http.get(this.filesUrl + '/download/' + id);
    }

    private handleError(error: any) {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    }
}