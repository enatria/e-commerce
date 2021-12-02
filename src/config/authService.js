import { getAccessToken } from './tokenCreator';
import { env_var } from './env';



export const authenticate = async (data) => {
  if (data.email === env_var.EMAIL && data.password === env_var.PASSWORD) {
    return { status: true , data: {email: env_var.EMAIL , token: env_var.EMAIL }};
  } else {
    return { status: false , data: "Email dan Password tidak terdaftar!"};
  }
};

export const isAuthenticated = () => {
  return getAccessToken() ? true : false;
};
