import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Thing } from './thing.model';

@Injectable()
export class ThingService {
    baseUrl: string = 'http://localhost:3000/things';

    constructor(private http: HttpClient) {}

    getAllThings(): Observable<Thing[]> {
        return this.http.get<Thing[]>(this.baseUrl);
    }

    getThingById(id: any): Observable<Thing> {
        return this.http.get<Thing>(this.baseUrl + '/' + id);
    }

    deleteThingById(id: any): Observable<Thing> {
        return this.http.delete<Thing>(this.baseUrl + '/' + id);
    }
}