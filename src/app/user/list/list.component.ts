import { Component, OnInit } from '@angular/core';
import { ListBaseComponent } from '../../base/methods/list';
import { User,UserService, UserSerializer } from '../User.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent extends ListBaseComponent<User> implements OnInit {

  constructor(appService: UserService) {
    super(appService,['select','Name','Email','LastName','Profile','IsActive','AddUser'])
  }

  ngOnInit(): void {
  }

  checkboxLabel(row?: User): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.Id}`;
  }

}
