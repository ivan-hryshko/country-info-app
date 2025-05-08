import appDataSource from '../../config/app-data-source'
import { calendarsRepository } from '../calendar/calendars.repository'
import { UserEntity } from './users.entity'

type UserCreateParams = {
}
type UserItemParams = {
  id: number
}

export const usersRepository = appDataSource.getRepository(UserEntity).extend({
  async createOne(): Promise<UserEntity> {
    const user = new UserEntity()
    await this.create(user)
    return user
  },
  async createAndSave(): Promise<UserEntity> {
    const user = await this.createOne()
    console.log('user :>> ', user);
    const calendar = await calendarsRepository.createOne({ userId: user.id })
    user.calendar = calendar
    await this.save(user)
    await calendarsRepository.save(calendar)
    return user
  },

  async getById(query: UserItemParams): Promise<any> {
    const user = await this.findBy({ id: query.id })
    return user
  },
})
