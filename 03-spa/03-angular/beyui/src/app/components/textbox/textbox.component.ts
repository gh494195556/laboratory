import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";

@Component({
  selector: "b-textbox",
  templateUrl: "./textbox.component.html",
  styleUrls: ["./textbox.component.scss"]
})
export class TextboxComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

  /**
   * 按键事件
   */
  @Output("onKeyUp") keyUp: EventEmitter<string> = new EventEmitter();
  public onKeyUp(v: string): void {
    this.keyUp.emit(v);
  }


  private _content: string = '';
  /**
   * content
   */
  @Input('content')
  public get content(): string {
    return this._content;
  }
  @Output('contentChange') cc: EventEmitter<string> = new EventEmitter<string>();
  public set content(v: string) {
    this.cc.emit(v);
    this._content = v;
  }

}
