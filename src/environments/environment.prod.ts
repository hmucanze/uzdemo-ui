export const environment = {
  production: true,
  apiURL: 'https://uzdemo-api.herokuapp.com',

  tokenWhitelistedDomains: [new RegExp('uzdemo-api.herokuapp.com')],
  tokenBlacklistedRoutes: [new RegExp('\/oauth\/token')]
};
