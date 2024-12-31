import {
  Info,
  FileText,
  type LucideIcon,
  Receipt,
  Archive,
  Notebook,
  CalendarClock,
  Trash2,
  Gavel,
  Truck,
  Store,
  ShoppingBasket,
  Amphora,
  GraduationCap,
  Car,
  Trees,
  FishOff,
  Landmark,
  PawPrint,
} from "lucide-react";

interface MenuItem {
  title: string;
  isActive?: boolean;
  icon?: LucideIcon;
  urls?: {
    title: string;
    url: string;
    requiresCitizenLogin?: boolean;
  }[];
}

interface MenuGroup {
  groupLabel: string;
  groupItems: MenuItem[];
}

type MenuProps = MenuGroup[];

const menu: MenuProps = [
  {
    groupLabel: "Información",
    groupItems: [
      {
        title: "Información",
        icon: Info,
        isActive: true,
        urls: [
          {
            title: "Preguntas Frecuentes",
            url: "preguntas-frecuentes",
          },
          {
            title: "Puntos SIGEM",
            url: "puntos-SIGEM",
          },
          {
            title: "Barrios",
            url: "barrios",
          },
        ],
      },
    ],
  },
  {
    groupLabel: "Trámites",
    groupItems: [
      {
        title: "Reclamos",
        icon: FileText,
        urls: [
          {
            title: "Buscar",
            url: "reclamos",
          },
          {
            title: "Mis Reclamos",
            url: "reclamos/mis-reclamos",
            requiresCitizenLogin: true,
          },
          {
            title: "Generar",
            url: "reclamos/generar",
            requiresCitizenLogin: true,
          },
          {
            title: "Requisitos",
            url: "reclamos/requisitos",
          },
        ],
      },
      {
        title: "Boletas",
        icon: Receipt,
        urls: [
          {
            title: "Buscar",
            url: "boletas",
          },
          {
            title: "Mis Boletas",
            url: "boletas/mis-boletas",
            requiresCitizenLogin: true,
          },
          {
            title: "Suscripción",
            url: "boletas/suscripcion",
            requiresCitizenLogin: true,
          },
        ],
      },
      {
        title: "Expedientes Digitales",
        icon: Archive,
        urls: [
          {
            title: "Buscar",
            url: "expedientes",
          },
          {
            title: "Mis Expedientes",
            url: "expedientes/mis-expedientes",
            requiresCitizenLogin: true,
          },
          {
            title: "Ingresar Nota",
            url: "expedientes/ingresar-nota",
            requiresCitizenLogin: true,
          },
        ],
      },
      {
        title: "Libreta Sanitaria",
        icon: Notebook,
        urls: [
          {
            title: "Mis Libretas",
            url: "libreta-sanitaria/mis-libretas",
            requiresCitizenLogin: true,
          },
          {
            title: "Solicitar",
            url: "libreta-sanitaria/solicitar",
            requiresCitizenLogin: true,
          },
          {
            title: "Requisitos",
            url: "libreta-sanitaria/requisitos",
          },
        ],
      },
      {
        title: "Turnos",
        icon: CalendarClock,
        urls: [
          {
            title: "Mis Turnos",
            url: "turnos/mis-turnos",
            requiresCitizenLogin: true,
          },
          {
            title: "Solicitar",
            url: "turnos/solicitar",
            requiresCitizenLogin: true,
          },
          {
            title: "Requisitos",
            url: "turnos/requisitos",
          },
        ],
      },
      {
        title: "Retiro de Basura",
        icon: Trash2,
        urls: [
          {
            title: "Mis solicitudes",
            url: "retiro-basura/mis-solicitudes",
            requiresCitizenLogin: true,
          },
          {
            title: "Solicitar",
            url: "retiro-basura/solicitar",
            requiresCitizenLogin: true,
          },
          {
            title: "Requisitos",
            url: "retiro-basura/requisitos",
          },
        ],
      },
      {
        title: "Juzgado de Faltas",
        icon: Gavel,
        urls: [
          {
            title: "Mis Libre Deuda",
            url: "juzgado-faltas/mis-libre-deuda",
            requiresCitizenLogin: true,
          },
          {
            title: "Solicitar",
            url: "juzgado-faltas/solicitar",
            requiresCitizenLogin: true,
          },
          {
            title: "Requisitos",
            url: "juzgado-faltas/requisitos",
          },
        ],
      },
      {
        title: "Tránsito",
        icon: Truck,
        urls: [
          {
            title: "Mis Permisos",
            url: "transito/mis-permisos",
            requiresCitizenLogin: true,
          },
          {
            title: "Solicitar",
            url: "transito/solicitar",
            requiresCitizenLogin: true,
          },
          {
            title: "Requisitos",
            url: "transito/requisitos",
          },
        ],
      },
      {
        title: "Comercio",
        icon: Store,
        urls: [
          {
            title: "Mis Beneficios Fiscales",
            url: "comercio/mis-beneficios-fiscales",
            requiresCitizenLogin: true,
          },
          {
            title: "Mis Comercios",
            url: "comercio/mis-comercios",
            requiresCitizenLogin: true,
          },
          {
            title: "Mis Habilitaciones",
            url: "comercio/mis-habilitaciones",
            requiresCitizenLogin: true,
          },
          {
            title: "Nueva Habilitación",
            url: "comercio/nueva-habilitacion",
            requiresCitizenLogin: true,
          },
          {
            title: "Solicitar Canon Comercial",
            url: "comercio/solicitar-canon-comercial",
          },
          {
            title: "Requisitos",
            url: "comercio/requisitos",
          },
        ],
      },
      {
        title: "Compras",
        icon: ShoppingBasket,
        urls: [
          {
            title: "Registro de Proveedor",
            url: "compras/registro-proveedor",
            requiresCitizenLogin: true,
          },
          {
            title: "Estado del Registro",
            url: "compras/registro-estado",
            requiresCitizenLogin: true,
          },
          {
            title: "Mis Procesos",
            url: "compras/mis-procesos",
            requiresCitizenLogin: true,
          },
          {
            title: "Procesos Abiertos",
            url: "compras/procesos-abiertos",
            requiresCitizenLogin: true,
          },
          {
            title: "Orden de Provisión",
            url: "compras/orden-provision",
            requiresCitizenLogin: true,
          },
          {
            title: "Requisitos",
            url: "compras/requisitos",
          },
        ],
      },
      {
        title: "Artesanos",
        icon: Amphora,
        urls: [
          {
            title: "Mis Registros",
            url: "artesanos/mis-registros",
            requiresCitizenLogin: true,
          },
          {
            title: "Solicitar Registro",
            url: "artesanos/solicitar-registro",
            requiresCitizenLogin: true,
          },
          {
            title: "Eventos Abiertos",
            url: "artesanos/eventos",
            requiresCitizenLogin: true,
          },
          {
            title: "Eventos Inscripto",
            url: "artesanos/eventos/eventos-inscripto",
            requiresCitizenLogin: true,
          },
          {
            title: "Requisitos",
            url: "artesanos/requisitos",
          },
        ],
      },
      {
        title: "Capacitaciones",
        icon: GraduationCap,
        urls: [
          {
            title: "Capacitaciones Abiertas",
            url: "capacitaciones",
            requiresCitizenLogin: true,
          },
          {
            title: "Mis Capacitaciones",
            url: "capacitaciones/mis-capacitaciones",
            requiresCitizenLogin: true,
          },
          {
            title: "Requisitos",
            url: "capacitaciones/requisitos",
          },
        ],
      },
      {
        title: "Escuela de Manejo",
        icon: Car,
        urls: [
          {
            title: "Inscripciones Abiertas",
            url: "escuela-manejo",
            requiresCitizenLogin: true,
          },
          {
            title: "Mis Inscripciones",
            url: "escuela-manejo/mis-inscripciones",
            requiresCitizenLogin: true,
          },
          {
            title: "Requisitos",
            url: "escuela-requisitos",
          },
        ],
      },
      {
        title: "Podadores",
        icon: Trees,
        urls: [
          {
            title: "Registrarse",
            url: "podadores/registrarse",
          },
        ],
      },
      {
        title: "Casilla Sanitaria",
        icon: FishOff,
        urls: [
          {
            title: "Mis Declaraciones",
            url: "casalla-sanitaria/mis-declaraciones",
            requiresCitizenLogin: true,
          },
          {
            title: "Ingresar Declaración",
            url: "casalla-sanitaria/ingresar-declaracion",
            requiresCitizenLogin: true,
          },
          {
            title: "Requisitos",
            url: "casalla-sanitaria/requisitos",
          },
        ],
      },
      {
        title: "Libre Deuda Municipal",
        icon: Landmark,
        urls: [
          {
            title: "Ingresar Solicitud",
            url: "libre-deuda-municipal/ingresar-solicitud",
          },
        ],
      },
      {
        title: "Perros Peligrosos",
        icon: PawPrint,
        urls: [
          {
            title: "Registrar",
            url: "perros-peligrosos/registrar",
            requiresCitizenLogin: true,
          },
          {
            title: "Mis Registros",
            url: "perros-peligrosos/mis-registros",
            requiresCitizenLogin: true,
          },
          {
            title: "Requisitos",
            url: "registro-perros-peligrosos/requisitos",
          },
        ],
      },
    ],
  },
];

export { menu };
export type { MenuProps };
