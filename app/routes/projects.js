import Route from '@ember/routing/route';

export default Route.extend({
  model: function() {
    return [
      {
        description: "An interactive shell built to simplify git branch navigation. See project branches grouped by remotes, quickly peek into a branch's history, and check out any reference, with fewer keystrokes.",
        image: "https://raw.githubusercontent.com/jwu910/check-it-out/gh-pages/assets/images/logo.png",
        source: "https://github.com/jwu910/check-it-out",
        tags: ['CLI', 'Node.js', 'Git'],
        title: "Check It Out",
        website: "http://checkit.club",
      },
      {
        description: "A CLI Python script that automated the process of superimposing an overlay image on images being placed in a watch folder. This work was done for free for California State University, Fullerton's Masters of Science in Higher Education program. The script has been used to operate a photo booth at their Maywood education fair since 2017.",
        image: "",
        source: "https://github.com/jwu910/photo-booth-automation",
        tags: ['Python', 'Automation', 'Photos'],
        title: "Photo Booth Automation",
        website: "",
      }
    ]
  }
});
