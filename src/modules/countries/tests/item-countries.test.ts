
import request from 'supertest'
import app from '../../../app'

describe('POST /api/v1/countries', () => {
  it('should allow get country', async () => {
    expect(true).toBe(true)

    const response = await request(app)
      .get('/api/v1/countries/item/ua')

    expect(response.status).toBe(200)
    expect(Array.isArray(response.body.data.borders)).toBe(true)
    expect(Array.isArray(response.body.data.population)).toBe(true)
  })
})