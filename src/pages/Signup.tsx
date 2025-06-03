import { useRef } from "react";
import { Input } from "../components/AddContentModal";
import Button from "../components/ui/Button";
import axios from "axios";
import { BACKEND_URI } from "../utils/config";
import { useNavigate } from "react-router";

const Signup = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const signup = async () => {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    await axios.post(BACKEND_URI + "/api/v1/signup", {
      username,
      password,
    });

    alert("U R Signup!!");
    navigate("/signin");
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-slate-400">
      <div className="w-72 bg-white rounded border p-8">
        <Input ref={usernameRef} placeholder="username" onChange={() => {}} />
        <Input ref={passwordRef} placeholder="password" onChange={() => {}} />
        <div className="flex justify-center p-4">
          <Button
            variant="primary"
            text="Signup"
            size="md"
            onClick={() => {
              signup();
            }}
            fullWidth={true}
            loading={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
