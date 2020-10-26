import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from '../base/core/service';
import { Book, BookSerializer } from './book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService extends BaseService<Book> {

  constructor(httpClient: HttpClient) {
    super(httpClient,'https://localhost:44394/api','Book',new BookSerializer());
  }
}

