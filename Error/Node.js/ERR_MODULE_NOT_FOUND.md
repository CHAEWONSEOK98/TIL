# ERR_MODULE_NOT_FOUND

## # 에러내용

```
node:internal/errors:490
    ErrorCaptureStackTrace(err);
    ^

Error [ERR_MODULE_NOT_FOUND]: Cannot find module 'C:\Users\7dugo\Desktop\youtube-clone\server\controllers\user' imported from C:\Users\7dugo\Desktop\youtube-clone\server\routes\users.js
    at new NodeError (node:internal/errors:399:5)
    at finalizeResolution (node:internal/modules/esm/resolve:326:11)
    at moduleResolve (node:internal/modules/esm/resolve:945:10)
    at defaultResolve (node:internal/modules/esm/resolve:1153:11)
    at nextResolve (node:internal/modules/esm/loader:163:28)
    at ESMLoader.resolve (node:internal/modules/esm/loader:838:30)
    at ESMLoader.getModuleJob (node:internal/modules/esm/loader:424:18)
    at ModuleWrap.<anonymous> (node:internal/modules/esm/module_job:77:40)
    at link (node:internal/modules/esm/module_job:76:36) {
  code: 'ERR_MODULE_NOT_FOUND'
}
```

## #에러상황

```
[index.js]

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import userRoutes from './routes/users.js';

const app = express();
dotenv.config();

const connect = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log('Connected to DB');
    })
    .catch((err) => {
      throw err;
    });
};

app.use('/api/users', userRoutes);

app.listen(8800, () => {
  connect();
  console.log('Connected to Server');
});


[routes/users.js]

import express from 'express';
import { test } from '../controllers/user';

const router = express.Router();

router.get('/test', test);

export default router;
controller/user.js

export const test = () => {
  console.log('test is working');
};
```

## #에러해결

`[routes/users.js]`

`import {test} from "../controller/user" [X]`  
`import {test} from "../controller/user.js" [O]`

- Node.js에서 import 키워드를 사용하기 위해 "type":"module" 설정 후 import 키워드를 모듈로 사용
- ECMAScript 모듈을 사용하는 경우 파일 **확장자를 정확히 제공**해야함

> 참고: https://nodejs.org/api/esm.html#esm_mandatory_file_extensions
