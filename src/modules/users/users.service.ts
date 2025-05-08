import { usersRepository } from "./users.repository"

export class UsersService {
  static async create(): Promise<{}> {
    const user = await usersRepository.createAndSave()
    return user
  }
}