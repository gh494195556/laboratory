import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-dialog',
  templateUrl: './demo-dialog.component.html',
  styleUrls: ['./demo-dialog.component.scss']
})
export class DemoDialogComponent implements OnInit {

  public hidden: boolean = true;
  public markdown: string = `
  **html**
  \`\`\`html
<b-dialog [(hidden)]="hidden">
  
</b-dialog>
  \`\`\`

  |属性|参数类型|描述|
  |:-|:-|:-|
  |[(content)]|string|输入框内容|
  `;

  constructor() { }

  ngOnInit() {
  }

  public showOrHidden(): void {
    this.hidden = !this.hidden;
  }
}
