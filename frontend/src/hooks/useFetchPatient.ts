import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../../config";

export const useFetchPatient = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const fetchPatients = async ()=>{
        setLoading(true);
      try{
        const response = await axios.get(`${BACKEND_URL}/api/v1/user/patients`);
        // console.log("Fetched patients:", response.data);
        setPatients(response.data);
      } catch(error){
        console.log("error fetching patient data",error);
      } finally{
        setLoading(false);
      }
    }

    fetchPatients();
  },[])


  return { patients, loading };
};