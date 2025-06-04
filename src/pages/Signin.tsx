import { useRef } from "react";
import { Input } from "../components/AddContentModal";
import Button from "../components/ui/Button";
import axios from "axios";
import { BACKEND_URI } from "../utils/config";
import { useNavigate } from "react-router";

const Signin = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const signin = async () => {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    const response = await axios.post(BACKEND_URI + "/api/v1/signin", {
      username,
      password,
    });

    const jwt = response.data.token;
    localStorage.setItem("token", jwt);

    navigate("/");
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-slate-400">
      <div className="w-72 bg-white rounded border p-8">
        <Input ref={usernameRef} placeholder="username" />
        <Input ref={passwordRef} placeholder="password" />
        <div className="flex justify-center p-4">
          <Button
            variant="primary"
            text="Signin"
            size="md"
            onClick={() => {
              signin();
            }}
            fullWidth={true}
            loading={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Signin;
