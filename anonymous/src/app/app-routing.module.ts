import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ListComponent } from './form/list/list.component';
import { EditComponent } from './form/edit/edit.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path:'', pathMatch:'full', component: FormComponent},
    { path: 'list', pathMatch: 'full', component: ListComponent},
    { path: 'edit', pathMatch: 'full', component: EditComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
