import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Base } from '../base/model/base';
import { Serializer } from '../base/core/serializer';
import { Book } from '../book/book.model';

export class Author extends Base  {
    FirstName: String;
    LastName: String;
    Email: String;
    Books: Array<Book>
}

export class AuthorSerializer implements Serializer{

    fromJson(json: any): Author {
        let book : Book[] = [];
        if(json.books){
            json.books.map((result)=> book.push({
                Id : result.id,
                IsActive:result.isActive,
                CreateDate:result.createDate,
                Status: json.Status,
                DateUpdate: result.dateUpdate,
                UserCode :result.userCode,
                AuthorId:result.authorId,
                Name: result.name,
                ISBN: result.isbn,
                Publisher: result.publisher,
                Author: result.Author
            })
            );
        }

        let author : Author = {
            Id : json.id,
            IsActive:json.isActive,
            CreateDate:json.createDate,
            Status: json.Status,
            DateUpdate: json.dateUpdate,
            UserCode :json.userCode,
            FirstName: json.firstName,
            LastName: json.lastName,
            Email: json.email,
            Books: book
        };

        return author;
      }

      toJson(author: Author): any {
        return {
            Id : author.Id,
            IsActive:author.IsActive,
            CreateDate:author.CreateDate,
            DateUpdate: author.DateUpdate,
            UserCode :author.UserCode,
            FirstName: author.FirstName,
            LastName: author.LastName,
            Email: author.Email
        };
      }
}

export class AuthorViewModel {

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  public getFormGroup(){
    return this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      Email: ['', Validators.required]
    });
  }

}
