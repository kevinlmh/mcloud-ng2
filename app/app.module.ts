import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { AppComponent }   from './app.component';
import { routing }        from './app.routing';

import { FileGridComponent }  from './file-grid.component';
import { FilesComponent }  from './files.component';
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
    FilesComponent
  ],
  providers: [
    FileService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
