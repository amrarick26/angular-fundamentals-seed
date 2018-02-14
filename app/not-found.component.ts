import { Component } from '@angular/core';

@Component({
    selector: 'not-found',
    template: `
        <div>
            Not Found!
            <button class="btn btn-link" routerLink="/" >Go Home</button>?
        </div>
    `
})

export class NotFoundComponent {}