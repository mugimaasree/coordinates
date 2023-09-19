import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Box, BoxService } from '../box.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css'],
}) 

export class OutputComponent {
selectedBox: Box | null = null;
  
  constructor(public boxService: BoxService) {}

  onDeleteBox(box: Box) {
    this.boxService.deleteBox(box);
  }

  toggleBorder(box: Box) {
    this.selectedBox=this.selectedBox===box?null:box;
  }
}
