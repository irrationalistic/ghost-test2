window.techno.config = { 
	
		logo: '[YOUR LOGO]',
		author: {			
				social: [
					{ 
						href: 'https://github.com/adamrw',
					  icon: 'fa-github',
						title: 'Github'
					},
					{ 
						href: 'https://twitter.com/adamweiner',
					  icon: 'fa-twitter',
						title: 'Twitter'
					},
					{ 
						href: 'https://linkedin.com/in/adamweiner',
					  icon: 'fa-linkedin',
						title: 'LinkedIn'
					},
					{ 
						href: 'mailto: adamwineguy@gmail.com',
					  icon: 'fa-envelope',
						title: 'Email'
					},
					{ 
						href: techno.baseUrl + '/rss/',
					  icon: 'fa-rss',
						title: 'Rss'
					}
				]
		},
		disqus: {
				shortname: '[YOUR DISQUS SHORTNAME]'
		},
		google: {
				analytics: function(ga) {
					var account ='[YOUR GA ACCOUNT]';
					var domain = '[YOUR GA DOMAIN]';

					ga('create', account, domain);
					//ga('require', 'displayfeatures');
					ga('send', 'pageview');
				}
		},

		menu: [
				{ route: '', text: 'Home'},
				{ route: techno.baseUrl + '/about', text: 'About'},
				{ route: techno.baseUrl + '/projects', text: 'Projects'}
		]
};
	
