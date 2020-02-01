export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e359b2bcf4258e5aede0021',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-k76okwob',
                  apiId: '67791ca2-acf5-4367-8277-a8cc5764008c'
                },
                {
                  buildHookId: '5e359b2ce461b66fca8bd924',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-q12oavqg',
                  apiId: '98635cc0-311f-408d-a702-221699bd8ea6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/princedhimanz/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-q12oavqg.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
