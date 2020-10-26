import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import { Banner } from '../banner.model';
import { BannerService } from '../banner.service';
import { CreateBaseComponent } from '../../base/methods/create';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent extends CreateBaseComponent<Banner>  {

  constructor(appService: BannerService,dialog: MatDialog) {
    super(appService,Banner,dialog)
  }

  ngOnInit(): void {
  }

}
