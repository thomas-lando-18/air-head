import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { WingShapeSelectionComponent } from "./wing-shape-selection/wing-shape-selection.component";
import { WingViewComponent } from "./wing-view/wing-view.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, WingShapeSelectionComponent, WingViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'air-head';
}
