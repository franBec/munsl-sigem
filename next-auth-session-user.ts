import { JWT } from "next-auth/jwt";

export interface NextAuthSessionUser extends JWT {
  usuario_displayname: string | undefined;
  usuario_dni: string | undefined;
  usuario_userName: string | undefined;
  usuarioCiudad_persona_firstName: string | undefined;
  usuarioCiudad_persona_lastName: string | undefined;
  usuarioCiudad_persona_cuil: string | undefined;
  usuarioCiudad_persona_fotoPerfil: string | undefined;
  sub: string;
  iat: number;
  exp: number;
  accessToken: string;
  permisos: string[];

  getUserName: () => string | undefined;
  getUserDniCuil: () => string | undefined;
  getFotoPerfil: () => string | undefined;
}

export const UNAUTHORIZED_ERROR_MESSAGE =
  "Usuario y/o contraseña son incorrectos";
