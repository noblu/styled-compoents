addEventListener("fetch", (event) => {
    event.respondWith(
      handleRequest(event.request).catch(
        (err) => new Response(err.stack, { status: 500 })
      )
    );
  });
  
  async function handleRequest(request) {
    return fetch("https://firestore.googleapis.com/v1/projects/loopbackfirestore/databases/(default)/documents/babbu/1");
  }