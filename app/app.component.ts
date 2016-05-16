import {Component} from '@angular/core';
import { CharactersComponent } from "./characters";

@Component({
    selector: 'my-app',
    template: `
        <h1>GoT Characters Helper</h1>
        <got-characters></got-characters>
    `,
    directives: [CharactersComponent]
})
export class AppComponent { }
