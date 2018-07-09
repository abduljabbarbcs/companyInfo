webpackJsonp([1],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

/***/ }),

/***/ "../../../../../src/app/_guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by frt on 4/2/18.
 */


var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
        this.token_time_limit = 3500;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        console.log(state, route);
        var token_creation_time = Number(localStorage.getItem("company_token_start_time"));
        var current_time = new Date().getTime() / 1000;
        if (localStorage.getItem('auth') && ((current_time - token_creation_time) < this.token_time_limit)) {
            // logged in so return true
            if (state.url != '/')
                return true;
            else
                this.router.navigate(['company'], {});
        }
        if (state.url == '/')
            return true;
        // not logged in so redirect to login page with the return url
        this.router.navigate(['login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AuthGuard);

var _a;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/_helpers/jwt.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JwtInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by frt on 4/2/18.
 */

var JwtInterceptor = (function () {
    function JwtInterceptor() {
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var currentUser = JSON.parse(localStorage.getItem('auth'));
        if (currentUser && currentUser.access_token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + currentUser.access_token
                }
            });
        }
        return next.handle(request);
    };
    return JwtInterceptor;
}());
JwtInterceptor = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], JwtInterceptor);

//# sourceMappingURL=jwt.interceptor.js.map

/***/ }),

/***/ "../../../../../src/app/_services/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiService = (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.getProjects = function () {
        return this.http.get('api/v1/project')
            .map(function (res) {
            return res;
        });
    };
    ApiService.prototype.getClients = function () {
        return this.http.get('api/v1/client')
            .map(function (res) {
            return res;
        });
    };
    ApiService.prototype.getEmployees = function () {
        return this.http.get('api/v1/employee')
            .map(function (res) {
            return res;
        });
    };
    ApiService.prototype.addProject = function (data) {
        return this.http.post('api/v1/project/', data)
            .map(function (response) {
            return response;
        });
    };
    ApiService.prototype.addClient = function (data) {
        return this.http.post('api/v1/client/', data)
            .map(function (response) {
            return response;
        });
    };
    ApiService.prototype.addEmployee = function (data) {
        return this.http.post('api/v1/employee/', data)
            .map(function (response) {
            return response;
        });
    };
    ApiService.prototype.updateEmployee = function (id, data) {
        var url = 'api/v1/employee/' + id + '/';
        return this.http.put(url, { 'name': data['name'], 'description': data['description'] })
            .map(function (response) {
            return response;
        });
    };
    ApiService.prototype.updateClient = function (id, data) {
        var url = 'api/v1/client/' + id + '/';
        return this.http.put(url, { 'name': data['name'], 'description': data['description'] })
            .map(function (response) {
            return response;
        });
    };
    ApiService.prototype.updateProject = function (id, data) {
        var url = 'api/v1/project/' + id + '/';
        return this.http.put(url, { 'name': data['name'], 'description': data['description'] })
            .map(function (response) {
            return response;
        });
    };
    return ApiService;
}());
ApiService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], ApiService);

var _a;
//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = (function () {
    function AuthenticationService(http, router) {
        this.http = http;
        this.router = router;
    }
    AuthenticationService.prototype.login = function (api_key, password) {
        var formData = new FormData();
        formData.append("username", api_key);
        formData.append("password", password);
        return this.http.post('api/v1/auth/', formData)
            .map(function (token) {
            // login successful if there's a jwt token in the response
            if (token && token.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('auth', JSON.stringify(token));
                localStorage.setItem('company_token_start_time', JSON.stringify(new Date().getTime() / 1000));
            }
            return token;
        });
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('auth');
        this.router.navigate(['/login']);
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthenticationService);

