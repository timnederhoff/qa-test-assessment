import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'https://swapi.dev/api/';

@Injectable()
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) {}

  search(searchType, query): Observable<any> {
    const params = new HttpParams()
      .set('search', query);

    return this.httpClient
      .get(
        `${baseUrl}${searchType}/`,
        {params}
      );
  }

}
