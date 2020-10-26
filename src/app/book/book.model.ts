import { Author } from '../author/author.model';
import { Base } from '../base/model/base';
import { Serializer } from '../base/core/serializer';

export class Book extends Base  {
    AuthorId:Number;
    Name: String;
    ISBN: String;
    Publisher: String;
    Author: Author;
}

export class BookSerializer implements Serializer{

    fromJson(json: any): Book {

        let book : Book = {
            Id : json.id,
            IsActive:json.isActive,
            CreateDate:json.createDate,
            Status: json.Status,
            DateUpdate: json.dateUpdate,
            UserCode :json.userCode,
            AuthorId:json.authorId,
            Name: json.name,
            ISBN: json.isbn,
            Publisher: json.publisher,
            Author: json.author
        };
        return book;
      }

      toJson(book: Book): any {
        return {
            Id : book.Id,
            IsActive:book.IsActive,
            CreateDate:book.CreateDate,
            Status: book.Status,
            DateUpdate: book.DateUpdate,
            UserCode :book.UserCode,
            AuthorId:book.AuthorId,
            Name: book.Name,
            ISBN: book.ISBN,
            Publisher: book.Publisher,
            Author: book.Author
        };
      }
}
