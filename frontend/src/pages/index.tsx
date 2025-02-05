import LoginForm from "../components/LoginForm";
import useLogin from "../hooks/useAuth";
import { NextPageExtended } from "./_app";

const Home: NextPageExtended = () => {
  const { authRedirect } = useLogin("/chat");
  authRedirect();
  return (
    <div className="grid grid-cols-3 h-screen">
      <div className="col-span-2 md:col-span-1 h-full">
        <div className="flex justify-between flex-col h-full p-5">
          <div>
            <div className="text-sm">
              <span>IBM</span>
              <span className="font-semibold"> Client Engineering - RAGstar Demo</span>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-[600px] p-5 md:p-10">
              <div className="pb-7">
                <div className="text-2xl pb-5">Welcome back!</div>
                <div className="text-sm text-gray-60 font-light">
                  Please enter your login details
                </div>
              </div>
              <LoginForm />
            </div>
          </div>
          <div className="text-xs font-light text-gray-60">
            IBM Client Engineering / © 2024 IBM Corporation
          </div>
        </div>
      </div>
      <div className="col-span-2">
        <img
          src="/illustration.png"
          alt="Illustration"
          style={{"height": "100%", "width": "100%"}}
        />
      </div>
    </div>
  );
};

Home.auth = {
  required: false,
};

export default Home;
