import { NgModule } from '@angular/core';

import { MoneySignPipe } from './moneySign.pipe';

@NgModule({
  declarations: [MoneySignPipe], //Pipes, components, directives
  exports: [MoneySignPipe],
})
export class SharedModule {}
