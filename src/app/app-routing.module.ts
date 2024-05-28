import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { OsdExamsComponent } from './pages/osd-exams/osd-exams.component';

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `HomeComponent`
  {path: 'home',
  component: HomeComponent,},
  {path: 'about',
  component: AboutComponent,},
  {path: 'course',
  component: CoursesComponent,},
  {path: 'osd-exams',
  component: OsdExamsComponent,},
  {path: 'contact',
  component: ContactComponent,},
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
