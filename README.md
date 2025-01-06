# munsl_sigem

![escudo municipal](/public/escudo-municipal-blanco-2x.png)

Este proyecto es un **MVP (Producto Mínimo Viable)** de una posible reescritura del backend del sistema [SIGEM](https://sigem.sanluislaciudad.gob.ar/).

## Objetivo del Proyecto

El objetivo principal de este proyecto es crear una representación fiel del funcionamiento actual de SIGEM mientras se sientan las bases para una futura modernización. Este MVP forma parte de la primera fase de una serie de mejoras planificadas, que incluyen:

1. **Migración de la lógica de negocio**:
    - De Java 8 a Java 21.
    - Abandonar el monolito basado en [Grails](https://grails.org/).
    - Adoptar una arquitectura separada de frontend (Next.js 14) y backend (Groovy Spring Boot 3).

2. **Prioridad en la representación actual**:
    - Dado el alcance y la complejidad de esta transición, el objetivo inicial es replicar el comportamiento actual de manera fiel.
    - Algunas "mejores prácticas" no se implementarán en esta etapa debido a limitaciones de tiempo y compatibilidad.

## Limitaciones

- Este proyecto es un MVP y no refleja el estado final de la modernización planificada.
- Algunas prácticas y estructuras heredadas han sido mantenidas para garantizar una transición gradual.

## Licencia

Aún no se ha definido una licencia pública para este proyecto. Si el código permanece abierto, la licencia será especificada en futuras actualizaciones del repositorio.

## Live demo

[https://munsl-sigem.vercel.app/](https://munsl-sigem.vercel.app/)
- Esta hosteado en una cuenta hobby de [vercel](https://vercel.com/).

## Ejecuta en local

Este proyecto utiliza [pnpm](https://pnpm.io/) como gestor de paquetes. Para iniciar el entorno de desarrollo, sigue estos pasos:

1. Instala las dependencias del proyecto:
```bash
pnpm install
```
2. Inicia el servidor de desarrollo:
```bash
pnpm run dev
```
Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

Este proyecto utiliza [next/font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) para optimizar y cargar automáticamente [Geist](https://vercel.com/font), una nueva familia tipográfica de Vercel.

## Autor

Franco Exequiel Becvort <🐤/>
- [Linkedin](https://www.linkedin.com/in/franco-becvort/)
- [Website](https://pollito.dev/)
