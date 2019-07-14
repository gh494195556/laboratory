import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-demo-textbox",
  templateUrl: "./demo-textbox.component.html",
  styleUrls: ["./demo-textbox.component.scss"]
})
export class DemoTextboxComponent implements OnInit {

  public message: string = '';
  public markdown: string = `
  **html**
  \`\`\`html
<b-textbox [(content)]="message"></b-textbox>
  \`\`\`

  |属性|参数类型|描述|
  |:-|:-|:-|
  |[(content)]|string|输入框内容|
  `;

  constructor() { }

  ngOnInit() { }

  public onKeyUp(v: string): void {
    console.log(v);
  }
}
