export class User {
  constructor(public email, public name, private password) {}

  matches(another: User): boolean {
    return (
      another !== undefined &&
      another.email === this.email &&
      another.password === this.password
    );
  }
}

export const users: { [key: string]: User } = {
  "fulano@gmail.com": new User("fulano@gmail.com", "fulano", "fulano123"),
  "ciclano@gmail.com": new User("ciclano@gmail.com", "ciclano", "ciclano123"),
  "beltrano@gmail.com": new User(
    "beltrano@gmail.com",
    "beltrano",
    "beltrano123"
  ),
  "teste@gmail.com": new User("teste@gmail.com", "teste", "teste123")
};
