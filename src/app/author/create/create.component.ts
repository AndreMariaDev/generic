import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';

import { Author, AuthorViewModel } from '../author.model';
import { AuthorService } from '../author.service';
import { CreateBaseComponent } from '../../base/methods/create';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent extends CreateBaseComponent<Author> {

  author: Author;
  submitted = false;
  view: AuthorViewModel;

  constructor(appService: AuthorService,dialog: MatDialog) {
    super(appService,Author,dialog);
  }

  ngOnInit(): void {

  }

}
