import { NextApiHandler } from 'next';
import withSession from '../../../lib/session';

interface LoginRequestBody {
  usernameOrEmail: string;
  password: string;
}

const Login: NextApiHandler = async (req, res) => {
  const body: LoginRequestBody = req.body;

  res.status(200);
};

export default withSession(Login);
export type { LoginRequestBody };
