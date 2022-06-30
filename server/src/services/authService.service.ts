import crypto from 'crypto';
import { CryptResponse } from '../interfaces/cryptPasswordResponse.interface';

export const cryptPassword = (password: string) => {
    return new Promise<CryptResponse>((resolve, reject) => {
        const salt = crypto.randomBytes(8).toString('hex');
        crypto.scrypt(password, salt, 64, (error, hash) => {
            if (error) reject(error);
            const response = { cryptResponse: (`${salt}:${hash.toString('hex')}`) };
            resolve(response);
        })
    })
}

export const descryptPassword = (password: string, cryptPassword: string) => {
    return new Promise<Boolean>((resolve, reject) => {
        const [salt, hash] = cryptPassword.split(":");
        crypto.scrypt(password, salt, 64, (error, hashVerification) => {
            if (error) reject(error);
            resolve(hash === hashVerification.toString('hex'));
        })
    })
}