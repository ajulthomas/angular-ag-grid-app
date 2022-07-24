import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { InputFormRendererComponent } from './input-form-renderer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  columnDefs: ColDef[] = [
    { field: 'make' },
    {
      field: 'model',
      cellEditor: InputFormRendererComponent,
      editable: true,
      singleClickEdit: true,
    },
    {
      field: 'price',
      editable: true,
      valueSetter: (params) => {
        params.data.price = parseInt(params.newValue);
        console.log(this.rowData);
        return true;
      },
      singleClickEdit: true,
    },
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 },
  ];
}
