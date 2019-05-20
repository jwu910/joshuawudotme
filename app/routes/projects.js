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
        description: "An ongoing project with a goal to connect people from around the world--from all different walks of life. We all have stories of struggle, loss, failure, but also stories of gain, love, and success. Our stories are often private and we feel they are unique to our own lives. With the yOUR Story Project, we can see that your story is OUR story.",
        image: "",
        source: "https://github.com/yourstoryproject/yourstoryproject",
        tags: ["Python", "Flask", "Ember.js", "Heroku"],
        title: "yOUR Story Project [IN PROGRESS]",
        website: ""
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
        description: "This portfolio is a work in progress reconstruction of http://joshuawu.me in Ember.js",
        source: "https://www.github.com/jwu910/joshuawudotme",
        tags: ['Ember.js', 'Javascript', 'Handlebars', 'SPA'],
        title: "Portfolio Site",
        website: "https://joshuawudotme.herokuapp.com",
      }
    ]
  }
});
