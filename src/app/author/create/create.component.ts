import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import { Author, AuthorViewModel } from '../author.model';
import { AuthorService } from '../author.service';
import { CreateBaseComponent } from '../../base/methods/create';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent extends CreateBaseComponent<Author> {

  author: Author;
  submitted = false;
  view: AuthorViewModel;

  // constructor(appService: AuthorService,dialog: MatDialog) {
  //   super(appService,Author,dialog);
  // }

  constructor(appService: AuthorService,dialog: MatDialog,formBuilder : FormBuilder,) {
    super(appService,Author,formBuilder,dialog);

    this.formGroup.addControl('Name', new FormControl(this.entity.FirstName, Validators.required));;
    this.formGroup.addControl('Title', new FormControl(this.entity.LastName, Validators.required));
    this.formGroup.addControl('URL', new FormControl(this.entity.Email, Validators.required));
  }

  ngOnInit(): void {

  }

}
