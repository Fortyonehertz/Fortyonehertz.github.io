import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



import {
  MatToolbarModule,
  MatCardModule,
  MatDividerModule,
  MatTabsModule,
  MatIconModule,
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatTabsModule,
    MatIconModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatTabsModule,
    MatIconModule
  ]
})
export class MaterialModule { }
