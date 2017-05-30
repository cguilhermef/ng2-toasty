(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/common"), require("@angular/platform-browser"), require("rxjs/Subject"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/common", "@angular/platform-browser", "rxjs/Subject"], factory);
	else if(typeof exports === 'object')
		exports["ng2-toasty"] = factory(require("@angular/core"), require("@angular/common"), require("@angular/platform-browser"), require("rxjs/Subject"));
	else
		root["ng2-toasty"] = factory(root["@angular/core"], root["@angular/common"], root["@angular/platform-browser"], root["rxjs/Subject"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toasty_utils__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ToastData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ToastyConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ToastyEventType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ToastyEvent; });
/* harmony export (immutable) */ __webpack_exports__["f"] = toastyServiceFactory;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ToastyService; });
// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-toasty
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
 * Options to configure specific Toast
 */
var ToastOptions = (function () {
    function ToastOptions() {
    }
    ToastOptions = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ToastOptions);
    return ToastOptions;
}());
/**
 * Structrure of Toast
 */
var ToastData = (function () {
    function ToastData() {
    }
    ToastData = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ToastData);
    return ToastData;
}());
/**
 * Default configuration foa all toats and toasty container
 */
var ToastyConfig = (function () {
    function ToastyConfig() {
        // Maximum number of toasties to show at once
        this.limit = 5;
        // Whether to show the 'X' icon to close the toast
        this.showClose = true;
        // The window position where the toast pops up
        this.position = 'bottom-right';
        // How long (in miliseconds) the toasty shows before it's removed. Set to null/0 to turn off.
        this.timeout = 5000;
        // What theme to use
        this.theme = 'default';
    }
    ToastyConfig = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ToastyConfig);
    return ToastyConfig;
}());
var ToastyEventType;
(function (ToastyEventType) {
    ToastyEventType[ToastyEventType["ADD"] = 0] = "ADD";
    ToastyEventType[ToastyEventType["CLEAR"] = 1] = "CLEAR";
    ToastyEventType[ToastyEventType["CLEAR_ALL"] = 2] = "CLEAR_ALL";
})(ToastyEventType || (ToastyEventType = {}));
var ToastyEvent = (function () {
    function ToastyEvent(type, value) {
        this.type = type;
        this.value = value;
    }
    return ToastyEvent;
}());
function toastyServiceFactory(config) {
    return new ToastyService(config);
}
/**
 * Toasty service helps create different kinds of Toasts
 */
var ToastyService = (function () {
    function ToastyService(config) {
        this.config = config;
        // Init the counter
        this.uniqueCounter = 0;
        // ToastData event emitter
        // private toastsEmitter: EventEmitter<ToastData> = new EventEmitter<ToastData>();
        // Clear event emitter
        // private clearEmitter: EventEmitter<number> = new EventEmitter<number>();
        this.eventSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.events = this.eventSource.asObservable();
    }
    /**
     * Get list of toats
     */
    // getToasts(): Observable<ToastData> {
    //   return this.toastsEmitter.asObservable();
    // }
    // getClear(): Observable<number> {
    //   return this.clearEmitter.asObservable();
    // }
    /**
     * Create Toast of a default type
     */
    ToastyService.prototype.default = function (options) {
        this.add(options, 'default');
    };
    /**
     * Create Toast of info type
     * @param  {object} options Individual toasty config overrides
     */
    ToastyService.prototype.info = function (options) {
        this.add(options, 'info');
    };
    /**
     * Create Toast of success type
     * @param  {object} options Individual toasty config overrides
     */
    ToastyService.prototype.success = function (options) {
        this.add(options, 'success');
    };
    /**
     * Create Toast of wait type
     * @param  {object} options Individual toasty config overrides
     */
    ToastyService.prototype.wait = function (options) {
        this.add(options, 'wait');
    };
    /**
     * Create Toast of error type
     * @param  {object} options Individual toasty config overrides
     */
    ToastyService.prototype.error = function (options) {
        this.add(options, 'error');
    };
    /**
     * Create Toast of warning type
     * @param  {object} options Individual toasty config overrides
     */
    ToastyService.prototype.warning = function (options) {
        this.add(options, 'warning');
    };
    // Add a new toast item
    ToastyService.prototype.add = function (options, type) {
        var toastyOptions;
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__toasty_utils__["b" /* isString */])(options) && options !== '' || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__toasty_utils__["c" /* isNumber */])(options)) {
            toastyOptions = {
                title: options.toString()
            };
        }
        else {
            toastyOptions = options;
        }
        if (!toastyOptions || !toastyOptions.title && !toastyOptions.msg) {
            throw new Error('ng2-toasty: No toast title or message specified!');
        }
        type = type || 'default';
        // Set a unique counter for an id
        this.uniqueCounter++;
        // Set the local vs global config items
        var showClose = this._checkConfigItem(this.config, toastyOptions, 'showClose');
        // If we have a theme set, make sure it's a valid one
        var theme;
        if (toastyOptions.theme) {
            theme = ToastyService.THEMES.indexOf(toastyOptions.theme) > -1 ? toastyOptions.theme : this.config.theme;
        }
        else {
            theme = this.config.theme;
        }
        var toast = {
            id: this.uniqueCounter,
            title: toastyOptions.title,
            msg: toastyOptions.msg,
            showClose: showClose,
            type: 'toasty--type-' + type,
            theme: 'toasty--theme-' + theme,
            onAdd: toastyOptions.onAdd && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__toasty_utils__["a" /* isFunction */])(toastyOptions.onAdd) ? toastyOptions.onAdd : null,
            onRemove: toastyOptions.onRemove && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__toasty_utils__["a" /* isFunction */])(toastyOptions.onRemove) ? toastyOptions.onRemove : null
        };
        // If there's a timeout individually or globally, set the toast to timeout
        // Allows a caller to pass null/0 and override the default. Can also set the default to null/0 to turn off.
        toast.timeout = toastyOptions.hasOwnProperty('timeout') ? toastyOptions.timeout : this.config.timeout;
        // Push up a new toast item
        // this.toastsSubscriber.next(toast);
        // this.toastsEmitter.next(toast);
        this.emitEvent(new ToastyEvent(ToastyEventType.ADD, toast));
        // If we have a onAdd function, call it here
        if (toastyOptions.onAdd && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__toasty_utils__["a" /* isFunction */])(toastyOptions.onAdd)) {
            toastyOptions.onAdd.call(this, toast);
        }
    };
    // Clear all toasts
    ToastyService.prototype.clearAll = function () {
        // this.clearEmitter.next(null);
        this.emitEvent(new ToastyEvent(ToastyEventType.CLEAR_ALL));
    };
    // Clear the specific one
    ToastyService.prototype.clear = function (id) {
        // this.clearEmitter.next(id);
        this.emitEvent(new ToastyEvent(ToastyEventType.CLEAR, id));
    };
    // Checks whether the local option is set, if not,
    // checks the global config
    ToastyService.prototype._checkConfigItem = function (config, options, property) {
        if (options[property] === false) {
            return false;
        }
        else if (!options[property]) {
            return config[property];
        }
        else {
            return true;
        }
    };
    ToastyService.prototype.emitEvent = function (event) {
        if (this.eventSource) {
            // Push up a new event
            this.eventSource.next(event);
        }
    };
    // Allowed THEMES
    ToastyService.THEMES = ['default', 'material', 'bootstrap'];
    ToastyService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [ToastyConfig])
    ], ToastyService);
    return ToastyService;
}());


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toasty_utils__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toasty_service__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastyComponent; });
// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-toasty
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
 * Toasty is container for Toast components
 */
