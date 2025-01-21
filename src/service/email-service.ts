import { EmailData } from "./interface/email-types";
import axios from "axios";

const sendEmail = async (formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): Promise<{ success: boolean; error?: string }> => {
  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;

  const data: EmailData = {
    service_id: serviceId,
    template_id: templateId,
    user_id: publicKey,
    template_params: {
      from_name: formData.name,
      to_name: "Kevin Villegas",
      subject: formData.subject,
      from_email: formData.email,
      message: formData.message,
      reply_to: formData.email,
    },
  };
  
  try {
    await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
    return { success: true };
  } catch (error: any) {
    console.error("Error al enviar el correo:", error);
    return { success: false, error: error.message };
  }
};

export default sendEmail;
