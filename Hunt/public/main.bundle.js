webpackJsonp([1,4],{

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.department == undefined || user.area == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(rsa.com|dell.com|emc.com)/;
        return re.test(email);
    };
    ValidateService.prototype.validateReport = function (defect) {
        if (defect.summary == undefined || defect.description == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ValidateService);
    return ValidateService;
}());
//# sourceMappingURL=/Users/hardikkumar.diyora/HuntApp/The_Hunt/Hunt/front-end/src/validate.service.js.map

/***/ }),

/***/ 400:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 400;


/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(518);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/hardikkumar.diyora/HuntApp/The_Hunt/Hunt/front-end/src/main.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(708),
            styles: [__webpack_require__(699)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/hardikkumar.diyora/HuntApp/The_Hunt/Hunt/front-end/src/app.component.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_admin_admin_component__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_validate_service__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_auth_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular2_flash_messages__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ng2_opd_popup__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ngx_pagination__ = __webpack_require__(697);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angular2_multiselect_dropdown_angular2_multiselect_dropdown__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pipes_filter_pipe__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pipes_filterhunter_pipe__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ngx_order_pipe__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_docs_docs_component__ = __webpack_require__(521);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_13__components_admin_admin_component__["a" /* AdminComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__["a" /* AuthGuard */]], data: { master: true } },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'docs', component: __WEBPACK_IMPORTED_MODULE_24__components_docs_docs_component__["a" /* DocsComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_admin_admin_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_21__pipes_filter_pipe__["a" /* FilterPipe */],
                __WEBPACK_IMPORTED_MODULE_22__pipes_filterhunter_pipe__["a" /* FilterhunterPipe */],
                __WEBPACK_IMPORTED_MODULE_24__components_docs_docs_component__["a" /* DocsComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_16_angular2_flash_messages__["FlashMessagesModule"],
                __WEBPACK_IMPORTED_MODULE_18_ng2_opd_popup__["a" /* PopupModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_19_ngx_pagination__["a" /* NgxPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_20_angular2_multiselect_dropdown_angular2_multiselect_dropdown__["a" /* AngularMultiSelectModule */],
                __WEBPACK_IMPORTED_MODULE_23_ngx_order_pipe__["a" /* OrderModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_14__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_15__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__["a" /* AuthGuard */],
                { provide: __WEBPACK_IMPORTED_MODULE_5__angular_common__["LocationStrategy"], useClass: __WEBPACK_IMPORTED_MODULE_5__angular_common__["HashLocationStrategy"] }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/hardikkumar.diyora/HuntApp/The_Hunt/Hunt/front-end/src/app.module.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_opd_popup__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminComponent = (function () {
    function AdminComponent(authService, flashMessage, popup, router) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.popup = popup;
        this.router = router;
        this.secure = false;
        this.reverse = true;
        this.defect_state = [undefined, 'New', 'Duplicate', 'Processed'];
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.tab = 1;
        this.expandedIndex = -1;
        this.nw_severities = [undefined, 'P0 (High)', 'P1 (Medium)', 'P2 (Low)'];
        this.hunting_areas = [undefined, 'Fresh Installation', 'Administration',
            'Capture & Parsing', 'New Investigation',
            'Event Analytics', 'Reporting', 'Respond (IM)',
            'Migration', 'Security Vulnerability'];
        this.offices = [undefined, 'APJ', 'US', 'Europe'];
    };
    AdminComponent.prototype.onSecureSubmit = function () {
        var _this = this;
        if (this.sec == "master123") {
            this.secure = true;
            this.authService.getCountAndDistinctDefects().subscribe(function (defects) {
                _this.count_dist_defects = defects;
            });
        }
        else {
            this.secure = false;
            this.flashMessage.show('Secure key is incorrect!', { cssClass: 'alert-danger', timeout: 2000 });
        }
    };
    AdminComponent.prototype.onDelete = function (id) {
        this.id = id;
        this.popup.options = {
            header: "Are you sure to delete this defect ?",
            color: "#a12005",
            widthProsentage: 30,
            animationDuration: 0.5,
            showButtons: true,
            confirmBtnContent: "Confirm",
            cancleBtnContent: "Cancel",
            confirmBtnClass: "btn btn-success",
            cancleBtnClass: "btn btn-default",
            animation: "bounceInDown" // 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown' 
        };
        this.popup.show(this.popup.options);
    };
    AdminComponent.prototype.onDeleteConfirm = function () {
        var _this = this;
        this.authService.removeDefect(this.id).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Deleted Successfully', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/admin']);
                _this.expandedIndex = -1;
                _this.getDefects();
            }
            else {
                _this.flashMessage.show('Something went wrong !', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/admin']);
            }
        });
        this.popup.hide();
    };
    AdminComponent.prototype.onUpdate = function (id, def) {
        var _this = this;
        var updated_defect = {
            decription: def.description,
            comments: def.comments,
            state: def.state,
            severity: def.severity
        };
        this.authService.updateDefect(id, updated_defect).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You successfully updated the defect', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/admin']);
            }
            else {
                _this.flashMessage.show('Something went wrong !', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/admin']);
            }
        });
    };
    AdminComponent.prototype.getDefects = function () {
        var _this = this;
        this.authService.getAllDefects().subscribe(function (defects) {
            _this.all_defects = defects;
        });
    };
    AdminComponent.prototype.getUsers = function () {
        var _this = this;
        this.authService.getAllUsers().subscribe(function (users) {
            _this.all_users = users;
        });
    };
    AdminComponent.prototype.getRewards = function () {
        var _this = this;
        this.authService.getCountAndDistinctDefects().subscribe(function (defects) {
            _this.count_dist_defects = defects;
        });
    };
    AdminComponent.prototype.onReverse = function () {
        if (this.reverse) {
            this.reverse = false;
        }
        else {
            this.reverse = true;
        }
    };
    AdminComponent.prototype.expandRow = function (index) {
        if (this.expandedIndex === index) {
            this.expandedIndex = -1;
        }
        else {
            this.expandedIndex = index;
        }
    };
    AdminComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(709),
            styles: [__webpack_require__(700)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_opd_popup__["b" /* Popup */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_ng2_opd_popup__["b" /* Popup */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], AdminComponent);
    return AdminComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/hardikkumar.diyora/HuntApp/The_Hunt/Hunt/front-end/src/admin.component.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_opd_popup__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(150);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DashboardComponent = (function () {
    function DashboardComponent(validateService, flashMessage, authService, router, popup, http) {
        var _this = this;
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
        this.popup = popup;
        this.http = http;
        this.hunting_areas = ['Fresh Installation', 'Administration',
            'Capture & Parsing', 'New Investigation',
            'Event Analytics', 'Reporting', 'Respond (IM)',
            'Migration', 'Security Vulnerability'];
        this.nw_severities = ['P0 (High)', 'P1 (Medium)', 'P2 (Low)'];
        this.authService.getAllDefects().subscribe(function (defects) {
            _this.all_defects = defects;
        });
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.tab = 3;
        this.expandedIndex = -1;
        this.username = localStorage.getItem('user');
    };
    DashboardComponent.prototype.getFiles = function (event) {
        var _this = this;
        var formData = new FormData();
        for (var _i = 0, _a = event.target.files; _i < _a.length; _i++) {
            var file = _a[_i];
            formData.append(this.uploads, file);
        }
        this.http.post('defects/attachment', formData).subscribe(function (data) {
            _this.attachments = data.json();
        });
    };
    DashboardComponent.prototype.onReportSubmit = function () {
        var _this = this;
        var defect = {
            summary: this.summary,
            username: this.username.replace(/\"/g, ""),
            description: this.description,
            severity: this.severity,
            components: this.components,
            attachments: this.attachments
        };
        //Required Fields
        if (!this.validateService.validateReport(defect)) {
            this.flashMessage.show('Please fill in required fields.', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        //Register user
        this.authService.reportDefect(defect).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You successfully reported the defect', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.flashMessage.show('Something went wrong !', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/dashboard']);
            }
        });
    };
    DashboardComponent.prototype.onUpdate = function (id, def) {
        var _this = this;
        var updated_defect = {
            decription: def.description,
            severity: def.severity,
            components: def.components
        };
        this.authService.updateDefect(id, updated_defect).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You successfully updated the defect', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.flashMessage.show('Something went wrong !', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/dashboard']);
            }
        });
    };
    DashboardComponent.prototype.getIndividual = function () {
        var _this = this;
        this.authService.getIndividualDefects(this.username.replace(/\"/g, "")).subscribe(function (defs) {
            _this.individual_defect = defs;
        });
    };
    DashboardComponent.prototype.getAll = function () {
        var _this = this;
        this.authService.getAllDefects().subscribe(function (defects) {
            _this.all_defects = defects;
        });
    };
    DashboardComponent.prototype.expandRow = function (index) {
        if (this.expandedIndex === index) {
            this.expandedIndex = -1;
        }
        else {
            this.expandedIndex = index;
        }
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(710),
            styles: [__webpack_require__(701)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_ng2_opd_popup__["b" /* Popup */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5_ng2_opd_popup__["b" /* Popup */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__angular_http__["Http"]) === 'function' && _f) || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=/Users/hardikkumar.diyora/HuntApp/The_Hunt/Hunt/front-end/src/dashboard.component.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DocsComponent = (function () {
    function DocsComponent() {
    }
    DocsComponent.prototype.ngOnInit = function () {
    };
    DocsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-docs',
            template: __webpack_require__(711),
            styles: [__webpack_require__(702)]
        }), 
        __metadata('design:paramtypes', [])
    ], DocsComponent);
    return DocsComponent;
}());
//# sourceMappingURL=/Users/hardikkumar.diyora/HuntApp/The_Hunt/Hunt/front-end/src/docs.component.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(712),
            styles: [__webpack_require__(703)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=/Users/hardikkumar.diyora/HuntApp/The_Hunt/Hunt/front-end/src/home.component.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.username
        };
        if (this.username == "master") {
            this.authService.master = true;
        }
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('You are now logged in', {
                    cssClass: 'alert-success',
                    timeout: 2000 });
                if (_this.username == "master") {
                    _this.router.navigate(['admin']);
                }
                else {
                    _this.router.navigate(['dashboard']);
                }
            }
            else {
                _this.flashMessage.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeout: 3000 });
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(713),
            styles: [__webpack_require__(704)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/hardikkumar.diyora/HuntApp/The_Hunt/Hunt/front-end/src/login.component.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', {
            cssClass: 'alert-success',
            timeout: 3000
        });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(714),
            styles: [__webpack_require__(705)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/hardikkumar.diyora/HuntApp/The_Hunt/Hunt/front-end/src/navbar.component.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(715),
            styles: [__webpack_require__(706)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/hardikkumar.diyora/HuntApp/The_Hunt/Hunt/front-end/src/profile.component.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
        this.dropdownList = [];
        this.selectedItems = [];
        this.dropdownSettings = {};
        this.departments = ['Engineering', 'Global services', 'Sales', 'Others'];
        this.offices = ['APJ', 'US', 'Europe'];
        this.sizes = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.dropdownList = [
            { "id": 1, "itemName": "Fresh Installation" },
            { "id": 2, "itemName": "Administration" },
            { "id": 3, "itemName": "Capture & Parsing" },
            { "id": 4, "itemName": "New Investigation" },
            { "id": 5, "itemName": "Event Analytics" },
            { "id": 6, "itemName": "Reporting" },
            { "id": 7, "itemName": "Respond (IM)" },
            { "id": 8, "itemName": "Migration" },
            { "id": 9, "itemName": "Security Vulnerability" }
        ];
        this.dropdownSettings = {
            singleSelection: false,
            text: "Select Areas"
        };
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var areas = [];
        this.selectedItems.forEach(function (element) {
            areas.push(element.itemName);
        });
        if (this.department == 'Others') {
            this.department = this.other_department;
        }
        if (this.office == 'Other') {
            this.office = this.other_office;
        }
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.username,
            department: this.department,
            area: areas,
            size: this.size,
            office: this.office
        };
        //Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields.', { cssClass: 'alert-danger', timeout: 4000 });
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(user.email.toLowerCase())) {
            this.flashMessage.show("Please use a valid email, Use only 'rsa.com' or 'emc.com' or 'dell.com' domain.", { cssClass: 'alert-danger', timeout: 5000 });
            return false;
        }
        // Register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now registered and can log in', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('Something went wrong, May be duplicate registration !', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent.prototype.onItemSelect = function (item) {
    };
    RegisterComponent.prototype.OnItemDeSelect = function (item) {
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(716),
            styles: [__webpack_require__(707)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/hardikkumar.diyora/HuntApp/The_Hunt/Hunt/front-end/src/register.component.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route) {
        if (route.data["master"]) {
            if (this.authService.loggedIn() && this.authService.master) {
                return true;
            }
            else {
                this.authService.logout();
                this.router.navigate(['/login']);
                return false;
            }
        }
        else {
            if (this.authService.loggedIn()) {
                return true;
            }
            else {
                this.router.navigate(['/login']);
                return false;
            }
        }
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=/Users/hardikkumar.diyora/HuntApp/The_Hunt/Hunt/front-end/src/auth.guard.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (all_defects, summary, severity, state, component) {
        if (all_defects) {
            return all_defects.filter(function (defect) {
                if (summary && defect.summary.toLowerCase().indexOf(summary.toLowerCase()) === -1) {
                    return false;
                }
                if (severity && defect.severity.indexOf(severity) === -1) {
                    return false;
                }
                if (state && defect.state.toLowerCase().indexOf(state.toLowerCase()) === -1) {
                    return false;
                }
                if (component && defect.components.indexOf(component) === -1) {
                    return false;
                }
                return true;
            });
        }
        else {
            return all_defects;
        }
    };
    FilterPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filter'
        }), 
        __metadata('design:paramtypes', [])
    ], FilterPipe);
    return FilterPipe;
}());
//# sourceMappingURL=/Users/hardikkumar.diyora/HuntApp/The_Hunt/Hunt/front-end/src/filter.pipe.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterhunterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FilterhunterPipe = (function () {
    function FilterhunterPipe() {
    }
    FilterhunterPipe.prototype.transform = function (all_users, username, name, area, office, department) {
        if (all_users) {
            return all_users.filter(function (user) {
                if (username && user.username.toLowerCase().indexOf(username.toLowerCase()) === -1) {
                    return false;
                }
                if (name && user.name.toLowerCase().indexOf(name.toLowerCase()) === -1) {
                    return false;
                }
                if (area && user.area.indexOf(area) === -1) {
                    return false;
                }
                if (office && user.office.toLowerCase().indexOf(office.toLowerCase()) === -1) {
                    return false;
                }
                if (department && user.department.toLowerCase().indexOf(department.toLowerCase()) === -1) {
                    return false;
                }
                return true;
            });
        }
        else {
            return all_users;
        }
    };
    FilterhunterPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filterhunter'
        }), 
        __metadata('design:paramtypes', [])
    ], FilterhunterPipe);
    return FilterhunterPipe;
}());
//# sourceMappingURL=/Users/hardikkumar.diyora/HuntApp/The_Hunt/Hunt/front-end/src/filterhunter.pipe.js.map

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/hardikkumar.diyora/HuntApp/The_Hunt/Hunt/front-end/src/environment.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(722);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.master = false;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.removeDefect = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authToken);
        return this.http.delete('defects/delete/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.updateDefect = function (id, defect) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authToken);
        return this.http.put('defects/update/' + id, defect, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.reportDefect = function (defect) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authToken);
        return this.http.post('defects/report', defect, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authToken);
        return this.http.get('users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getAllDefects = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authToken);
        return this.http.get('defects/listDefects', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getIndividualDefects = function (username) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authToken);
        return this.http.get('defects/listDefects/1?username=' + username, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user.username));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        this.master = false;
        localStorage.clear();
    };
    /////////////////////////////////////User
    AuthService.prototype.getAllUsers = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authToken);
        return this.http.get('users/listUsers', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getCountAndDistinctDefects = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authToken);
        return this.http.get('defects/distAndcount', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=/Users/hardikkumar.diyora/HuntApp/The_Hunt/Hunt/front-end/src/auth.service.js.map

/***/ }),

