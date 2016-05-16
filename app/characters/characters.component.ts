import { Component, OnInit } from '@angular/core';

import { Character } from "./characters.model";
import { CharacterService } from "./characters.service";

@Component({
    moduleId: module.id,
    selector: 'got-characters',
    templateUrl: 'characters.component.html',
    styleUrls: ["characters.component.css"],
    providers: [CharacterService]
})
export class CharactersComponent implements OnInit {
    characters: Character[];
    readBooks: boolean = true;
    
    constructor(private service: CharacterService) { }

    ngOnInit() {
        this.service.getCharacters()
            .subscribe(chars => this.characters = chars)
     }
}