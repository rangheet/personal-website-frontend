
export const api={
    
    get(path)
    {
        const defaultGetReqParam = {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
        };

        return fetch(path, defaultGetReqParam)
            .then(response => {
                if(response.ok)
                    return response.json();
                else
                {
                    throw new Error("Response Status:"+response.status + " and Response Message:" + response.statusText);
                }
                    
            })
            .then(response => response)
            .catch(error => { throw(error) });
    }
    
};

