import { Injectable } from "@angular/core";

import { BaseResolve } from '../base/core/resolve';
import { User, UserService } from './User.service';

@Injectable()
export class UserResolver extends BaseResolve<User> {
  constructor(appService: UserService) {
    super(appService);
  }
}
