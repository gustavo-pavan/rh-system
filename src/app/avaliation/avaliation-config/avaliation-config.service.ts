import { Injectable } from "@angular/core";
import { ISystemAvaliation, IAvaliation } from './avaliation-config.model';

const AVALIATION1: Array<IAvaliation> = [
    { sequence: 1, question: '1', validation: true },
    { sequence: 2, question: '2' },
    { sequence: 3, question: '3' },
    { sequence: 4, question: '4' }
]

const AVALIATION2: Array<IAvaliation> = [
    { sequence: 1, question: '1' },
    { sequence: 2, question: '2' },
    { sequence: 3, question: '3' },
    { sequence: 4, question: '4' }
]

const ELEMENT_ARRAY: Array<ISystemAvaliation> = [
    {title: "Gustavo",sequence: 1,avaliation: AVALIATION1},
    {title: "Gustavo Pavan", sequence:2, avaliation: AVALIATION2}
]


@Injectable()
export class AvaliationConfigService {
    constructor() { }

    public getAvaliation(id: number): Array<ISystemAvaliation> {
        return ELEMENT_ARRAY; 
    }
}