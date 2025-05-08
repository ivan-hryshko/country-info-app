import request from 'supertest'
import app from '../../../app'

describe('POST /api/v1/countries', () => {
  it('should allow list countries', async () => {
    expect(true).toBe(true)

    const response = await request(app).get('/api/v1/countries/list')

    expect(response.status).toBe(200)
    expect(Array.isArray(response.body.data.countries)).toBe(true)
  })
})
