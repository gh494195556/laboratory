import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  /**
   * demo list
   */
  public demoList: { content: string, path: string }[] = [
    { content: '按钮', path: 'button' },
    { content: '文本框', path: 'textbox' },
    { content: '下拉框', path: 'dropdown' },
    { content: '对话框', path: 'dialog' },
    { content: '上传', path: 'upload' }
  ];

  constructor() { }
}
