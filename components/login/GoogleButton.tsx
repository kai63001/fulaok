import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import App from "@/lib/firebase";
import router from "next/router";

const GoogleButton = () => {
  const app = App;
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const login = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
        router.push("/", undefined, { shallow: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };
  return (
    <button onClick={login} className="relative mt-3 w-full">
      <div className="absolute inset-x-0 bottom-0 bg-red-600 border border-red-600 rounded-lg h-3" />
      <div
        className={`relative bottom-1  tracking-wider px-3 py-2 color-white border-2 border-red-500 rounded-md transform active:translate-y-1 transition duration-200 ease-in-out
            bg-red-500 text-white
          `}
      >
        <div className="flex justify-center">
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            className="mt-1"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g
              id="brand"
              stroke="none"
              strokeWidth="1"
              fill="#fff"
              fillRule="evenodd"
            >
              <g id="google" fill="#000000" fillRule="nonzero">
                <path
                  fill="#fff"
                  d="M11.99,13.9 L11.99,10.18 L21.35,10.18 C21.49,10.81 21.6,11.4 21.6,12.23 C21.6,17.94 17.77,22 12,22 C6.48,22 2,17.52 2,12 C2,6.48 6.48,2 12,2 C14.7,2 16.96,2.99 18.69,4.61 L15.85,7.37 C15.13,6.69 13.87,5.89 12,5.89 C8.69,5.89 5.99,8.64 5.99,12.01 C5.99,15.38 8.69,18.13 12,18.13 C15.83,18.13 17.24,15.48 17.5,13.91 L11.99,13.91 L11.99,13.9 Z"
                  id="Shape"
                ></path>
              </g>
            </g>
          </svg>
          <p className="text-xl ml-5">Continue with Google</p>
        </div>
      </div>
    </button>
  );
};

export default GoogleButton;
