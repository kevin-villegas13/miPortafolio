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

const ModalCorreo = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Tooltip content="Enviar un correo">
        <a
          className="rounded-full border-2 border-white border-opacity-10 flex justify-center items-center gap-x-2 py-2 px-4 bg-white bg-opacity-5 hover:scale-110 hover:bg-opacity-10 transition"
          onClick={onOpen}
        >
          <Mail size={20} />
        </a>
      </Tooltip>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <ModalContent className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg w-full sm:max-w-md md:max-w-lg">
            {(onClose) => (
              <>
                <ModalHeader className="text-center text-2xl font-semibold mb-6">
                  Conectemos
                </ModalHeader>
                <ModalBody>
                  <p className="text-sm text-gray-600 mb-6 text-center">
                    ¡Las grandes cosas comienzan con un simple hola! Ya sea que
                    seas un reclutador, un entusiasta de la tecnología o un
                    socio creativo, me encantaría saber de ti. Exploremos cómo
                    podemos traer ideas audaces a la vida juntos.
                  </p>

                  <Form
                    className="flex flex-col gap-6"
                    validationBehavior="native"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    {/* Campo de correo electrónico */}
                    <Input
                      isRequired
                      label="Tu correo electrónico"
                      labelPlacement="outside"
                      name="email"
                      placeholder="ejemplo@gmail.com"
                      type="email"
                      variant="bordered"
                      className="w-full p-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />

                    {/* Campo de asunto */}
                    <Input
                      isRequired
                      label="Asunto"
                      labelPlacement="outside"
                      name="subject"
                      placeholder="¡Solo Diciendo hola!"
                      type="text"
                      variant="bordered"
                      className="w-full p-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />

                    {/* Campo de mensaje */}
                    <Textarea
                      isRequired
                      label="Mensaje"
                      labelPlacement="outside"
                      name="message"
                      placeholder="Tu mensaje..."
                      rows={4}
                      variant="bordered"
                      className="w-full p-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
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
                    onPress={onClose}
                    className="w-full sm:w-auto"
                  >
                    Enviar
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </div>
      </Modal>
    </>
  );
};

export default ModalCorreo;
