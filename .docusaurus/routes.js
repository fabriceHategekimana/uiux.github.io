import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/typr.github.io/markdown-page',
    component: ComponentCreator('/typr.github.io/markdown-page', '71c'),
    exact: true
  },
  {
    path: '/typr.github.io/typr',
    component: ComponentCreator('/typr.github.io/typr', '201'),
    exact: true
  },
  {
    path: '/typr.github.io/docs',
    component: ComponentCreator('/typr.github.io/docs', '42c'),
    routes: [
      {
        path: '/typr.github.io/docs',
        component: ComponentCreator('/typr.github.io/docs', '1ce'),
        routes: [
          {
            path: '/typr.github.io/docs',
            component: ComponentCreator('/typr.github.io/docs', 'bb2'),
            routes: [
              {
                path: '/typr.github.io/docs/intro',
                component: ComponentCreator('/typr.github.io/docs/intro', '26f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/typr.github.io/docs/projects/charte_graphique_banque_suédoise',
                component: ComponentCreator('/typr.github.io/docs/projects/charte_graphique_banque_suédoise', '919'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/typr.github.io/docs/projects/charte_graphique_logo',
                component: ComponentCreator('/typr.github.io/docs/projects/charte_graphique_logo', 'bdb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/typr.github.io/docs/projects/heuristic_user_inyerface',
                component: ComponentCreator('/typr.github.io/docs/projects/heuristic_user_inyerface', '67c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/typr.github.io/docs/projects/infographie_lean_UX',
                component: ComponentCreator('/typr.github.io/docs/projects/infographie_lean_UX', '271'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/typr.github.io/docs/projects/infographie_user_centered_design',
                component: ComponentCreator('/typr.github.io/docs/projects/infographie_user_centered_design', 'fc9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/typr.github.io/docs/projects/interface_graphique_fps',
                component: ComponentCreator('/typr.github.io/docs/projects/interface_graphique_fps', 'b2f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/typr.github.io/docs/projects/intro',
                component: ComponentCreator('/typr.github.io/docs/projects/intro', '54b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/typr.github.io/docs/projects/portfolio',
                component: ComponentCreator('/typr.github.io/docs/projects/portfolio', '6d1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/typr.github.io/docs/projects/recréation_mobile_first',
                component: ComponentCreator('/typr.github.io/docs/projects/recréation_mobile_first', '97e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/typr.github.io/docs/projects/task_flow_galaxus',
                component: ComponentCreator('/typr.github.io/docs/projects/task_flow_galaxus', 'aaf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/typr.github.io/docs/projects/ui_ux_infographie',
                component: ComponentCreator('/typr.github.io/docs/projects/ui_ux_infographie', 'a69'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/typr.github.io/',
    component: ComponentCreator('/typr.github.io/', 'b84'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
