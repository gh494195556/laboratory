import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-upload',
  templateUrl: './demo-upload.component.html',
  styleUrls: ['./demo-upload.component.scss']
})
export class DemoUploadComponent implements OnInit {
  public markdown: string = `
  **html**
  \`\`\`html
<b-upload content="点击上传文件"></b-upload>
  \`\`\`

  |属性|参数类型|描述|
  |:-|:-|:-|
  |[(content)]|string|按钮显示内容|
  `;
  constructor() { }

  ngOnInit() {
  }

}
