export interface TemplateParams {
  from_name: string;
  to_name: string;
  subject: string;
  from_email: string;
  message: string;
  reply_to: string;
}

export interface EmailData {
  service_id: string;
  template_id: string;
  user_id: string;
  template_params: TemplateParams;
}

export interface FormDate {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface FormErrors {
  name: string;
  email: string;
  subject: string;
  message: string;
}
