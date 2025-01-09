import {
  InfoIcon,
  FileText,
  type LucideIcon,
  ReceiptIcon,
  NotebookIcon,
  CalendarClockIcon,
  Trash2Icon,
  GavelIcon,
  TruckIcon,
  StoreIcon,
  ShoppingBasketIcon,
  AmphoraIcon,
  GraduationCapIcon,
  CarIcon,
  TreesIcon,
  FishOffIcon,
  LandmarkIcon,
  PawPrintIcon,
  IdCardIcon,
  BusFrontIcon,
  SendIcon,
  FilesIcon,
  MegaphoneIcon,
  ArchiveIcon,
  DropletIcon,
  BadgeCheckIcon,
  LayoutDashboardIcon,
} from "lucide-react";

export type MenuGroup = {
  label: string;
  items: {
    title: string;
    isDefaultOpen?: boolean;
    icon: LucideIcon;
    urls: {
      title: string;
      url: string;
      requiresCitizenLogin?: boolean;
      permission?: string;
    }[];
  }[];
};

export const menu: MenuGroup[] = [
  {
    label: "Información",
    items: [
      {
        title: "Información",
        icon: InfoIcon,
        isDefaultOpen: true,
        urls: [
          {
            title: "Preguntas Frecuentes",
            url: "info/preguntas-frecuentes",
          },
          {
            title: "Puntos SIGEM",
            url: "info/puntos-SIGEM",
          },
          {
            title: "Barrios",
            url: "info/barrios",
          },
        ],
      },
    ],
  },
  {
    label: "Trámites",
    items: [
      {
        title: "Reclamos",
        icon: FileText,
        urls: [
          {
            title: "Buscar",
            url: "tramites/reclamos",
          },
          {
            title: "Mis Reclamos",
            url: "tramites/reclamos/mis-reclamos",
            requiresCitizenLogin: true,
          },
          {
            title: "Generar",
            url: "tramites/reclamos/generar",
            requiresCitizenLogin: true,
          },
          {
            title: "Requisitos",
            url: "tramites/reclamos/requisitos",
          },
        ],
      },
      {
        title: "Boletas",
        icon: ReceiptIcon,
        urls: [
          {
            title: "Buscar",
            url: "tramites/boletas",
          },
          {
            title: "Mis Boletas",
            url: "tramites/boletas/mis-boletas",
            requiresCitizenLogin: true,
          },
          {
            title: "Suscripción",
            url: "tramites/boletas/suscripcion",
            requiresCitizenLogin: true,
          },
        ],
      },
      {
        title: "Expedientes Digitales",
        icon: ArchiveIcon,
        urls: [
          {
            title: "Buscar",
            url: "tramites/expedientes",
          },
          {
            title: "Mis Expedientes",
            url: "tramites/expedientes/mis-expedientes",
            requiresCitizenLogin: true,
          },
          {
            title: "Ingresar Nota",
            url: "tramites/expedientes/ingresar-nota",
            requiresCitizenLogin: true,
          },
        ],
      },
      {
        title: "Libreta Sanitaria",
        icon: NotebookIcon,
        urls: [
          {
            title: "Mis Libretas",
            url: "tramites/libreta-sanitaria/mis-libretas",
            requiresCitizenLogin: true,
          },
          {
            title: "Solicitar",
            url: "tramites/libreta-sanitaria/solicitar",
            requiresCitizenLogin: true,
          },
          {
            title: "Requisitos",
            url: "tramites/libreta-sanitaria/requisitos",
          },
        ],
      },
      {
        title: "Turnos",
        icon: CalendarClockIcon,
        urls: [
          {
            title: "Mis Turnos",
            url: "tramites/turnos/mis-turnos",
            requiresCitizenLogin: true,
          },
          {
            title: "Solicitar",
            url: "tramites/turnos/solicitar",
            requiresCitizenLogin: true,
          },
          {
            title: "Requisitos",
            url: "tramites/turnos/requisitos",
          },
        ],
      },
      {
        title: "Retiro de Basura",
        icon: Trash2Icon,
        urls: [
          {
            title: "Mis solicitudes",
            url: "tramites/retiro-basura/mis-solicitudes",
            requiresCitizenLogin: true,
          },
          {
            title: "Solicitar",
            url: "tramites/retiro-basura/solicitar",
            requiresCitizenLogin: true,
          },
          {
            title: "Requisitos",
            url: "tramites/retiro-basura/requisitos",
          },
        ],
      },
      {
        title: "Juzgado de Faltas",
        icon: GavelIcon,
        urls: [
          {
            title: "Mis Libre Deuda",
            url: "tramites/juzgado-faltas/mis-libre-deuda",
            requiresCitizenLogin: true,
          },
          {
            title: "Solicitar",
            url: "tramites/juzgado-faltas/solicitar",
            requiresCitizenLogin: true,
          },
          {
            title: "Requisitos",
            url: "tramites/juzgado-faltas/requisitos",
          },
        ],
      },
      {
        title: "Tránsito",
        icon: TruckIcon,
        urls: [
          {
            title: "Mis Permisos",
            url: "tramites/transito/mis-permisos",
            requiresCitizenLogin: true,
          },
          {
            title: "Solicitar",
            url: "tramites/transito/solicitar",
            requiresCitizenLogin: true,
          },
          {
            title: "Requisitos",
            url: "tramites/transito/requisitos",
          },
        ],
      },
      {
        title: "Comercio",
        icon: StoreIcon,
        urls: [
          {
            title: "Mis Beneficios Fiscales",
            url: "tramites/comercio/mis-beneficios-fiscales",
            requiresCitizenLogin: true,
          },
          {
            title: "Mis Comercios",
            url: "tramites/comercio/mis-comercios",
            requiresCitizenLogin: true,
          },
          {
            title: "Mis Habilitaciones",
            url: "tramites/comercio/mis-habilitaciones",
            requiresCitizenLogin: true,
          },
          {
            title: "Nueva Habilitación",
            url: "tramites/comercio/nueva-habilitacion",
            requiresCitizenLogin: true,
          },
          {
            title: "Canon Comercial",
            url: "tramites/comercio/canon-comercial",
          },
          {
            title: "Requisitos",
            url: "tramites/comercio/requisitos",
          },
        ],
      },
      {
        title: "Compras",
        icon: ShoppingBasketIcon,
        urls: [
          {
            title: "Registro de Proveedor",
            url: "tramites/compras/registro-proveedor",
            requiresCitizenLogin: true,
          },
          {
            title: "Estado del Registro",
            url: "tramites/compras/registro-estado",
            requiresCitizenLogin: true,
          },
          {
            title: "Mis Procesos",
            url: "tramites/compras/mis-procesos",
            requiresCitizenLogin: true,
          },
          {
            title: "Procesos Abiertos",
            url: "tramites/compras/procesos-abiertos",
            requiresCitizenLogin: true,
          },
          {
            title: "Orden de Provisión",
            url: "tramites/compras/orden-provision",
            requiresCitizenLogin: true,
          },
          {
            title: "Requisitos",
            url: "tramites/compras/requisitos",
          },
        ],
      },
      {
        title: "Artesanos",
        icon: AmphoraIcon,
        urls: [
          {
            title: "Mis Registros",
            url: "tramites/artesanos/mis-registros",
            requiresCitizenLogin: true,
          },
          {
            title: "Solicitar Registro",
            url: "tramites/artesanos/solicitar-registro",
            requiresCitizenLogin: true,
          },
          {
            title: "Eventos Abiertos",
            url: "tramites/artesanos/eventos",
            requiresCitizenLogin: true,
          },
          {
            title: "Eventos Inscripto",
            url: "tramites/artesanos/eventos/eventos-inscripto",
            requiresCitizenLogin: true,
          },
          {
            title: "Requisitos",
            url: "tramites/artesanos/requisitos",
          },
        ],
      },
      {
        title: "Capacitaciones",
        icon: GraduationCapIcon,
        urls: [
          {
            title: "Capacitaciones Abiertas",
            url: "tramites/capacitaciones",
            requiresCitizenLogin: true,
          },
          {
            title: "Mis Capacitaciones",
            url: "tramites/capacitaciones/mis-capacitaciones",
            requiresCitizenLogin: true,
          },
          {
            title: "Requisitos",
            url: "tramites/capacitaciones/requisitos",
          },
        ],
      },
      {
        title: "Escuela de Manejo",
        icon: CarIcon,
        urls: [
          {
            title: "Inscripciones Abiertas",
            url: "tramites/escuela-manejo",
            requiresCitizenLogin: true,
          },
          {
            title: "Mis Inscripciones",
            url: "tramites/escuela-manejo/mis-inscripciones",
            requiresCitizenLogin: true,
          },
          {
            title: "Requisitos",
            url: "tramites/escuela-requisitos",
          },
        ],
      },
      {
        title: "Podadores",
        icon: TreesIcon,
        urls: [
          {
            title: "Registrarse",
            url: "tramites/podadores/registrarse",
          },
        ],
      },
      {
        title: "Casilla Sanitaria",
        icon: FishOffIcon,
        urls: [
          {
            title: "Mis Declaraciones",
            url: "tramites/casilla-sanitaria/mis-declaraciones",
            requiresCitizenLogin: true,
          },
          {
            title: "Ingresar Declaración",
            url: "tramites/casilla-sanitaria/ingresar-declaracion",
            requiresCitizenLogin: true,
          },
          {
            title: "Requisitos",
            url: "tramites/casilla-sanitaria/requisitos",
          },
        ],
      },
      {
        title: "Libre Deuda Municipal",
        icon: LandmarkIcon,
        urls: [
          {
            title: "Ingresar Solicitud",
            url: "tramites/libre-deuda-municipal/ingresar-solicitud",
          },
        ],
      },
      {
        title: "Perros Peligrosos",
        icon: PawPrintIcon,
        urls: [
          {
            title: "Registrar",
            url: "tramites/perros-peligrosos/registrar",
            requiresCitizenLogin: true,
          },
          {
            title: "Mis Registros",
            url: "tramites/perros-peligrosos/mis-registros",
            requiresCitizenLogin: true,
          },
          {
            title: "Requisitos",
            url: "tramites/registro-perros-peligrosos/requisitos",
          },
        ],
      },
    ],
  },
  {
    label: "Administración",
    items: [
      {
        title: "Ciudadanos",
        icon: IdCardIcon,
        urls: [
          {
            title: "Administrar",
            url: "admin/ciudadanos",
            permission: "NIVEL_3_LIST_CIUDADANO",
          },
          {
            title: "Solicitudes",
            url: "admin/ciudadanos/solicitudes",
            permission: "NIVEL_3_ACEPTAR_SOLICITUD_CUENTA_CIUDADANO",
          },
          {
            title: "Consignados",
            url: "admin/ciudadanos/consignados",
            permission: "NIVEL_3_CONSIGNADOS_MENU",
          },
        ],
      },
      {
        title: "Libreta Sanitaria",
        icon: NotebookIcon,
        urls: [
          {
            title: "Pendientes Aceptación",
            url: "admin/libreta-sanitaria/pendientes-aceptacion",
            permission: "NIVEL_3_LIST_LS_ACEPTAR",
          },
          {
            title: "Pendientes Firma",
            url: "admin/libreta-sanitaria/pendientes-firma",
            permission: "NIVEL_3_LIST_LS_FIRMAR",
          },
          {
            title: "Pendientes Pago",
            url: "admin/libreta-sanitaria/pendientes-pago",
            permission: "NIVEL_3_LIST_LS_PAGO",
          },
          {
            title: "Historial",
            url: "admin/libreta-sanitaria",
            permission: "NIVEL_3_LIST_LS_HISTORIAL",
          },
          {
            title: "Renovación Documento",
            url: "admin/libreta-sanitaria/renovaciones-documento",
            permission: "NIVEL_3_LS_RENOVACION_DOCUMENTACION",
          },
        ],
      },
      {
        title: "Boleto Est. Gratuito",
        icon: BusFrontIcon,
        urls: [
          {
            title: "Pendientes Aceptación",
            url: "admin/boleto-estudiantil-gratuito/pendientes-aceptacion",
            permission: "NIVEL_3_LIST_BEG_ACEPTAR",
          },
          {
            title: "Consulta General",
            url: "admin/boleto-estudiantil-gratuito",
            permission: "NIVEL_3_BEG_HISTORIAL",
          },
          {
            title: "Lote",
            url: "admin/boleto-estudiantil-gratuito/lote",
            permission: "NIVEL_3_BEG_GENERAR_LOTE",
          },
          {
            title: "Instituciones",
            url: "admin/boleto-estudiantil-gratuito/instituciones",
            permission: "NIVEL_3_BEG_INST_EDUCATIVO_LIST",
          },
        ],
      },
      {
        title: "Tributos",
        icon: ReceiptIcon,
        urls: [
          {
            title: "Informes",
            url: "admin/tributos",
            permission: "NIVEL_3_LIST_PAGO_LOTE",
          },
          {
            title: "Verificar Boleta",
            url: "admin/tributos/verificar-boleta",
            permission: "NIVEL_3_VERIFICAR_ESTADO_BOLETA",
          },
        ],
      },
      {
        title: "Mensajes",
        icon: SendIcon,
        urls: [
          {
            title: "Envío Masivo",
            url: "admin/mensajes/envio-masivo/generar",
            permission: "NIVEL_3_MENSAJES_GENERAR_LOTE",
          },
          {
            title: "Historial Envíos Masivos",
            url: "admin/mensajes/envio-masivo",
            permission: "NIVEL_3_MENSAJES_HISTORIAL_LOTES",
          },
          {
            title: "Historial Mensajes",
            url: "admin/mensajes",
            permission: "NIVEL_3_MENSAJES_HISTORIAL_MENSAJES",
          },
        ],
      },
      {
        title: "Documentos",
        icon: FilesIcon,
        urls: [
          {
            title: "Mis Documentos",
            url: "admin/documentos/mis-documentos",
            permission: "NIVEL_3_MIS_DOCUMENTOS",
          },
        ],
      },
      {
        title: "Turnos",
        icon: CalendarClockIcon,
        urls: [
          {
            title: "Organismos",
            url: "admin/turnos/organismos",
            permission: "NIVEL_3_ADMIN_ORGANISMOS",
          },
          {
            title: "Oficinas",
            url: "admin/turnos/oficinas",
            permission: "NIVEL_3_ADMIN_OFICINAS",
          },
          {
            title: "Turnos",
            url: "admin/turnos",
            permission: "NIVEL_3_LIST_TURNOS_HISTORIAL",
          },
          {
            title: "Cancelar Turnos",
            url: "admin/turnos/cancelar",
            permission: "NIVEL_3_CANCELAR_TURNO",
          },
        ],
      },
      {
        title: "Notificacion Ciudadana",
        icon: MegaphoneIcon,
        urls: [
          {
            title: "Crear",
            url: "admin/notificacion-ciudadana/crear",
            permission: "NIVEL_3_CREAR_NOTIFICACION_CIUDADANA",
          },
          {
            title: "Historial",
            url: "admin/notificacion-ciudadana",
            permission: "NIVEL_3_HISTORIAL_SIMPLE_NOTIFICACION_CIUDADANA",
          },
          {
            title: "Historial Lotes",
            url: "admin/notificacion-ciudadana/historial-lotes",
            permission: "NIVEL_3_HISTORIAL_LOTE_NOTIFICACION_CIUDADANA",
          },
        ],
      },
      {
        title: "Retiro de Basura",
        icon: Trash2Icon,
        urls: [
          {
            title: "Solicitudes",
            url: "admin/retiro-basura/solicitudes",
            permission: "NIVEL_3_RETIRO_BASURA_HISTORIAL_SOLICITUDES",
          },
          {
            title: "Generar Orden",
            url: "admin/retiro-basura/generar",
            permission: "NIVEL_3_RETIRO_BASURA_GENERAR_ORDEN",
          },
          {
            title: "Ordenes",
            url: "admin/retiro-basura",
            permission: "NIVEL_3_RETIRO_BASURA_HISTORIAL_ORDEN",
          },
        ],
      },
      {
        title: "Juzgado de Faltas",
        icon: GavelIcon,
        urls: [
          {
            title: "Control",
            url: "admin/juzgado-faltas/control",
            permission: "NIVEL_3_JUZGADO_FALTAS_HISTORIAL_CONTROL",
          },
          {
            title: "Solicitudes",
            url: "admin/juzgado-faltas/solicitudes",
            permission: "NIVEL_3_JUZGADO_FALTAS_SOLICITUDES_LIBRE_DEUDA",
          },
          {
            title: "Multas",
            url: "admin/juzgado-faltas/multas",
            permission: "NIVEL_3_JUZGADO_FALTAS_HISTORIAL_MULTAS_LD",
          },
          {
            title: "Aprobadas / Rechazadas",
            url: "admin/juzgado-faltas/aprobadas-rechazadas",
            permission: "NIVEL_3_JUZGADO_FALTAS_HISTORIAL_LIBRE_DEUDA",
          },
          {
            title: "Consulta General",
            url: "admin/juzgado-faltas",
            permission: "NIVEL_3_JUZGADO_FALTAS_CONSULTA_GENERAL",
          },
        ],
      },
      {
        title: "Rentas",
        icon: LandmarkIcon,
        urls: [
          {
            title: "Solicitudes Libre Deuda",
            url: "admin/rentas/solicitudes",
            permission: "NIVEL_3_RENTAS_SOLICITUDES_LIBRE_DEUDA",
          },
          {
            title: "Historial Libre Deuda",
            url: "admin/rentas",
            permission: "NIVEL_3_RENTAS_HISTORIAL_LIBRE_DEUDA",
          },
        ],
      },
      {
        title: "Incidentes",
        icon: FileText,
        urls: [
          {
            title: "Áreas",
            url: "admin/incidentes/areas",
            permission: "NIVEL_3_INCIDENTES_AREAS",
          },
          {
            title: "Reclamos",
            url: "admin/incidentes",
            permission: "NIVEL_3_INCIDENTES_INFORMES",
          },
          {
            title: "Identidad de Género",
            url: "admin/incidentes/identidad-genero",
            permission: "NIVEL_3_IG_HISTORIAL",
          },
        ],
      },
      {
        title: "Tránsito",
        icon: TruckIcon,
        urls: [
          {
            title: "Pendientes Verificación",
            url: "admin/transito/pendientes-verificacion",
            permission: "NIVEL_3_TRANSITO_SOLICITUDES_P1_PERMISO",
          },
          {
            title: "Pendientes Pago",
            url: "admin/transito/pendientes-pago",
            permission: "NIVEL_3_TRANSITO_SOLICITUDES_PP_PERMISO",
          },
          {
            title: "Pendientes Aprobación",
            url: "admin/transito/pendientes-aprobacion",
            permission: "NIVEL_3_TRANSITO_SOLICITUDES_P2_PERMISO",
          },
          {
            title: "Historial",
            url: "admin/transito",
            permission: "NIVEL_3_TRANSITO_HISTORIAL_PERMISOS",
          },
        ],
      },
      {
        title: "Mesa Entrada",
        icon: ArchiveIcon,
        urls: [
          {
            title: "Notas",
            url: "admin/mesa-entrada",
            permission: "NIVEL_3_MESA_ENTRADA_SOLICITUDES_NOTA",
          },
        ],
      },
      {
        title: "Agua",
        icon: DropletIcon,
        urls: [
          {
            title: "Declaraciones Medidor",
            url: "admin/agua/declaraciones-medidor",
            permission: "NIVEL_3_DECLARA_MEDIDOR_HISTORIAL_DECLARACIONES",
          },
          {
            title: "Profesionales",
            url: "admin/agua/profesionales",
            permission: "NIVEL_3_DECLARA_MEDIDOR_ADMIN_PROF_MATRICULADO",
          },
        ],
      },
      {
        title: "Comercio",
        icon: StoreIcon,
        urls: [
          {
            title: "Pendientes Aceptación",
            url: "admin/comercio/pendientes-aceptacion",
            permission: "NIVEL_3_H_COMERCIAL_VER_SOLICITUDES_PASO_1",
          },
          {
            title: "Inteligencia Fiscal",
            url: "admin/comercio/inteligencia-fiscal",
            permission: "NIVEL_3_H_COMERCIAL_VER_SOLICITUDES_PASO_2",
          },
          {
            title: "Rentas",
            url: "admin/comercio/rentas",
            permission: "NIVEL_3_H_COMERCIAL_VER_SOLICITUDES_PASO_3",
          },
          {
            title: "Alta Inspección",
            url: "admin/comercio/alta-inspeccion",
            permission: "NIVEL_3_H_COMERCIAL_ALTA_INSPECCION",
          },
          {
            title: "Comercio",
            url: "admin/comercio/comercio",
            permission: "NIVEL_3_H_COMERCIAL_COMERCIO_MENU",
          },
          {
            title: "Consulta General",
            url: "admin/comercio",
            permission: "NIVEL_3_H_COMERCIAL_VER_SOLICITUDES_CG",
          },
          {
            title: "Requisitos Regla",
            url: "admin/comercio/requisitos-regla",
            permission: "NIVEL_3_H_COMERCIAL_ADMIN_REQUISITOS",
          },
          {
            title: "Rubros",
            url: "admin/comercio/rubros",
            permission: "NIVEL_3_H_COMERCIAL_ADMIN_RUBROS",
          },
          {
            title: "Rango M²",
            url: "admin/comercio/rango-m2",
            permission: "NIVEL_3_H_COMERCIAL_ADMIN_RANGO_M2",
          },
          {
            title: "Beneficio fiscal",
            url: "admin/comercio/beneficio-fiscal",
            permission: "NIVEL_3_H_COMERCIAL_VER_SOLICITUDES_PASO_2",
          },
          {
            title: "DDJJ",
            url: "admin/comercio/ddjj",
            permission: "NIVEL_3_ADMIN_DDJJ",
          },
        ],
      },
      {
        title: "Artesanos",
        icon: AmphoraIcon,
        urls: [
          {
            title: "Solicitudes",
            url: "admin/artesanos",
            permission: "NIVEL_3_ARTESANO_SOLICITUDES",
          },
          {
            title: "Eventos",
            url: "admin/artesanos/eventos",
            permission: "NIVEL_3_ARTESANO_EVENTOS",
          },
          {
            title: "Rubros",
            url: "admin/artesanos/rubros",
            permission: "NIVEL_3_ARTESANO_RUBROS",
          },
        ],
      },
      {
        title: "Capacitaciones",
        icon: GraduationCapIcon,
        urls: [
          {
            title: "Administrar",
            url: "admin/capacitaciones",
            permission: "NIVEL_3_ADMINISTRAR_CAPACITACION",
          },
          {
            title: "Internas",
            url: "admin/capacitaciones/internas",
            permission: "NIVEL_3_CAPACITACION_MENU",
          },
          {
            title: "Mis Capacitaciones",
            url: "admin/capacitaciones/mis-capacitaciones",
            permission: "NIVEL_3_CAPACITACION_MENU",
          },
        ],
      },
      {
        title: "Escuela de Manejo",
        icon: CarIcon,
        urls: [
          {
            title: "Administrar",
            url: "admin/escuela-manejo",
            permission: "NIVEL_3_ESCUELA_MANEJO_MENU",
          },
        ],
      },
      {
        title: "Credenciales",
        icon: BadgeCheckIcon,
        urls: [
          {
            title: "Administrar",
            url: "admin/credenciales",
            permission: "NIVEL_3_ADMIN_CREDENCIALES",
          },
        ],
      },
      {
        title: "Podadores",
        icon: TreesIcon,
        urls: [
          {
            title: "Administrar",
            url: "admin/podadores",
            permission: "NIVEL_3_ADMIN_PODADORES",
          },
        ],
      },
      {
        title: "Casilla Sanitaria",
        icon: FishOffIcon,
        urls: [
          {
            title: "Consulta General",
            url: "admin/casilla-sanitaria",
            permission: "Admin_Casilla_Sanitaria",
          },
          {
            title: "Pendientes",
            url: "admin/casilla-sanitaria/pendientes",
            permission: "Admin_Casilla_Sanitaria",
          },
        ],
      },
      {
        title: "Perros Peligrosos",
        icon: PawPrintIcon,
        urls: [
          {
            title: "Solicitudes",
            url: "admin/perros-peligrosos",
            permission: "NIVEL_3_ADMIN_CREDENCIALES",
          },
        ],
      },
      {
        title: "Dashboard",
        icon: LayoutDashboardIcon,
        urls: [
          {
            title: "Dashboard",
            url: "admin/dashboard",
            permission: "NIVEL_3_DASHBOARD_BASIC_VIEW",
          },
        ],
      },
    ],
  },
];

