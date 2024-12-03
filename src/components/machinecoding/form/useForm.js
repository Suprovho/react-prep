import { useEffect, useState } from "react";

const useForm = (initialState) => {
  const [formState, setFormState] = useState(initialState);
  const [errors, setErrors] = useState({});

  // Load form state from localStorage on mount
  useEffect(() => {
    const savedState = localStorage.getItem("formState");
    if (savedState) {
      setFormState(JSON.parse(savedState));
    }
  }, []);

  // Save form state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("formState", JSON.stringify(formState));
  }, [formState]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormState((prev) => ({
        ...prev,
        [name]: { ...prev[name], [value]: checked },
      }));
    } else if (type === "radio") {
      setFormState((prev) => ({ ...prev, [name]: value }));
    } else {
      setFormState((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validateField = (field, value) => {
    if (field === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValid = emailRegex.test(value);
      setErrors((prev) => ({
        ...prev,
        email: isValid ? "" : "Invalid email format",
      }));
      return isValid;
    }
    return true;
  };

  const validateAll = () => {
    const emailValid = validateField("email", formState.email);
    return emailValid;
  };

  return {
    formState,
    errors,
    handleChange,
    validateField,
    validateAll,
  };
};

export default useForm;
