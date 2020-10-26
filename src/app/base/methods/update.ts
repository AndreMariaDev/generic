import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

import { Base } from '../model/base';
import { BaseService } from '../core/service';
import { DialogComponent } from '../../dialog/dialog.component';

export class UpdateBaseComponent<T extends Base> {

  entity:T ;
  submitted = false;

  constructor(
    private appService: BaseService<T>,
    public dialog: MatDialog,
    private activatedRoute: ActivatedRoute) {
  }

  getItem(id: String): void {
    this.appService.getByID(id).subscribe(
      response => {
        console.log(response);
        if(!response){
          this.dialog.open(DialogComponent,{
            width: '350px',
            data: {title: 'Atenção', content: `Dados não encontrados`}});
        } else {
          this.entity = response;
        }
        this.dialog.open(DialogComponent,{
          width: '350px',
          data: {title: 'Atenção', content: 'Processo Realizado com Sucesso!'}});
      },
      error => {
        this.dialog.open(DialogComponent,{
          width: '350px',
          data: {title: 'Erro', content: error.message}});
        console.log(error);
      });
  }

  Update(): void {
    debugger;
    console.log(this.entity);
    this.appService.update(this.entity)
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
