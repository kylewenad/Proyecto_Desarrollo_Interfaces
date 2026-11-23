const BASE = '';

export async function apiGet(path){ 
    const res = await fetch(`${BASE}${path}`); 
    if(!res.ok) throw new Error('Error GET '+path); 
    return res.json(); 
} 

export async function apiPost(path, body){ 
    const res = await fetch(`${BASE}${path}`, {
        method: 'POST', 
        headers: {
            'Content-Type':'application/json' 
        },
        body: JSON.stringify(body) 
    }); 
    
    if(!res.ok) throw new Error('Error POST '+path); 
    return res.json(); 
}