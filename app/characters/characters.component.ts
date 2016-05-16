import { Component, OnInit, OnChanges, SimpleChange, Input } from '@angular/core';

import { Character } from "./characters.model";
import { CharacterService } from "./characters.service";
import { KillerDirective } from "./killer.directive";

@Component({
    moduleId: module.id,
    selector: 'got-characters',
    templateUrl: 'characters.component.html',
    styleUrls: ["characters.component.css"],
    providers: [CharacterService],
    directives: [KillerDirective]
})
export class CharactersComponent implements OnInit, OnChanges {
    characters: Character[];
    @Input() readBooks: boolean = true;
    
    constructor(private service: CharacterService) { }

    ngOnInit() {
        this.service.getCharacters()
            .subscribe(chars => this.characters = chars)
     }
     
     ngOnChanges(changes: {[propName: string]: SimpleChange}) {
         // Check this.readBooks value - hook will be called after
         // the change is applied and the previous value in changes
         // will be the one from the parent instead
         debugger;
     }
}