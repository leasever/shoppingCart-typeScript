export interface ProductEntry {
  _id: number;
  name: string;
  image: string[];
  description: string;
  price: number;
  rating: number;
}

export interface Cart extends Pick<ProductEntry, "_id"> {
  quantity: number;
}

export interface User {
  _id: string;
  email: string;
  user: string;
}

export interface Purchase {
  _id: string;
  date: Date;
  items: Cart[];
}

export interface UserConnected {
  _id: string;
  email: string;
  username: string;
  purchase: Purchase[];
}

export interface Crypted {
  password: string;
  sal: Uint8Array;
  iterations: number;
  longitude: number;
  hash: string;
}
