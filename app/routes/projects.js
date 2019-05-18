import Route from '@ember/routing/route';

export default Route.extend({
  model: function() {
    return [
      {
        description: "Interactive shell that that lets you checkout Git branches with fewer strokes.",
        image: "https://raw.githubusercontent.com/jwu910/check-it-out/gh-pages/assets/images/logo.png",
        source: "https://github.com/jwu910/check-it-out",
        title: "Check It Out",
        website: "http://checkit.club",
      }
    ]
  }
});
