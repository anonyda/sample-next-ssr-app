export default function handler(request, context) {
   console.log(request.url, 'request');
   const url = new URL(request.url);
   const utmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
   for (const param of utmParams) {
    url.searchParams.delete(param);
   }
   console.log(`${url}`, 'url after removing utm params');
   return fetch(`${url}`)
}