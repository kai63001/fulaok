import Layout from "@/components/Layout";
// import { Editor } from "@tinymce/tinymce-react";
// import { addDoc, collection, doc, setDoc } from "firebase/firestore";
// import { db } from "@/lib/firebase";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { lang } from "@/lang/add-new-post.lang";
import { useRef } from "react";
import { ImageUploadImgur } from "@/lib/imageUploader";
import Button from "@/components/custom/Button";
const Editor = dynamic(
  //@ts-ignore
  () => import("@tinymce/tinymce-react").then((mod) => mod.Editor),
  { ssr: false }
);

const AddNewPost = () => {
  const { locale = "en" } = useRouter();

  const editorRef: any = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
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
              className="toolbar-class mb-2 p-3 focus:outline-purple-500 w-full"
              placeholder={lang["entertitle"][locale]}
            />
          </div>
          <div className="toolbar-class">
            <Editor
              //@ts-ignore
              apiKey="4v4ybw55eo7sjs4ymqodo9udgrfylqdzkuomq6qsqrfpobxl"
              onInit={(evt: any, editor: any) => (editorRef.current = editor)}
              init={{
                // height: 500,
                // autoresize_bottom_margin: 400,
                menubar: false,
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
            <div className="bg-gray-200 p-3 flex h-32 w-full rounded-md border-2 border-gray-500 border-dashed cursor-pointer">
              <div className="m-auto text-gray-700">Cover Image</div>
            </div>
            <div className="mt-2 flex justify-end">
              <Button>Publish</Button>
            </div>
          </div>
          <div className="toolbar-class p-3 mb-3">
            <p className="mb-2">Categories</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps = async (ctx: any) => {
  const { req, res } = ctx;

  const { cookies } = req;
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
