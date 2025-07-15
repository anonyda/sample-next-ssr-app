export default function handler(request, context) {
   console.log(request.url, 'request');
   return fetch(request.url)
}