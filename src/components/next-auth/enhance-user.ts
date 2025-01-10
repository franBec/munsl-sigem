import { ExtendedUser } from "../../../next-auth";

export function enhanceUser(user: ExtendedUser): ExtendedUser {
  return {
    ...user,
    getUserName: () =>
      user.usuario_displayname ||
      [
        user.usuarioCiudad_persona_firstName,
        user.usuarioCiudad_persona_lastName,
      ]
        .filter(Boolean)
        .join(" "),
    getUserDniCuil: () => user.usuario_dni || user.usuarioCiudad_persona_cuil,
    getFotoPerfil: () => user.usuarioCiudad_persona_fotoPerfil,
  };
}
