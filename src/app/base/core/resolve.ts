import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Base } from '../model/base';
import { BaseService } from './service';

export class BaseResolve<T extends Base> implements Resolve<T> {
  constructor(private appService: BaseService<T>) {}

  resolve(route: ActivatedRouteSnapshot): Observable<T>  {
    debugger;
    console.log(route.params['id']);
    return this.appService.getByID(route.params['id']);
  }
}
