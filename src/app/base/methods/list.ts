import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';

import { QueryOptionsGeneric } from '../core/queryOptions';
import { Base } from '../model/base';
import { BaseService } from '../core/service';

export class ListBaseComponent<T extends Base> {

  displayedColumns: string[]
  dataSource: MatTableDataSource<T>;
  selection = new SelectionModel<T>(true, []);

  constructor(private appService: BaseService<T> ,displayedColumns: string[]) {
    this.displayedColumns = displayedColumns;
    let par = [];

    par.push({ key:'_offset',values:'1'});
    par.push({ key:'_limit',values:'10'});

    this.appService.GetByFilter(new QueryOptionsGeneric(par)).subscribe(
      response => {
        this.dataSource = new MatTableDataSource<T>(response);
      },
      error => {
        console.log(error);
      });
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource ? this.dataSource.data.length: 0;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

}
