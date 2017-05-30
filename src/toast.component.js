// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-toasty
import { Component, Input, Output, EventEmitter } from '@angular/core';
/**
 * A Toast component shows message with title and close button.
 */
export var ToastComponent = (function () {
    function ToastComponent() {
        this.closeToastEvent = new EventEmitter();
    }
    /**
     * Event handler invokes when user clicks on close button.
     * This method emit new event into ToastyContainer to close it.
     */
    ToastComponent.prototype.close = function ($event) {
        $event.preventDefault();
        this.closeToastEvent.next(this.toast);
    };
    ToastComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng2-toast',
                    template: "\n        <div class=\"toasty__content toast\" [ngClass]=\"[toast.type, toast.theme]\">\n            <div *ngIf=\"toast.showClose\" class=\"toasty__close close-button\" (click)=\"close($event)\"></div>\n            <div *ngIf=\"toast.title || toast.msg\" class=\"toasty__text toast-text\">\n                <span *ngIf=\"toast.title\" class=\"toasty__title toast-title\" [innerHTML]=\"toast.title | safeHtml\"></span>\n                <br *ngIf=\"toast.title && toast.msg\" />\n                <span *ngIf=\"toast.msg\" class=\"toasty__message toast-msg\" [innerHtml]=\"toast.msg | safeHtml\"></span>\n            </div>\n        </div>"
                },] },
    ];
    /** @nocollapse */
    ToastComponent.ctorParameters = function () { return []; };
    ToastComponent.propDecorators = {
        'toast': [{ type: Input },],
        'closeToastEvent': [{ type: Output, args: ['closeToast',] },],
    };
    return ToastComponent;
}());
