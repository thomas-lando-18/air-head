import { Component } from '@angular/core';
import { WingShape } from './wing-shape';

@Component({
  selector: 'app-wing-shape-selection',
  standalone: true,
  imports: [],
  templateUrl: './wing-shape-selection.component.html',
  styleUrl: './wing-shape-selection.component.css'
})
export class WingShapeSelectionComponent {
  validCamber: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  validThickness : Array<number> = Array.from(Array(99).keys());

  model = new WingShape(2, 4, 12)

  submitted: boolean = false;

  onSubmit() {
    this.submitted = true;
    console.log("The button has been pressed")
  }
}
