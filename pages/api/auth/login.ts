import { NextApiHandler } from 'next';
import withSession from '../../../lib/session';
import config from '../../../config';

interface LoginRequestBody {
  usernameOrEmail: string;
  password: string;
}

const Login: NextApiHandler = async (req, res) => {
  const body: LoginRequestBody = req.body;

  const response = await fetch(`${config.apiURL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  console.log(JSON.stringify(response));

  if (response.status === 404) {
    res.status(404).end();
  }

  req.session['apiKey'] = await response.text();
  await req.session.save();

  res.status(200).end();
};

export default withSession(Login);
export type { LoginRequestBody };
