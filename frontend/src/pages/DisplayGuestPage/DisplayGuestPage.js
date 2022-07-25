import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useCustomForm from "../../hooks/useCustomForm";
import axios from "axios";


const DisplayGuestPage = () => {
    const [user, token] = useAuth();
  const navigate = useNavigate();
  const [formData, handleSubmit] = useCustomForm(
    // initialValues,
    getNewGuest
  );


    async function getNewGuest() {
        try {
          let response = await axios.get(
            "http://127.0.0.1:8000/api/guests/date/2022-07-22/",
            formData,
            {
              headers: {
                Authorization: "Bearer " + token,
              },
            }
          );
          navigate("/");
        } catch (error) {
          console.log(error.message);
        }
      }
    return ( 
        <div>
            {}
            return(
                {/* <>
                <p>{guest.first_name}</p>
                <p>{guest.last_name}</p>
                <p>{guest.guest_of}</p>
                </> */}
            )
        </div>
     );
}
 
export default DisplayGuestPage;