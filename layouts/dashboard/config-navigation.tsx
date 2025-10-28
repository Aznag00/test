import { useMemo } from 'react';

import { paths } from 'src/routes/paths';

import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
  // OR
  // <Iconify icon="fluent:mail-24-filled" />
  // https://icon-sets.iconify.design/solar/
  // https://www.streamlinehq.com/icons
);

const ICONS = {
  student: icon('ic_student'),
  guardian: icon('ic_guardian'),
  admin: icon('ic_admin'),
  employee: icon('ic_employee'),
  teacher: icon('ic_teacher'),
  class: icon('ic_class'),
  job: icon('ic_job'),
  blog: icon('ic_blog'),
  chat: icon('ic_chat'),
  mail: icon('ic_mail'),
  user: icon('ic_user'),
  file: icon('ic_file'),
  lock: icon('ic_lock'),
  tour: icon('ic_tour'),
  order: icon('ic_order'),
  label: icon('ic_label'),
  blank: icon('ic_blank'),
  kanban: icon('ic_kanban'),
  folder: icon('ic_folder'),
  banking: icon('ic_banking'),
  booking: icon('ic_booking'),
  invoice: icon('ic_invoice'),
  product: icon('ic_product'),
  calendar: icon('ic_calendar'),
  disabled: icon('ic_disabled'),
  external: icon('ic_external'),
  menuItem: icon('ic_menu_item'),
  ecommerce: icon('ic_ecommerce'),
  analytics: icon('ic_analytics'),
  dashboard: icon('ic_dashboard'),
};

// ----------------------------------------------------------------------

export function useNavData() {
  const data = useMemo(
    () => [
      // MANAGEMENT
      // ----------------------------------------------------------------------
      {
        subheader: 'management',
        items: [
          {
            title: 'Admins',
            path: paths.admin.list,
            icon: ICONS.admin,
          },

          {
            title: 'Employees',
            path: paths.employee.list,
            icon: ICONS.employee,
            children: [
              { title: 'list', path: paths.employee.list },
              { title: 'create', path: paths.employee.new },
            ],
          },

          {
            title: 'Guardians',
            path: paths.guardian.list,
            icon: ICONS.guardian,
            children: [
              { title: 'list', path: paths.guardian.list },
              { title: 'create', path: paths.guardian.new },
            ],
          },
          {
            title: 'Students',
            path: paths.student.list,
            icon: ICONS.student,
            children: [
              { title: 'list', path: paths.student.list },
              { title: 'create', path: paths.student.new },
            ],
          },
          {
            title: 'Teachers',
            path: paths.teacher.list,
            icon: ICONS.teacher,
            children: [{ title: 'list', path: paths.teacher.list }],
          },
          {
            title: 'Classes',
            path: paths.class.list,
            icon: ICONS.class,
            children: [{ title: 'list', path: paths.class.list }],
          },
        ],
      },
    ],
    []
  );

  return data;
}
