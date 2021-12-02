import { withIronSessionApiRoute } from 'iron-session/next';
import { NextApiHandler } from 'next';

const withSession = (handler: NextApiHandler) =>
    withIronSessionApiRoute(handler, {
        password: process.env.COOKIE_PASSWORD,
        cookieName: 'my-cookie',
        cookieOptions: {
            maxAge: 60 * 60 * 24 * 30,
            secure: process.env.NODE_ENV === 'production' ? true : false,
        },
    });

export default withSession;
