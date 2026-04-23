import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Projects } from './pages/projects/projects';
import { Contact } from './pages/contact/contact';
import { About } from './pages/about/about';
import { Learning } from './pages/learning/learning';
import { DataScience } from './pages/data-science/data-science';
import { Admin } from './pages/admin/admin';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'projects', component: Projects },
    { path: 'contact', component: Contact },
    { path: 'about', component: About },
    { path: 'learning', component: Learning },
    { path: 'data-science', component: DataScience },
    { path: 'admin', component: Admin }
]
