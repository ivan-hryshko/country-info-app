import appDataSource from '../../config/app-data-source'
import { UserEntity } from './users.entity'

type UserCreateParams = {
}
type UserItemParams = {
  id: number
}

export const usersRepository = appDataSource.getRepository(UserEntity).extend({
  async createAndSave(): Promise<UserEntity> {
    const user = new UserEntity()
    await this.save(user)
    return user
  },

  async getById(query: UserItemParams): Promise<any> {
    const user = await this.findBy({ id: query.id })
    return user
  },
})
