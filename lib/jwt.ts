import jwt from 'jsonwebtoken';

export function signJwtToken(payload: object, options: jwt.SignOptions = {}): string {
    if (!process.env.JWT_SECRET) {
        throw new Error('JWT_SECRET is not defined in the environment variables.');
    }
    const secret = process.env.JWT_SECRET;
    const token = jwt.sign(payload, secret, options);
    return token;
}

export function verifyJwtToken<T>(token: string): T | null {
    try {
        if (!process.env.JWT_SECRET) {
            throw new Error('JWT_SECRET is not defined in the environment variables.');
        }
        const secret = process.env.JWT_SECRET;
        const payload = jwt.verify(token, secret) as T;
        return payload;
    } catch (error) {
        console.error(error);
        return null;
    }
}
