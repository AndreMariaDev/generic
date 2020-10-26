import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import { Banner } from '../banner.model';
import { BannerService } from '../banner.service';
import { CreateBaseComponent } from '../../base/methods/create';
import { FormBuilder, Validators, FormControl} from '@angular/forms';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent extends CreateBaseComponent<Banner>  {

  constructor(appService: BannerService,dialog: MatDialog,formBuilder : FormBuilder) {
    super(appService,Banner,formBuilder,dialog);
    this.formGroup.addControl('Name', new FormControl(this.entity.Name, Validators.required));;
    this.formGroup.addControl('Title', new FormControl(this.entity.Title, Validators.required));
    this.formGroup.addControl('URL', new FormControl(this.entity.URL, Validators.required));
    this.formGroup.addControl('Window', new FormControl(this.entity.Window, Validators.required));
    this.formGroup.addControl('Order', new FormControl(this.entity.Order, Validators.required));
  }

  ngOnInit(): void {

  }

}
