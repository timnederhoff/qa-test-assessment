import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
})
export class SearchFormComponent implements OnInit {

  searchForm: FormGroup;
  defaultSearchType = 'people';

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      searchType: [ this.defaultSearchType ],
      query: [ '', [Validators.required] ],
    });

    this.activatedRoute.queryParams.subscribe(params => {
      const {searchType, query}  = params;
      this.searchForm.setValue({
        searchType: searchType || this.defaultSearchType,
        query: query || '',
      });
    });
  }

  search(): void {
    const {searchType, query} = this.searchForm.value;
    if (this.searchForm.valid) {
      this.router.navigate([], {
        queryParams: {
          searchType,
          query,
        },
      });
    }
  }
}
