
# ZAP Scanning Report

Generated on Mon, 14 Jun 2021 10:28:46


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 0 |
| Medium | 3 |
| Low | 4 |
| Informational | 5 |

## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- | 
| CSP: style-src unsafe-inline | Medium | 5 | 
| CSP: Wildcard Directive | Medium | 5 | 
| Reverse Tabnabbing | Medium | 12 | 
| Dangerous JS Functions | Low | 3 | 
| Feature Policy Header Not Set | Low | 11 | 
| Incomplete or No Cache-control and Pragma HTTP Header Set | Low | 11 | 
| Server Leaks Version Information via "Server" HTTP Response Header Field | Low | 11 | 
| Base64 Disclosure | Informational | 11 | 
| Information Disclosure - Suspicious Comments | Informational | 11 | 
| Modern Web Application | Informational | 11 | 
| Storable and Cacheable Content | Informational | 11 | 
| Timestamp Disclosure - Unix | Informational | 12 | 

## Alert Detail


  
  
  
  
### CSP: style-src unsafe-inline
##### Medium (Medium)
  
  
  
  
#### Description
<p>style-src includes unsafe-inline.</p>
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/robots.txt](https://www.fabrique.social.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `default-src 'none'; connect-src 'self' https://*.gouv.fr; font-src 'self'; img-src 'self'; prefetch-src 'self' https://*.gouv.fr; script-src 'self' https://*.gouv.fr; frame-src 'self' https://*.gouv.fr; style-src 'self' 'unsafe-inline'`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/sitemap.xml](https://www.fabrique.social.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `default-src 'none'; connect-src 'self' https://*.gouv.fr; font-src 'self'; img-src 'self'; prefetch-src 'self' https://*.gouv.fr; script-src 'self' https://*.gouv.fr; frame-src 'self' https://*.gouv.fr; style-src 'self' 'unsafe-inline'`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr](https://www.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `default-src 'none'; connect-src 'self' https://*.gouv.fr; font-src 'self'; img-src 'self'; prefetch-src 'self' https://*.gouv.fr; script-src 'self' https://*.gouv.fr; frame-src 'self' https://*.gouv.fr; style-src 'self' 'unsafe-inline'`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/actus/](https://www.fabrique.social.gouv.fr/actus/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `default-src 'none'; connect-src 'self' https://*.gouv.fr; font-src 'self'; img-src 'self'; prefetch-src 'self' https://*.gouv.fr; script-src 'self' https://*.gouv.fr; frame-src 'self' https://*.gouv.fr; style-src 'self' 'unsafe-inline'`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/](https://www.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `default-src 'none'; connect-src 'self' https://*.gouv.fr; font-src 'self'; img-src 'self'; prefetch-src 'self' https://*.gouv.fr; script-src 'self' https://*.gouv.fr; frame-src 'self' https://*.gouv.fr; style-src 'self' 'unsafe-inline'`
  
  
  
  
Instances: 5
  
### Solution
<p>Ensure that your web server, application server, load balancer, etc. is properly configured to set the Content-Security-Policy header.</p>
  
### Reference
* http://www.w3.org/TR/CSP2/
* http://www.w3.org/TR/CSP/
* http://caniuse.com/#search=content+security+policy
* http://content-security-policy.com/
* https://github.com/shapesecurity/salvation
* https://developers.google.com/web/fundamentals/security/csp#policy_applies_to_a_wide_variety_of_resources

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### CSP: Wildcard Directive
##### Medium (Medium)
  
  
  
  
#### Description
<p>The following directives either allow wildcard sources (or ancestors), are not defined, or are overly broadly defined: </p><p>frame-ancestors, form-action</p><p></p><p>The directive(s): frame-ancestors, form-action are among the directives that do not fallback to default-src, missing/excluding them is the same as allowing anything.</p>
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/sitemap.xml](https://www.fabrique.social.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `default-src 'none'; connect-src 'self' https://*.gouv.fr; font-src 'self'; img-src 'self'; prefetch-src 'self' https://*.gouv.fr; script-src 'self' https://*.gouv.fr; frame-src 'self' https://*.gouv.fr; style-src 'self' 'unsafe-inline'`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/](https://www.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `default-src 'none'; connect-src 'self' https://*.gouv.fr; font-src 'self'; img-src 'self'; prefetch-src 'self' https://*.gouv.fr; script-src 'self' https://*.gouv.fr; frame-src 'self' https://*.gouv.fr; style-src 'self' 'unsafe-inline'`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/robots.txt](https://www.fabrique.social.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `default-src 'none'; connect-src 'self' https://*.gouv.fr; font-src 'self'; img-src 'self'; prefetch-src 'self' https://*.gouv.fr; script-src 'self' https://*.gouv.fr; frame-src 'self' https://*.gouv.fr; style-src 'self' 'unsafe-inline'`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr](https://www.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `default-src 'none'; connect-src 'self' https://*.gouv.fr; font-src 'self'; img-src 'self'; prefetch-src 'self' https://*.gouv.fr; script-src 'self' https://*.gouv.fr; frame-src 'self' https://*.gouv.fr; style-src 'self' 'unsafe-inline'`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/actus/](https://www.fabrique.social.gouv.fr/actus/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Content-Security-Policy`
  
  
  * Evidence: `default-src 'none'; connect-src 'self' https://*.gouv.fr; font-src 'self'; img-src 'self'; prefetch-src 'self' https://*.gouv.fr; script-src 'self' https://*.gouv.fr; frame-src 'self' https://*.gouv.fr; style-src 'self' 'unsafe-inline'`
  
  
  
  
Instances: 5
  
### Solution
<p>Ensure that your web server, application server, load balancer, etc. is properly configured to set the Content-Security-Policy header.</p>
  
### Reference
* http://www.w3.org/TR/CSP2/
* http://www.w3.org/TR/CSP/
* http://caniuse.com/#search=content+security+policy
* http://content-security-policy.com/
* https://github.com/shapesecurity/salvation
* https://developers.google.com/web/fundamentals/security/csp#policy_applies_to_a_wide_variety_of_resources

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Reverse Tabnabbing
##### Medium (Medium)
  
  
  
  
#### Description
<p>At least one link on this page is vulnerable to Reverse tabnabbing as it uses a target attribute without using both of the "noopener" and "noreferrer" keywords in the "rel" attribute, which allows the target page to take control of this page.</p>
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/startups/tumeplay/](https://www.fabrique.social.gouv.fr/startups/tumeplay/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="article__author-name" target="_blank" href="https://github.com/SocialGouv/tumeplay-app">Github</a>`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/actus/](https://www.fabrique.social.gouv.fr/actus/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://github.com/SocialGouv/code-du-travail-numerique/commits/1.5" target="_blank">details des changements</a>`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/startups/code-du-travail-numerique/](https://www.fabrique.social.gouv.fr/startups/code-du-travail-numerique/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a target='_blank' href='https://socialgouv.github.io/faq-code-du-travail'>50 questions/réponses</a>`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/startups/tremplin/](https://www.fabrique.social.gouv.fr/startups/tremplin/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="article__author-name" target="_blank" href="https://fabrique.social.gouv.fr/startups/tremplin/">Page d&#x27;accueil</a>`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/startups/egapro/](https://www.fabrique.social.gouv.fr/startups/egapro/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="article__author-name" target="_blank" href="https://index-egapro.travail.gouv.fr/">Page d&#x27;accueil</a>`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/startups/textstyle/](https://www.fabrique.social.gouv.fr/startups/textstyle/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="article__author-name" target="_blank" href="https://textstyle.fabrique.social.gouv.fr">Page d&#x27;accueil</a>`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/startups/e-mjpm/](https://www.fabrique.social.gouv.fr/startups/e-mjpm/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="article__author-name" target="_blank" href="https://emjpm.beta.gouv.fr">Page d&#x27;accueil</a>`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/startups/fce/](https://www.fabrique.social.gouv.fr/startups/fce/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="article__author-name" target="_blank" href="https://fabrique.social.gouv.fr/startups/fce">Page d&#x27;accueil</a>`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/startups/mano/](https://www.fabrique.social.gouv.fr/startups/mano/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="article__author-name" target="_blank" href="https://github.com/SocialGouv/mano">Github</a>`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/startups/archifiltre/](https://www.fabrique.social.gouv.fr/startups/archifiltre/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="article__author-name" target="_blank" href="https://archifiltre.fabrique.social.gouv.fr/">Page d&#x27;accueil</a>`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/startups/work-in-france/](https://www.fabrique.social.gouv.fr/startups/work-in-france/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="article__author-name" target="_blank" href="https://workinfrance.beta.gouv.fr">Page d&#x27;accueil</a>`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/startups/domifa/](https://www.fabrique.social.gouv.fr/startups/domifa/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a class="article__author-name" target="_blank" href="https://domifa.fabrique.social.gouv.fr/">Page d&#x27;accueil</a>`
  
  
  
  
Instances: 12
  
### Solution
<p>Do not use a target attribute, or if you have to then also add the attribute: rel="noopener noreferrer".</p>
  
### Reference
* https://owasp.org/www-community/attacks/Reverse_Tabnabbing
* https://dev.to/ben/the-targetblank-vulnerability-by-example
* https://mathiasbynens.github.io/rel-noopener/
* https://medium.com/@jitbit/target-blank-the-most-underestimated-vulnerability-ever-96e328301f4c

  
#### Source ID : 3

  
  
  
  
### Dangerous JS Functions
##### Low (Low)
  
  
  
  
#### Description
<p>A dangerous JS function seems to be in use that would leave the site vulnerable.</p>
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/polyfill.js](https://www.fabrique.social.gouv.fr/polyfill.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/_next/static/chunks/6927d4243c78552f06b318130bbdc0cee459d31a.5e69ff64d7cccf13ce90.js](https://www.fabrique.social.gouv.fr/_next/static/chunks/6927d4243c78552f06b318130bbdc0cee459d31a.5e69ff64d7cccf13ce90.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/_next/static/chunks/framework.a3bb2ad893c940fc2199.js](https://www.fabrique.social.gouv.fr/_next/static/chunks/framework.a3bb2ad893c940fc2199.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `eVal`
  
  
  
  
Instances: 3
  
### Solution
<p>See the references for security advice on the use of these functions.</p>
  
### Reference
* https://angular.io/guide/security

  
#### CWE Id : 749
  
#### Source ID : 3

  
  
  
  
### Feature Policy Header Not Set
##### Low (Medium)
  
  
  
  
#### Description
<p>Feature Policy Header is an added layer of security that helps to restrict from unauthorized access or usage of browser/client features by web resources. This policy ensures the user privacy by limiting or specifying the features of the browsers can be used by the web resources. Feature Policy provides a set of standard HTTP headers that allow website owners to limit which features of browsers can be used by the page such as camera, microphone, location, full screen etc.</p>
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/actus/](https://www.fabrique.social.gouv.fr/actus/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/startups/code-du-travail-numerique/](https://www.fabrique.social.gouv.fr/startups/code-du-travail-numerique/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/startups/fce/](https://www.fabrique.social.gouv.fr/startups/fce/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/startups/e-mjpm/](https://www.fabrique.social.gouv.fr/startups/e-mjpm/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr](https://www.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/idees/](https://www.fabrique.social.gouv.fr/idees/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/robots.txt](https://www.fabrique.social.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/startups/work-in-france/](https://www.fabrique.social.gouv.fr/startups/work-in-france/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/sitemap.xml](https://www.fabrique.social.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/](https://www.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/members/](https://www.fabrique.social.gouv.fr/members/)
  
  
  * Method: `GET`
  
  
  
  
Instances: 11
  
### Solution
<p>Ensure that your web server, application server, load balancer, etc. is configured to set the Feature-Policy header.</p>
  
### Reference
* https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
* https://developers.google.com/web/updates/2018/06/feature-policy
* https://scotthelme.co.uk/a-new-security-header-feature-policy/
* https://w3c.github.io/webappsec-feature-policy/
* https://www.smashingmagazine.com/2018/12/feature-policy/

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
  
### Incomplete or No Cache-control and Pragma HTTP Header Set
##### Low (Medium)
  
  
  
  
#### Description
<p>The cache-control and pragma HTTP header have not been set properly or are missing allowing the browser and proxies to cache content.</p>
  
  
  
* URL: [https://www.fabrique.social.gouv.fr](https://www.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/idees/](https://www.fabrique.social.gouv.fr/idees/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/sitemap.xml](https://www.fabrique.social.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/startups/e-mjpm/](https://www.fabrique.social.gouv.fr/startups/e-mjpm/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/actus/](https://www.fabrique.social.gouv.fr/actus/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/startups/work-in-france/](https://www.fabrique.social.gouv.fr/startups/work-in-france/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/robots.txt](https://www.fabrique.social.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/startups/code-du-travail-numerique/](https://www.fabrique.social.gouv.fr/startups/code-du-travail-numerique/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/members/](https://www.fabrique.social.gouv.fr/members/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/](https://www.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/startups/fce/](https://www.fabrique.social.gouv.fr/startups/fce/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  
  
Instances: 11
  
### Solution
<p>Whenever possible ensure the cache-control HTTP header is set with no-cache, no-store, must-revalidate; and that the pragma HTTP header is set with no-cache.</p>
  
### Reference
* https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html#web-content-caching

  
#### CWE Id : 525
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Server Leaks Version Information via "Server" HTTP Response Header Field
##### Low (High)
  
  
  
  
#### Description
<p>The web/application server is leaking version information via the "Server" HTTP response header. Access to such information may facilitate attackers identifying other vulnerabilities your web/application server is subject to.</p>
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/idees/](https://www.fabrique.social.gouv.fr/idees/)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr](https://www.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/actus/](https://www.fabrique.social.gouv.fr/actus/)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/startups/code-du-travail-numerique/](https://www.fabrique.social.gouv.fr/startups/code-du-travail-numerique/)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/robots.txt](https://www.fabrique.social.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/startups/e-mjpm/](https://www.fabrique.social.gouv.fr/startups/e-mjpm/)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/sitemap.xml](https://www.fabrique.social.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/startups/fce/](https://www.fabrique.social.gouv.fr/startups/fce/)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/members/](https://www.fabrique.social.gouv.fr/members/)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/](https://www.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/startups/work-in-france/](https://www.fabrique.social.gouv.fr/startups/work-in-france/)
  
  
  * Method: `GET`
  
  
  * Evidence: `nginx/1.17.8`
  
  
  
  
Instances: 11
  
### Solution
<p>Ensure that your web server, application server, load balancer, etc. is configured to suppress the "Server" header or provide generic details.</p>
  
### Reference
* http://httpd.apache.org/docs/current/mod/core.html#servertokens
* http://msdn.microsoft.com/en-us/library/ff648552.aspx#ht_urlscan_007
* http://blogs.msdn.com/b/varunm/archive/2013/04/23/remove-unwanted-http-response-headers.aspx
* http://www.troyhunt.com/2012/02/shhh-dont-let-your-response-headers.html

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Base64 Disclosure
##### Informational (Medium)
  
  
  
  
#### Description
<p>Base64 encoded data was disclosed by the application/web server. Note: in the interests of performance not all base64 strings in the response were analyzed individually, the entire response should be looked at by the analyst/security team/developer(s).</p>
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/](https://www.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `BlocChiffres__BlocChiffre-sc-1k9etel-0`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/startups/work-in-france/](https://www.fabrique.social.gouv.fr/startups/work-in-france/)
  
  
  * Method: `GET`
  
  
  * Evidence: `Hero__HeroContainer-sc-4t2c0l-0`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/members/](https://www.fabrique.social.gouv.fr/members/)
  
  
  * Method: `GET`
  
  
  * Evidence: `Hero__HeroContainer-sc-4t2c0l-0`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr](https://www.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `BlocChiffres__BlocChiffre-sc-1k9etel-0`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/actus/](https://www.fabrique.social.gouv.fr/actus/)
  
  
  * Method: `GET`
  
  
  * Evidence: `Hero__HeroContainer-sc-4t2c0l-0`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/startups/code-du-travail-numerique/](https://www.fabrique.social.gouv.fr/startups/code-du-travail-numerique/)
  
  
  * Method: `GET`
  
  
  * Evidence: `Hero__HeroContainer-sc-4t2c0l-0`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/startups/fce/](https://www.fabrique.social.gouv.fr/startups/fce/)
  
  
  * Method: `GET`
  
  
  * Evidence: `/images/startups/dayne-topkin-101954_FCE`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/idees/](https://www.fabrique.social.gouv.fr/idees/)
  
  
  * Method: `GET`
  
  
  * Evidence: `Hero__HeroContainer-sc-4t2c0l-0`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/robots.txt](https://www.fabrique.social.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `BlocChiffres__BlocChiffre-sc-1k9etel-0`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/sitemap.xml](https://www.fabrique.social.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `BlocChiffres__BlocChiffre-sc-1k9etel-0`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/startups/e-mjpm/](https://www.fabrique.social.gouv.fr/startups/e-mjpm/)
  
  
  * Method: `GET`
  
  
  * Evidence: `Hero__HeroContainer-sc-4t2c0l-0`
  
  
  
  
Instances: 11
  
### Solution
<p>Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.</p>
  
### Other information
<p>\x0006Z\x001c</p><p>\x0018�~����e������{�\x001c�Y=zץ�</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Information Disclosure - Suspicious Comments
##### Informational (Low)
  
  
  
  
#### Description
<p>The response appears to contain suspicious comments which may help an attacker. Note: Matches made within script blocks or files are against the entire content not only comments.</p>
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/startups/e-mjpm/](https://www.fabrique.social.gouv.fr/startups/e-mjpm/)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/](https://www.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/idees/](https://www.fabrique.social.gouv.fr/idees/)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/actus/](https://www.fabrique.social.gouv.fr/actus/)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/startups/work-in-france/](https://www.fabrique.social.gouv.fr/startups/work-in-france/)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/sitemap.xml](https://www.fabrique.social.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/robots.txt](https://www.fabrique.social.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/startups/fce/](https://www.fabrique.social.gouv.fr/startups/fce/)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/members/](https://www.fabrique.social.gouv.fr/members/)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/startups/code-du-travail-numerique/](https://www.fabrique.social.gouv.fr/startups/code-du-travail-numerique/)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr](https://www.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `query`
  
  
  
  
Instances: 11
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following pattern was used: \bQUERY\b and was detected in the element starting with: "<script id="__NEXT_DATA__" type="application/json">{"props":{"pageProps":{}},"page":"/startups/e-mjpm","query":{},"buildId":"9QO", see evidence field for the suspicious comment/snippet.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Modern Web Application
##### Informational (Medium)
  
  
  
  
#### Description
<p>The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.</p>
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/idees/](https://www.fabrique.social.gouv.fr/idees/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript data-n-css=""></noscript>`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr](https://www.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript data-n-css=""></noscript>`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/startups/e-mjpm/](https://www.fabrique.social.gouv.fr/startups/e-mjpm/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript data-n-css=""></noscript>`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/robots.txt](https://www.fabrique.social.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript data-n-css=""></noscript>`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/actus/](https://www.fabrique.social.gouv.fr/actus/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript data-n-css=""></noscript>`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/sitemap.xml](https://www.fabrique.social.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript data-n-css=""></noscript>`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/startups/work-in-france/](https://www.fabrique.social.gouv.fr/startups/work-in-france/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript data-n-css=""></noscript>`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/members/](https://www.fabrique.social.gouv.fr/members/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript data-n-css=""></noscript>`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/](https://www.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript data-n-css=""></noscript>`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/startups/fce/](https://www.fabrique.social.gouv.fr/startups/fce/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript data-n-css=""></noscript>`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/startups/code-du-travail-numerique/](https://www.fabrique.social.gouv.fr/startups/code-du-travail-numerique/)
  
  
  * Method: `GET`
  
  
  * Evidence: `<noscript data-n-css=""></noscript>`
  
  
  
  
Instances: 11
  
### Solution
<p>This is an informational alert and so no changes are required.</p>
  
### Other information
<p>A noScript tag has been found, which is an indication that the application works differently with JavaScript enabled compared to when it is not.</p>
  
### Reference
* 

  
#### Source ID : 3

  
  
  
  
### Storable and Cacheable Content
##### Informational (Medium)
  
  
  
  
#### Description
<p>The response contents are storable by caching components such as proxy servers, and may be retrieved directly from the cache, rather than from the origin server by the caching servers, in response to similar requests from other users.  If the response data is sensitive, personal or user-specific, this may result in sensitive information being leaked. In some cases, this may even result in a user gaining complete control of the session of another user, depending on the configuration of the caching components in use in their environment. This is primarily an issue where "shared" caching servers such as "proxy" caches are configured on the local network. This configuration is typically found in corporate or educational environments, for instance.</p>
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/startups/e-mjpm/](https://www.fabrique.social.gouv.fr/startups/e-mjpm/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/startups/code-du-travail-numerique/](https://www.fabrique.social.gouv.fr/startups/code-du-travail-numerique/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/actus/](https://www.fabrique.social.gouv.fr/actus/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr](https://www.fabrique.social.gouv.fr)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/startups/fce/](https://www.fabrique.social.gouv.fr/startups/fce/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/](https://www.fabrique.social.gouv.fr/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/startups/work-in-france/](https://www.fabrique.social.gouv.fr/startups/work-in-france/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/members/](https://www.fabrique.social.gouv.fr/members/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/sitemap.xml](https://www.fabrique.social.gouv.fr/sitemap.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/idees/](https://www.fabrique.social.gouv.fr/idees/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/robots.txt](https://www.fabrique.social.gouv.fr/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
Instances: 11
  
### Solution
<p>Validate that the response does not contain sensitive, personal or user-specific information.  If it does, consider the use of the following HTTP response headers, to limit, or prevent the content being stored and retrieved from the cache by another user:</p><p>Cache-Control: no-cache, no-store, must-revalidate, private</p><p>Pragma: no-cache</p><p>Expires: 0</p><p>This configuration directs both HTTP 1.0 and HTTP 1.1 compliant caching servers to not store the response, and to not retrieve the response (without validation) from the cache, in response to a similar request. </p>
  
### Other information
<p>In the absence of an explicitly specified caching lifetime directive in the response, a liberal lifetime heuristic of 1 year was assumed. This is permitted by rfc7234.</p>
  
### Reference
* https://tools.ietf.org/html/rfc7234
* https://tools.ietf.org/html/rfc7231
* http://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html (obsoleted by rfc7234)

  
#### CWE Id : 524
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
  
### Timestamp Disclosure - Unix
##### Informational (Low)
  
  
  
  
#### Description
<p>A timestamp was disclosed by the application/web server - Unix</p>
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/startups/code-du-travail-numerique/release-v3.2.0](https://www.fabrique.social.gouv.fr/startups/code-du-travail-numerique/release-v3.2.0)
  
  
  * Method: `GET`
  
  
  * Evidence: `308308616`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/_next/static/chunks/framework.a3bb2ad893c940fc2199.js](https://www.fabrique.social.gouv.fr/_next/static/chunks/framework.a3bb2ad893c940fc2199.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `62914560`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/_next/static/chunks/framework.a3bb2ad893c940fc2199.js](https://www.fabrique.social.gouv.fr/_next/static/chunks/framework.a3bb2ad893c940fc2199.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `134217728`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/_next/static/chunks/framework.a3bb2ad893c940fc2199.js](https://www.fabrique.social.gouv.fr/_next/static/chunks/framework.a3bb2ad893c940fc2199.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `805306368`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/_next/static/chunks/framework.a3bb2ad893c940fc2199.js](https://www.fabrique.social.gouv.fr/_next/static/chunks/framework.a3bb2ad893c940fc2199.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `268435456`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/_next/static/chunks/framework.a3bb2ad893c940fc2199.js](https://www.fabrique.social.gouv.fr/_next/static/chunks/framework.a3bb2ad893c940fc2199.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `67108864`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/_next/static/chunks/framework.a3bb2ad893c940fc2199.js](https://www.fabrique.social.gouv.fr/_next/static/chunks/framework.a3bb2ad893c940fc2199.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `134217727`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/startups/code-du-travail-numerique/](https://www.fabrique.social.gouv.fr/startups/code-du-travail-numerique/)
  
  
  * Method: `GET`
  
  
  * Evidence: `308308616`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/_next/static/chunks/framework.a3bb2ad893c940fc2199.js](https://www.fabrique.social.gouv.fr/_next/static/chunks/framework.a3bb2ad893c940fc2199.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `1073741823`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/_next/static/chunks/framework.a3bb2ad893c940fc2199.js](https://www.fabrique.social.gouv.fr/_next/static/chunks/framework.a3bb2ad893c940fc2199.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `33554432`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/_next/static/chunks/framework.a3bb2ad893c940fc2199.js](https://www.fabrique.social.gouv.fr/_next/static/chunks/framework.a3bb2ad893c940fc2199.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `1073741824`
  
  
  
  
* URL: [https://www.fabrique.social.gouv.fr/_next/static/chunks/framework.a3bb2ad893c940fc2199.js](https://www.fabrique.social.gouv.fr/_next/static/chunks/framework.a3bb2ad893c940fc2199.js)
  
  
  * Method: `GET`
  
  
  * Evidence: `1073741825`
  
  
  
  
Instances: 12
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>308308616, which evaluates to: 1979-10-09 09:16:56</p>
  
### Reference
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3
