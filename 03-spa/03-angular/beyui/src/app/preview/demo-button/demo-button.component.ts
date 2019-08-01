import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-demo-button",
  templateUrl: "./demo-button.component.html",
  styleUrls: ["./demo-button.component.scss"]
})
export class DemoButtonComponent implements OnInit {

  public btnStyle: any;

  public markdown: string = `
  **html**
  \`\`\`html
<b-button label="成功" type="success" [style]="btnStyle"></b-button>
<b-button label="危险" type="danger" [style]="btnStyle"></b-button>
<b-button label="主要" type="primary" [style]="btnStyle"></b-button>
<b-button label="警告" type="warn" [style]="btnStyle"></b-button>
<b-button label="普通" [style]="btnStyle">
  <span style="background-color: aquamarine; border-bottom: 1px solid #555;">你也可以在这里插入一些其他的内容</span>
</b-button>
  \`\`\`

  **javascript**
  \`\`\`javascript
this.btnStyle = { 'margin-right': '10px' };
  \`\`\`

  |属性|参数类型|描述|
  |:-|:-|:-|
  |[label]|string|按钮文本|
  |[disabled]|boolean|禁用|
  |[style]|any|样式|
  |[type]|string|success/danger/warn/primary|


  |事件|参数|描述|
  |-|-|-|
  |(onClick)|无|按钮点击事件|
  `;

  constructor() { }

  ngOnInit() {
    this.btnStyle = { 'margin-right': '10px' };
  }

  public onClick(): void {
    console.log('click');
  }
}
