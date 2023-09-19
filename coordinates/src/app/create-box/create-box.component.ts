import { Component, Output, EventEmitter } from '@angular/core';
import { Box, BoxService } from '../box.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-box',
  templateUrl: './create-box.component.html',
  styleUrls: ['./create-box.component.css']
})

export class CreateBoxComponent {
  xValue: number = 0;
  yValue: number = 0;

  @Output() closeEvent = new EventEmitter<void>();

  constructor(private boxService: BoxService,  private location: Location,) {}

  createNewBox() {
    const newBox: Box = {
      x: this.xValue,
      y: this.yValue,
      size: 20
    };
    this.boxService.addBoxes(newBox);
    this.location.go(`/input/x=${this.xValue}&y=${this.yValue}`);
  }

  close() {
    this.boxService.updateBoxList(this.boxService.getBoxes());
    this.closeEvent.emit(); 
  }

  /* checkOverlapping(newBox: Box, boxes: Box[]): boolean {
    for (const box of boxes) {
      const isOverlappingX = newBox.x + newBox.size > box.x && box.x + box.size > newBox.x;
      const isOverlappingY = newBox.y + newBox.size > box.y && box.y + box.size > newBox.y;

      if (isOverlappingX && isOverlappingY) {
        return true;
      }
    }
    return false;
  }  */
}