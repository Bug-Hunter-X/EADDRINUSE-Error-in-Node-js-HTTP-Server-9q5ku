# Node.js EADDRINUSE Error

This repository demonstrates a common error in Node.js: the 'EADDRINUSE' error. This error occurs when a server attempts to bind to a port that is already in use by another process.

## Bug Report
The `bug.js` file contains a simple HTTP server.  If you run this server and then try to run it again immediately, it will throw an `EADDRINUSE` error because the port is already in use.

## Solution
The `bugSolution.js` file provides a solution that gracefully handles this error.  It checks if the port is available before attempting to bind to it. If the port is in use, it waits a short period before trying again.