/***/ 699:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 700:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 701:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 702:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 703:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 704:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 705:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 706:
/***/ (function(module, exports) {

module.exports = "\r\n.panel_content\r\n{\r\n    background-color: #eceff7;\r\n}\r\n.clickable{\r\n    cursor: pointer;\r\n}\r\n.panel\r\n{\r\n    background-color: #fff;\r\n    border: 1px solid transparent;\r\n    border-radius: 0;\r\n    /*-webkit-box-shadow: 0 1px 1px rgba(0,0,0,.05);*/\r\n    /*box-shadow: 0 1px 1px rgba(0,0,0,.05);*/\r\n}\r\n.product-type\r\n{\r\n    margin-top: 45px;\r\n}\r\n.product-size\r\n{\r\n    margin-top: 25px;\r\n}\r\n.product-use\r\n{\r\n    margin-top: 25px;\r\n    margin-bottom: 25px;\r\n}\r\n.panel-heading span {\r\n    margin-top: -20px;\r\n    font-size: 15px;\r\n}\r\n.panel-primary>.panel-heading {\r\n    color: #000;\r\n    background-color: #fff;\r\n    border-bottom: 1px solid #eeeeee;\r\n    padding-top: 20px;\r\n    padding-bottom: 20px;\r\n}\r\n.panel-title\r\n{\r\n    font-size: 22px;\r\n    font-weight:400;\r\n}\r\n\r\n.panel_product_type\r\n{\r\n    \r\n    margin-top: 20px;\r\n}\r\n.panel_product_type\r\n{\r\n    line-height: 26px;\r\n}\r\n.panel_product_type\r\n{\r\n    font-size: 18px;\r\n    font-weight: 400;\r\n    color: black;\r\n}\r\n\r\n"

/***/ }),

