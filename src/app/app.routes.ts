import { Routes } from '@angular/router';
import { SigninComponent } from './component/auth/signin/signin.component';
import { SignupComponent } from './component/auth/signup/signup.component';
import { HomeComponent } from './component/home/home.component';
import { ProductComponent } from './component/product/product.component';
import { TablaProductosComponent } from './component/tabla-productos/tabla-productos.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'admin', component: HomeComponent},
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'product/:id', component: ProductComponent },
    { path: 'table', component: TablaProductosComponent},


];
