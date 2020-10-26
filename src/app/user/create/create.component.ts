import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import { UserService, User } from '../User.service';
import { CreateBaseComponent } from '../../base/methods/create';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent extends CreateBaseComponent<User>  {

  constructor(appService: UserService,dialog: MatDialog) {
    super(appService,User,dialog)
  }

  ngOnInit(): void {
  }

}

