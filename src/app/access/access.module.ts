import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '@myapp/app/access/access.routes';
import { SharedModule } from '@myapp/app/shared/shared.module';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  providers: []
})
export class AccessModule {}
