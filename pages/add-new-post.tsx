import Layout from "@/components/Layout";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { lang } from "@/lang/add-new-post.lang";
import { useEffect, useRef, useState } from "react";
import { ImageUploadImgur } from "@/lib/imageUploader";
import Button from "@/components/custom/Button";
const Editor = dynamic(
  //@ts-ignore
  () => import("@tinymce/tinymce-react").then((mod) => mod.Editor),
  { ssr: false }
);
import { db, Firebase } from "@/lib/firebase";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  Timestamp,
} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const AddNewPost = () => {
  const { locale = "en", push } = useRouter(); // locale lang
  const App = Firebase;
  const auth = getAuth();
  const [title, setTitle] = useState("");
  const [dataUri, setDataUri] = useState(""); //uri cover image
  const [dataCategory, setDataCategory]: any = useState({}); // data category from database
  const [category, setCategory]: any = useState({}); // data category input checkbox
  const [posted, setPosted] = useState(false); //
  const editorRef: any = useRef(null); // editor

  // const log = () => {
  //   if (editorRef.current) {
  //     console.log(editorRef.current.getContent());
  //   }
  // };
  const getCategory = async () => {
    const q = await getDocs(query(collection(db, "category")));
    setDataCategory(q);
  };

  useEffect(() => {
    getCategory();
  }, []);

  const [categoryChange, setCategoryChange] = useState(0);

  const fileToDataUri = (file: any) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        resolve(event.target.result);
      };
      reader.readAsDataURL(file);
    });

  const coverImageChange = (e: any) => {
    const file = e.target.files[0] || null;
    console.log(e.target.files[0]);
    if (!file) {
      setDataUri("");
      return;
    }

    fileToDataUri(file).then((dataUri: any) => {
      return setDataUri(dataUri);
    });
  };

  const test = (data: any) => {
    console.log(data);
  };

  const post = async () => {
    if (posted == false) {
      let categoryNow: string[] = [];
      Object.keys(category).forEach((data, i) => {
        if (category[data] == true) categoryNow.push(data);
      });
      const success = (data: string) => {
        console.log("success");
        addToDatabase(categoryNow, data);
      };
      await ImageUploadImgur(
        dataUri
          .replace(/data:image\/png;base64/g, "")
          .replace(/data:image\/jpg;base64/g, "")
          .replace(/data:image\/jpeg;base64/g, ""),
        success,
        test,
        test
      );
      setPosted(true);
    }
  };

  const addToDatabase = async (category: string[], image: string) => {
    try {
      console.log("addToDatabase()");
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const docRef = await addDoc(collection(db, "post"), {
            title,
            category,
            image,
            detail: editorRef.current.getContent(),
            userId: doc(db, "users/" + user.uid),
            date: new Date().getTime(),
          });
          console.log("Document written with ID: ", docRef.id);
          push(`/read/${docRef.id}`, undefined, { shallow: true });
        } else {
        }
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="md:col-span-4">
          <h1 className=" text-4xl mb-2">{lang["addNewPost"][locale]}</h1>
          <div className="">
            <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              className="toolbar-class mb-2 p-3 focus:outline-purple-500 w-full"
              placeholder={lang["entertitle"][locale]}
            />
          </div>
          <div className="toolbar-class cursor-text">
            <Editor
              //@ts-ignore
              apiKey="4v4ybw55eo7sjs4ymqodo9udgrfylqdzkuomq6qsqrfpobxl"
              onInit={(evt: any, editor: any) => (editorRef.current = editor)}
              init={{
                // height: 500,
                // autoresize_bottom_margin: 400,
                menubar: false,
                // image_caption: true,
                plugins: [
                  "advlist autolink lists link image charmap print preview anchor",
                  "searchreplace visualblocks code fullscreen",
                  "insertdatetime media table paste code help wordcount quickbars textcolor autoresize pageembed",
                ],
                toolbar:
                  "undo redo | preview | formatselect | fontsizeselect | link image pageembed |" +
                  "bold italic backcolor forecolor | alignleft aligncenter " +
                  "alignright alignjustify | bullist numlist outdent indent | " +
                  "removeformat ",
                mobile: {
                  plugins:
                    "print preview powerpaste casechange importcss tinydrive searchreplace autolink autosave save directionality advcode visualblocks visualchars fullscreen image link media mediaembed template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists checklist wordcount tinymcespellchecker a11ychecker textpattern noneditable help formatpainter pageembed charmap mentions quickbars linkchecker emoticons advtable",
                },
                quickbars_selection_toolbar:
                  "bold italic | quicklink h2 h3 blockquote quickimage quicktable",

                content_style:
                  '@import url("https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700&display=swap");body { font-family:Kanit; font-size:16px }',
                images_upload_handler: ImageUploadImgur,
              }}
            />
            {/* <button onClick={log}>Log editor content</button> */}
          </div>
        </div>
        <div className="rightDetail w-full">
          <div className="toolbar-class p-3 mb-3">
            <p className="mb-2">Publish</p>
            {dataUri.length > 0 ? (
              <label
                htmlFor="coverImage"
                className=" cursor-pointer rounded-md"
              >
                <img src={dataUri} className="rounded-md" width="100%" alt="" />
              </label>
            ) : (
              <label
                htmlFor="coverImage"
                className="bg-gray-200 p-3 flex h-32 w-full rounded-md border-2 border-gray-500 border-dashed cursor-pointer"
              >
                <div className="m-auto text-gray-700">Cover Image</div>
              </label>
            )}

            <input
              onChange={coverImageChange}
              accept="image/gif, image/jpeg, image/png"
              className="hidden"
              id="coverImage"
              type="file"
            />
            <div className="mt-2 flex justify-end">
              <div className="cursor-pointer" onClick={post}>
                <Button end={posted}>Publish</Button>
              </div>
            </div>
          </div>
          <div className="toolbar-class p-3 mb-3">
            <p className="mb-2">Categories</p>
            <div className="flex">
              <div
                onClick={() => setCategoryChange(0)}
                className={` px-2 py-1 cursor-pointer ${
                  categoryChange == 0 ? "bg-purple-500 text-white" : ""
                }`}
              >
                All Categories
              </div>
              <div
                onClick={() => setCategoryChange(1)}
                className={`px-2 py-1 cursor-pointer ${
                  categoryChange == 1 ? "bg-purple-500 text-white" : ""
                }`}
              >
                Most Used
              </div>
            </div>
            <div className="border p-2">
              {dataCategory.docs?.map((data: any, i: any) => {
                return (
                  <div key={i} className="form-check w-full mb-1">
                    <input
                      name={data.id}
                      id={data.id}
                      type="checkbox"
                      onChange={(e) =>
                        setCategory({
                          [e.target.name]: e.target.checked,
                        })
                      }
                      className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    />
                    <label
                      htmlFor={data.id}
                      className="ml-2 select-none	cursor-pointer"
                    >
                      {data.id}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps = async (ctx: any) => {
  const { req, res } = ctx;

  const { cookies } = req;
  // console.log(cookies);
  if (cookies.user == undefined) {
    return {
      redirect: {
        permanent: false,
        destination: "/sign-in",
      },
    };
  }
  return { props: {} };
};

export default AddNewPost;
