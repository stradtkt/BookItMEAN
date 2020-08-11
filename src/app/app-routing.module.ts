import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as fromComponents from './components';

export const routes: Routes = [
    {path: '', component: fromComponents.DashboardComponent},
    {path: 'book/add', component: fromComponents.BookAddComponent},
    {path: 'books', component: fromComponents.BookComponent},
    {path: 'books/edit/:bookId', component: fromComponents.BookEditComponent},
    {path: 'books/:bookId', component: fromComponents.BookDetailComponent},
    {path: 'books/:bookId/add', component: fromComponents.ReviewAddComponent},
    {path: 'books/:bookId/:reviewId/edit', component: fromComponents.ReviewEditComponent},
    {path: 'books/:bookId/:reviewId/detail', component: fromComponents.ReviewDetailComponent},
    {path: '**', component: fromComponents.NotFoundComponent},
];

NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})

export class AppRoutingModule {}