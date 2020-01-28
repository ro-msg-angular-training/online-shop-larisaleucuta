export class Product{
    id:number;
    category:string;
    name:string;
    price:number;
    image?:string;
    description:string;


  constructor(id: number, category: string, name: string, price: number, image: string, description: string) {
    this.id = id;
    this.category = category;
    this.name = name;
    this.price = price;
    this.image = image;
    this.description = description;
  }
}
