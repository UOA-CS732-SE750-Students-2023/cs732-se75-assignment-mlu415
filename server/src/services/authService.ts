import { Strategy, ExtractJwt } from 'passport-jwt';
import User from '../models/User';

const options = {
  secretOrKey: process.env.JWT_SECRET,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

export default new Strategy(options, async (payload, done) => {
  try {
    const user = await User.findById(payload.sub);

    if (user) {
      return done(null, user);
    }

    return done(null, false);
  } catch (error) {
    return done(error, false);
  }
});
