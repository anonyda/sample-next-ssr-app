export default function handler(request, context) {
    const parsedUrl = new URL(request.url);
    console.log(parsedUrl, 'parsedUrl');
    const utmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];

    for (const param of utmParams) {
        parsedUrl.searchParams.delete(param);
    }
    console.log(parsedUrl.toString(), 'parsedUrl after removing utm params');
    return context.rewrite(parsedUrl.pathname + parsedUrl.search);
}