import { Directive, OnInit, Input, HostListener } from '@angular/core';

import { Character } from "./characters.model";

@Directive({
    selector: '[charKiller]'
})
export class KillerDirective implements OnInit {
    @Input() charKiller: Character;
    
    constructor() { }

    ngOnInit() { }

    @HostListener("click")
    kill() {
        this.charKiller.dead = !this.charKiller.dead;
    }
}