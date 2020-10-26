import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from '../base/core/service';

import { Base } from '../base/model/base';
import { Serializer } from '../base/core/serializer';

export class User extends Base  {
    Code:Number;
    Name: String;
    Email: String;
    UserCodeExternal: String;
}

export class UserSerializer implements Serializer{
  fromJson(json: any): User {
    let user : User = {
        Id: json.id,
        IsActive: json.isActive,
        CreateDate: json.createDate,
        Status: json.status,
        DateUpdate: json.dateUpdate,
        UserCode: json.userCode,
        Code: json.code,
        Name: json.name,
        Email: json.email,
        UserCodeExternal: json.userCodeExternal
    };
    return user;
  }

  toJson(user: User): any {
    console.log(User);
    return {
        Id: user.Id,
        IsActive: user.IsActive,
        CreateDate: user.CreateDate,
        Status: Number(user.Status),
        DateUpdate: user.DateUpdate,
        UserCode: user.UserCode,
        Code: user.Code,
        Name: user.Name,
        Email: user.Email,
        UserCodeExternal: user.UserCodeExternal
    };
  }
}


@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService<User> {
  constructor(httpClient: HttpClient) {
    super(httpClient,'https://localhost:44366/api','User',new UserSerializer());
  }
}

