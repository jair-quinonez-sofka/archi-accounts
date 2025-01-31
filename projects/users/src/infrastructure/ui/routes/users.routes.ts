import { Routes } from "@angular/router";
import { CreateUserContainerComponent } from "../containers/create-user-container/create-user-container.component";
import { LoginLayoutComponent } from "../layouts/login-layout/login-layout.component";
import { MainLayoutComponent } from "../layouts/main-layout/main-layout.component";
import { LoginUserContainerComponent } from "../containers/login-user-container/login-user-container.component";
import { authGuard } from "shared";
import { DashboardLayoutComponent } from "../layouts/dashboard-layout/dashboard-layout.component";

export const usersRoutes: Routes = [
    {
        path: 'login',
        component: MainLayoutComponent,
        children: [
            {
                path:'',
                component: LoginLayoutComponent,
                children: [
                    {
                        path:'',
                        component: LoginUserContainerComponent,

                    }
                ]
            }
        ]
    },
    {
        path: 'dashboard/create',
        component: DashboardLayoutComponent,
        canActivate:[authGuard],
        data: { redirectTo: '/users/login' },
        children: [
            {
                path:'',
                component: CreateUserContainerComponent,
            }
        ]
    },
    {
        path: 'dashboard',
        component: DashboardLayoutComponent,
        canActivate:[authGuard],
        data: { redirectTo: '/users/login' },
        
    }
]