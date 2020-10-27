
import {MatDialog} from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup , Validators} from '@angular/forms';

import { Base } from '../model/base';
import { BaseService } from '../core/service';
import { DialogComponent } from '../../dialog/dialog.component';

export class UpdateBaseComponent<T extends Base> {

  entity:T ;
  submitted = false;
  formGroup: FormGroup;

  constructor(
    public appService: BaseService<T>,
    entityT:(new () => T),
    public formBuilder : FormBuilder,
    public dialog: MatDialog,
    fieldsForm:String[]
    ) {

      this.entity = new entityT();
      this.formGroup = this.formBuilder.group({​​​​​​​
      });

      for (let index = 0; index < fieldsForm.length; index++) {
        const element = fieldsForm[index];
        this.formGroup.addControl(element.toString(), new FormControl('', Validators.required));;
      }
  }

  getItem = async (id: String) => {
    await  this.appService.getByID(id).subscribe(
      response => {
        console.log('await');
        console.log(response);
        if(!response){
          this.dialog.open(DialogComponent,{
            width: '350px',
            data: {title: 'Atenção', content: `Dados não encontrados`}});
        } else {
          this.entity = response;
        }
      },
      error => {
        this.dialog.open(DialogComponent,{
          width: '350px',
          data: {title: 'Erro', content: error.message}});
        console.log(error);
      });
  }

  Update(): void {
    debugger;
    console.log(this.entity);
    this.appService.update(this.entity)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          this.dialog.open(DialogComponent,{
            width: '350px',
            data: {title: 'Atenção', content: 'Processo Realizado com Sucesso!'}});
        },
        error => {
          debugger;
          this.dialog.open(DialogComponent,{
            width: '350px',
            data: {title: 'Erro', content: error.message}});
          console.log(error);
        });
  }

}
