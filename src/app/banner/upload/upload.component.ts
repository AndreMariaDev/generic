import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import { Banner } from '../banner.model';
import { BannerService } from '../banner.service';
import { CreateBaseComponent } from '../../base/methods/create';
import { UploadBaseComponent } from 'src/app/base/methods/upload';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent extends UploadBaseComponent<Banner> {
  constructor(appService: BannerService,dialog: MatDialog) {
    super(appService,dialog);
  }
}
