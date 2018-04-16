# githubApiIntegration
This is a test to integrate github API inside a nodejs app

## TO DO
* create route for /user/orgs to get list of your organizations
* create route for /users/:username/orgs to get list of  organizations of a user
* create route for /organizations (new file?)
* edit an organisation??
* https://developer.github.com/v3/activity/events/
* 


## to be checked 

https://api.github.com
* /repos/chance-get-yours/athena/events
* /repos/:owner/:repo/events
* /repos/:owner/:repo/issues/events
* /users/:username/events  --> List events performed by a user
* /users/:username/received_events --> List events that a user has received
* /users/:username/events/orgs/:org --> List events for an organization

https://developer.github.com/v3/issues/
* /issues --> List issues
* /user/issues --> List all issues across owned and member repositories assigned to the authenticated user:
* /orgs/:org/issues --> List all issues for a given organization assigned to the authenticated user:

PR

# usefull for a dev

* user
* team
* org
* repo
* commit
* issue + comment
* pull request + comment
 (event)
