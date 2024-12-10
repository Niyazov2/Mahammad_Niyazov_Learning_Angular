import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { EventListComponent } from './app/event-list/event-list.component';
import { ModifyItemListComponent } from './app/modify-item-list/modify-item-list.component';
import { PageNotFoundComponent } from './app/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo: '/event', pathMatch:'full'},
  {path: 'event', component: EventListComponent},
  {path: 'modify-event', component: ModifyItemListComponent},
  {path: '**', component: PageNotFoundComponent}]

bootstrapApplication(AppComponent, {
  providers : [provideRouter(routes)],
})
  .then((err) => console.error("bootstrap successful"));
