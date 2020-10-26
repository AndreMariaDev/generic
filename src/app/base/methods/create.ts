import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import { Guid } from "../core/guid";
import { Base } from '../model/base';
import { BaseService } from '../core/service';
import { DialogComponent } from '../../dialog/dialog.component';

export class CreateBaseComponent<T extends Base> {

  entity:T ;
  submitted = false;

  constructor(private appService: BaseService<T>,entityT:(new () => T),public dialog: MatDialog) {
    this.entity = new entityT();
    var guid = new Guid();

    this.entity.Id = guid.uuid();
    this.entity.IsActive = true;
    this.entity.CreateDate = new Date();
    this.entity.Status = 1
    this.entity.UserCode = '123456';
  }

  save(): void {
    debugger;
    console.log(this.entity);
    this.appService.create(this.entity)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          this.dialog.open(DialogComponent,{
            width: '350px',
            data: {title: 'Atenção', content: 'Processo Realizado com Sucesso!'}});
        },
        error => {
          debugger;
          this.dialog.open(DialogComponent,{
            width: '350px',
            data: {title: 'Erro', content: error.message}});
          console.log(error);
        });
  }

}
