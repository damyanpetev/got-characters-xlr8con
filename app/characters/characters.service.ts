import { Injectable } from '@angular/core';

import { Http, Response } from "@angular/http";
import { Character } from "./characters.model";
import "rxjs/add/operator/map";
import {Observable} from "rxjs";

@Injectable()
export class CharacterService {

    constructor(private http: Http) { }

    getCharacters(): Observable<Character[]> {
        return this.http.get('characters.json')
            .map((res: Response) => res.json());
    }
}