export class MenuHandler {
  private menu: MenuGroup[];

  constructor(menu: MenuGroup[]) {
    this.menu = menu;
  }

  filterByAuth(
    isCitizenLogin: boolean,
    isAdminLogin: boolean,
    permissions: string[] | undefined
  ): MenuHandler {
    this.menu = this.menu
      .map(menuGroup => {
        const filteredItems = menuGroup.items.map(item => {
          const filteredUrls = item.urls.filter(url => {
            if (!isAdminLogin && !isCitizenLogin) {
              return (
                menuGroup.label !== "Administración" &&
                url.requiresCitizenLogin !== true
              );
            }

            if (!isAdminLogin && isCitizenLogin) {
              return (
                menuGroup.label !== "Administración" &&
                (!url.permission || permissions?.includes(url.permission))
              );
            }

            if (isAdminLogin && !isCitizenLogin) {
              return (
                menuGroup.label === "Administración" &&
                (!url.permission || permissions?.includes(url.permission))
              );
            }

            if (isAdminLogin && isCitizenLogin) {
              return !url.permission || permissions?.includes(url.permission);
            }

            return false;
          });

          return { ...item, urls: filteredUrls };
        });

        return { ...menuGroup, items: filteredItems };
      })
      .filter(menuGroup => menuGroup.items.some(item => item.urls.length > 0));
    return this;
  }

  filterBySearchInput(searchInput: string): MenuHandler {
    const lowerSearch = searchInput.toLowerCase();
    this.menu = this.menu
      .map(group => ({
        ...group,
        items: group.items
          .map(item => ({
            ...item,
            urls: item.urls.filter(
              url =>
                url.title.toLowerCase().includes(lowerSearch) ||
                url.url.toLowerCase().includes(lowerSearch)
            ),
          }))
          .filter(item => item.urls.length > 0),
      }))
      .filter(group => group.items.length > 0);
    return this;
  }

  getMenu(): MenuGroup[] {
    return this.menu;
  }
}
