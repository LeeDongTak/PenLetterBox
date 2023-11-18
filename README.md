르세라핌 멤버들에게 펜레터를 보내는 프로젝트 입니다. 
props-drilling 으로 개발 하였고 context API, redux로 각각 리펙토링 하였습니다. 

상단에 멤버를 선택할 수 있는 버튼이 있고 멤버를 선텍하면 멤버에게 보낸 펜레터가 출력됩니다. 
선택한 맴버에게 펜레터를 보낼 때 닉네임과 펜레터 내용을 입력할 수 있는 input창이 있습니다.
만약 닉네임이 입력되지 않았거나 10글자 이상일때와 내용이 입력되지 않았거나 100글자 이상일 때 에러메세지가 화면에 출력됩니다. 
펜레터를 등록하였다면 펜레터를 검색할 수 있습니다. 검색 후 Enter를 누르면 검색이 되고 초기화 버튼을 누르면 검색결과와 검색어가 초기화 됩니다.
검색어가 입력되지 않았다면 에러 메시지가 출력됩니다. 
리스트는 로컬스토리지에 저장되어서 새로고침 후에도 등록한 리스트가 저장됩니다.
리스트를 클릭하면 해당 리스트의 detail 페이지로 이동되고 detail페이지 에서 수정과 삭제를 할 수 있습니다. 
수정 버튼을 클릭하면 수정을 위한 input창이 나요고 수정내용을 입력 후에 수정완료버튼을 클릭하여 수정할 수 있습니다. 
삭제버튼을 클릭하면 삭제가 가능합니다. 
수정과 삭제시 정말로 수정,삭제할거냐는 모달창이 출력되고 모달창에서 확인 버튼을 클릭해여 수정과 삭제가 완료됩니다. 
취소버튼과 바깥배경을 클릭하면 모달창이 사라집니다 
감사합니다.



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
