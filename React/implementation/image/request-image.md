# Request Image

## FormData?

> FormData 인터페이스는 form 필드와 그 값을 나타내는 일련의 key/value 쌍을 쉽게 생성할 수 있는 방법  
> FormData란 HTML 단이 아닌 자바스크립트 단에서 폼 데이터를 다루는 객체라고 볼 수 있으며, HTML에서의 Submit제출 동작은 Ajax를 통해 서버에 제출한다고 볼 수 있다.

## 왜, 언제 FormData를 사용하는지?

- 보통 Ajax 통신에는 FormData가 아닌, JSON을 이용한 Key-Values 데이터를 전송
- HTML이 아닌 자바스크립트에서 form 전송 동작이 필요한 경우
- **이미지 같은 멀티미디어 파일의 폼 데이터를 다루고 싶을 때**

## FormData 생성 - new FormData()

## Code

```
import axios from 'axios';
import { useState } from 'react';

const UploadForm = () => {
  const [file, setFile] = useState();

  const handleSelectFile = (event) => {
    const imageFile = event.target.files;
    setFile(imageFile);
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
    <form onChange={handleSubmit}>
      <input type="file" onChange={handleSelectFile} />
      <button type="submit">Upload</button>
    </form>
  );
};

export default UploadForm;
```
