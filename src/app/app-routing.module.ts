import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateComponent as CreateBookComponent } from './book/create/create.component';
import { ListComponent as ListBookComponent } from './book/list/list.component';
import { UpdateComponent as UpdateBookComponent } from './book/update/update.component';

import { CreateComponent as CreateAuthorComponent } from './author/create/create.component';
import { ListComponent as ListAuthorComponent } from './author/list/list.component';
import { UpdateComponent as UpdateAuthorComponent } from './author/update/update.component';

import { CreateComponent as CreateBannerComponent } from './banner/create/create.component';
import { CreateComponent as CreateUserComponent } from './user/create/create.component';
import { ListComponent } from './user/list/list.component'

const routes: Routes = [
    { path: 'book/create', component: CreateBookComponent },
    { path: 'book/update', component: UpdateBookComponent },
    { path: 'book/list', component: ListBookComponent },
    { path: 'author/create', component: CreateAuthorComponent },
    { path: 'author/update', component: UpdateAuthorComponent },
    { path: 'author/list', component: ListAuthorComponent },
    { path: 'banner/create', component: CreateBannerComponent },
    { path: 'user/create', component: CreateUserComponent },
    { path: 'user/list', component: ListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
