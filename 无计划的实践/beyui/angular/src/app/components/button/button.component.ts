import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'b-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input('label') label: string;
  @Input('disabled') disabled: boolean;

  /**
   * style
   */
  private _style: any;
  @Input('style')
  public get style(): any {
    return this._style;
  }
  public set style(v: any) {
    this._style = v;
  }

  /**
   * type
   */
  private _type: string;
  @Input('type')
  public get type(): string {
    return this._type;
  }
  public set type(v: string) {
    this._type = v;
  }
  @Output('onClick') onClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
}
