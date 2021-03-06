import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';

import { Book } from '../book.model';
import { BookService } from '../book.service';
import { CreateBaseComponent } from '../../base/methods/create';

import { Author } from '../../author/author.model';
import { AuthorService } from '../../author/author.service';
import { QueryOptionsGeneric } from '../../base/core/queryOptions';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent extends CreateBaseComponent<Book>{

  authors: Array<Author>;
  book: Book;
  submitted = false;

  constructor(appService: BookService,private appAuthorService: AuthorService,dialog: MatDialog,formBuilder : FormBuilder) {
    super(appService,Book,formBuilder,dialog);

    this.formGroup.addControl('Name', new FormControl(this.entity.Name, Validators.required));;
    this.formGroup.addControl('Publisher', new FormControl(this.entity.Publisher, Validators.required));
    this.formGroup.addControl('Status', new FormControl(this.entity.Status, Validators.required));

    this.authors = new Array<Author>();
    let par = [];

    par.push({ key:'_offset',values:'1'});
    par.push({ key:'_limit',values:'10'});

    this.appAuthorService.getByFilter(new QueryOptionsGeneric(par)).subscribe(
      response => {
        console.log('GetByFilter');

        response.map(resp => {
          this.authors.push(resp);
          console.log(this.authors);
        })
        console.log(this.authors);
      },
      error => {
        console.log(error);
      });
  }
  // constructor(appService: BookService, private appAuthorService: AuthorService,dialog: MatDialog) {
  //   super(appService,Book,dialog);
  //   this.authors = new Array<Author>();
  //   let par = [];

  //   par.push({ key:'_offset',values:'1'});
  //   par.push({ key:'_limit',values:'10'});

  //   this.appAuthorService.GetByFilter(new QueryOptionsGeneric(par)).subscribe(
  //     response => {
  //       console.log('GetByFilter');

  //       response.map(resp => {
  //         this.authors.push(resp);
  //         console.log(this.authors);
  //       })
  //       console.log(this.authors);
  //     },
  //     error => {
  //       console.log(error);
  //     });
  // }

  //ToDo: tetetttetettte
}
