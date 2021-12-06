import { NextApiHandler } from 'next';
import withSession from '../../../lib/session';

interface LoginRequestBody {
  usernameOrEmail: string;
  password: string;
}

const Login: NextApiHandler = (req, res) => {
  const body: LoginRequestBody = req.body;
};

export default withSession(Login);
export type { LoginRequestBody };