/***/ 707:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 708:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container\">\r\n  <flash-messages></flash-messages>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ 709:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"secure == false\">\r\n  <div class=\"row clearfix\">\r\n    <div class=\"col-md-3 col-md-offset-4 column\">\r\n      <form (submit)=\"onSecureSubmit()\">\r\n         <h4 class=\"page-header\">Please Provide</h4>\r\n        <div class=\"form-group\">\r\n            <label>Secure Key</label>\r\n            <input type=\"password\" class=\"form-control\" [(ngModel)]=\"sec\" name=\"sec\">\r\n        </div>\r\n          <input type=\"submit\" class=\"btn btn-primary\" value=\"Wel-come\">\r\n      </form>\r\n   </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n<div *ngIf=\"secure == true\">\r\n\r\n<br><br> \r\n    <ul class=\"nav nav-pills\" style=\"cursor: pointer\">\r\n      <li [ngClass]=\"{ 'active': tab == 1 }\"><a (click)=\"tab=1\">Rewards Assessment</a></li>\r\n      <li [ngClass]=\"{ 'active': tab == 2 }\"><a (click)=\"tab=2; getUsers()\">List of Hunters</a></li>\r\n      <li [ngClass]=\"{ 'active': tab == 3 }\"><a (click)=\"tab=3; getDefects()\">List of Defects</a></li>\r\n    </ul>\r\n<hr>\r\n\r\n<popup (confirmClick)=\"onDeleteConfirm(id)\"></popup>\r\n\r\n<div *ngIf=\"tab == 1\" style=\"width:1000px; margin:0 auto;\">\r\n<h4> Rewards Assessment</h4>\r\n<table class=\"table table-striped table-hover \">\r\n  <thead>\r\n    <tr>\r\n      <th>#</th>\r\n      <th>Team Lead ID</th>\r\n      <th style=\"cursor: pointer\" (click)=\"onReverse()\">\r\n        Number of defects \r\n      </th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let dist of (count_dist_defects | orderBy: total:reverse); let $index=index;\" >\r\n      <td>{{$index+1}} </td>\r\n      <td>{{dist._id}} </td>\r\n      <td>{{dist.total}} </td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n</div>\r\n\r\n<div *ngIf=\"tab == 2\" style=\"width:1000px; margin:0 auto;\">\r\n<h4>List of Teams</h4>\r\n<table class=\"table table-striped table-hover \">\r\n  <thead>\r\n    <tr>\r\n      <th width=\"10%\">Team ID</th>\r\n      <th width=\"10%\">Team Lead ID</th>\r\n      <th width=\"25%\">Team Members</th>\r\n      <th width=\"15%\">Department</th>\r\n      <th width=\"25%\">Hunting Areas</th>\r\n      <th width=\"15%\">Timezone</th>\r\n    </tr>\r\n    <tr>\r\n      <td></td>\r\n      <td>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"unam\" name=\"unam\">\r\n      </td>\r\n      <td>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"nam\" name=\"nam\">\r\n      </td>\r\n      <td>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"dep\" name=\"dep\">\r\n      </td>\r\n      <td>\r\n        <select class=\"form-control\" name=\"are\" [(ngModel)]=\"are\">\r\n            <option *ngFor=\"let a of hunting_areas\" value={{a}}>{{a}}</option>\r\n        </select>\r\n      </td>\r\n      <td>\r\n       <select class=\"form-control\" name=\"off\" [(ngModel)]=\"off\">\r\n            <option *ngFor=\"let o of offices\" value={{o}}>{{o}}</option>\r\n        </select>\r\n      </td>\r\n    </tr>\r\n\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let u of (all_users | filterhunter: unam:nam:are:off:dep); let $index=index; \" >\r\n      <td>U {{u.userId}}</td>\r\n      <td>{{u.username}}</td>\r\n      <td>{{u.name}}</td>\r\n      <td>{{u.department}}</td>\r\n      <td>{{u.area}}</td>\r\n      <td>{{u.office}}</td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n\r\n</div>\r\n\r\n<div *ngIf=\"tab == 3\" style=\"width:1000px; margin:0 auto;\">\r\n<h4> List of Defects</h4>\r\n\r\n<table class=\"table table-striped table-hover \" >\r\n    <thead>\r\n    <tr>\r\n        <th width=\"10%\">Defect ID</th>\r\n        <th width=\"40%\">Summary</th>\r\n        <th width=\"20%\">Severity</th>\r\n        <th width=\"15%\">State of Defect</th>\r\n        <th width=\"15%\">Area</th>\r\n    </tr>\r\n    <tr>\r\n        <td></td>\r\n        <td>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"sum\" name=\"sum\" placeholder=\"Filter by Summary\">\r\n        </td>\r\n        <td>\r\n          <select class=\"form-control\" name=\"sev\" [(ngModel)]=\"sev\">\r\n              <option *ngFor=\"let s of nw_severities\" value={{s}}>{{s}}</option>\r\n          </select> \r\n        </td>\r\n        <td>\r\n          <select class=\"form-control\" name=\"sta\" [(ngModel)]=\"sta\">\r\n              <option *ngFor=\"let p of defect_state\" value={{p}}>{{p}}</option>\r\n          </select>\r\n        </td>\r\n        <td>\r\n          <select class=\"form-control\" name=\"are\" [(ngModel)]=\"are\">\r\n              <option *ngFor=\"let a of hunting_areas\" value={{a}}>{{a}}</option>\r\n          </select>\r\n        </td>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngFor=\"let $index=index; let def of (all_defects | filter: sum:sev:sta:are) | paginate:{itemsPerPage: 10, currentPage: p}\" style=\"cursor: pointer\" >\r\n      <td><div (click)=\"expandRow($index)\">D {{def.defectId}}</div></td>\r\n      <td>\r\n        <div (click)=\"expandRow($index)\">\r\n        {{def.summary}} \r\n        </div>\r\n        <div *ngIf=\"$index === expandedIndex\">\r\n          <table class=\"table\">\r\n                <tr><td colspan=\"6\"></td></tr>\r\n                <tr>    \r\n                    <th>Description</th>\r\n                    <td colspan=\"5\">\r\n                      <textarea rows=\"5\" [(ngModel)]=\"def.description\" name=\"description\" class=\"form-control\">\r\n                      </textarea>\r\n                    </td>\r\n                </tr>\r\n                <tr>    \r\n                    <th>Severity</th>\r\n                    <td colspan=\"2\">\r\n                    <select class=\"form-control\" name=\"severity\" [(ngModel)]=\"def.severity\">\r\n                          <option *ngFor=\"let s of nw_severities\" value={{s}}>{{s}}</option>\r\n                      </select>       \r\n                    </td>\r\n                    <th>Attachments</th>\r\n                    <td>\r\n                      <a href=\"/uploads/{{item}}\" *ngFor=\"let $i=index; let item of def.attachments\" class=\"btn btn-link btn-xs\" download>{{$i+1}}</a>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                  <th>Comment</th>\r\n                    <td colspan=\"3\">\r\n                      <textarea rows=\"3\" [(ngModel)]=\"def.comments\" name=\"description\" class=\"form-control\">\r\n                      </textarea>\r\n                    </td>\r\n                </tr>\r\n                <tr>    \r\n                    <th>State of Defect</th>\r\n                    <td colspan=\"2\">\r\n                      <select class=\"form-control\" name=\"severity\" [(ngModel)]=\"def.state\">\r\n                          <option *ngFor=\"let s of defect_state\" value={{s}}>{{s}}</option>\r\n                      </select>                      \r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <th>Created On</th>\r\n                    <td colspan=\"2\">{{def.date | date:\"MM/dd/yy h:mma\"}} </td>\r\n                    <td>\r\n                      <button class=\"btn btn-primary btn-sm\" (click)=\"onUpdate(def._id, def)\">Update </button>                      \r\n                    </td>\r\n                    <td>\r\n                      <button class=\"btn btn-danger btn-sm\" (click)=\"onDelete(def._id)\">Delete </button>\r\n                    </td>\r\n                </tr>\r\n          </table>          \r\n        </div>\r\n      </td>\r\n      <td><div (click)=\"expandRow($index)\">{{def.severity}}</div></td>\r\n      <td><div (click)=\"expandRow($index)\">{{def.state}}</div></td>\r\n      <td><div (click)=\"expandRow($index)\">{{def.components}}</div></td>\r\n    </tr>\r\n    </tbody>\r\n    <tfoot>\r\n      <tr>\r\n        <td colspan=\"3\" >\r\n          <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\r\n        </td>  \r\n      </tr>\r\n    </tfoot>\r\n</table>\r\n\r\n</div>\r\n\r\n</div>"

