import { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Textarea,
  useDisclosure,
  Tooltip,
  Form,
} from "@heroui/react";
import { Mail } from "lucide-react";
import { formFields } from "@/config/forms-email";
import sendEmail from "../service/email-service";
import { validateForm } from "@/validations/formValidation";
import { ModalCorreoProps } from "@/interface/props/modal-correo.props";
import { FormDate, FormErrors } from "@/service/interface/email-types";

const ModalCorreo = ({ setShowConfetti }: ModalCorreoProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [formData, setFormData] = useState<FormDate>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [formErrors, setFormErrors] = useState<FormErrors>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSendEmail = async () => {
    const errors = validateForm(formData);
    setFormErrors(errors);

    if (Object.values(errors).some((error) => error)) return;

    setIsLoading(true);
    const { success } = await sendEmail(formData);

    if (success) {
      resetForm();
      onClose();
      showConfetti();
    }

    setIsLoading(false);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setFormErrors({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const showConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
    }, 10000);
  };

  const renderInputField = (field: {
    name: string;
    label: string;
    placeholder: string;
    type: string;
    value: string;
  }) => {
    const { name, label, placeholder, type, value } = field;
    const isTextarea = type === "textarea";
    const FieldComponent = isTextarea ? Textarea : Input;

    return (
      <FieldComponent
        key={name}
        isRequired
        label={label}
        labelPlacement="outside"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        variant="bordered"
        className="w-full"
        rows={isTextarea ? 4 : undefined}
        isInvalid={!!formErrors[name as keyof FormErrors]}
        errorMessage={formErrors[name as keyof FormErrors] || ""}
      />
    );
  };

  return (
    <>
      <Tooltip content="Enviar un correo">
        <a
          className="rounded-full border-2 border-white border-opacity-10 flex justify-center items-center gap-x-2 py-2 px-4 bg-white bg-opacity-5 hover:scale-110 hover:bg-opacity-10 transition dark:border-gray-700 dark:bg-black dark:bg-opacity-20 dark:hover:bg-opacity-40"
          onClick={onOpen}
        >
          <Mail size={20} />
        </a>
      </Tooltip>

      <Modal backdrop="blur" isOpen={isOpen} onOpenChange={onClose}>
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4 sm:p-6 lg:p-8 backdrop-blur-sm bg-black/50">
          <ModalContent className="w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl bg-white text-black p-4 sm:p-6 md:p-8 rounded-lg shadow-lg dark:bg-black dark:text-white">
            <ModalHeader className="text-center text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-6">
              Conectemos
            </ModalHeader>
            <ModalBody>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-center">
                ¡Las grandes cosas comienzan con un simple Hola! Ya sea que seas
                un reclutador, un entusiasta de la tecnología o un socio
                creativo, me encantaría saber de ti.
              </p>
              <Form
                className="flex flex-col gap-4 sm:gap-6"
                onSubmit={(e) => e.preventDefault()}
              >
                {formFields(formData).map(renderInputField)}
              </Form>
            </ModalBody>
            <ModalFooter className="flex flex-col sm:flex-row justify-between gap-4 mt-4">
              <Button
                color="danger"
                variant="light"
                onPress={onClose}
                className="w-full sm:w-auto"
              >
                Cerrar
              </Button>
              <Button
                color="primary"
                onPress={handleSendEmail}
                isDisabled={isLoading}
                className="w-full sm:w-auto"
              >
                {isLoading ? "Enviando..." : "Enviar"}
              </Button>
            </ModalFooter>
          </ModalContent>
        </div>
      </Modal>
    </>
  );
};

export default ModalCorreo;
