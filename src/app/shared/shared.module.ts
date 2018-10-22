import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@myapp/app/shared-modules/translate/translate.module';

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule, TranslateModule],
  declarations: [],
  exports: [CommonModule, RouterModule, TranslateModule, ReactiveFormsModule],
  providers: []
})
export class SharedModule {}