/***/ }),

/***/ 710:
/***/ (function(module, exports) {

module.exports = "<br><br> \r\n\r\n<div>\r\n    <ul class=\"nav nav-pills\" style=\"cursor: pointer\">\r\n      <li [ngClass]=\"{ 'active': tab == 1 }\"><a (click)=\"tab=1\" >Report Defect</a></li>\r\n      <li [ngClass]=\"{ 'active': tab == 2 }\"><a (click)=\"tab=2; getIndividual();\">Defects reported by me</a></li>\r\n      <li [ngClass]=\"{ 'active': tab == 3 }\"><a (click)=\"tab=3; getAll();\" >View All Defects</a></li>\r\n     </ul>\r\n</div>     \r\n<hr>\r\n\r\n<!-- <popup (confirmClick)=\"onDeleteConfirm(id)\"></popup> -->\r\n\r\n\r\n<form class=\"form-horizontal\" (submit)=\"onReportSubmit()\" *ngIf=\"tab == 1\" style=\"width:1000px; margin:0 auto;\">\r\n   <div class=\"form-group\"> \r\n   <h4 class=\"page-header\">To report defect fill in the detail</h4>\r\n    <div class=\"form-group\">\r\n      <div class=\"col-sm-6\">\r\n      <label>Summary *</label>\r\n      <input type=\"summary\" [(ngModel)]=\"summary\" name=\"summary\" class=\"form-control\">\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <div class=\"col-sm-6\">\r\n          <label>Description *</label>\r\n          <textarea rows=\"5\" [(ngModel)]=\"description\" name=\"description\" class=\"form-control\" placeholder=\"Write Re-producible Steps\"></textarea>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <div class=\"col-sm-3\">\r\n        <label>Severity</label>\r\n        <select class=\"form-control\" name=\"severity\" [(ngModel)]=\"severity\">\r\n            <option *ngFor=\"let s of nw_severities\" value={{s}}>{{s}}</option>\r\n        </select>\r\n      </div>\r\n     <div class=\"col-sm-3\">\r\n      <label>Hunted Area</label>\r\n      <select class=\"form-control\" name=\"components\" [(ngModel)]=\"components\">\r\n            <option *ngFor=\"let a of hunting_areas\" value={{a}}>{{a}}</option>\r\n      </select>\r\n     </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <div class=\"col-sm-6\">\r\n        <label>Attachments</label>\r\n        <input type=\"file\" name=\"attachments\" class=\"form-control\" (change)=\"getFiles($event)\" multiple>\r\n      </div>\r\n    </div>\r\n      <input type=\"submit\" class=\"btn btn-primary\" value=\"Report\">\r\n    </div>\r\n </form>\r\n\r\n<div *ngIf=\"tab == 2\" style=\"width:1000px; margin:0 auto;\">\r\n<h4>My Defects</h4>\r\n<table class=\"table table-striped table-hover \" >\r\n    <thead>\r\n    <tr>\r\n        <th width=\"10%\">Defect ID</th>\r\n        <th width=\"60%\">Summary</th>\r\n        <th width=\"10%\">State</th>\r\n        <th width=\"20%\">Comments</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngFor=\"let def of individual_defect; let $index=index;\" style=\"cursor: pointer\" >\r\n      <td><div (click)=\"expandRow($index)\">D {{def.defectId}}</div></td>\r\n      <td>\r\n        <div (click)=\"expandRow($index)\">{{def.summary}} </div>\r\n        <div *ngIf=\"$index === expandedIndex\">\r\n          <table class=\"table\">\r\n                <tr><td colspan=\"6\"></td></tr>\r\n                <tr>    \r\n                    <th>Description</th>\r\n                    <td colspan=\"4\">\r\n                      <textarea rows=\"5\" [(ngModel)]=\"def.description\" name=\"description\" class=\"form-control\">\r\n                      </textarea>\r\n                    </td>\r\n                    <td>Attachments</td>\r\n                    <td><a href=\"/uploads/{{item}}\" *ngFor=\"let $i=index; let item of def.attachments\" class=\"btn btn-link btn-xs\" download>{{$i+1}}</a></td>\r\n                </tr>\r\n                <tr>    \r\n                    <th>Severity</th>\r\n                    <td>\r\n                      <select class=\"form-control\" name=\"severity\" [(ngModel)]=\"def.severity\">\r\n                          <option *ngFor=\"let s of nw_severities\" value={{s}}>{{s}}</option>\r\n                      </select>                      \r\n                    </td>\r\n                    <th>Hunted Area</th>\r\n                    <td>\r\n                      <select class=\"form-control\" name=\"components\" [(ngModel)]=\"def.components\">\r\n                            <option *ngFor=\"let a of hunting_areas\" value={{a}}>{{a}}</option>\r\n                      </select>                      \r\n                    </td>\r\n                </tr>\r\n                <tr>    \r\n                    <th>Actions</th>\r\n                    <td>\r\n\r\n                      <!-- <button class=\"btn btn-danger\" (click)=\"onDelete(def._id)\">Delete </button>\r\n -->\r\n                      <button class=\"btn btn-primary btn-sm\" (click)=\"onUpdate(def._id, def)\">Update </button>\r\n                    </td>\r\n                </tr>\r\n          </table>          \r\n        </div>\r\n      </td>\r\n      <td><div (click)=\"expandRow($index)\">{{def.state}}</div></td>\r\n      <td><div (click)=\"expandRow($index)\">{{def.comments}}</div></td>\r\n    </tr>\r\n    </tbody>\r\n</table>\r\n</div>\r\n\r\n\r\n<div *ngIf=\"tab == 3\" style=\"width:1000px; margin:0 auto;\">\r\n<h4>All Defects</h4>\r\n<table class=\"table table-striped table-hover \" *ngIf=\"tab == 3\">\r\n    <thead>\r\n    <tr>\r\n      <td colspan=\"2\">\r\n      <div class=\"col-sm-6\">\r\n         <input type=\"search\" class=\"form-control\" [(ngModel)]=\"sum\" name=\"sum\" placeholder=\"Filter by Summary\"></div>\r\n      </td>\r\n    </tr>\r\n      <tr>\r\n          <th width=\"10%\">Defect ID</th>\r\n          <th width=\"60%\">Summary</th>\r\n          <th width=\"15%\">Severity</th>\r\n          <th width=\"15%\">Area</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngFor=\"let $index=index;let def of all_defects | filter: sum | paginate:{itemsPerPage: 10, currentPage: p}\" style=\"cursor: pointer\" >\r\n        <td><div (click)=\"expandRow($index)\">D {{def.defectId}}</div></td>\r\n        <td>\r\n          <div (click)=\"expandRow($index)\">{{def.summary}} </div>\r\n          <div *ngIf=\"$index === expandedIndex\">\r\n            <table class=\"table\">\r\n                  <tr><td colspan=\"4\"></td></tr>\r\n                  <tr>    \r\n                      <th width=\"10%\">Description</th>\r\n                      <td colspan=\"3\">\r\n                        <textarea rows=\"5\" [(ngModel)]=\"def.description\" name=\"description\" class=\"form-control\">\r\n                        </textarea>\r\n                      </td>\r\n                  </tr>\r\n                  <tr>\r\n                      <th width=\"10%\">Attachments</th>\r\n                      <td width=\"10%\">\r\n                        <a class=\"btn btn-link btn-xs\" href=\"/uploads/{{item}}\" *ngFor=\"let $i=index; let item of def.attachments\" download>{{$i+1}}</a>\r\n                      </td>    \r\n                      <th width=\"20%\">Comments from Admin</th>\r\n                      <td width=\"60%\">{{def.comments}}</td>\r\n                  </tr>\r\n                  <tr>\r\n                      <th width=\"10%\">Created on</th>\r\n                      <td colspan=\"3\">{{def.date | date:\"MM/dd/yy, h:mma\"}}</td>\r\n                  </tr>\r\n            </table>          \r\n          </div>\r\n          </td>\r\n        <td><div (click)=\"expandRow($index)\">{{def.severity}}</div></td>\r\n        <td><div (click)=\"expandRow($index)\">{{def.components}}</div></td>\r\n    </tr>\r\n    </tbody>\r\n    <tfoot>\r\n      <tr>\r\n        <td colspan=\"6\" >\r\n          <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\r\n        </td>  \r\n      </tr>\r\n    </tfoot>\r\n</table>\r\n</div>\r\n\r\n"

/***/ }),

