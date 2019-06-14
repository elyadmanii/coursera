import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { CoursesComponent } from './components/courses/courses.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchContenuComponent } from './components/search/search-contenu/search-contenu.component';
import { SearchItemComponent } from './components/search/search-item/search-item.component';
import { SearchUserComponent } from './components/search/search-user/search-user.component';
import { GestionCoursComponent } from './components/gestion-cours/gestion-cours.component';

const routes: Routes = [
  {
    path: 'home',
    component: IndexComponent
  },
  {
    path: 'coures',
    component: CoursesComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'search-contenu',
    component: SearchContenuComponent
  },
  {
    path: 'search-item',
    component: SearchItemComponent
  },
  {
    path: 'search-user',
    component: SearchUserComponent
  },
  {
    path: 'gestion-cours',
    component: GestionCoursComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