var ToastyComponent = (function () {
    function ToastyComponent(config, toastyService) {
        this.config = config;
        this.toastyService = toastyService;
        this._position = '';
        // The storage for toasts.
        this.toasts = [];
        // Initialise position
        this.position = '';
    }
    Object.defineProperty(ToastyComponent.prototype, "position", {
        get: function () {
            return this._position;
        },
        // The window position where the toast pops up. Possible values:
        // - bottom-right (default value from ToastConfig)
        // - bottom-left
        // - top-right
        // - top-left
        // - top-center
        // - bottom-center
        // - center-center
        set: function (value) {
            if (value) {
                var notFound = true;
                for (var i = 0; i < ToastyComponent.POSITIONS.length; i++) {
                    if (ToastyComponent.POSITIONS[i] === value) {
                        notFound = false;
                        break;
                    }
                }
                if (notFound) {
                    // Position was wrong - clear it here to use the one from config.
                    value = this.config.position;
                }
            }
            else {
                value = this.config.position;
            }
            this._position = 'toasty--position-' + value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * `ngOnInit` is called right after the directive's data-bound properties have been checked for the
     * first time, and before any of its children have been checked. It is invoked only once when the
     * directive is instantiated.
     */
    ToastyComponent.prototype.ngOnInit = function () {
        var _this = this;
        // We listen events from our service
        this.toastyService.events.subscribe(function (event) {
            if (event.type === __WEBPACK_IMPORTED_MODULE_2__toasty_service__["d" /* ToastyEventType */].ADD) {
                // Add the new one
                var toast = event.value;
                _this.add(toast);
            }
            else if (event.type === __WEBPACK_IMPORTED_MODULE_2__toasty_service__["d" /* ToastyEventType */].CLEAR) {
                // Clear the one by number
                var id = event.value;
                _this.clear(id);
            }
            else if (event.type === __WEBPACK_IMPORTED_MODULE_2__toasty_service__["d" /* ToastyEventType */].CLEAR_ALL) {
                // Lets clear all toasts
                _this.clearAll();
            }
        });
    };
    /**
     * Event listener of 'closeToast' event comes from ToastyComponent.
     * This method removes ToastComponent assosiated with this Toast.
     */
    ToastyComponent.prototype.closeToast = function (toast) {
        this.clear(toast.id);
    };
    /**
     * Add new Toast
     */
    ToastyComponent.prototype.add = function (toast) {
        // If we've gone over our limit, remove the earliest
        // one from the array
        if (this.toasts.length >= this.config.limit) {
            this.toasts.shift();
        }
        // Add toasty to array
        this.toasts.push(toast);
        //
        // If there's a timeout individually or globally,
        // set the toast to timeout
        if (toast.timeout) {
            this._setTimeout(toast);
        }
    };
    /**
     * Clear individual toast by id
     * @param id is unique identifier of Toast
     */
    ToastyComponent.prototype.clear = function (id) {
        var _this = this;
        if (id) {
            this.toasts.forEach(function (value, key) {
                if (value.id === id) {
                    if (value.onRemove && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__toasty_utils__["a" /* isFunction */])(value.onRemove)) {
                        value.onRemove.call(_this, value);
                    }
                    _this.toasts.splice(key, 1);
                }
            });
        }
        else {
            throw new Error('Please provide id of Toast to close');
        }
    };
    /**
     * Clear all toasts
     */
    ToastyComponent.prototype.clearAll = function () {
        var _this = this;
        this.toasts.forEach(function (value, key) {
            if (value.onRemove && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__toasty_utils__["a" /* isFunction */])(value.onRemove)) {
                value.onRemove.call(_this, value);
            }
        });
        this.toasts = [];
    };
    /**
     * Custom setTimeout function for specific setTimeouts on individual toasts.
     */
    ToastyComponent.prototype._setTimeout = function (toast) {
        var _this = this;
        window.setTimeout(function () {
            _this.clear(toast.id);
        }, toast.timeout);
    };
    /**
     * Set of constants defins position of Toasty on the page.
     */
    ToastyComponent.POSITIONS = ['bottom-right', 'bottom-left', 'top-right', 'top-left', 'top-center', 'bottom-center', 'center-center'];
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], ToastyComponent.prototype, "position", null);
    ToastyComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ng2-toasty',
            template: "\n    <div id=\"toasty\" class=\"toasty\" [ngClass]=\"[position]\">\n        <ng2-toast class=\"toasty__item\" *ngFor=\"let toast of toasts\" [toast]=\"toast\" (closeToast)=\"closeToast(toast)\"></ng2-toast>\n    </div>"
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__toasty_service__["c" /* ToastyConfig */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__toasty_service__["c" /* ToastyConfig */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__toasty_service__["g" /* ToastyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__toasty_service__["g" /* ToastyService */]) === 'function' && _b) || Object])
    ], ToastyComponent);
    return ToastyComponent;
    var _a, _b;
}());


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = isString;
/* harmony export (immutable) */ __webpack_exports__["c"] = isNumber;
/* harmony export (immutable) */ __webpack_exports__["a"] = isFunction;
/**
 * Check and return true if an object is type of string
 */
function isString(obj) {
    return typeof obj === "string";
}
/**
 * Check and return true if an object is type of number
 */
function isNumber(obj) {
    return typeof obj === "number";
}
/**
 * Check and return true if an object is type of Function
 */
function isFunction(obj) {
    return typeof obj === "function";
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafeHtmlPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafeHtmlPipe = (function () {
    function SafeHtmlPipe(domSanitized) {
        this.domSanitized = domSanitized;
    }
    SafeHtmlPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return this.domSanitized.bypassSecurityTrustHtml(value);
    };
    SafeHtmlPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({ name: 'safeHtml' }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["DomSanitizer"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["DomSanitizer"]) === 'function' && _a) || Object])
    ], SafeHtmlPipe);
    return SafeHtmlPipe;
    var _a;
}());


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toasty_service__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastComponent; });
// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-toasty
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
 * A Toast component shows message with title and close button.
 */
