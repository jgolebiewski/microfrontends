import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'standalone-nx-welcome',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div>
      <a [routerLink]="['']" class="btn-link">Back to main page</a>
    </div>
  `,

})
export class NxWelcomeComponent {}
