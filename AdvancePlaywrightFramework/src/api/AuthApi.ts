import { APIRequestContext } from '@playwright/test';
import { Config } from '../config';

export class AuthApi {
  constructor(private request: APIRequestContext) {}

  async login(username: string, password: string) {
    const response = await this.request.post(`${Config.baseUrl}/api/login`, {
      data: { username, password },
    });
    return response.json();
  }

  async checkSession(token: string) {
    const response = await this.request.get(`${Config.baseUrl}/api/session`, {
      headers: { 'Authorization': `Bearer ${token}` },
    });
    return response.ok();
  }
}
