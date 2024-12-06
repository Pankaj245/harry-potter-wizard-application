export interface Elixir {
    id: string;
    name: string;
    difficulty: string;
    ingredients: Ingredient[];
    inventors: Investors[];
    manufacturer: string;
  }

  export interface Ingredient {
    id: string;
    name: string;
  }

  export interface Investors {
    id: string;
    firstName: string;
    lastName: string;
  }
  
  export interface Filters {
    name: string;
    difficulty: string;
    ingredient: string;
    inventor: string;
    manufacturer: string;
  }