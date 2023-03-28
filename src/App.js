import {
  SandpackProvider,
  SandpackLayout,
  SandpackTests,
  SandpackCodeEditor,
  SandpackConsole,
  SandpackPreview,
} from "@codesandbox/sandpack-react";

import { question } from "./question.js";

const files = {
  "/index.js": {
    code: question.code,
  },
  ...(question.test && {
    "/index.test.js": {
      code: question.test,
    },
  }),
};

const App = () => {
  return (
    <SandpackProvider files={files}>
      <SandpackLayout>
        <SandpackCodeEditor showLineNumbers showTabs />
      </SandpackLayout>
      <SandpackLayout>
        {question.tests && <SandpackTests verbose="true" />}
        {question.console && (
          <SandpackConsole resetOnPreviewRestart="true" standalone="true" />
        )}
        {question.preview && <SandpackPreview />}
      </SandpackLayout>
    </SandpackProvider>
  );
};

export default App;
