import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  template: `
    <div class="toolbar">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    .toolbar {
      background-color: purple;
      height: 50px;
      padding: 10px;
      color: white;
    }
  `]
})
export class ToolbarComponent { }
