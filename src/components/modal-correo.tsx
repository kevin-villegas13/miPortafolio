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
      {/* Botón flotante con tooltip */}
      <Tooltip content="Enviar un correo">
        <a
          className="rounded-full border-2 border-white border-opacity-10 flex justify-center items-center gap-x-2 py-2 px-4 bg-white bg-opacity-5 hover:scale-110 hover:bg-opacity-10 transition dark:border-gray-700 dark:bg-black dark:bg-opacity-20 dark:hover:bg-opacity-40"
          onClick={onOpen}
        >
          <Mail size={20} />
        </a>
      </Tooltip>

      {/* Modal */}
      <Modal backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange}>
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4 sm:p-6 lg:p-8 backdrop-blur-sm bg-black/50">
          <ModalContent className="w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl bg-white text-black p-4 sm:p-6 md:p-8 rounded-lg shadow-lg dark:bg-black dark:text-white">
            {(onClose) => (
              <>
                {/* Encabezado del modal */}
                <ModalHeader className="text-center text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-6">
                  Conectemos
                </ModalHeader>
                <ModalBody>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-center">
                    ¡Las grandes cosas comienzan con un simple Hola! Ya sea que
                    seas un reclutador, un entusiasta de la tecnología o un
                    socio creativo, me encantaría saber de ti. Exploremos cómo
                    podemos traer ideas audaces a la vida juntos.
                  </p>

                  {/* Formulario */}
                  <Form
                    className="flex flex-col gap-4 sm:gap-6"
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
                      className="w-full p-3 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:text-white dark:placeholder-gray-400 dark:focus:ring-blue-400"
                    />

                    {/* Campo de asunto */}
                    <Input
                      isRequired
                      label="Asunto"
                      labelPlacement="outside"
                      name="subject"
                      placeholder="¡Solo diciendo hola!"
                      type="text"
                      variant="bordered"
                      className="w-full p-3 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:text-white dark:placeholder-gray-400 dark:focus:ring-blue-400"
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
                      className="w-full p-3 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:text-white dark:placeholder-gray-400 dark:focus:ring-blue-400"
                    />
                  </Form>
                </ModalBody>

                {/* Footer del modal */}
                <ModalFooter className="flex flex-col sm:flex-row justify-between gap-4 mt-4">
                  <Button
                    color="danger"
                    variant="light"
                    onPress={onClose}
                    className="w-full sm:w-auto dark:text-white dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600"
                  >
                    Cerrar
                  </Button>
                  <Button
                    color="primary"
                    onPress={onClose}
                    className="w-full sm:w-auto dark:bg-blue-500 dark:hover:bg-blue-600"
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
