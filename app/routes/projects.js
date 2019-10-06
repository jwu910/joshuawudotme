import Route from '@ember/routing/route';

export default Route.extend({
  model: function() {
    return [
      {
        description: "An interactive shell built to simplify git branch navigation. See project branches grouped by remotes, quickly peek into a branch's history, and check out any reference, with fewer keystrokes.",
        image: "https://raw.githubusercontent.com/jwu910/check-it-out/gh-pages/assets/images/logo.png",
        source: "https://github.com/jwu910/check-it-out",
        tags: ["CLI", "Node.js", "Git"],
        title: "Check It Out",
        website: "http://checkit.club",
      },
      {
        description: "An ongoing project with a goal to connect people from around the world--from all different walks of life. We all have stories of struggle, loss, failure, but also stories of gain, love, and success. A community project to explore our intersecting identities.",
        image: "https://firebasestorage.googleapis.com/v0/b/yourstoryproject-f405e.appspot.com/o/ysp-logo-1000x1000-white-bg.png?alt=media&token=47969469-719c-49f5-96ec-433863dcbf64",
        source: "https://github.com/yourstoryproject/yourstory-client",
        tags: ["Firebase", "React.js", "Styled Components", "SPA", "Typescript"],
        title: "Your Story Project [IN PROGRESS]",
        website: "https://yourstoryproject.org"
      },
      {
        description: "A CLI Python script that automated the process of superimposing an overlay image on images being placed in a watch folder. This work was done for free for California State University, Fullerton's Masters of Science in Higher Education program. The script has been used to operate a photo booth at their Maywood education fair since 2017.",
        image: "",
        source: "https://github.com/jwu910/photo-booth-automation",
        tags: ['Python', 'Automation', 'Photos'],
        title: "Photo Booth Automation",
        website: "",
      },
      {
        description: "Command line tool to quickly search Urban Dictionary's API. Get hip or die trying.",
        source: "https://github.com/the-after-hours/slng-node",
        tags: ['Node.js', 'API', 'CLI'],
        title: "Slng",
      },
      {
        description: "Source code for this portfolio.",
        source: "https://www.github.com/jwu910/joshuawudotme",
        tags: ['Ember.js', 'Javascript', 'Handlebars', 'SPA'],
        title: "Portfolio Site",
        website: "https://joshuawudotme.herokuapp.com",
      }
    ]
  }
});
