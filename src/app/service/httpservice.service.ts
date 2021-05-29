import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class HttpService {
    constructor(private http: HttpClient) { }

    getData() {
        const me = this;
        return me.http.get('https://jsonplaceholder.typicode.com/posts/1/comments')
    }
}

