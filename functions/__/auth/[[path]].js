export async function onRequest(context) {
  const url = new URL(context.request.url);
  const upstream = new URL("https://jabjunet.firebaseapp.com" + url.pathname + url.search);
  return fetch(new Request(upstream, context.request));
}