/***/ 711:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\r\n\r\n<h4 class=\"text-center\">Following are the documents which will help you to know <br>the new features which are coming with Netwitness 11.0</h4>\r\n<br>\r\n\r\n<br><br><br>\r\n\t<div class=\"list-group\">\r\n\t  <a class=\"list-group-item\">\r\n\t    Feature 1\r\n\t  </a>\r\n\t  <a class=\"list-group-item\">\r\n\t  Feature 2\r\n\t  </a>\r\n\t  <a class=\"list-group-item\">\r\n\t  Feature 3\r\n\t  </a>\r\n</div>\r\n<br><br><br>\r\n\t<div class=\"text-center\"><strong>If you run into issues with this portal , you may register by sending an email to <a href=\"mailto:thehunt@rsa.com?subject=Hello-TheHunt&body=Hi,%0D%20%20%20%20Please%20provide%20information%20regarding%20your%20concerns....%20\">thehunt@rsa.com</a></strong>\r\n</div>\r\n\r\n"

/***/ }),

/***/ 712:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\r\n\r\n<h3>Are you ready for the Netwitness 11.0 Hunt ? </h3><h4> August 8<sup>th</sup> - 11<sup>th</sup>, 2017</h4>\r\n<br>\r\n\r\n<br><br><br>\r\n\t<div>\r\n\t\t<a class=\"btn btn-primary btn-lg\" [routerLink]=\"['/register']\"> Register </a>\r\n\t\t<!-- <a class=\"btn btn-default\" [routerLink]=\"['/login']\"> Login Here </a> -->\r\n\t</div>\r\n<br><br><br>\r\n\t<strong>If you run into issues with this portal , you may register by sending an email to <a href=\"mailto:thehunt@rsa.com?subject=Hello-TheHunt&body=Hi,%0D%20%20%20%20Please%20provide%20information%20regarding%20your%20concerns....%20\">thehunt@rsa.com</a></strong>\r\n</div>\r\n\r\n"

