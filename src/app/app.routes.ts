import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { AboutComponent } from '../components/about/about.component';
import { ContactComponent } from '../components/contact/contact.component';
import { RegisterComponent } from '../components/register/register.component';
import { LogInComponent } from '../components/log-in/log-in.component';

const title = "Electronic Commerce";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: `Home | ${title}`,
  },
  {
    path: 'log-in',
    component: LogInComponent,
    title: `Log In | ${title}`,
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: `Register | ${title}`,
  },
  {
    path: 'about',
    component: AboutComponent,
    title: `About | ${title}`,
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: `Contact | ${title}`,
  },
  {
    path: '**',
    redirectTo: '',
    title: `Home | ${title}`,
  },
];

export default routes;
