import { Routes } from '@angular/router';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { OrderComponent } from './components/order/order.component';
import { RegisterComponent } from './components/register/register.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

export const routes: Routes = [
    {
      path: "",
      component: LayoutsComponent,
      children: [
        {
          path: "",
          component: HomeComponent
        },
        {
          path: "shopping-cart",
          component: ShoppingCartComponent
        },
        {
          path: "register",
          component: RegisterComponent
        },
        {
          path: "login",
          component: LoginComponent
        },
        {
          path: "orders",
          component: OrderComponent
        },
        {
          path: "book-detail/:value",
          loadComponent:() => import("./components/book-detail/book-detail.component")
        }
      ]
    }
  ];
