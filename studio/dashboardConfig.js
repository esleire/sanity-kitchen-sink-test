export default {
  widgets: [
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
                  buildHookId: '6384ab1d218017510011aac9',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-test-studio-gsgjfmzb',
                  apiId: 'fd344f8f-343e-4de4-b5de-d942afab5a6e'
                },
                {
                  buildHookId: '6384ab1e319a396b8a2f318b',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-test-web-51oysw7o',
                  apiId: 'baaa44cc-3d6b-463f-b312-ad31318a43c5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/esleire/sanity-kitchen-sink-test',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-test-web-51oysw7o.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
