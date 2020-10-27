import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';

import { UserService, User } from '../User.service';
import { CreateBaseComponent } from '../../base/methods/create';
import { UpdateBaseComponent } from 'src/app/base/methods/update';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent extends UpdateBaseComponent<User> implements OnInit {

  constructor(
    appService: UserService,
    dialog: MatDialog,
    formBuilder: FormBuilder,
    private route: ActivatedRoute,

    ) {
    super(appService,User,formBuilder,dialog,['Name','Email','UserCodeExternal','Profile','Status']);
    this.entity = this.route.snapshot.data.entity;
  }

  async ngOnInit(): Promise<void> {
    this.entity = await this.route.snapshot.data.entity;
    console.log(this.entity);
    this.formGroup.controls["Name"].setValue(this.entity.Name);
    this.formGroup.controls["Email"].setValue(this.entity.Email);
    this.formGroup.controls["UserCodeExternal"].setValue(this.entity.UserCodeExternal);
    this.formGroup.controls["Profile"].setValue(this.entity.Profile);
    this.formGroup.controls["Status"].setValue(this.entity.Status);
  }

}
