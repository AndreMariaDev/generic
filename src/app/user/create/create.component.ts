import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';

import { UserService, User } from '../User.service';
import { CreateBaseComponent } from '../../base/methods/create';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent extends CreateBaseComponent<User>  {

  constructor(appService: UserService,dialog: MatDialog,formBuilder : FormBuilder) {
    super(appService,User,formBuilder,dialog);

    this.formGroup.addControl('Name', new FormControl(this.entity.Name, Validators.required));;
    this.formGroup.addControl('Email', new FormControl(this.entity.Email, Validators.required));
    this.formGroup.addControl('UserCodeExternal', new FormControl(this.entity.UserCodeExternal, Validators.required));
    this.formGroup.addControl('Profile', new FormControl(this.entity.Profile, Validators.required));

  }

  // constructor(appService: UserService,dialog: MatDialog) {
  //   super(appService,User,dialog)
  // }

  ngOnInit(): void {
  }

}

