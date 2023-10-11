import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'standalone-standalone-app-entry',
  template: `<standalone-nx-welcome></standalone-nx-welcome>`,
  styles: [
    `
      @tailwind components;
      @tailwind utilities;

      @layer components {


        .btn-link{
          @apply py-2 px-4 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none ;
          background-color: theme('colors.warn[100]');
        }
      }
    `
  ],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class RemoteEntryComponent {}
