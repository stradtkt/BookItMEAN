import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as fromComponents from './components';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    {path: '', component: fromComponents.LoginComponent},
    {path: 'register', component: fromComponents.RegisterComponent},
    {path: 'dashboard', component: fromComponents.DashboardComponent, canActivate: [AuthGuard]},
    {path: 'books', component: fromComponents.BookComponent, canActivate: [AuthGuard]},
    {path: 'books/add', component: fromComponents.BookAddComponent, canActivate: [AuthGuard]},
    {path: 'books/edit/:bookId', component: fromComponents.BookEditComponent, canActivate: [AuthGuard]},
    {path: 'books/:bookId', component: fromComponents.BookDetailComponent, canActivate: [AuthGuard]},
    {path: 'books/:bookId/review/add', component: fromComponents.ReviewAddComponent, canActivate: [AuthGuard]},
    {path: 'books/:bookId/review/edit/:reviewId', component: fromComponents.ReviewEditComponent, canActivate: [AuthGuard]},
    {path: 'books/:bookId/review/detail/:reviewId', component: fromComponents.ReviewDetailComponent, canActivate: [AuthGuard]},
    {path: '**', component: fromComponents.NotFoundComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [AuthGuard]
})

export class AppRoutingModule {}