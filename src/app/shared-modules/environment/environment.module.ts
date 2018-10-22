// common angular modules
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EnvironmentModel } from '@myapp/app/shared-modules/environment/models/environment.model';
import { environmentProvider } from '@myapp/app/shared-modules/environment/providers/environment.provider';
import { EnvironmentService } from '@myapp/app/shared-modules/environment/services/environment.service';

@NgModule({
  imports: [
    // angular defaults
    CommonModule
  ],
  providers: [EnvironmentService, EnvironmentModel, environmentProvider]
})
export class EnvironmentModule {}
