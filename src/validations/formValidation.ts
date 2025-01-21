import { FormErrors } from "@/service/interface/email-types";

export const validateEmail = (email: string) => {
  if (!email) return "El correo electrónico es requerido.";
  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
    return "El correo electrónico no es válido.";
  }
  return "";
};

export const validateSubject = (subject: string) => {
  if (!subject) return "El asunto es requerido.";
  if (subject.length < 5) return "El asunto debe tener al menos 5 caracteres.";
  return "";
};

export const validateMessage = (message: string) => {
  if (!message) return "El mensaje es requerido.";
  return "";
};

// Cambiar la definición de errors para que sea del tipo FormErrors
export const validateForm = (formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  let errors: FormErrors = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  // Validaciones
  errors.email = validateEmail(formData.email);
  errors.subject = validateSubject(formData.subject);
  errors.message = validateMessage(formData.message);

  // Valida el campo 'name' (requerido)
  if (!formData.name) {
    errors.name = "El nombre es requerido.";
  }

  return errors;
};
