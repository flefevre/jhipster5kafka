import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil, JhiResolvePagingParams } from 'ng-jhipster';
import { UserRouteAccessService } from 'app/core';
import { Observable } from 'rxjs';
import { Author } from 'app/shared/model/author.model';
import { AuthorService } from './author.service';
import { AuthorComponent } from './author.component';
import { AuthorDetailComponent } from './author-detail.component';
import { AuthorUpdateComponent } from './author-update.component';
import { AuthorDeletePopupComponent } from './author-delete-dialog.component';
import { IAuthor } from 'app/shared/model/author.model';

@Injectable({ providedIn: 'root' })
export class AuthorResolve implements Resolve<IAuthor> {
    constructor(private service: AuthorService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).map((author: HttpResponse<Author>) => author.body);
        }
        return Observable.of(new Author());
    }
}

export const authorRoute: Routes = [
    {
        path: 'author',
        component: AuthorComponent,
        resolve: {
            pagingParams: JhiResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            defaultSort: 'id,asc',
            pageTitle: 'jhipster5KafkaApp.author.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'author/:id/view',
        component: AuthorDetailComponent,
        resolve: {
            author: AuthorResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jhipster5KafkaApp.author.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'author/new',
        component: AuthorUpdateComponent,
        resolve: {
            author: AuthorResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jhipster5KafkaApp.author.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'author/:id/edit',
        component: AuthorUpdateComponent,
        resolve: {
            author: AuthorResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jhipster5KafkaApp.author.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const authorPopupRoute: Routes = [
    {
        path: 'author/:id/delete',
        component: AuthorDeletePopupComponent,
        resolve: {
            author: AuthorResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jhipster5KafkaApp.author.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
