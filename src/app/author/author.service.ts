import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from '../base/core/service';
import { Author, AuthorSerializer } from './author.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorService extends BaseService<Author> {

  constructor(httpClient: HttpClient) {
    super(httpClient,'https://localhost:44394/api','Author',new AuthorSerializer());
  }
}
