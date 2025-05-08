import appDataSource from '../../config/app-data-source'
import { calendarsRepository } from '../calendar/calendars.repository'
import { UserEntity } from './users.entity'

type UserCreateParams = {}
type UserItemParams = {
  id: number
}

export const usersRepository = appDataSource.getRepository(UserEntity).extend({
  createOne(): UserEntity {
    const user = new UserEntity()
    this.create(user)
    return user
  },
  async createAndSave(): Promise<UserEntity> {
    let user = this.createOne()
    user = await this.save(user)
    const calendar = await calendarsRepository.createAndSave({ userId: user.id })
    user.calendar = calendar
    await this.save(user)
    return user
  },

  async getById(query: UserItemParams): Promise<any> {
    const user = await this.findBy({ id: query.id })
    return user
  },
})
