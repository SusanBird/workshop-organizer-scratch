const SUPABASE_URL = 'https://iqcxlznkhjgmeesvmysg.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlxY3hsem5raGpnbWVlc3ZteXNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDg4MzQzMjYsImV4cCI6MTk2NDQxMDMyNn0.LZ8bVoiP1UVVS42XlcfqiKDPYaQmPpIdGECR9vZpevM';

// const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF2eHhzdW15eGJvZWx4YnVkanVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDc1NTE5NzksImV4cCI6MTk2MzEyNzk3OX0.mGOvIR_Ix2e-qgAsKSUqtIQauC6_ZfjjTQwsC9kF_hA'
// const SUPABASE_URL = 'https://qvxxsumyxboelxbudjum.supabase.co';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getWorkshops() {
    const response = await client
        .from('workshops')
        .select('*, participants (*)');

    return response.body;
}

export async function getParticipant(someId) {
    const response = await client
        .from('participants')
        .select('*')
        .match({ id: someId })
        .single();

    return response.body;
}

export async function createParticipant(name, workshop_id) {
    const response = await client
        .from('participants')
        .insert({
            name: name,
            workshop_id: workshop_id
        });

    return response.body;
}

export async function editParticipant(id, name, workshop_id) {
    const response = await client
        .from('participants')
        .update({
            name: name,
            workshop_id: workshop_id
        })
        .match({ id: id });

    return response.body;
}

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export function checkAuth() {
    const user = getUser();

    if (!user) location.replace('../');
}

export function redirectIfLoggedIn() {
    if (getUser()) {
        location.replace('./workshops-list');
    }
}

export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email, password });

    return response.user;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function logout() {
    await client.auth.signOut();

    return (window.location.href = '../');
}

export async function deleteParticipant(id) {

    const response = await client
        .from('participants')
        .delete()
        .match({ id })
        .single();

    return response.body;

    // location.replace('./workshops-list');
}

// function checkError({ data, error }) {
//     return error ? console.error(error) : data;
// }
