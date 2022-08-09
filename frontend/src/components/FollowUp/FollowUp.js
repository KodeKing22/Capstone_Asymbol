import React, { useEffect } from 'react';





const FollowUp = () => {
    
    const [followUpMessage, setFollowUpMessage] = useCustomForm([]);

    async function sendMessage(){
        let response = await axios.post("http://127.0.0.1:8000/api/guests/")
        setFollowUpMessage(response.data);
    }
    useEffect(() =>{
        sendMessage();
    }, []);

    return (  
        <div>

        </div>
   
    );
}
 
export default FollowUp;
