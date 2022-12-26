import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TestDarkComponent} from "./components/test-dark/test-dark.component";

const routes: Routes = [
  { path: '', component: TestDarkComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
