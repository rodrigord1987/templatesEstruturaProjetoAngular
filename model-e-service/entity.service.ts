import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PoDisclaimer } from '@portinari/portinari-ui';
import { Observable } from 'rxjs';
import { TotvsResponse } from '../interfaces/totvs-response.interface';
import { IEntity, Entity } from '../model/entity.model';

@Injectable()
export class EntityService {

    private headers = { headers: { 'X-Portinari-Screen-Lock': 'true' } };

    // private apiBaseUrl = '/dts/datasul-rest/resources/prg/fin/v1/entity';
    private apiBaseUrl = '/entity';

    private expandables = [''];

    constructor(private http: HttpClient) { }

    query(filters: PoDisclaimer[], expandables: string[], page = 1, pageSize = 20): Observable<TotvsResponse<IEntity>> {
        const url = this.getUrl(this.apiBaseUrl, filters, expandables, page, pageSize);

        return this.http.get<TotvsResponse<IEntity>>(url, this.headers);
    }

    getById(id: string, expandables: string[]): Observable<IEntity> {
        let lstExpandables = this.getExpandables(expandables);
        if (lstExpandables !== '') { lstExpandables = `?${lstExpandables}`; }

        return this.http.get<IEntity>(`${this.apiBaseUrl}/${id}${lstExpandables}`, this.headers);
    }

    create(model: IEntity): Observable<IEntity> {
        return this.http.post<IEntity>(this.apiBaseUrl, model, this.headers);
    }

    update(model: IEntity): Observable<IEntity> {
        return this.http.put<IEntity>(`${this.apiBaseUrl}/${Entity.getInternalId(model)}`, model, this.headers);
    }

    delete(id: string): Observable<Object> {
        return this.http.delete(`${this.apiBaseUrl}/${id}`, this.headers);
    }

    getUrl(urlBase: string, filters: PoDisclaimer[], expandables: string[], page: number, pageSize: number): string {
        const urlParams = new Array<String>();

        urlParams.push(`pageSize=${pageSize}`);
        urlParams.push(`page=${page}`);

        const lstExpandables = this.getExpandables(expandables);
        if (lstExpandables !== '') { urlParams.push(lstExpandables); }

        if (filters && filters.length > 0) {
            filters.map(filter => {
                urlParams.push(`${filter.property}=${filter.value}`);
            });
        }

        return `${urlBase}?${urlParams.join('&')}`;
    }

    getExpandables(expandables: string[]): string {
        let lstExpandables = '';

        if (expandables && expandables.length > 0) {
            expandables.map(expandable => {
                if (expandable !== '' && this.expandables.includes(expandable)) {
                    if (lstExpandables !== '') { lstExpandables = `${lstExpandables},`; }
                    lstExpandables = `${lstExpandables}${expandable}`;
                }
            });
        }

        if (lstExpandables !== '') { lstExpandables = `expand=${lstExpandables}`; }

        return lstExpandables;
    }
}
