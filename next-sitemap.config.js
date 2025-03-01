const fs = require('fs');

/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://healxyz.com',
    generateRobotsTxt: true, 
    outDir: 'out',
    transform: async (config, path) => {
        const file = `${config.sourceDir}/server/pages${path}.html`;

        if (path.endsWith('.dev')) return null;
        if (path.startsWith('/admin')) return null;
        
        if (fs.existsSync(file)) {
          try {
            if ((await fs.promises.readFile(file, 'utf8')).match(/\<meta.*noindex.*>/im)) {
              console.log(`Ingnored path: '${path}', from file: '${file}'.`);
              return null;
            }
          } catch (error) {
            console.error(`Failed to check path: '${path}', from file: '${file}'.`);
            console.error(error);
          }
        }
    
        return {
            loc: path,
            changefreq: config.changefreq,
            priority: config.priority,
            lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
            alternateRefs: config.alternateRefs || [],
        };
      },
}