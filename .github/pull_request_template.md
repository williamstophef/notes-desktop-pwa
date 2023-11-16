## Background (Required)

/\*_ Updated vite.config.ts, and added claims-sw.ts and prompt-sw.ts _/

## Changes (Required)

/\*_ The vite.config.ts file did not have the complete manifest from the React example. The claims-sw.ts and prompt-sw.ts needed to be added under src/. This was acuired from the examples/react-router package directory. There was an issue with the event, eventlistener, and the ServiceWorkerGlobalScope. /// <reference lib="webworker" /> needed to be added to both service worker files._/

## Rollback (Required)

/** In case issues arise with this branch rollback to previous version. \*/
/** The previous version did not have the files listed above, and it had an incomplete manifest.webmanifest. This will have to be competed to move forward with project completion. \*/

## TODO (Optional)

[ ] TODO: Nothing to do before review and merging. All of Task 2 complete.

### Notes (Optional)

/\*_ Consult Stack Overflow before spending 2 hours trying to find out why the service worker isn't working correctly_/
