
/** @type {import('@sveltejs/kit').Handle} */
export async function handle({event, resolve}) {
    if (event.request.method !== "OPTIONS") return await resolve(event)
    return new Response(new Blob(), {status: 200})
}