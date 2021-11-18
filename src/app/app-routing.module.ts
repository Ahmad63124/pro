import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormcComponent } from './formc/formc.component';
import { FpageComponent } from './fpage/fpage.component';

const routes: Routes = [
 {path: "fpage" , component: FpageComponent},
  {path: "form", component: FormcComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
