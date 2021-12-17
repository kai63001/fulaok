const ImageUploadImgur = (
  blobInfo: any,
  success: any,
  failure: any,
  progress: any
) => {
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
};

export { ImageUploadImgur };
