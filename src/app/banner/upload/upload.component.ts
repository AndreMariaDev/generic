import { Component ,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';

import { Banner } from '../banner.model';
import { BannerService } from '../banner.service';
import { CreateBaseComponent } from '../../base/methods/create';
import { UploadBaseComponent } from 'src/app/base/methods/upload';

export interface DialogData {
  title: string;
  content: string;
}

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent extends UploadBaseComponent<Banner> {
  constructor(appService: BannerService,dialog: MatDialog, public dialogRef: MatDialogRef<UploadComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    super(appService,dialog);
  }


}
