import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const useAppForm = (schema, options) => {
  return useForm({
    resolver: zodResolver(schema),
    mode: "onBlur",
    ...options,
  });
};