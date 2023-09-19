import { Component, Input, OnInit ,  HostListener} from '@angular/core';
import { Box,BoxService } from '../box.service';

@Component({
  selector: 'app-display-box',
  templateUrl: './displaybox.component.html',
  styleUrls: ['./displaybox.component.css']
})

export class DisplayboxComponent {
  @Input() box!: Box;
  @Input() isSelected:boolean=false;
  isHighlighted:boolean=false;

  constructor(private boxService: BoxService) {}

  ngOnInit(){
    this.boxService.getSelectedBox().subscribe((selectedBox) =>{
      this.isSelected=selectedBox===this.box;
    });
    this.boxService.highlightedBox$.subscribe((highlightedBox)=>{
      this.isHighlighted=highlightedBox===this.box;
    });

  }
  onBoxClick() {
    this.isSelected = !this.isSelected;
    this.boxService.setSelectedBox(this.isSelected?this.box:null);
    this.toggleHighlight();
  }

  onDelete() {
    this.boxService.deleteBox(this.box);
}

handleDeleteKey(event: KeyboardEvent) {
  if (event.key === 'Delete') {
    this.onDelete();
  }
}
toggleHighlight(){
  this.boxService.toggleBoxHighlight(this.box);
}
}