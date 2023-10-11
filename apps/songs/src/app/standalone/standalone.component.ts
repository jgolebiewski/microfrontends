import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'microfrontends-standalone',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './standalone.component.html',
  styleUrls: ['./standalone.component.scss'],
})
export class StandaloneComponent {}
