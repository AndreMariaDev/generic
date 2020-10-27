
import {MatDialog} from '@angular/material/dialog';

import { Base } from '../model/base';

import { BaseService } from '../core/service';
import { DialogComponent } from '../../dialog/dialog.component';

export class UploadBaseComponent<T extends Base> {
  constructor(
    private appService: BaseService<T>,
    public dialog: MatDialog
  ) {}

  saveFile(file:File): void {
    debugger;
    this.appService.upload(file)
      .subscribe(
        response => {
          console.log(response);
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
