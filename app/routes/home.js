import Route from '@ember/routing/route';

export default Route.extend({
  model: function() {
    return {
      linkedin: {
        alt: 'Linkedin',
        href: 'https://www.linkedin.com/in/wujoshua',
        icon: 'linkedin-in'
      },
      github: {
        alt: 'Github',
        href: 'https://www.github.com/jwu910',
        icon: 'github-alt'
      },
      mail: {
        alt: 'Email',
        href: '',
        icon: 'envelope'
      },
      twitter: {
        alt: 'Twitter',
        href: 'https://www.twitter.com/jwu910',
        icon: 'twitter'
      }
    }
  }
});
