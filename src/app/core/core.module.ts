import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppViewComponent } from '@myapp/app/core/views/app.view';

@NgModule({
  imports: [
    // app shared module
    // SharedModule
    CommonModule,
    RouterModule
  ],
  declarations: [AppViewComponent],
  providers: [],
  exports: [AppViewComponent]
})
export class CoreModule {}