var ToastComponent = (function () {
    function ToastComponent() {
        this.closeToastEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    /**
     * Event handler invokes when user clicks on close button.
     * This method emit new event into ToastyContainer to close it.
     */
    ToastComponent.prototype.close = function ($event) {
        $event.preventDefault();
        this.closeToastEvent.next(this.toast);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__toasty_service__["b" /* ToastData */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__toasty_service__["b" /* ToastData */]) === 'function' && _a) || Object)
    ], ToastComponent.prototype, "toast", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('closeToast'), 
        __metadata('design:type', Object)
    ], ToastComponent.prototype, "closeToastEvent", void 0);
    ToastComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ng2-toast',
            template: "\n        <div class=\"toasty__content toast\" [ngClass]=\"[toast.type, toast.theme]\">\n            <div *ngIf=\"toast.showClose\" class=\"toasty__close close-button\" (click)=\"close($event)\"></div>\n            <div *ngIf=\"toast.title || toast.msg\" class=\"toasty__text toast-text\">\n                <span *ngIf=\"toast.title\" class=\"toasty__title toast-title\" [innerHTML]=\"toast.title | safeHtml\"></span>\n                <br *ngIf=\"toast.title && toast.msg\" />\n                <span *ngIf=\"toast.msg\" class=\"toasty__message toast-msg\" [innerHtml]=\"toast.msg | safeHtml\"></span>\n            </div>\n        </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], ToastComponent);
    return ToastComponent;
    var _a;
}());


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_toasty_service__ = __webpack_require__(1);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ToastOptions", function() { return __WEBPACK_IMPORTED_MODULE_2__src_toasty_service__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ToastData", function() { return __WEBPACK_IMPORTED_MODULE_2__src_toasty_service__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ToastyConfig", function() { return __WEBPACK_IMPORTED_MODULE_2__src_toasty_service__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ToastyEventType", function() { return __WEBPACK_IMPORTED_MODULE_2__src_toasty_service__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ToastyEvent", function() { return __WEBPACK_IMPORTED_MODULE_2__src_toasty_service__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "toastyServiceFactory", function() { return __WEBPACK_IMPORTED_MODULE_2__src_toasty_service__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ToastyService", function() { return __WEBPACK_IMPORTED_MODULE_2__src_toasty_service__["g"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_toasty_component__ = __webpack_require__(2);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ToastyComponent", function() { return __WEBPACK_IMPORTED_MODULE_3__src_toasty_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_toast_component__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_shared__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "providers", function() { return providers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastyModule", function() { return ToastyModule; });
// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-toasty
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var providers = [
    __WEBPACK_IMPORTED_MODULE_2__src_toasty_service__["c" /* ToastyConfig */],
    { provide: __WEBPACK_IMPORTED_MODULE_2__src_toasty_service__["g" /* ToastyService */], useFactory: __WEBPACK_IMPORTED_MODULE_2__src_toasty_service__["f" /* toastyServiceFactory */], deps: [__WEBPACK_IMPORTED_MODULE_2__src_toasty_service__["c" /* ToastyConfig */]] }
];
var ToastyModule = (function () {
    function ToastyModule() {
    }
    ToastyModule.forRoot = function () {
        return {
            ngModule: ToastyModule,
            providers: providers
        };
    };
    ToastyModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__src_toast_component__["a" /* ToastComponent */], __WEBPACK_IMPORTED_MODULE_3__src_toasty_component__["a" /* ToastyComponent */], __WEBPACK_IMPORTED_MODULE_5__src_shared__["a" /* SafeHtmlPipe */]],
            exports: [__WEBPACK_IMPORTED_MODULE_4__src_toast_component__["a" /* ToastComponent */], __WEBPACK_IMPORTED_MODULE_3__src_toasty_component__["a" /* ToastyComponent */]],
            providers: providers
        }), 
        __metadata('design:paramtypes', [])
    ], ToastyModule);
    return ToastyModule;
}());


