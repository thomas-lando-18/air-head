import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WingShape } from './wing-shape';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-wing-shape-selection',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './wing-shape-selection.component.html',
  styleUrl: './wing-shape-selection.component.css'
})
export class WingShapeSelectionComponent {
  validCamber: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  validThickness : Array<number> = Array.from(Array(99).keys());
  wingShape: WingShape
  wingForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.wingForm = this.fb.group(
      {
        number1: [null, [Validators.required, Validators.pattern('^[0-9]+$')]],
        number2: [null, [Validators.required, Validators.pattern('^[0-9]+$')]],
        number3: [null, [Validators.required, Validators.min(0), Validators.max(99)]],
      }
    )

    this.wingShape = new WingShape(
      this.wingForm.value.number1,
      this.wingForm.value.number2,
      this.wingForm.value.number3 
    )
  }

  onSubmit() {
    // this.submitted = true;
    console.log("The button has been pressed")
    this.wingShape = new WingShape(
      this.wingForm.value.number1,
      this.wingForm.value.number2,
      this.wingForm.value.number3 
    )

    console.log(this.wingShape)
  }

  
}
