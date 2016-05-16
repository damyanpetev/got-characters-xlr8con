import {Component} from '@angular/core';
import { CharactersComponent } from "./characters";

@Component({
    selector: 'my-app',
    template: `
        <h1>GoT Characters Helper</h1>
        <got-characters [readBooks]="readBooks"></got-characters>
    `,
    directives: [CharactersComponent]
})
export class AppComponent {
    // swap this to false to see the inner component property loose 
    // it's initial value without a chance to check previous one
    readBooks: boolean = true;
}
