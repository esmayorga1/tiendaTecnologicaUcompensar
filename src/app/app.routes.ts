import { Routes } from '@angular/router';
import { SigninComponent } from './component/auth/signin/signin.component';
import { SignupComponent } from './component/auth/signup/signup.component';
import { HomeComponent } from './component/home/home.component';
import { ProductComponent } from './component/product/product.component';
import { TablaProductosComponent } from './component/tabla-productos/tabla-productos.component';
import { TableProductItemComponent } from './component/table-product-iteam/table-product-item.component';
import { TablaImagProductComponent } from './component/tabla-imag-product/tabla-imag-product.component';
import { LoginGuard } from './guard/login.guard';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'admin', component:  TablaProductosComponent, canActivate: [LoginGuard] },
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'product/:id', component: ProductComponent },
    { path: 'table', component: TablaProductosComponent },
    { path: 'admin/:id', component: TableProductItemComponent },
    { path: 'table-img', component: TablaImagProductComponent},
];
