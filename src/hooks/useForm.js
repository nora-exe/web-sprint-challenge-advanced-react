// Custom hook to control checkout form
import {useState} from "react";

const useForm = (initialValue, initialSuccessValue) => {
    const [values, setValues] = useState(initialValue);
    const [showSuccessMessage, setShowSuccessMessage] = useState(initialSuccessValue);

    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };
    return [values, showSuccessMessage, setShowSuccessMessage, handleChanges];
  };
export default useForm;
