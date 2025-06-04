import { X } from "lucide-react";
import Button from "./ui/Button";
import { useRef, useState, type Ref } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { BACKEND_URI } from "../utils/config";
import axios from "axios";

enum ContentType {
  Youtube = "youtube",
  Twitter = "twitter",
}

const AddContentModal = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const ref = useRef(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const [contentType, setContentType] = useState(ContentType.Youtube);

  const handleClickOutside = () => {
    onClose();
  };

  // @ts-expect-error ref related error to solve
  useOnClickOutside(ref, handleClickOutside);

  const addContent = async () => {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;

    await axios.post(
      BACKEND_URI + "/api/v1/content",
      {
        title,
        link,
        type: contentType,
      },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
  };

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
            <Input ref={linkRef} placeholder="Link" />
            <Input ref={titleRef} placeholder="Title" />
            Type
            <div className="flex gap-1 justify-center">
              <Button
                text="Twitter"
                onClick={() => {
                  setContentType(ContentType.Twitter);
                }}
                size="md"
                variant={
                  contentType === ContentType.Twitter ? "primary" : "secondary"
                }
              />
              <Button
                text="Youtube"
                onClick={() => {
                  setContentType(ContentType.Youtube);
                }}
                size="md"
                variant={
                  contentType === ContentType.Youtube ? "primary" : "secondary"
                }
              />
            </div>
            <Button
              variant="primary"
              text="Submit"
              size="md"
              onClick={() => {
                addContent();
              }}
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
  // onChange,
  ref,
}: {
  placeholder: string;
  // onChange: () => void;
  ref?: Ref<HTMLInputElement>;
}) => {
  return (
    <input
      ref={ref}
      type="text"
      className="px-4 py-2 border-2"
      placeholder={placeholder}
      // onChange={onChange}
    />
  );
};
