import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

import { UserService, User } from '../User.service';
import { CreateBaseComponent } from '../../base/methods/create';
import { UpdateBaseComponent } from 'src/app/base/methods/update';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent extends UpdateBaseComponent<User> implements OnInit {

  constructor(appService: UserService,dialog: MatDialog, activatedRoute: ActivatedRoute) {
    super(appService,dialog,activatedRoute)
  }

  ngOnInit(): void {
    // let productid = this.activatedRoute.snapshot.params.productid;
    // this.getItem()
  }

}