/***/ }),

/***/ 713:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row clearfix\">\r\n    <div class=\"col-md-3 col-md-offset-4 column\">\r\n\t    <form (submit)=\"onLoginSubmit()\">\r\n\t       <h4 class=\"page-header\">Let's Hunt Netwitness</h4>\r\n\t\t    <div class=\"form-group\">\r\n\t\t        <label>User/Team-Lead ID</label>\r\n\t\t        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\">\r\n\t\t    </div>\r\n\t        <input type=\"submit\" class=\"btn btn-primary\" value=\"Let's Go\">\r\n\t    </form>\r\n   </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ 714:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n      <div class=\"container\">\r\n      <br>\r\n        <div class=\"navbar-header\">\r\n           <a [routerLink]=\"['/']\"><img class=\"pull-left\" src=\"./rsa-red-logo.png\" height=\"30\" width=\"90\" hspace=\"10\"></a>\r\n        </div>\r\n        <div id=\"navbar\" class=\"collapse navbar-collapse\">\r\n          <ul class=\"nav navbar-nav navbar-right\">\r\n            <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/login']\">Login</a></li>\r\n            <li *ngIf=\"authService.loggedIn() && authService.master\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/admin']\">Admin</a></li>\r\n            <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/dashboard']\">DashBoard</a></li>\r\n            <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/profile']\">Profile</a></li>\r\n            <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/register']\">Register</a></li>\r\n            <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/docs']\">Docs</a></li>\r\n            <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a href=\"mailto:thehunt@rsa.com?subject=Hello-TheHunt&body=Hi,%0D%20%20%20%20Please%20provide%20information%20regarding%20your%20concerns....%20\">Contact us</a></li>\r\n            <li *ngIf=\"authService.loggedIn()\"><a (click)=\"onLogoutClick()\" href=\"#\">Logout</a></li>\r\n          </ul>\r\n        </div><!--/.nav-collapse -->\r\n      </div>\r\n    </nav>"

