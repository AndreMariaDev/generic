import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from '../base/core/service';
import { Banner, BannerSerializer } from './banner.model';

@Injectable({
  providedIn: 'root'
})
export class BannerService extends BaseService<Banner> {
  constructor(httpClient: HttpClient) {
    super(httpClient,'https://localhost:44366/api','Banners',new BannerSerializer());
  }
}
