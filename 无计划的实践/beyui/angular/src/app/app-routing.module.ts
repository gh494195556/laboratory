import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoButtonComponent } from './preview/demo-button/demo-button.component';
import { DemoTextboxComponent } from './preview/demo-textbox/demo-textbox.component';
import { DemoDropdownComponent } from './preview/demo-dropdown/demo-dropdown.component';
import { DemoDialogComponent } from './preview/demo-dialog/demo-dialog.component';
import { DemoUploadComponent } from './preview/demo-upload/demo-upload.component';

const routes: Routes = [
  { path: 'button', component: DemoButtonComponent },
  { path: 'textbox', component: DemoTextboxComponent },
  { path: 'dropdown', component: DemoDropdownComponent },
  { path: 'dialog', component: DemoDialogComponent },
  { path: 'upload', component: DemoUploadComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
