import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MarkdownModule } from 'ngx-markdown';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ButtonComponent } from "./components/button/button.component";
import { ButtonDirective } from "./components/button/button.directive";
import { DemoButtonComponent } from "./preview/demo-button/demo-button.component";
import { TextboxComponent } from "./components/textbox/textbox.component";
import { SassTestComponent } from "./sass-test/sass-test.component";
import { DropdownComponent } from "./components/dropdown/dropdown.component";
import { DemoTextboxComponent } from "./preview/demo-textbox/demo-textbox.component";
import { DialogComponent } from './components/dialog/dialog.component';
import { DemoDropdownComponent } from './preview/demo-dropdown/demo-dropdown.component';
import { DemoDialogComponent } from './preview/demo-dialog/demo-dialog.component';
import { TableComponent } from './components/table/table.component';
import { UploadComponent } from './components/upload/upload.component';
import { DemoUploadComponent } from './preview/demo-upload/demo-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ButtonDirective,
    DemoButtonComponent,
    TextboxComponent,
    SassTestComponent,
    DropdownComponent,
    DemoTextboxComponent,
    DialogComponent,
    DemoDropdownComponent,
    DemoDialogComponent,
    TableComponent,
    UploadComponent,
    DemoUploadComponent
  ],
  imports: [BrowserModule, AppRoutingModule, MarkdownModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
