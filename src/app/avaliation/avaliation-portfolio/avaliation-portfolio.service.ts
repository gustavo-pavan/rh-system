import { Injectable } from '@angular/core';

const ELEMENT_ARRAY = [
    {title: "Gustavo Pavan", photo: "avaliation.png"},
    {title: "Avaliation", photo: "change-avaliation.jpg"},
    {title: "Avaliation", photo: "choices.png"},
    {title: "Avaliation", photo: "feed.jpg"},
    {title: "Avaliation", photo: "good.webp"},
    {title: "Avaliation", photo: "new.jpg"},
    {title: "Avaliation", photo: "newpaper.jpg"},
    {title: "Avaliation", photo: "results.png"},
    {title: "Avaliation", photo: "choices.png"},
    {title: "Avaliation", photo: "feed.jpg"},
    {title: "Avaliation", photo: "good.webp"},
    {title: "Avaliation", photo: "new.jpg"},
    {title: "Gustavo Pavan", photo: "avaliation.png"},
    {title: "Avaliation", photo: "change-avaliation.jpg"},
    {title: "Avaliation", photo: "choices.png"},
    {title: "Avaliation", photo: "feed.jpg"},
    {title: "Avaliation", photo: "good.webp"},
    {title: "Avaliation", photo: "new.jpg"},
    {title: "Avaliation", photo: "change-avaliation.jpg"},
      {title: "Avaliation", photo: "results.png"},
    {title: "Avaliation", photo: "choices.png"},
    {title: "Avaliation", photo: "feed.jpg"},
    {title: "Avaliation", photo: "good.webp"},
    {title: "Avaliation", photo: "new.jpg"},
    {title: "Gustavo Pavan", photo: "avaliation.png"},
    {title: "Avaliation", photo: "change-avaliation.jpg"},
    {title: "Avaliation", photo: "choices.png"},
    {title: "Avaliation", photo: "feed.jpg"},
    {title: "Avaliation", photo: "good.webp"},
    {title: "Avaliation", photo: "new.jpg"},
    {title: "Avaliation", photo: "change-avaliation.jpg"},
    {title: "Avaliation", photo: "change-avaliation.jpg"}
    
]

@Injectable()
export class AvaliationPortfolioService {
    constructor(){}

    public getAvaliation(): Array<any>{
        return ELEMENT_ARRAY;
    }

}