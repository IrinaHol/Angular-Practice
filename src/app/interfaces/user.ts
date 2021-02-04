export interface IUser {
  id: number;
  age: number;
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
  };
}
