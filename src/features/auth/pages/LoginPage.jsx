import { useAppForm } from "@/common/hooks/useForm";
import { FormInput } from "@/common/components/molecules/Form/FormInput";
import { loginSchema } from "@/common/utils/validation/auth.schema";
import Button from "@/common/components/atoms/Button";

const LoginPage = () => {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useAppForm(loginSchema);

  const onSubmit = (data) => {
    console.log(data);
    // Appel API ici
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        name="email"
        label="Email"
        control={control}
        placeholder="Entrez votre email"
      />
      
      <FormInput
        name="password"
        label="Mot de passe"
        type="password"
        control={control}
        placeholder="Entrez votre mot de passe"
      />
      
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Connexion..." : "Se connecter"}
      </Button>
    </form>
  );
};

export default LoginPage;