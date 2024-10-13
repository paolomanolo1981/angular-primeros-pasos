import { Injectable } from '@angular/core';
import {Character} from "../interfaces/character.interface";
import {   v4 as uuid } from 'uuid';

// console.log(v4())
@Injectable({
  providedIn: 'root'
})
export class DbzService {
  constructor() { }
  public characters: Character[] = [
    {
      id:uuid(),
      name: 'Krilin',
      power: 1000
    },
    {
      id:uuid(),
      name: 'Goku',
      power: 10000
    },
    {
      id:uuid(),
      name: 'Vegeta',
      power: 7500
    }
  ];

  addCharacter=(character:Character):void=>{
    const newCharacter={
      id:uuid(),
      ...character
    }
    this.characters.push(newCharacter);
  };

  //onDeleteCharacter=(index:number):void=>{
  DeleteCharacterById=(id:string):void=>{
   // this.characters.splice(id, 1);
    this.characters= this.characters.filter((character:Character)=>{
      return character.id !== id
    });
  }

}
