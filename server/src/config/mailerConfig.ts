import dotenv from 'dotenv';
dotenv.config({ path: '../../.env' });

export const mailerConfig = {
  service: process.env.MAILER_SERVICE_TYPE,
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAILER_SERVICE_USER,
    pass: process.env.MAILER_SERVICE_PASS,
  }, 
  tls: {
    rejectUnauthorized: false,
}
};