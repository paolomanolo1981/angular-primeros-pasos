import {Component, EventEmitter, OnInit} from "@angular/core";
import {Character} from "../interfaces/character.interface";
import {DbzService} from "../services/dbz.service";

@Component({
  selector: "app-dbz-main-page",
  templateUrl: "./main-page.component.html",
  styleUrls: ["./main-page.component.css"]
})
export class MainPageComponent implements OnInit {

  constructor(private dbzService: DbzService) {

  }
  valor:number=0;
  get characters():Character[] {
    return  [...this.dbzService.characters];
  }

  onDeleteCharacter=(id:string):void =>{
    this.dbzService.DeleteCharacterById(id);
  }

  onNewCharacter=(character:Character):void =>{
    this.dbzService.addCharacter(character);
  }

  ngOnInit() {
  }

}