/***/ }),

/***/ 715:
/***/ (function(module, exports) {

module.exports = " <div *ngIf=\"user\" >\r\n\t <h4 class=\"page-header\">Hello, Team </h4>\r\n<table class=\"table table-striped table-hover \" >\r\n  <tbody>\r\n    <tr>\r\n    <th>Team Lead ID</th>\r\n    <td>{{user.username}}</td>\r\n    </tr>\r\n    <tr>\r\n    <th>Team Members</th>\r\n    <td>{{user.name}}</td>\r\n    </tr>\r\n    <tr>\r\n    <th>Team Lead Email</th>\r\n     <td> {{user.email}}</td>\r\n    </tr>\r\n    <tr>\r\n    <th>Department</th>\r\n      <td>{{user.department}}</td>\r\n    </tr>\r\n    <tr>\r\n    <th>Hunting Areas</th>\r\n      <td>{{user.area}}</td>\r\n    </tr>\r\n    <tr>\r\n    <th>Office Timezone</th>\r\n      <td>{{user.office}}</td>\r\n    </tr>\r\n  </tbody>\r\n</table> \r\n </div>\r\n"

/***/ }),

/***/ 716:
/***/ (function(module, exports) {

module.exports = "  <form class=\"form-horizontal\" (submit)=\"onRegisterSubmit()\" style=\"width:800px; margin:0 auto;\">\r\n   <div class=\"form-group\"> \r\n   <h4 class=\"page-header\">Registration Form</h4>\r\n    <div class=\"form-group\">\r\n      <div class=\"col-sm-2\">\r\n        <label>Team Lead ID *</label>\r\n        <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <label>Team Lead Email *</label>\r\n        <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" >\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <div class=\"col-sm-6\">\r\n          <label>Team Members Name *</label>\r\n          <textarea rows=\"3\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\" placeholder=\"Member1..\"></textarea>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <div class=\"col-sm-3\">\r\n        <label>Department *</label>\r\n    \t  <select class=\"form-control\" name=\"department\" [(ngModel)]=\"department\">\r\n    \t      <option *ngFor=\"let dept of departments\" value={{dept}}>{{dept}}</option>\r\n    \t  </select>\r\n      </div>\r\n      <div class=\"col-sm-3\">\r\n        <label>Timezone *</label>\r\n        <select class=\"form-control\" name=\"office\" [(ngModel)]=\"office\">\r\n            <option *ngFor=\"let o of offices\" value={{o}}>{{o}}</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\" *ngIf=\"department==='Others'\">\r\n      <div class=\"col-sm-3\">\r\n        <label>Specify Other Department</label>\r\n        <input type=\"text\" [(ngModel)]=\"other_department\" name=\"other_department\" class=\"form-control\" >\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n     <div class=\"col-sm-6\">\r\n      <label>Hunting Area *</label>\r\n        <angular2-multiselect [data]=\"dropdownList\" [(ngModel)]=\"selectedItems\" \r\n            name=\"selectedItems\"\r\n            [settings]=\"dropdownSettings\" \r\n            (onSelect)=\"onItemSelect($event)\" \r\n            (onDeSelect)=\"OnItemDeSelect($event)\">\r\n        </angular2-multiselect>\r\n     </div>\r\n    </div>\r\n      <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\r\n    </div>\r\n </form>\r\n\r\n<form>\r\n</form>\r\n "

/***/ }),

/***/ 755:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(401);


/***/ })

},[755]);
//# sourceMappingURL=main.bundle.map