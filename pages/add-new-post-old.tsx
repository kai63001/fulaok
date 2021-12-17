import Layout from "@/components/Layout";
import { convertToRaw, EditorState } from "draft-js";
import draftToHtml from "draftjs-to-html";

const Editor = dynamic(
  //@ts-ignore
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);
// import { addDoc, collection, doc, setDoc } from "firebase/firestore";
// import { db } from "@/lib/firebase";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import dynamic from "next/dynamic";
import { Component } from "react";
import {withRouter} from 'next/router';

import { lang } from "@/lang/add-new-post.lang";
 class ArticleEditor extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      editorState: EditorState.createEmpty(),
    };
  }

  onEditorStateChange: Function = (editorState: any) => {
    this.setState({
      editorState,
    });
  };

  uploadImageCallBack: Function = (file: any) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "https://api.imgur.com/3/image");
      xhr.setRequestHeader("Authorization", "Client-ID ac51ab827872866");
      const data = new FormData();
      data.append("image", file);
      xhr.send(data);
      xhr.addEventListener("load", () => {
        const response = JSON.parse(xhr.responseText);
        console.log(response);
        resolve(response);
      });
      xhr.addEventListener("error", () => {
        const error = JSON.parse(xhr.responseText);
        console.log(error);
        reject(error);
      });
    });
  };

  render() {
    const { editorState }: any = this.state;
    // console.log(this.props?.router.locale)
    // console.log(router)
    return (
      <Layout>
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
          <div className="col-span-4">
            <h1 className=" text-4xl mb-2">
              {lang["addNewPost"][this.props?.router.locale]}
            </h1>
            <div className="">
              <input
                type="text"
                className="toolbar-class mb-2 p-3 focus:outline-purple-500 w-full"
                placeholder={lang["entertitle"][this.props?.router.locale]}
              />
            </div>
            <Editor
              //@ts-ignore
              editorState={editorState}
              toolbarClassName="toolbar-class"
              wrapperClassName="wrapper-class"
              editorClassName="editor-class"
              onEditorStateChange={this.onEditorStateChange}
              handlePastedText={(test: any) => console.log(test)}
              // toolbarOnFocus
              toolbar={{
                options: [
                  "inline",
                  "blockType",
                  "fontSize",
                  "list",
                  "textAlign",
                  "colorPicker",
                  "link",
                  "embedded",
                  "emoji",
                  "image",
                  "history",
                ],
                inline: { inDropdown: true },
                list: { inDropdown: true },
                textAlign: { inDropdown: true },
                link: { inDropdown: true },
                history: { inDropdown: true },
                image: {
                  uploadCallback: this.uploadImageCallBack,
                  alt: { present: true, mandatory: true },
                  previewImage: true,
                },
              }}
            />
          </div>
          <div className="rightDetail">
            <div className="toolbar-class p-3">dasd</div>
          </div>
        </div>
        {/* <div
          dangerouslySetInnerHTML={{
            __html: draftToHtml(convertToRaw(editorState.getCurrentContent())),
          }}
        /> */}
        {/* <textarea
          disabled
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        /> */}
      </Layout>
    );
  }
}

  //@ts-ignore
export default withRouter(ArticleEditor)