# Preview Image

## FileReader?

> **FileReader** 객체는 웹 애플리케이션이 비동기적으로 데이터를 읽기 위하여 읽을 파일을 가리키는File 혹은 Blob 객체를 이용해 파일의 내용을(혹은 raw data버퍼로) 읽고 사용자의 컴퓨터에 저장하는 것을 가능하게 해준다.

- type이 file인 input태그 `<input type="file" />` 또는 API 요청과 같은 File 또는 Blob 객체를 편리하게 처리할 수 있는 방법을 제공하는 객체
- abort, load, error와 같은 이벤트에서 발생한 프로세스를 처리하는데 주로 사용
- File 또는 Blob 객체를 읽어서 result 속성에 저장
- **비동기적**으로 동작

## FileReader 객체 생성 및 result 속성

`const fileReader = new FileReader()`

- readAsText() : 파일 객체의 내용을 텍스트로 읽음
- readAsDataURL() : 파일 객체를 읽은 후 데이터 URL으로 변환
- readAsArrayBuffer() : 파일 객체의 내용을 배열 버퍼로 읽음
- readAsBinaryString() : 파일 객체의 내용일 비트 문자열로 읽음

## FileReader.readAsDataURL()

> **readAsDataURL** 메서드는 컨텐츠를 특정 Blob 이나 File에서 읽어 오는 역할을 한다. 읽어오는 read 행위가 종료되는 경우에, readyState의 상태가 DONE이 되며, loadend 이벤트가 트리거 된다. 이와 함께, base64 인코딩 된 스트링 데이터가 result 속성(attribute)에 담아지게 된다.

## Code

```
import axios from 'axios';
import { useState } from 'react';

const UploadForm = () => {
  const [file, setFile] = useState();
  const [imgSrc, setImgSrc] = useState(null);

  const handleSelectFile = (event) => {
    const imageFile = event.target.files;
    setFile(imageFile);

    const fileReader = new FileReader();
    fileReader.readAsDataURL(imageFile[0]);
    fileReader.onload = () => setImgSrc(fileReader.result);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('image', file[0]);

    try {
      await axios.post('api/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onChange={handleSubmit}>
        <input type="file" onChange={handleSelectFile} />
        <button type="submit">Upload</button>
      </form>
      <img src={imgSrc} alt={imgSrc} />
    </>
  );
};

export default UploadForm;
```
