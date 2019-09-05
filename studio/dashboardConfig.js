export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d71945f03c06001760bbab7',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-bpyfdjsu',
                  apiId: '74b59671-4c64-4f79-883f-448c95cb75bd'
                },
                {
                  buildHookId: '5d71945f8dc5c40178ae95ee',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-8svc4dfw',
                  apiId: '94c3ebe1-7069-46c9-90ad-3b92c8714169'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/zemariagp/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-8svc4dfw.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