var _a, _b;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__guards_auth_guard__ = __webpack_require__("../../../../../src/app/_guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_company_company_component__ = __webpack_require__("../../../../../src/app/components/company/company.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__components_home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'company', component: __WEBPACK_IMPORTED_MODULE_5__components_company_company_component__["a" /* CompanyComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__["a" /* LoginComponent */] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_jwt_interceptor__ = __webpack_require__("../../../../../src/app/_helpers/jwt.interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__guards_auth_guard__ = __webpack_require__("../../../../../src/app/_guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_company_company_component__ = __webpack_require__("../../../../../src/app/components/company/company.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_header_header_component__ = __webpack_require__("../../../../../src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_api_service__ = __webpack_require__("../../../../../src/app/_services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_custom_table_custom_table_component__ = __webpack_require__("../../../../../src/app/components/custom-table/custom-table.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_company_company_component__["a" /* CompanyComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_custom_table_custom_table_component__["a" /* CustomTableComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpClientModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_14__services_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_11__guards_auth_guard__["a" /* AuthGuard */],
            {
                provide: __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                useClass: __WEBPACK_IMPORTED_MODULE_4__helpers_jwt_interceptor__["a" /* JwtInterceptor */],
                multi: true,
            }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/company/company.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header [islogin]=\"true\"></app-header>\n<div class=\"container-fluid\">\n    <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" [ngClass]=\"{active: tab=='project'}\"  role=\"tab\"  aria-selected=\"true\" (click)=\"tab='project'\">Projects</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\"  [ngClass]=\"{active: tab=='client'}\" data-toggle=\"tab\" role=\"tab\"  aria-selected=\"false\" (click)=\"tab='client'\">Clients</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" [ngClass]=\"{active: tab=='employee'}\" data-toggle=\"tab\"  role=\"tab\" aria-selected=\"false\" (click)=\"tab='employee'\">Employees</a>\n  </li>\n</ul>\n<div class=\"tab-content\" >\n  <div class=\"tab-pane fade\" [ngClass]=\"{show: tab=='project',active: tab=='project'}\" role=\"tabpanel\" >\n      <button type=\"button\" class=\"btn btn-success add\" *ngIf=\"!showAddForm\" (click)=\"showAddForm=true\">Add Project</button>\n      <form *ngIf=\"showAddForm\">\n          <div class=\"row\">\n            <div class=\"col\">\n              <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"project.name\" name=\"name\" placeholder=\"Name\">\n            </div>\n            <div class=\"col\">\n              <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"project.description\" name=\"description\" placeholder=\"Description\">\n            </div>\n              <div class=\"col\">\n              <button type=\"button\" class=\"btn btn-primary\" (click)=\"saveProject()\">Save</button>\n              <button type=\"button\" class=\"btn btn-secondary\" (click)=\"showAddForm=false\">Cancel</button>\n            </div>\n          </div>\n        </form>\n      <app-custom-table [data]=\"projects\" (edit)=\"updateProject($event)\" [isLogIn]=\"true\"></app-custom-table>\n  </div>\n  <div class=\"tab-pane fade\" [ngClass]=\"{show: tab=='client',active: tab=='client'}\" role=\"tabpanel\" >\n      <button type=\"button\" class=\"btn btn-success add\" *ngIf=\"!showAddForm\" (click)=\"showAddForm=true\">Add Client</button>\n      <form *ngIf=\"showAddForm\">\n          <div class=\"row\">\n            <div class=\"col\">\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"client.name\" name=\"name\" placeholder=\"Name\">\n            </div>\n            <div class=\"col\">\n              <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"client.description\" name=\"description\" placeholder=\"Description\">\n            </div>\n              <div class=\"col\">\n              <button type=\"button\" class=\"btn btn-primary\" (click)=\"saveClient()\">Save</button>\n              <button type=\"button\" class=\"btn btn-secondary\" (click)=\"showAddForm=false\">Cancel</button>\n            </div>\n          </div>\n        </form>\n      <app-custom-table [data]=\"clients\" (edit)=\"updateClient($event)\" [isLogIn]=\"true\"></app-custom-table>\n  </div>\n  <div class=\"tab-pane fade\" [ngClass]=\"{show: tab=='employee',active: tab=='employee'}\" role=\"tabpanel\" >\n      <button type=\"button\" class=\"btn btn-success add\" *ngIf=\"!showAddForm\" (click)=\"showAddForm=true\">Add Employee</button>\n      <form *ngIf=\"showAddForm\">\n          <div class=\"row\">\n            <div class=\"col\">\n              <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"employee.name\" name=\"name\" placeholder=\"Name\">\n            </div>\n            <div class=\"col\">\n              <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"employee.description\" name=\"description\" placeholder=\"Description\">\n            </div>\n              <div class=\"col\">\n              <button type=\"button\" class=\"btn btn-primary\" (click)=\"saveEmployee()\">Save</button>\n              <button type=\"button\" class=\"btn btn-secondary\" (click)=\"showAddForm=false\">Cancel</button>\n            </div>\n          </div>\n        </form>\n      <app-custom-table [data]=\"employees\"  (edit)=\"updateEmployee($event)\" [isLogIn]=\"true\"></app-custom-table>\n  </div>\n</div>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/company/company.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container-fluid {\n  margin-top: 20px; }\n  .container-fluid a {\n    cursor: pointer; }\n\n.add {\n  float: right;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  cursor: pointer; }\n\nform {\n  margin-top: 5px;\n  margin-bottom: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/company/company.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__("../../../../../src/app/_services/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CompanyComponent = (function () {
    function CompanyComponent(apiService) {
        this.apiService = apiService;
        this.tab = 'project';
        this.showAddForm = false;
        this.project = { 'name': '', 'description': '' };
        this.client = { 'name': '', 'description': '' };
        this.employee = { 'name': '', 'description': '' };
        this.fetchClients = function () {
            var self = this;
            self.apiService.getClients().subscribe(function (data) {
                self.clients = data;
            }, function (error) {
            });
        };
        this.fetchProjects = function () {
            var self = this;
            self.apiService.getProjects().subscribe(function (data) {
                self.projects = data;
            }, function (error) {
            });
        };
        this.fetchEmployees = function () {
            var self = this;
            self.apiService.getEmployees().subscribe(function (data) {
                self.employees = data;
            }, function (error) {
            });
        };
        this.saveProject = function () {
            var self = this;
            self.isError = false;
            if (!this.project.name) {
                alert('Please Enter project name');
                return;
            }
            self.apiService.addProject(self.project).subscribe(function (data) {
                self.showAddForm = false;
                self.fetchProjects();
            }, function (error) {
                alert(error);
            });
        };
        this.saveClient = function () {
            var self = this;
            if (!this.client.name) {
                alert('Please Enter Client name');
                return;
            }
            self.apiService.addClient(self.client).subscribe(function (data) {
                self.showAddForm = false;
                self.fetchClients();
            }, function (error) {
                alert(error);
            });
        };
        this.saveEmployee = function () {
            var self = this;
            self.isError = false;
            if (!this.employee.name) {
                alert('Please Enter Employee name');
                return;
            }
            self.apiService.addEmployee(self.employee).subscribe(function (data) {
                self.showAddForm = false;
                self.fetchEmployees();
            }, function (error) {
                alert(error);
            });
        };
        this.updateProject = function (entry) {
            var self = this;
            self.apiService.updateProject(entry['id'], entry).subscribe(function (data) {
                self.fetchProjects();
            }, function (error) {
                alert(error);
            });
        };
        this.updateClient = function (entry) {
            var self = this;
            self.apiService.updateClient(entry['id'], entry).subscribe(function (data) {
                self.fetchClients();
            }, function (error) {
                alert(error);
            });
        };
        this.updateEmployee = function (entry) {
            var self = this;
            self.apiService.updateEmployee(entry['id'], entry).subscribe(function (data) {
                self.fetchEmployees();
            }, function (error) {
                alert(error);
            });
        };
    }
    CompanyComponent.prototype.ngOnInit = function () {
        this.fetchProjects();
        this.fetchEmployees();
        this.fetchClients();
    };
    return CompanyComponent;
}());
CompanyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-company',
        template: __webpack_require__("../../../../../src/app/components/company/company.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/company/company.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */]) === "function" && _a || Object])
], CompanyComponent);

var _a;
//# sourceMappingURL=company.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/custom-table/custom-table.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-striped\">\n    <thead>\n    <tr>\n        <th>Name</th>\n        <th>Description</th>\n        <th *ngIf=\"isLogIn\"> Action</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let entry of data \">\n        <td><span *ngIf=\"!entry.edit\">{{ entry.name }}</span>\n            <input *ngIf=\"entry.edit\" type=\"text\" [(ngModel)]=\"entry.name\"/>\n        </td>\n        <td>\n        <span *ngIf=\"!entry.edit\">{{ entry.description  }}</span>\n            <input *ngIf=\"entry.edit\" type=\"text\" [(ngModel)]=\"entry.description\"/></td>\n        <td *ngIf=\"isLogIn\">\n            <button type=\"button\" *ngIf=\"!entry.edit\" class=\"btn btn-success\" (click)=\"entry.edit=true\">Edit</button>\n            <button type=\"button\" *ngIf=\"entry.edit\" class=\"btn btn-primary\" (click)=\"editEntry(entry)\">Save</button>\n            <button type=\"button\" *ngIf=\"entry.edit\" class=\"btn btn-secondary\"(click)=\"entry.edit=false\">Cancel</button>\n\n        </td>\n    </tr>\n    </tbody>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/components/custom-table/custom-table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table {\n  margin-top: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/custom-table/custom-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomTableComponent = (function () {
    function CustomTableComponent() {
        this.edit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    CustomTableComponent.prototype.ngOnInit = function () {
    };
    CustomTableComponent.prototype.editEntry = function (entry) {
        this.edit.emit(entry);
    };
    return CustomTableComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], CustomTableComponent.prototype, "data", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], CustomTableComponent.prototype, "isLogIn", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], CustomTableComponent.prototype, "edit", void 0);
CustomTableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-custom-table',
        template: __webpack_require__("../../../../../src/app/components/custom-table/custom-table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/custom-table/custom-table.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], CustomTableComponent);

var _a;
//# sourceMappingURL=custom-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" [routerLink]=\"['/']\">Company</a>\n    </div>\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li *ngIf=\"!islogin\"><a [routerLink]=\"['/login']\"><span class=\"glyphicon glyphicon-log-in\"></span> Login</a></li>\n      <li *ngIf=\"islogin\"><a (click)=\"logout()\"><span class=\"glyphicon glyphicon-log-in\"></span> Logout</a></li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar-inverse {\n  background-color: #222;\n  border-color: #080808; }\n\na {\n  color: #fff !important;\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(authenticationService) {
        this.authenticationService = authenticationService;
        this.logout = function () {
            this.authenticationService.logout();
        };
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], HeaderComponent.prototype, "islogin", void 0);
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/components/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/header/header.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header [islogin]=\"false\"></app-header>\n<div class=\"container-fluid\"><ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" [ngClass]=\"{active: tab=='project'}\"  role=\"tab\"  aria-selected=\"true\" (click)=\"tab='project'\">Projects</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\"  [ngClass]=\"{active: tab=='client'}\" data-toggle=\"tab\" role=\"tab\"  aria-selected=\"false\" (click)=\"tab='client'\">Clients</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" [ngClass]=\"{active: tab=='employee'}\" data-toggle=\"tab\"  role=\"tab\" aria-selected=\"false\" (click)=\"tab='employee'\">Employees</a>\n  </li>\n</ul>\n<div class=\"tab-content\" >\n  <div class=\"tab-pane fade\" [ngClass]=\"{show: tab=='project',active: tab=='project'}\" role=\"tabpanel\" >\n    <app-custom-table [data]=\"projects\" [isLogIn]=\"false\"></app-custom-table>\n  </div>\n  <div class=\"tab-pane fade\" [ngClass]=\"{show: tab=='client',active: tab=='client'}\" role=\"tabpanel\" >\n      <app-custom-table [data]=\"clients\" [isLogIn]=\"false\"></app-custom-table>\n  </div>\n  <div class=\"tab-pane fade\" [ngClass]=\"{show: tab=='employee',active: tab=='employee'}\" role=\"tabpanel\" >\n      <app-custom-table [data]=\"employees\" [isLogIn]=\"false\"></app-custom-table>\n  </div>\n</div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container-fluid {\n  margin-top: 20px; }\n  .container-fluid a {\n    cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__("../../../../../src/app/_services/api.service.ts");
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
    function HomeComponent(apiService) {
        this.apiService = apiService;
        this.tab = 'project';
        this.fetchClients = function () {
            var self = this;
            self.apiService.getClients().subscribe(function (data) {
                self.clients = data;
            }, function (error) {
            });
        };
        this.fetchProjects = function () {
            var self = this;
            self.apiService.getProjects().subscribe(function (data) {
                self.projects = data;
            }, function (error) {
            });
        };
        this.fetchEmployees = function () {
            var self = this;
            self.apiService.getEmployees().subscribe(function (data) {
                self.employees = data;
            }, function (error) {
            });
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.fetchProjects();
        this.fetchEmployees();
        this.fetchClients();
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = " <div class=\"container\">\n        <div class=\"card card-container\">\n            <!-- <img class=\"profile-img-card\" src=\"//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120\" alt=\"\" /> -->\n            <img id=\"profile-img\" class=\"profile-img-card\" src=\"//ssl.gstatic.com/accounts/ui/avatar_2x.png\" />\n            <p id=\"profile-name\" class=\"profile-name-card\"></p>\n            <form class=\"form-signin\">\n                <span id=\"reauth-email\" class=\"reauth-email\"></span>\n                <input type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" name=\"email\" [(ngModel)]=\"loginData.username\" required autofocus>\n                <input type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" name=\"password\" [(ngModel)]=\"loginData.password\" required>\n                <button class=\"btn btn-lg btn-primary btn-block btn-signin\" type=\"submit\" (click)=\"login()\">Sign in</button>\n            </form><!-- /form -->\n\n        </div><!-- /card-container -->\n    </div><!-- /container -->\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\n * Specific styles of signin component\n */\n/*\n * General styles\n */\nbody, html {\n  height: 100%;\n  background-repeat: no-repeat;\n  background-image: linear-gradient(#6891a2, #0c6121); }\n\n.card-container.card {\n  max-width: 350px;\n  padding: 40px 40px; }\n\n.btn {\n  font-weight: 700;\n  height: 36px;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n      user-select: none;\n  cursor: default; }\n\n/*\n * Card component\n */\n.card {\n  background-color: #F7F7F7;\n  /* just in case there no content*/\n  padding: 20px 25px 30px;\n  margin: 0 auto 25px;\n  margin-top: 50px;\n  /* shadows and rounded borders */\n  border-radius: 2px;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3); }\n\n.profile-img-card {\n  width: 96px;\n  height: 96px;\n  margin: 0 auto 10px;\n  display: block;\n  border-radius: 50%; }\n\n/*\n * Form styles\n */\n.profile-name-card {\n  font-size: 16px;\n  font-weight: bold;\n  text-align: center;\n  margin: 10px 0 0;\n  min-height: 1em; }\n\n.reauth-email {\n  display: block;\n  color: #404040;\n  line-height: 2;\n  margin-bottom: 10px;\n  font-size: 14px;\n  text-align: center;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  box-sizing: border-box; }\n\n.form-signin #inputEmail,\n.form-signin #inputPassword {\n  direction: ltr;\n  height: 44px;\n  font-size: 16px; }\n\n.form-signin input[type=email],\n.form-signin input[type=password],\n.form-signin input[type=text],\n.form-signin button {\n  width: 100%;\n  display: block;\n  margin-bottom: 10px;\n  z-index: 1;\n  position: relative;\n  box-sizing: border-box; }\n\n.form-signin .form-control:focus {\n  border-color: #6891a2;\n  outline: 0;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px #6891a2; }\n\n.btn.btn-signin {\n  /*background-color: #4d90fe; */\n  background-color: #6891a2;\n  /* background-color: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));*/\n  padding: 0px;\n  font-weight: 700;\n  font-size: 14px;\n  height: 36px;\n  border-radius: 3px;\n  border: none;\n  transition: all 0.218s; }\n\n.btn.btn-signin:hover,\n.btn.btn-signin:active,\n.btn.btn-signin:focus {\n  background-color: #0c6121; }\n\n.forgot-password {\n  color: #6891a2; }\n\n.forgot-password:hover,\n.forgot-password:active,\n.forgot-password:focus {\n  color: #0c6121; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
    function LoginComponent(authService, route, router) {
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.loginData = { 'api_key': '', "password": '' };
        this.isError = false;
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var self = this;
        self.isError = false;
        if (!this.loginData.username) {
            self.isError = true;
            self.errorMsg = "Please Enter API KEY.";
            return;
        }
        else if (!this.loginData.password) {
            self.isError = true;
            self.errorMsg = "Please Enter Password.";
            return;
        }
        self.authService.login(this.loginData.username, this.loginData.password).subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            self.isError = true;
            self.errorMsg = "Incorrect username or password.";
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map