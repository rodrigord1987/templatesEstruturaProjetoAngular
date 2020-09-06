import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PoI18nPipe, PoI18nService, PoNotificationService } from '@portinari/portinari-ui';
import { PoDialogService } from '@portinari/portinari-ui';
import { forkJoin } from 'rxjs';

@Component({
    selector: 'app-component-name-list',
    templateUrl: './component-name.list.component.html',
    styleUrls: ['./component-name.list.component.css']
})
export class ComponentNameListComponent implements OnInit, OnDestroy {
    // @ViewChild('modalAdvanceSearch', { static: false }) modalAdvanceSearch: PoModalComponent;

    literals: any = {};

    /*
    breadcrumb: PoBreadcrumb;

    disclaimers: Array<PoDisclaimer> = [];
    disclaimerGroup: PoDisclaimerGroup;

    disclaimerUtil: DisclaimerUtil;

    filterSettings: PoPageFilter;

    quickSearchValue = '';

    confirmAdvSearchAction: PoModalAction;
    cancelAdvSearchAction: PoModalAction;

    servEntitySubscription$: Subscription;

    columns: Array<PoTableColumn>;
    tableActions: Array<PoTableAction>;
    items: Array<IEntity> = new Array<IEntity>();

    hasNext = false;
    currentPage = 1;
    pageSize = 20;
	
    expandables = [''];
	
    pageActions: Array<PoPageAction>;
    */

    constructor(
        private poI18nPipe: PoI18nPipe,
        private poI18nService: PoI18nService,
        private poNotification: PoNotificationService,
        private poDialogService: PoDialogService,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit(): void {
        forkJoin(
            this.poI18nService.getLiterals(),
            this.poI18nService.getLiterals({ context: 'componentName' })
        ).subscribe(literals => {
            literals.map(item => Object.assign(this.literals, item));

            console.log('LOG', 'Início do Programa de Lista');

            /*
            this.disclaimerUtil = new DisclaimerUtil(this.poNotification, this.poI18nPipe, this.literals);

            this.breadcrumbControlService.addBreadcrumb(this.literals['componentNameList'], this.activatedRoute);
            */

            this.setupComponents();

            // this.search();
        });
    }

    /*
    search(loadMore = false): void {
        if (loadMore === true) {
            this.currentPage = this.currentPage + 1;
        } else {
            this.currentPage = 1;
            this.items = [];
        }

        this.hasNext = false;
        this.servEntitySubscription$ = this.serviceEntity
            .query(this.disclaimers || [], this.expandables, this.currentPage, this.pageSize)
            .subscribe((response: TotvsResponse<IEntity>) => {

                if (response && response.items) {
                    this.items = [...this.items, ...response.items];
                    this.hasNext = response.hasNext;
                }

                if (this.items.length === 0) { this.currentPage = 1; }
            });
    }
    */

    /*
    searchBy(filter = null): void {
        this.disclaimers = [];

        if (!filter) {
            filter = this.quickSearchValue;
        }

        this.addDisclaimer([
            this.disclaimerUtil.makeDisclaimer('attribute', filter)
        ]);
    }
    */

    /*
    addDisclaimer(disclaimerListItem: Array<PoDisclaimer>): void {
        if (!disclaimerListItem) { return; }

        disclaimerListItem.map(disclaimerItem => {
            if (disclaimerItem.property !== '') { this.disclaimers.push(disclaimerItem); }
        });
        this.disclaimerGroup.disclaimers = [...this.disclaimers];
    }
    */

    /*
    onChangeDisclaimer(disclaimers: Array<PoDisclaimer>): void {
        this.disclaimers = disclaimers;
        this.refreshFilters();
        this.search();
    }
    */

    /*
    resetFilters(): void {

        // Inicia os Campos de Filtros

    }
    */

    /*
    refreshFilters(): void {
        if (!this.disclaimers || this.disclaimers.length === 0) {
            this.resetFilters();
            this.refreshDisclaimer();
            return;
        }

        // Atualizar os Campos de Filtro conforme o Disclaimer

    }
    */

    /*
    refreshDisclaimer(): void {
        this.disclaimers = [];

        this.quickSearchValue = '';

        // Inclui os Campos de Filtro no Disclaimer
        this.addDisclaimer([

        ]);
    }
    */

    /*
    advancedSearch(): void {
        this.resetFilters();
        if (this.disclaimers && this.disclaimers.length > 0) {
            this.refreshFilters();
        }

        this.modalAdvanceSearch.open();
    }
    */

    /*
    onConfirmAdvAction(): void {
        if (this.onValidFields()) {
            this.refreshDisclaimer();
            this.modalAdvanceSearch.close();
        }
    }
    */

    /*
    onValidFields(): boolean {
        let isOk = true;

        // Validar os Campos do Filtro

        return isOk;
    }
    */

    setupComponents(): void {

        /*
        this.breadcrumb = this.breadcrumbControlService.getBreadcrumb();

        this.disclaimerGroup = {
            title: this.literals['filters'],
            disclaimers: [],
            change: this.onChangeDisclaimer.bind(this)
        };

        this.filterSettings = {
            action: 'searchBy',
            advancedAction: 'advancedSearch',
            ngModel: 'quickSearchValue',
            placeholder: this.literals['attribute']
        };

        this.confirmAdvSearchAction = {
            action: () => this.onConfirmAdvAction(), label: this.literals['search']
        };

        this.cancelAdvSearchAction = {
            action: () => this.modalAdvanceSearch.close(), label: this.literals['cancel']
        };

        this.tableActions = [
            { action: this.method.bind(this), label: this.literals['method'], icon: 'po-icon po-icon-method' }
        ];

        this.columns = [
            { property: 'attribute', label: this.literals['attribute'], type: 'string' }
        ];

        this.pageActions = [
            { label: this.literals['add'], action: this.create.bind(this), icon: 'po-icon-plus' }
        ];

        this.resetFilters();
        */
    }

    ngOnDestroy(): void {
        // if (this.servEntitySubscription$) { this.servEntitySubscription$.unsubscribe(); }
    }
}
