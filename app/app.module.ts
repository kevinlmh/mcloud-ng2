import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { AppComponent }   from './app.component';
import { routing }        from './app.routing';

import { FileGridComponent }  from './file-grid.component';
import { FilesComponent }     from './files.component';
import { LoginComponent }     from './login.component';

import { FileService }  from './file.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent,
    FileGridComponent,
    FilesComponent,
    LoginComponent
  ],
  providers: [
    FileService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
