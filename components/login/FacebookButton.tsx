import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { Firebase, db } from "@/lib/firebase";
// import router from "next/router";
import { doc, setDoc, Timestamp } from "firebase/firestore";

const FacebookButton = () => {
  const app = Firebase;
  const provider = new FacebookAuthProvider();
  provider.setCustomParameters({
    display: "popup",
  });
  const auth = getAuth();
  const login = () => {
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const user = result.user;

        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential?.accessToken;
        // router.push("/", undefined, { shallow: true });
        await setDoc(
          doc(db, "users", user.uid),
          {
            lastLogin:  new Date().getTime(),
          },
          { merge: true }
        );
        console.log(user.uid);
        window.location.href = "/";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = FacebookAuthProvider.credentialFromError(error);
      });
  };
  return (
    <button onClick={login} className="relative w-full">
      <div className="absolute inset-x-0 bottom-0 bg-blue-600 border border-blue-600 rounded-lg h-3" />
      <div
        className={`relative bottom-1  tracking-wider px-3 py-2 color-white border-2 border-blue-500 rounded-md transform active:translate-y-1 transition duration-200 ease-in-out
          bg-blue-500 text-white
        `}
      >
        <div className="flex justify-center">
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="24px"
            height="24px"
            viewBox="0 0 29.94 29.94"
            className="mt-1"
            xmlSpace="preserve"
          >
            <g>
              <path
                fill="#fff"
                d="M27.56,0.684H2.383C1.065,0.684,0,1.748,0,3.064v23.813c0,1.312,1.065,2.379,2.383,2.379H27.56
		c1.312,0,2.38-1.066,2.38-2.379V3.064C29.939,1.748,28.871,0.684,27.56,0.684z M20.125,9.167c-0.619-0.362-1.11-0.648-1.727-0.648
		c-0.604,0-1.12,0.151-1.384,0.405c-0.264,0.252-0.395,0.74-0.395,1.461v1.067h3.229l-0.699,2.968h-2.53v9.862h-4.056V14.42H10.67
		v-2.968h1.895v-1.133c0-1.193,0.143-1.907,0.425-2.496c0.281-0.587,0.826-1.241,1.584-1.611c0.757-0.369,1.877-0.555,3.036-0.555
		c1.188,0,2.116,0.396,3.254,0.715L20.125,9.167z"
              />
            </g>
          </svg>
          <p className="text-xl ml-5">Continue with Facebook</p>
        </div>
      </div>
    </button>
  );
};

export default FacebookButton;
