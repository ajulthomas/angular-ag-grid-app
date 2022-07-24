import { Component } from '@angular/core';
import { ICellEditorAngularComp } from 'ag-grid-angular';
import { ICellEditorParams } from 'ag-grid-community';

@Component({
  selector: 'app-input-form-renderer',
  template: `<div>
    <input
      type="text"
      placeholder="Please Input some value"
      [value]="value"
      #input
      style="width: 100%"
      (keyup)="updateValue($event)"
    />
  </div>`,
})
export class InputFormRendererComponent implements ICellEditorAngularComp {
  private params!: ICellEditorParams;
  value: string = '';
  agInit(params: ICellEditorParams<any, any>): void {
    console.log(params, params.data.model);
    this.params = params;
    this.value = params.data.model;
  }
  getValue() {
    return this.params.data.model;
  }

  // Gets called once before editing starts, to give editor a chance to
  // cancel the editing before it even starts.
  isCancelBeforeStart() {
    return false;
  }

  // Gets called once when editing is finished (eg if Enter is pressed).
  // If you return true, then the result of the edit will be ignored.
  isCancelAfterEnd() {
    // our editor will reject any value greater than 1000
    this.params.data.model = this.value;
    return true;
  }

  updateValue(event: any) {
    this.value = event.target.value;
  }
}
