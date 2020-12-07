import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { KeyValuePipe } from './pipes/key-value.pipe';

@NgModule({
  declarations: [KeyValuePipe],
  imports: [
    CommonModule,
    HttpClientModule,
  ]
})
export class CoreModule { }
