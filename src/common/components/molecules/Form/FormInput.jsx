import { useFormContext } from "react-hook-form";
import Input from "../../atoms/Input";

export const FormInput = ({ name, ...props }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  
  return (
    <Input
      {...register(name)}
      {...props}
      error={errors[name]?.message}
    />
  );
};