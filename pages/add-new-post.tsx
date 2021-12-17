import Layout from "@/components/Layout";
import { Editor } from "@tinymce/tinymce-react";

// import { addDoc, collection, doc, setDoc } from "firebase/firestore";
// import { db } from "@/lib/firebase";

import dynamic from "next/dynamic";

import { useRouter } from "next/router";

import { lang } from "@/lang/add-new-post.lang";
import { useRef } from "react";

const AddNewPost = () => {
  const { locale = "en" } = useRouter();
  const editorRef: any = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  function imageUploader(
    blobInfo: any,
    success: any,
    failure: any,
    progress: any
  ) {
    var xhr: any, formData: any;

    xhr = new XMLHttpRequest();
    // xhr.withCredentials = false;
    xhr.open("POST", "https://api.imgur.com/3/image");
    xhr.setRequestHeader("Authorization", "Client-ID ac51ab827872866");
    xhr.upload.onprogress = function (e: any) {
      progress((e.loaded / e.total) * 100);
    };

    xhr.onload = function () {
      var json;
      // console.log(xhr)
      if (xhr.status === 403) {
        failure("HTTP Error: " + xhr.status, { remove: true });
        return;
      }

      if (xhr.status < 200 || xhr.status >= 300) {
        failure("HTTP Error: " + xhr.status);
        return;
      }

      json = JSON.parse(xhr.responseText);
      console.log(json.data);
      if (!json || typeof json.data.link != "string") {
        failure("Invalid JSON: " + xhr.responseText);
        return;
      }

      success(json.data.link);
    };

    xhr.onerror = function () {
      failure(
        "Image upload failed due to a XHR Transport error. Code: " + xhr.status
      );
    };

    formData = new FormData();
    formData.append("image", blobInfo.blob());

    xhr.send(formData);
  }
  return (
    <Layout>
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
        <div className="col-span-4">
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
              apiKey="4v4ybw55eo7sjs4ymqodo9udgrfylqdzkuomq6qsqrfpobxl"
              onInit={(evt, editor) => (editorRef.current = editor)}
              init={{
                height: 500,
                menubar: false,
                plugins: [
                  "advlist autolink lists link image charmap print preview anchor",
                  "searchreplace visualblocks code fullscreen",
                  "insertdatetime media table paste code help wordcount quickbars",
                ],
                toolbar:
                  "undo redo | preview | formatselect | fontsizeselect | link image |" +
                  "bold italic backcolor | alignleft aligncenter " +
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
                images_upload_handler: imageUploader,
              }}
            />
            {/* <button onClick={log}>Log editor content</button> */}
          </div>
        </div>
        <div className="rightDetail">
          <div className="toolbar-class p-3">dasad</div>
        </div>
      </div>
    </Layout>
  );
};

export default AddNewPost;
