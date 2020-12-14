import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from './services/api.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  searchType: string;
  searchResult: any[];
  isLoading: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      const {searchType, query} = params;
      if (searchType && query) {
        this.isLoading = true;
        this.searchType = searchType;
        this.apiService.search(searchType, query).subscribe(response => {
          this.searchResult = response.results;
          this.isLoading = false;
        });
      }
    });
  }

  isNotFound(searchResult: any[], isLoading: boolean) {
    return searchResult && !searchResult.length && !isLoading;
  }
}
