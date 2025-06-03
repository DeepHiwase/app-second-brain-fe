import { X } from "lucide-react";
import Button from "./ui/Button";
import { useRef, type Ref } from "react";
import { useOnClickOutside } from "usehooks-ts";

const AddContentModal = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const ref = useRef(null);

  const handleClickOutside = () => {
    onClose();
  };

  // @ts-expect-error ref related error to solve
  useOnClickOutside(ref, handleClickOutside);

  return (
    <div>
      {open && (
        <div className="h-screen w-screen bg-slate-500 fixed top-0 left-0 opacity-60 flex items-center justify-center">
          <div
            ref={ref}
            className="bg-white w-70 h-90 rounded-sm relative opacity-100 flex justify-center items-center flex-col gap-2
          "
          >
            <div onClick={onClose}>
              <X className="absolute right-0 top-0 cursor-pointer" />
            </div>

            <Input placeholder="Link" />
            <Input placeholder="Title" />

            <Button
              variant="primary"
              text="Submit"
              size="md"
              onClick={() => {}}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AddContentModal;

export const Input = ({
  placeholder,
  onChange,
  ref,
}: {
  placeholder: string;
  onChange: () => void;
  ref?: Ref<HTMLInputElement>;
}) => {
  return (
    <input
      ref={ref}
      type="text"
      className="px-4 py-2 border-2"
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};