/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBiMzA2Nzg5ZDhjNGI2NGZiY2RhNSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RvYXN0eS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy90b2FzdHkuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy90b2FzdHkudXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdG9hc3QuY29tcG9uZW50LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2NvbW1vblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL1N1YmplY3RcIiIsIndlYnBhY2s6Ly8vLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtB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USxFQUFFLFdBQVc7WUFDckIsUUFBUSxFQUFFLDhuQkFRRztTQUNkLENBQUM7O3NCQUFBO0lBY0YscUJBQUM7O0FBQUQsQ0FBQzs7Ozs7OztBQ3BDRCwrQzs7Ozs7O0FDQUEsK0M7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQSwwQ0FBMEM7QUFDMUMsK0RBQStEO0FBQy9ELHVDQUF1Qzs7Ozs7Ozs7OztBQUVzQjtBQUNmO0FBRVQ7QUFDRTtBQUVpQjtBQUNGO0FBQ1g7QUFDNkM7QUFFakYsSUFBSSxTQUFTLEdBQUc7SUFDbkIseUVBQVk7SUFDWixFQUFFLE9BQU8sRUFBRSwwRUFBYSxFQUFFLFVBQVUsRUFBRSxpRkFBb0IsRUFBRSxJQUFJLEVBQUUsQ0FBQyx5RUFBWSxDQUFDLEVBQUU7Q0FDckYsQ0FBQztBQVFGO0lBQUE7SUFPQSxDQUFDO0lBTlUsb0JBQU8sR0FBZDtRQUNJLE1BQU0sQ0FBQztZQUNILFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFNBQVMsRUFBRSxTQUFTO1NBQ3ZCLENBQUM7SUFDTixDQUFDO0lBWkw7UUFBQyw4RUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsNkRBQVksQ0FBQztZQUN2QixZQUFZLEVBQUUsQ0FBQyw0RUFBYyxFQUFFLDhFQUFlLEVBQUUsaUVBQVksQ0FBQztZQUM3RCxPQUFPLEVBQUUsQ0FBRSw0RUFBYyxFQUFFLDhFQUFlLENBQUM7WUFDM0MsU0FBUyxFQUFFLFNBQVM7U0FDdkIsQ0FBQzs7b0JBQUE7SUFRRixtQkFBQztBQUFELENBQUMiLCJmaWxlIjoiaW5kZXgudW1kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKSwgcmVxdWlyZShcIkBhbmd1bGFyL2NvbW1vblwiKSwgcmVxdWlyZShcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIiksIHJlcXVpcmUoXCJyeGpzL1N1YmplY3RcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiQGFuZ3VsYXIvY29yZVwiLCBcIkBhbmd1bGFyL2NvbW1vblwiLCBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIiwgXCJyeGpzL1N1YmplY3RcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibmcyLXRvYXN0eVwiXSA9IGZhY3RvcnkocmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIiksIHJlcXVpcmUoXCJAYW5ndWxhci9jb21tb25cIiksIHJlcXVpcmUoXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCIpLCByZXF1aXJlKFwicnhqcy9TdWJqZWN0XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJuZzItdG9hc3R5XCJdID0gZmFjdG9yeShyb290W1wiQGFuZ3VsYXIvY29yZVwiXSwgcm9vdFtcIkBhbmd1bGFyL2NvbW1vblwiXSwgcm9vdFtcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIl0sIHJvb3RbXCJyeGpzL1N1YmplY3RcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzdfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV84X18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGIzMDY3ODlkOGM0YjY0ZmJjZGE1IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2NvcmVcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBDb3B5cmlnaHQgKEMpIDIwMTYgU2VyZ2V5IEFrb3Brb2toeWFudHNcclxuLy8gVGhpcyBwcm9qZWN0IGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgTUlUIGxpY2Vuc2UuXHJcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ha3NlcmcvbmcyLXRvYXN0eVxyXG5cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBpc1N0cmluZywgaXNOdW1iZXIsIGlzRnVuY3Rpb24gfSBmcm9tICcuL3RvYXN0eS51dGlscyc7XHJcblxyXG5pbXBvcnQge1N1YmplY3R9IGZyb20gJ3J4anMvU3ViamVjdCc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuXHJcbi8qKlxyXG4gKiBPcHRpb25zIHRvIGNvbmZpZ3VyZSBzcGVjaWZpYyBUb2FzdFxyXG4gKi9cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVG9hc3RPcHRpb25zIHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIG1zZz86IHN0cmluZztcclxuICBzaG93Q2xvc2U/OiBib29sZWFuO1xyXG4gIHRoZW1lPzogc3RyaW5nO1xyXG4gIHRpbWVvdXQ/OiBudW1iZXI7XHJcbiAgb25BZGQ/OiBGdW5jdGlvbjtcclxuICBvblJlbW92ZT86IEZ1bmN0aW9uO1xyXG59XHJcblxyXG4vKipcclxuICogU3RydWN0cnVyZSBvZiBUb2FzdFxyXG4gKi9cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVG9hc3REYXRhIHtcclxuICBpZDogbnVtYmVyO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgbXNnOiBzdHJpbmc7XHJcbiAgc2hvd0Nsb3NlOiBib29sZWFuO1xyXG4gIHR5cGU6IHN0cmluZztcclxuICB0aGVtZTogc3RyaW5nO1xyXG4gIHRpbWVvdXQ6IG51bWJlcjtcclxuICBvbkFkZDogRnVuY3Rpb247XHJcbiAgb25SZW1vdmU6IEZ1bmN0aW9uO1xyXG4gIG9uQ2xpY2s6IEZ1bmN0aW9uO1xyXG59XHJcblxyXG4vKipcclxuICogRGVmYXVsdCBjb25maWd1cmF0aW9uIGZvYSBhbGwgdG9hdHMgYW5kIHRvYXN0eSBjb250YWluZXJcclxuICovXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFRvYXN0eUNvbmZpZyB7XHJcblxyXG4gIC8vIE1heGltdW0gbnVtYmVyIG9mIHRvYXN0aWVzIHRvIHNob3cgYXQgb25jZVxyXG4gIGxpbWl0OiBudW1iZXIgPSA1O1xyXG5cclxuICAvLyBXaGV0aGVyIHRvIHNob3cgdGhlICdYJyBpY29uIHRvIGNsb3NlIHRoZSB0b2FzdFxyXG4gIHNob3dDbG9zZTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIC8vIFRoZSB3aW5kb3cgcG9zaXRpb24gd2hlcmUgdGhlIHRvYXN0IHBvcHMgdXBcclxuICBwb3NpdGlvbjogJ2JvdHRvbS1yaWdodCcgfCAnYm90dG9tLWxlZnQnIHwgJ3RvcC1yaWdodCcgfCAndG9wLWxlZnQnIHwgJ3RvcC1jZW50ZXInIHwgJ2JvdHRvbS1jZW50ZXInIHwgJ2NlbnRlci1jZW50ZXInID0gJ2JvdHRvbS1yaWdodCc7XHJcblxyXG4gIC8vIEhvdyBsb25nIChpbiBtaWxpc2Vjb25kcykgdGhlIHRvYXN0eSBzaG93cyBiZWZvcmUgaXQncyByZW1vdmVkLiBTZXQgdG8gbnVsbC8wIHRvIHR1cm4gb2ZmLlxyXG4gIHRpbWVvdXQ6IG51bWJlciA9IDUwMDA7XHJcblxyXG4gIC8vIFdoYXQgdGhlbWUgdG8gdXNlXHJcbiAgdGhlbWU6ICdkZWZhdWx0JyB8ICdtYXRlcmlhbCcgfCAnYm9vdHN0cmFwJyA9ICdkZWZhdWx0JztcclxufVxyXG5cclxuZXhwb3J0IGVudW0gVG9hc3R5RXZlbnRUeXBlIHtcclxuICBBREQsXHJcbiAgQ0xFQVIsXHJcbiAgQ0xFQVJfQUxMXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUb2FzdHlFdmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdHlwZTpUb2FzdHlFdmVudFR5cGUsIHB1YmxpYyB2YWx1ZT86YW55KSB7fVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdG9hc3R5U2VydmljZUZhY3RvcnkoY29uZmlnOiBUb2FzdHlDb25maWcpOiBUb2FzdHlTZXJ2aWNlICB7XHJcbiAgICByZXR1cm4gbmV3IFRvYXN0eVNlcnZpY2UoY29uZmlnKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRvYXN0eSBzZXJ2aWNlIGhlbHBzIGNyZWF0ZSBkaWZmZXJlbnQga2luZHMgb2YgVG9hc3RzXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUb2FzdHlTZXJ2aWNlIHtcclxuICAvLyBBbGxvd2VkIFRIRU1FU1xyXG4gIHN0YXRpYyBUSEVNRVM6IEFycmF5PHN0cmluZz4gPSBbJ2RlZmF1bHQnLCAnbWF0ZXJpYWwnLCAnYm9vdHN0cmFwJ107XHJcbiAgLy8gSW5pdCB0aGUgY291bnRlclxyXG4gIHVuaXF1ZUNvdW50ZXI6IG51bWJlciA9IDA7XHJcbiAgLy8gVG9hc3REYXRhIGV2ZW50IGVtaXR0ZXJcclxuICAvLyBwcml2YXRlIHRvYXN0c0VtaXR0ZXI6IEV2ZW50RW1pdHRlcjxUb2FzdERhdGE+ID0gbmV3IEV2ZW50RW1pdHRlcjxUb2FzdERhdGE+KCk7XHJcbiAgLy8gQ2xlYXIgZXZlbnQgZW1pdHRlclxyXG4gIC8vIHByaXZhdGUgY2xlYXJFbWl0dGVyOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG5cclxuICBwcml2YXRlIGV2ZW50U291cmNlOiBTdWJqZWN0PFRvYXN0eUV2ZW50PiA9IG5ldyBTdWJqZWN0PFRvYXN0eUV2ZW50PigpO1xyXG4gIHB1YmxpYyBldmVudHM6IE9ic2VydmFibGU8VG9hc3R5RXZlbnQ+ID0gdGhpcy5ldmVudFNvdXJjZS5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb25maWc6IFRvYXN0eUNvbmZpZykge31cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IGxpc3Qgb2YgdG9hdHNcclxuICAgKi9cclxuICAvLyBnZXRUb2FzdHMoKTogT2JzZXJ2YWJsZTxUb2FzdERhdGE+IHtcclxuICAvLyAgIHJldHVybiB0aGlzLnRvYXN0c0VtaXR0ZXIuYXNPYnNlcnZhYmxlKCk7XHJcbiAgLy8gfVxyXG5cclxuICAvLyBnZXRDbGVhcigpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xyXG4gIC8vICAgcmV0dXJuIHRoaXMuY2xlYXJFbWl0dGVyLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIC8vIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIFRvYXN0IG9mIGEgZGVmYXVsdCB0eXBlXHJcbiAgICovXHJcbiAgZGVmYXVsdChvcHRpb25zOiBUb2FzdE9wdGlvbnN8c3RyaW5nfG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5hZGQob3B0aW9ucywgJ2RlZmF1bHQnKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBUb2FzdCBvZiBpbmZvIHR5cGVcclxuICAgKiBAcGFyYW0gIHtvYmplY3R9IG9wdGlvbnMgSW5kaXZpZHVhbCB0b2FzdHkgY29uZmlnIG92ZXJyaWRlc1xyXG4gICAqL1xyXG4gIGluZm8ob3B0aW9uczogVG9hc3RPcHRpb25zfHN0cmluZ3xudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMuYWRkKG9wdGlvbnMsICdpbmZvJyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGUgVG9hc3Qgb2Ygc3VjY2VzcyB0eXBlXHJcbiAgICogQHBhcmFtICB7b2JqZWN0fSBvcHRpb25zIEluZGl2aWR1YWwgdG9hc3R5IGNvbmZpZyBvdmVycmlkZXNcclxuICAgKi9cclxuICBzdWNjZXNzKG9wdGlvbnM6IFRvYXN0T3B0aW9uc3xzdHJpbmd8bnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLmFkZChvcHRpb25zLCAnc3VjY2VzcycpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIFRvYXN0IG9mIHdhaXQgdHlwZVxyXG4gICAqIEBwYXJhbSAge29iamVjdH0gb3B0aW9ucyBJbmRpdmlkdWFsIHRvYXN0eSBjb25maWcgb3ZlcnJpZGVzXHJcbiAgICovXHJcbiAgd2FpdChvcHRpb25zOiBUb2FzdE9wdGlvbnN8c3RyaW5nfG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5hZGQob3B0aW9ucywgJ3dhaXQnKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBUb2FzdCBvZiBlcnJvciB0eXBlXHJcbiAgICogQHBhcmFtICB7b2JqZWN0fSBvcHRpb25zIEluZGl2aWR1YWwgdG9hc3R5IGNvbmZpZyBvdmVycmlkZXNcclxuICAgKi9cclxuICBlcnJvcihvcHRpb25zOiBUb2FzdE9wdGlvbnN8c3RyaW5nfG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5hZGQob3B0aW9ucywgJ2Vycm9yJyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGUgVG9hc3Qgb2Ygd2FybmluZyB0eXBlXHJcbiAgICogQHBhcmFtICB7b2JqZWN0fSBvcHRpb25zIEluZGl2aWR1YWwgdG9hc3R5IGNvbmZpZyBvdmVycmlkZXNcclxuICAgKi9cclxuICB3YXJuaW5nKG9wdGlvbnM6IFRvYXN0T3B0aW9uc3xzdHJpbmd8bnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLmFkZChvcHRpb25zLCAnd2FybmluZycpO1xyXG4gIH1cclxuXHJcblxyXG4gIC8vIEFkZCBhIG5ldyB0b2FzdCBpdGVtXHJcbiAgcHJpdmF0ZSBhZGQob3B0aW9uczogVG9hc3RPcHRpb25zfHN0cmluZ3xudW1iZXIsIHR5cGU6IHN0cmluZykge1xyXG4gICAgbGV0IHRvYXN0eU9wdGlvbnM6IFRvYXN0T3B0aW9ucztcclxuXHJcbiAgICBpZiAoaXNTdHJpbmcob3B0aW9ucykgJiYgb3B0aW9ucyAhPT0gJycgfHwgaXNOdW1iZXIob3B0aW9ucykpIHtcclxuICAgICAgdG9hc3R5T3B0aW9ucyA9IDxUb2FzdE9wdGlvbnM+e1xyXG4gICAgICAgIHRpdGxlOiBvcHRpb25zLnRvU3RyaW5nKClcclxuICAgICAgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRvYXN0eU9wdGlvbnMgPSA8VG9hc3RPcHRpb25zPm9wdGlvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0b2FzdHlPcHRpb25zIHx8ICF0b2FzdHlPcHRpb25zLnRpdGxlICYmICF0b2FzdHlPcHRpb25zLm1zZykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ25nMi10b2FzdHk6IE5vIHRvYXN0IHRpdGxlIG9yIG1lc3NhZ2Ugc3BlY2lmaWVkIScpO1xyXG4gICAgfVxyXG5cclxuICAgIHR5cGUgPSB0eXBlIHx8ICdkZWZhdWx0JztcclxuXHJcbiAgICAvLyBTZXQgYSB1bmlxdWUgY291bnRlciBmb3IgYW4gaWRcclxuICAgIHRoaXMudW5pcXVlQ291bnRlcisrO1xyXG5cclxuICAgIC8vIFNldCB0aGUgbG9jYWwgdnMgZ2xvYmFsIGNvbmZpZyBpdGVtc1xyXG4gICAgbGV0IHNob3dDbG9zZSA9IHRoaXMuX2NoZWNrQ29uZmlnSXRlbSh0aGlzLmNvbmZpZywgdG9hc3R5T3B0aW9ucywgJ3Nob3dDbG9zZScpO1xyXG5cclxuICAgIC8vIElmIHdlIGhhdmUgYSB0aGVtZSBzZXQsIG1ha2Ugc3VyZSBpdCdzIGEgdmFsaWQgb25lXHJcbiAgICBsZXQgdGhlbWU6IHN0cmluZztcclxuICAgIGlmICh0b2FzdHlPcHRpb25zLnRoZW1lKSB7XHJcbiAgICAgIHRoZW1lID0gVG9hc3R5U2VydmljZS5USEVNRVMuaW5kZXhPZih0b2FzdHlPcHRpb25zLnRoZW1lKSA+IC0xID8gdG9hc3R5T3B0aW9ucy50aGVtZSA6IHRoaXMuY29uZmlnLnRoZW1lO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhlbWUgPSB0aGlzLmNvbmZpZy50aGVtZTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgdG9hc3Q6IFRvYXN0RGF0YSA9IDxUb2FzdERhdGE+e1xyXG4gICAgICBpZCAgICAgICA6IHRoaXMudW5pcXVlQ291bnRlcixcclxuICAgICAgdGl0bGUgICAgOiB0b2FzdHlPcHRpb25zLnRpdGxlLFxyXG4gICAgICBtc2cgICAgICA6IHRvYXN0eU9wdGlvbnMubXNnLFxyXG4gICAgICBzaG93Q2xvc2U6IHNob3dDbG9zZSxcclxuICAgICAgdHlwZSAgICAgOiAndG9hc3R5LS10eXBlLScgKyB0eXBlLFxyXG4gICAgICB0aGVtZSAgICA6ICd0b2FzdHktLXRoZW1lLScgKyB0aGVtZSxcclxuICAgICAgb25BZGQgICAgOiB0b2FzdHlPcHRpb25zLm9uQWRkICYmIGlzRnVuY3Rpb24odG9hc3R5T3B0aW9ucy5vbkFkZCkgPyB0b2FzdHlPcHRpb25zLm9uQWRkIDogbnVsbCxcclxuICAgICAgb25SZW1vdmUgOiB0b2FzdHlPcHRpb25zLm9uUmVtb3ZlICYmIGlzRnVuY3Rpb24odG9hc3R5T3B0aW9ucy5vblJlbW92ZSkgPyB0b2FzdHlPcHRpb25zLm9uUmVtb3ZlIDogbnVsbFxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBJZiB0aGVyZSdzIGEgdGltZW91dCBpbmRpdmlkdWFsbHkgb3IgZ2xvYmFsbHksIHNldCB0aGUgdG9hc3QgdG8gdGltZW91dFxyXG4gICAgLy8gQWxsb3dzIGEgY2FsbGVyIHRvIHBhc3MgbnVsbC8wIGFuZCBvdmVycmlkZSB0aGUgZGVmYXVsdC4gQ2FuIGFsc28gc2V0IHRoZSBkZWZhdWx0IHRvIG51bGwvMCB0byB0dXJuIG9mZi5cclxuICAgIHRvYXN0LnRpbWVvdXQgPSB0b2FzdHlPcHRpb25zLmhhc093blByb3BlcnR5KCd0aW1lb3V0JykgPyB0b2FzdHlPcHRpb25zLnRpbWVvdXQgOiB0aGlzLmNvbmZpZy50aW1lb3V0O1xyXG5cclxuICAgIC8vIFB1c2ggdXAgYSBuZXcgdG9hc3QgaXRlbVxyXG4gICAgLy8gdGhpcy50b2FzdHNTdWJzY3JpYmVyLm5leHQodG9hc3QpO1xyXG4gICAgLy8gdGhpcy50b2FzdHNFbWl0dGVyLm5leHQodG9hc3QpO1xyXG4gICAgdGhpcy5lbWl0RXZlbnQobmV3IFRvYXN0eUV2ZW50KFRvYXN0eUV2ZW50VHlwZS5BREQsIHRvYXN0KSk7XHJcbiAgICAvLyBJZiB3ZSBoYXZlIGEgb25BZGQgZnVuY3Rpb24sIGNhbGwgaXQgaGVyZVxyXG4gICAgaWYgKHRvYXN0eU9wdGlvbnMub25BZGQgJiYgaXNGdW5jdGlvbih0b2FzdHlPcHRpb25zLm9uQWRkKSkge1xyXG4gICAgICB0b2FzdHlPcHRpb25zLm9uQWRkLmNhbGwodGhpcywgdG9hc3QpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQ2xlYXIgYWxsIHRvYXN0c1xyXG4gIGNsZWFyQWxsKCkge1xyXG4gICAgLy8gdGhpcy5jbGVhckVtaXR0ZXIubmV4dChudWxsKTtcclxuICAgIHRoaXMuZW1pdEV2ZW50KG5ldyBUb2FzdHlFdmVudChUb2FzdHlFdmVudFR5cGUuQ0xFQVJfQUxMKSk7XHJcbiAgfVxyXG5cclxuICAvLyBDbGVhciB0aGUgc3BlY2lmaWMgb25lXHJcbiAgY2xlYXIoaWQ6IG51bWJlcikge1xyXG4gICAgLy8gdGhpcy5jbGVhckVtaXR0ZXIubmV4dChpZCk7XHJcbiAgICB0aGlzLmVtaXRFdmVudChuZXcgVG9hc3R5RXZlbnQoVG9hc3R5RXZlbnRUeXBlLkNMRUFSLCBpZCkpO1xyXG4gIH1cclxuXHJcbiAgLy8gQ2hlY2tzIHdoZXRoZXIgdGhlIGxvY2FsIG9wdGlvbiBpcyBzZXQsIGlmIG5vdCxcclxuICAvLyBjaGVja3MgdGhlIGdsb2JhbCBjb25maWdcclxuICBwcml2YXRlIF9jaGVja0NvbmZpZ0l0ZW0oY29uZmlnOiBhbnksIG9wdGlvbnM6IGFueSwgcHJvcGVydHk6IHN0cmluZykge1xyXG4gICAgaWYgKG9wdGlvbnNbcHJvcGVydHldID09PSBmYWxzZSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2UgaWYgKCFvcHRpb25zW3Byb3BlcnR5XSkge1xyXG4gICAgICByZXR1cm4gY29uZmlnW3Byb3BlcnR5XTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBlbWl0RXZlbnQoZXZlbnQ6IFRvYXN0eUV2ZW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRTb3VyY2UpIHtcclxuICAgICAgICAgICAgLy8gUHVzaCB1cCBhIG5ldyBldmVudFxyXG4gICAgICAgICAgICB0aGlzLmV2ZW50U291cmNlLm5leHQoZXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvdG9hc3R5LnNlcnZpY2UudHMiLCIvLyBDb3B5cmlnaHQgKEMpIDIwMTYgU2VyZ2V5IEFrb3Brb2toeWFudHNcclxuLy8gVGhpcyBwcm9qZWN0IGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgTUlUIGxpY2Vuc2UuXHJcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ha3NlcmcvbmcyLXRvYXN0eVxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi90b2FzdHkudXRpbHMnO1xyXG5pbXBvcnQgeyBUb2FzdHlTZXJ2aWNlLCBUb2FzdERhdGEsIFRvYXN0eUNvbmZpZywgVG9hc3R5RXZlbnQsIFRvYXN0eUV2ZW50VHlwZSB9IGZyb20gJy4vdG9hc3R5LnNlcnZpY2UnO1xyXG5cclxuLyoqXHJcbiAqIFRvYXN0eSBpcyBjb250YWluZXIgZm9yIFRvYXN0IGNvbXBvbmVudHNcclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmcyLXRvYXN0eScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgaWQ9XCJ0b2FzdHlcIiBjbGFzcz1cInRvYXN0eVwiIFtuZ0NsYXNzXT1cIltwb3NpdGlvbl1cIj5cclxuICAgICAgICA8bmcyLXRvYXN0IGNsYXNzPVwidG9hc3R5X19pdGVtXCIgKm5nRm9yPVwibGV0IHRvYXN0IG9mIHRvYXN0c1wiIFt0b2FzdF09XCJ0b2FzdFwiIChjbG9zZVRvYXN0KT1cImNsb3NlVG9hc3QodG9hc3QpXCI+PC9uZzItdG9hc3Q+XHJcbiAgICA8L2Rpdj5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb2FzdHlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIC8qKlxyXG4gICAqIFNldCBvZiBjb25zdGFudHMgZGVmaW5zIHBvc2l0aW9uIG9mIFRvYXN0eSBvbiB0aGUgcGFnZS5cclxuICAgKi9cclxuICBzdGF0aWMgUE9TSVRJT05TOiBBcnJheTxTdHJpbmc+ID0gWydib3R0b20tcmlnaHQnLCAnYm90dG9tLWxlZnQnLCAndG9wLXJpZ2h0JywgJ3RvcC1sZWZ0JywgJ3RvcC1jZW50ZXInLCAnYm90dG9tLWNlbnRlcicsICdjZW50ZXItY2VudGVyJ107XHJcblxyXG4gIHByaXZhdGUgX3Bvc2l0aW9uOiBzdHJpbmcgPSAnJztcclxuICAvLyBUaGUgd2luZG93IHBvc2l0aW9uIHdoZXJlIHRoZSB0b2FzdCBwb3BzIHVwLiBQb3NzaWJsZSB2YWx1ZXM6XHJcbiAgLy8gLSBib3R0b20tcmlnaHQgKGRlZmF1bHQgdmFsdWUgZnJvbSBUb2FzdENvbmZpZylcclxuICAvLyAtIGJvdHRvbS1sZWZ0XHJcbiAgLy8gLSB0b3AtcmlnaHRcclxuICAvLyAtIHRvcC1sZWZ0XHJcbiAgLy8gLSB0b3AtY2VudGVyXHJcbiAgLy8gLSBib3R0b20tY2VudGVyXHJcbiAgLy8gLSBjZW50ZXItY2VudGVyXHJcbiAgQElucHV0KCkgc2V0IHBvc2l0aW9uKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICBsZXQgbm90Rm91bmQgPSB0cnVlO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IFRvYXN0eUNvbXBvbmVudC5QT1NJVElPTlMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoVG9hc3R5Q29tcG9uZW50LlBPU0lUSU9OU1tpXSA9PT0gdmFsdWUpIHtcclxuICAgICAgICAgIG5vdEZvdW5kID0gZmFsc2U7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG5vdEZvdW5kKSB7XHJcbiAgICAgICAgLy8gUG9zaXRpb24gd2FzIHdyb25nIC0gY2xlYXIgaXQgaGVyZSB0byB1c2UgdGhlIG9uZSBmcm9tIGNvbmZpZy5cclxuICAgICAgICB2YWx1ZSA9IHRoaXMuY29uZmlnLnBvc2l0aW9uO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2YWx1ZSA9IHRoaXMuY29uZmlnLnBvc2l0aW9uO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fcG9zaXRpb24gPSAndG9hc3R5LS1wb3NpdGlvbi0nICsgdmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXQgcG9zaXRpb24oKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9wb3NpdGlvbjtcclxuICB9XHJcblxyXG4gIC8vIFRoZSBzdG9yYWdlIGZvciB0b2FzdHMuXHJcbiAgdG9hc3RzOiBBcnJheTxUb2FzdERhdGE+ID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29uZmlnOiBUb2FzdHlDb25maWcsIHByaXZhdGUgdG9hc3R5U2VydmljZTogVG9hc3R5U2VydmljZSkge1xyXG4gICAgLy8gSW5pdGlhbGlzZSBwb3NpdGlvblxyXG4gICAgdGhpcy5wb3NpdGlvbiA9ICcnO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogYG5nT25Jbml0YCBpcyBjYWxsZWQgcmlnaHQgYWZ0ZXIgdGhlIGRpcmVjdGl2ZSdzIGRhdGEtYm91bmQgcHJvcGVydGllcyBoYXZlIGJlZW4gY2hlY2tlZCBmb3IgdGhlXHJcbiAgICogZmlyc3QgdGltZSwgYW5kIGJlZm9yZSBhbnkgb2YgaXRzIGNoaWxkcmVuIGhhdmUgYmVlbiBjaGVja2VkLiBJdCBpcyBpbnZva2VkIG9ubHkgb25jZSB3aGVuIHRoZVxyXG4gICAqIGRpcmVjdGl2ZSBpcyBpbnN0YW50aWF0ZWQuXHJcbiAgICovXHJcbiAgbmdPbkluaXQoKTogYW55IHtcclxuICAgIC8vIFdlIGxpc3RlbiBldmVudHMgZnJvbSBvdXIgc2VydmljZVxyXG4gICAgdGhpcy50b2FzdHlTZXJ2aWNlLmV2ZW50cy5zdWJzY3JpYmUoKGV2ZW50OiBUb2FzdHlFdmVudCkgPT4ge1xyXG4gICAgICBpZiAoZXZlbnQudHlwZSA9PT0gVG9hc3R5RXZlbnRUeXBlLkFERCkge1xyXG4gICAgICAgIC8vIEFkZCB0aGUgbmV3IG9uZVxyXG4gICAgICAgIGxldCB0b2FzdDogVG9hc3REYXRhID0gZXZlbnQudmFsdWU7XHJcbiAgICAgICAgdGhpcy5hZGQodG9hc3QpO1xyXG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LnR5cGUgPT09IFRvYXN0eUV2ZW50VHlwZS5DTEVBUikge1xyXG4gICAgICAgIC8vIENsZWFyIHRoZSBvbmUgYnkgbnVtYmVyXHJcbiAgICAgICAgbGV0IGlkOiBudW1iZXIgPSBldmVudC52YWx1ZTtcclxuICAgICAgICB0aGlzLmNsZWFyKGlkKTtcclxuICAgICAgfSBlbHNlIGlmIChldmVudC50eXBlID09PSBUb2FzdHlFdmVudFR5cGUuQ0xFQVJfQUxMKSB7XHJcbiAgICAgICAgLy8gTGV0cyBjbGVhciBhbGwgdG9hc3RzXHJcbiAgICAgICAgdGhpcy5jbGVhckFsbCgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEV2ZW50IGxpc3RlbmVyIG9mICdjbG9zZVRvYXN0JyBldmVudCBjb21lcyBmcm9tIFRvYXN0eUNvbXBvbmVudC5cclxuICAgKiBUaGlzIG1ldGhvZCByZW1vdmVzIFRvYXN0Q29tcG9uZW50IGFzc29zaWF0ZWQgd2l0aCB0aGlzIFRvYXN0LlxyXG4gICAqL1xyXG4gIGNsb3NlVG9hc3QodG9hc3Q6IFRvYXN0RGF0YSkge1xyXG4gICAgdGhpcy5jbGVhcih0b2FzdC5pZCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGQgbmV3IFRvYXN0XHJcbiAgICovXHJcbiAgYWRkKHRvYXN0OiBUb2FzdERhdGEpIHtcclxuICAgIC8vIElmIHdlJ3ZlIGdvbmUgb3ZlciBvdXIgbGltaXQsIHJlbW92ZSB0aGUgZWFybGllc3RcclxuICAgIC8vIG9uZSBmcm9tIHRoZSBhcnJheVxyXG4gICAgaWYgKHRoaXMudG9hc3RzLmxlbmd0aCA+PSB0aGlzLmNvbmZpZy5saW1pdCkge1xyXG4gICAgICB0aGlzLnRvYXN0cy5zaGlmdCgpO1xyXG4gICAgfVxyXG4gICAgLy8gQWRkIHRvYXN0eSB0byBhcnJheVxyXG4gICAgdGhpcy50b2FzdHMucHVzaCh0b2FzdCk7XHJcbiAgICAvL1xyXG4gICAgLy8gSWYgdGhlcmUncyBhIHRpbWVvdXQgaW5kaXZpZHVhbGx5IG9yIGdsb2JhbGx5LFxyXG4gICAgLy8gc2V0IHRoZSB0b2FzdCB0byB0aW1lb3V0XHJcbiAgICBpZiAodG9hc3QudGltZW91dCkge1xyXG4gICAgICB0aGlzLl9zZXRUaW1lb3V0KHRvYXN0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENsZWFyIGluZGl2aWR1YWwgdG9hc3QgYnkgaWRcclxuICAgKiBAcGFyYW0gaWQgaXMgdW5pcXVlIGlkZW50aWZpZXIgb2YgVG9hc3RcclxuICAgKi9cclxuICBjbGVhcihpZDogbnVtYmVyKSB7XHJcbiAgICBpZiAoaWQpIHtcclxuICAgICAgdGhpcy50b2FzdHMuZm9yRWFjaCgodmFsdWU6IGFueSwga2V5OiBudW1iZXIpID0+IHtcclxuICAgICAgICBpZiAodmFsdWUuaWQgPT09IGlkKSB7XHJcbiAgICAgICAgICBpZiAodmFsdWUub25SZW1vdmUgJiYgaXNGdW5jdGlvbih2YWx1ZS5vblJlbW92ZSkpIHtcclxuICAgICAgICAgICAgdmFsdWUub25SZW1vdmUuY2FsbCh0aGlzLCB2YWx1ZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLnRvYXN0cy5zcGxpY2Uoa2V5LCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdQbGVhc2UgcHJvdmlkZSBpZCBvZiBUb2FzdCB0byBjbG9zZScpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2xlYXIgYWxsIHRvYXN0c1xyXG4gICAqL1xyXG4gIGNsZWFyQWxsKCkge1xyXG4gICAgdGhpcy50b2FzdHMuZm9yRWFjaCgodmFsdWU6IGFueSwga2V5OiBudW1iZXIpID0+IHtcclxuICAgICAgaWYgKHZhbHVlLm9uUmVtb3ZlICYmIGlzRnVuY3Rpb24odmFsdWUub25SZW1vdmUpKSB7XHJcbiAgICAgICAgdmFsdWUub25SZW1vdmUuY2FsbCh0aGlzLCB2YWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy50b2FzdHMgPSBbXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEN1c3RvbSBzZXRUaW1lb3V0IGZ1bmN0aW9uIGZvciBzcGVjaWZpYyBzZXRUaW1lb3V0cyBvbiBpbmRpdmlkdWFsIHRvYXN0cy5cclxuICAgKi9cclxuICBwcml2YXRlIF9zZXRUaW1lb3V0KHRvYXN0OiBUb2FzdERhdGEpIHtcclxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5jbGVhcih0b2FzdC5pZCk7XHJcbiAgICB9LCB0b2FzdC50aW1lb3V0KTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL3RvYXN0eS5jb21wb25lbnQudHMiLCIvKipcclxuICogQ2hlY2sgYW5kIHJldHVybiB0cnVlIGlmIGFuIG9iamVjdCBpcyB0eXBlIG9mIHN0cmluZ1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nKG9iajphbnkpIHtcclxuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSBcInN0cmluZ1wiO1xyXG59XHJcblxyXG4vKipcclxuICogQ2hlY2sgYW5kIHJldHVybiB0cnVlIGlmIGFuIG9iamVjdCBpcyB0eXBlIG9mIG51bWJlclxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtYmVyKG9iajogYW55KSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gXCJudW1iZXJcIjtcclxufVxyXG5cclxuLyoqXHJcbiAqIENoZWNrIGFuZCByZXR1cm4gdHJ1ZSBpZiBhbiBvYmplY3QgaXMgdHlwZSBvZiBGdW5jdGlvblxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRnVuY3Rpb24ob2JqOiBhbnkpIHtcclxuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSBcImZ1bmN0aW9uXCI7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL3RvYXN0eS51dGlscy50cyIsImltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBQaXBlVHJhbnNmb3JtLCBQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdzYWZlSHRtbCd9KVxyXG5leHBvcnQgY2xhc3MgU2FmZUh0bWxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSAge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkb21TYW5pdGl6ZWQ6IERvbVNhbml0aXplcikge31cclxuXHJcbiAgICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgLi4uYXJnczogYW55W10pOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRvbVNhbml0aXplZC5ieXBhc3NTZWN1cml0eVRydXN0SHRtbCh2YWx1ZSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvc2hhcmVkLnRzIiwiLy8gQ29weXJpZ2h0IChDKSAyMDE2IFNlcmdleSBBa29wa29raHlhbnRzXHJcbi8vIFRoaXMgcHJvamVjdCBpcyBsaWNlbnNlZCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIE1JVCBsaWNlbnNlLlxyXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYWtzZXJnL25nMi10b2FzdHlcclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBUb2FzdERhdGEgfSBmcm9tICcuL3RvYXN0eS5zZXJ2aWNlJztcclxuXHJcbi8qKlxyXG4gKiBBIFRvYXN0IGNvbXBvbmVudCBzaG93cyBtZXNzYWdlIHdpdGggdGl0bGUgYW5kIGNsb3NlIGJ1dHRvbi5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmcyLXRvYXN0JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0b2FzdHlfX2NvbnRlbnQgdG9hc3RcIiBbbmdDbGFzc109XCJbdG9hc3QudHlwZSwgdG9hc3QudGhlbWVdXCI+XHJcbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJ0b2FzdC5zaG93Q2xvc2VcIiBjbGFzcz1cInRvYXN0eV9fY2xvc2UgY2xvc2UtYnV0dG9uXCIgKGNsaWNrKT1cImNsb3NlKCRldmVudClcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cInRvYXN0LnRpdGxlIHx8IHRvYXN0Lm1zZ1wiIGNsYXNzPVwidG9hc3R5X190ZXh0IHRvYXN0LXRleHRcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwidG9hc3QudGl0bGVcIiBjbGFzcz1cInRvYXN0eV9fdGl0bGUgdG9hc3QtdGl0bGVcIiBbaW5uZXJIVE1MXT1cInRvYXN0LnRpdGxlIHwgc2FmZUh0bWxcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8YnIgKm5nSWY9XCJ0b2FzdC50aXRsZSAmJiB0b2FzdC5tc2dcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJ0b2FzdC5tc2dcIiBjbGFzcz1cInRvYXN0eV9fbWVzc2FnZSB0b2FzdC1tc2dcIiBbaW5uZXJIdG1sXT1cInRvYXN0Lm1zZyB8IHNhZmVIdG1sXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb2FzdENvbXBvbmVudCB7XHJcblxyXG4gIEBJbnB1dCgpIHRvYXN0OiBUb2FzdERhdGE7XHJcbiAgQE91dHB1dCgnY2xvc2VUb2FzdCcpIGNsb3NlVG9hc3RFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgLyoqXHJcbiAgICogRXZlbnQgaGFuZGxlciBpbnZva2VzIHdoZW4gdXNlciBjbGlja3Mgb24gY2xvc2UgYnV0dG9uLlxyXG4gICAqIFRoaXMgbWV0aG9kIGVtaXQgbmV3IGV2ZW50IGludG8gVG9hc3R5Q29udGFpbmVyIHRvIGNsb3NlIGl0LlxyXG4gICAqL1xyXG4gIGNsb3NlKCRldmVudDogYW55KSB7XHJcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuY2xvc2VUb2FzdEV2ZW50Lm5leHQodGhpcy50b2FzdCk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy90b2FzdC5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNl9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29tbW9uXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzdfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIlxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfOF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9TdWJqZWN0XCJcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gQ29weXJpZ2h0IChDKSAyMDE2IFNlcmdleSBBa29wa29raHlhbnRzXHJcbi8vIFRoaXMgcHJvamVjdCBpcyBsaWNlbnNlZCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIE1JVCBsaWNlbnNlLlxyXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYWtzZXJnL25nMi10b2FzdHlcclxuXHJcbmltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmV4cG9ydCAqIGZyb20gJy4vc3JjL3RvYXN0eS5zZXJ2aWNlJztcclxuZXhwb3J0ICogZnJvbSAnLi9zcmMvdG9hc3R5LmNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQgeyBUb2FzdHlDb21wb25lbnQgfSBmcm9tICcuL3NyYy90b2FzdHkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVG9hc3RDb21wb25lbnQgfSBmcm9tICcuL3NyYy90b2FzdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTYWZlSHRtbFBpcGUgfSBmcm9tICcuL3NyYy9zaGFyZWQnO1xyXG5pbXBvcnQgeyBUb2FzdHlTZXJ2aWNlLCBUb2FzdHlDb25maWcsIHRvYXN0eVNlcnZpY2VGYWN0b3J5IH0gZnJvbSAnLi9zcmMvdG9hc3R5LnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGxldCBwcm92aWRlcnMgPSBbXHJcbiAgICBUb2FzdHlDb25maWcsXHJcbiAgICB7IHByb3ZpZGU6IFRvYXN0eVNlcnZpY2UsIHVzZUZhY3Rvcnk6IHRvYXN0eVNlcnZpY2VGYWN0b3J5LCBkZXBzOiBbVG9hc3R5Q29uZmlnXSB9XHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtUb2FzdENvbXBvbmVudCwgVG9hc3R5Q29tcG9uZW50LCBTYWZlSHRtbFBpcGVdLFxyXG4gICAgZXhwb3J0czogWyBUb2FzdENvbXBvbmVudCwgVG9hc3R5Q29tcG9uZW50XSxcclxuICAgIHByb3ZpZGVyczogcHJvdmlkZXJzXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb2FzdHlNb2R1bGUge1xyXG4gICAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmdNb2R1bGU6IFRvYXN0eU1vZHVsZSxcclxuICAgICAgICAgICAgcHJvdmlkZXJzOiBwcm92aWRlcnNcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vaW5kZXgudHMiXSwic291cmNlUm9vdCI6IiJ9