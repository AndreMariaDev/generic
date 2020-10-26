import { Component, OnInit } from '@angular/core';

import { ListBaseComponent } from '../../base/methods/list';
import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent extends ListBaseComponent<Book>  implements OnInit {

  constructor(appService: BookService) {

    super(appService, ['select', 'Name', 'ISBN','IsActive', 'Author']);
    let par = [];
  }

  ngOnInit(): void {

  }

  checkboxLabel(row?: Book): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.Id}`;
  }

}
