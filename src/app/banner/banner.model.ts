import { Author } from '../author/author.model';
import { Base } from '../base/model/base';
import { Serializer } from '../base/core/serializer';

export class Banner extends Base  {
    Code:Number;
    Name: String;
    Title: String;
    URL: String;
    Window: String;
    Order: String;
}

export class BannerSerializer implements Serializer{

    fromJson(json: any): Banner {

        let banner : Banner = {
            Id: json.id,
            IsActive: json.isActive,
            CreateDate: json.createDate,
            Status: json.status,
            DateUpdate: json.dateUpdate,
            UserCode: json.userCode,
            Code: json.code,
            Name: json.name,
            Title: json.title,
            URL: json.url,
            Window: json.window,
            Order: json.order,
        };
        return banner;
      }

      toJson(banner: Banner): any {
        console.log(banner);
        return {
            Id: banner.Id,
            IsActive: banner.IsActive,
            CreateDate: banner.CreateDate,
            Status: Number(banner.Status),
            DateUpdate: banner.DateUpdate,
            UserCode: banner.UserCode,
            Code: banner.Code,
            Name: banner.Name,
            Title: banner.Title,
            URL: banner.URL,
            Window: banner.Window,
            Order: banner.Order
        };
      }
}


//log de acesso dos usuários

