import { JWT } from "next-auth/jwt";

export interface NextAuthSessionUser extends JWT {
  usuario_displayname: string;
  usuario_dni: string;
  usuario_userName: string;
  usuarioCiudad_persona_firstName: string;
  usuarioCiudad_persona_lastName: string;
  usuarioCiudad_persona_cuil: string;
  sub: string;
  iat: number;
  exp: number;
  accessToken: string;
  permisos: string[];
}
