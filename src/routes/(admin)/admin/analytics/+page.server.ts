import MistralClient from '@mistralai/mistralai';
import { MISTRAL_API_KEY } from '$env/static/private';

export const load = (async () => {
    return {};
})

export const actions = {
    default: async ({ request }) => {
        const client = new MistralClient(MISTRAL_API_KEY);
        const data = await request.formData();
        const chat = data.get('chat')

        const chatResponse = await client.chat({
            model: 'mistral-medium',
            messages: [
                {role: 'user', content: chat + '. Only respond with HTML. Do not escape whitespace or characters.'}
            ],
        
        });

        return { response: chatResponse }
    }
};