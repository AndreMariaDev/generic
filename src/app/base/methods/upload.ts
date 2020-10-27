
import {MatDialog} from '@angular/material/dialog';

import { Base } from '../model/base';

import { BaseService } from '../core/service';
import { DialogComponent } from '../../dialog/dialog.component';
import { Observable } from 'rxjs/internal/Observable';

export interface Result
{
    key:String
    value:String
}

export class UploadBaseComponent<T extends Base> {

  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message:String = '';
  fileInfos: Observable<any>;

  constructor(
    private appService: BaseService<T>,
    public dialog: MatDialog
  ) {}

  selectFile(event): void {
    this.selectedFiles = event.target.files;
  }

  saveFile(): void {
    debugger;
    this.currentFile = this.selectedFiles.item(0);
    this.appService.upload(this.currentFile)
      .subscribe(
        response => {
          console.log(response);

          let item: Result = response as Result
          this.message = item.value;
          console.log(`Messagem:${this.message}`);
        },
        error => {
          debugger;
          this.message = error.message;
          console.log(error);
        });
  }
}
