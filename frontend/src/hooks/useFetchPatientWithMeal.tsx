import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../../config";

export const useFetchPatientWithMeal = () => {
  const [patientsWithMeals, setPatientsWithMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMealPatients = async () => {
      try {
        const res = await axios.get(`${BACKEND_URL}/api/v1/user/mealdetails`);
        setPatientsWithMeals(res.data.mealDetails); // already filtered in backend
      } catch (error) {
        console.error("Error fetching patients with meals:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMealPatients();
  }, []);

  return { patientsWithMeals, loading };
};