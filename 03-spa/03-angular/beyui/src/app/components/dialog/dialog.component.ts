import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'b-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  public opacity: number = 0;
  public height: string = '100px';

  constructor() { }

  ngOnInit() {
  }

  private _hidden: boolean = true;

  @Input('hidden')
  public get hidden(): boolean {
    return this._hidden;
  }

  @Output('hiddenChange') hiddenChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  public set hidden(v: boolean) {
    this._hidden = v;
    if (v) {
      this.opacity = 0;
      this.height = '100px';
    }
    else {
      this.opacity = 1;
      this.height = '300px';
    }
    console.log(this.opacity);
    this.hiddenChange.emit(v);
  }

  @Output('onNo') no: EventEmitter<any> = new EventEmitter<any>();
  public onNo(): void {
    this.switchHidden();
    this.no.emit('');
  }

  @Output('onOk') ok: EventEmitter<any> = new EventEmitter<any>();
  public onOk(): void {
    this.switchHidden();
    this.ok.emit('');
  }

  private switchHidden(): void {
    this.hidden = !this.hidden;
  }
}
