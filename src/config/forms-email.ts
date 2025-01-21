export const formFields = (formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => [
  {
    name: "name",
    label: "Tu nombre",
    placeholder: "Tu nombre",
    type: "text",
    value: formData.name,
  },
  {
    name: "email",
    label: "Tu correo electrónico",
    placeholder: "ejemplo@gmail.com",
    type: "email",
    value: formData.email,
  },
  {
    name: "subject",
    label: "Asunto",
    placeholder: "¡Solo diciendo hola!",
    type: "text",
    value: formData.subject,
  },
  {
    name: "message",
    label: "Mensaje",
    placeholder: "Tu mensaje...",
    type: "textarea",
    value: formData.message,
  },
];
