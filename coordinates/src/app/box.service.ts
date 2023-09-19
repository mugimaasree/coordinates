import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable } from 'rxjs';

export interface Box {
  x: number;
  y: number;
  size:number;
  
}

@Injectable({
  providedIn: 'root'
})

export class BoxService {
  private boxesNew = new BehaviorSubject<Box[]>([]);
  public createbox = this.boxesNew.asObservable();

  private selectedBoxSubject = new BehaviorSubject<Box | null>(null);
  public selectedBox$: Observable<Box | null> = this.selectedBoxSubject.asObservable();

  private highlightedBoxSubject = new BehaviorSubject<Box | null>(null);
  public highlightedBox$: Observable<Box | null> = this.highlightedBoxSubject.asObservable();
  
  constructor() {
  const defaultBoxes:Box[]=[
    {x:20,y:30,size:20},
    {x:157,y:140,size:20},
    {x:202,y:300,size:20},
    {x:403,y:219,size:20},
    {x:18,y:100,size:20}];
  this.boxesNew.next(defaultBoxes);
  }

  addBoxes(box: Box) {
    const boxes = this.boxesNew.getValue();
    boxes.push(box);
    this.boxesNew.next(boxes);
  }

  deleteBox(box: Box) {
   const boxes = this.boxesNew.getValue().filter(b => b !==box);
   this.boxesNew.next(boxes);
  }

  updateBoxList(boxes:Box[])
  {
    this.boxesNew.next(boxes);
  }
   
  getBoxes(): Box[] {
    return this.boxesNew.getValue();
  }
  setSelectedBox(box: Box | null) {
    this.selectedBoxSubject.next(box);
  }

  getSelectedBox(): Observable<Box | null> {
    return this.selectedBoxSubject.asObservable();
  }

  toggleBoxHighlight(box: Box) {
    const highlightedBox = this.highlightedBoxSubject.getValue();
    if (highlightedBox === box) {
      this.highlightedBoxSubject.next(null);
    } else {
      this.highlightedBoxSubject.next(box);
    }
  }
}