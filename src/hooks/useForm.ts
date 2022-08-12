import { useEffect, useState } from 'react';

const useForm = ({ initialValues, onSubmit, validate }: any) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const newErrors = validate(values);
    setErrors(newErrors);
  }, [values]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    setIsLoading(true);
    e.preventDefault();
    const newErrors = validate(values);
    const [isEmailError, isPasswordError, isConfirmPasswordError] = Object.values(newErrors);
    if (!isEmailError && !isPasswordError && !isConfirmPasswordError) {
      await onSubmit();
    }
    setErrors(newErrors);
    setIsLoading(false);
  };

  return {
    values,
    errors,
    isLoading,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
