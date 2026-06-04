import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config();

export const Config = {
  baseUrl: process.env.BASE_URL || 'https://example.com',
  userName: process.env.USER_NAME || 'default_user',
  password: process.env.USER_PASSWORD || 'default_pass',
  env: process.env.ENVIRONMENT || 'dev',
};
