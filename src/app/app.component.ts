import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-menu-app';

  selection = [
    {
      "id": 1,
      "favorite": false,
      "image": "assets/images/WhiteShirt.webp",
      "description1": "Nike Air",
      "description2": "Club Tee",
      "description3": "White",
      "qty": 0,
      "stock": 50,
      "price": 30

      
    },
    {
      "id": 2,
      "favorite": false,
      "image": "assets/images/GreyShorts.webp",
      "description1": "Nike Club",
      "description2": "Fleece Shorts",
      "description3": "Grey",
      "qty": 0,
      "stock": 50,
      "price": 40
      
    },
    {
      "id": 3,
      "favorite": false,
      "image": "assets/images/Shoes.webp",
      "description1": "Nike Air",
      "description2": "Force 1",
      "description3": "White",
      "qty": 0,
      "stock": 50,
      "price": 100
    }
  ]

  decreaseQty(selection: any){
    if(selection.qty == 0){
      selection.qty = 0;
    } else {
      selection.qty--
    }
  }

  increaseQty(selection: any){
    selection.qty++
  }

  calculate(){
    let sum = 0;
    for(const item of this.selection){
      sum += item.price * item.qty;
    }
    return sum;
  }

  qtycount(){
    let sum = 0;
    for(const item of this.selection){
      sum += item.qty
    }
    return sum
  }

  like(selection: any){
    selection.favorite = true
  }
}
