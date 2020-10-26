import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


import {​​​​​ MatSelectModule }​​​​​ from '@angular/material/select';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './dialog/dialog.component';
import { AuthorModule } from './author/author.module';
import { BookModule } from './book/book.module';
import { CreateComponent as CreateBannerComponent } from './banner/create/create.component';
import { CreateComponent } from './user/create/create.component';
import { ListComponent } from './user/list/list.component';
import { UpdateComponent } from './user/update/update.component'

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    CreateBannerComponent,
    CreateComponent,
    ListComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatGridListModule,
    MatExpansionModule,
    MatTableModule,
    MatSelectModule,
    AppRoutingModule,
    MatDialogModule,
    MatInputModule,
    MDBBootstrapModule.forRoot(),
    MatFormFieldModule,
    AuthorModule,
    BookModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
