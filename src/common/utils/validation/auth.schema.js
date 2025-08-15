import { z } from "zod";

/**
 * @param {string} email - Email de l'utilisateur
 * @param {string} password - Mot de passe (6 caractères minimum)
 */
export const loginSchema = z.object({
  email: z.string().email("Email invalide").min(1, "Email requis"),
  password: z.string().min(6, "Le mot de passe doit contenir au moins 6 caractères"),
});