import { Component } from '@angular/core';
import Fruit from 'src/app/models/Fruit.model';
import { FrhttpserviceService } from 'src/app/services/frhttpservice.service';
@Component({
  selector: 'app-fruits-list',
  templateUrl: './fruits-list.component.html',
  styleUrls: ['./fruits-list.component.css']
})
export class FruitsListComponent {
  constructor(private frservice:FrhttpserviceService){
    this.getFruits();
  }
  fruits:Fruit[]=[];
  fruitstoshow:Fruit[]=[];
  getFruits(){
    this.frservice.getFruits().subscribe(data=>this.fruits = data as Fruit[])

  }
  showsOne(name:string)
  {
    this.fruitstoshow=this.fruits.filter(n=>n.name==name);
  }
  showAll(){
    this.fruitstoshow=this.fruits;
  }
  

}
