import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appBtn]'
})
export class ButtonDirective {
  private _label: string;

  @Input('label')
  public get label(): string {
    return this._label;
  }

  public set label(v: string) {
    this._label = v;
  }

  constructor() {}
}
