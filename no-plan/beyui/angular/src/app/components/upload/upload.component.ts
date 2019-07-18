import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'b-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  public style: any;
  constructor() { }

  ngOnInit() {
    this.style = {
      'width': '150px',
      'height': '30px'
    }
  }

  /**
   * 内容
   */
  private _content: string;
  @Input('content')
  public get content(): string {
    return this._content;
  }
  public set content(v: string) {
    this._content = v;
  }

  /**
   * 选中变更
   * @param files 文件
   */
  public onSelectedChange(files: File[]): void {
    console.log(files);
  }
}
