import {
  BlockEditorProvider,
  BlockList,
  WritingFlow,
  ObserveTyping
} from "@wordpress/block-editor";

import { useState } from "@wordpress/element";

import { registerCoreBlocks } from "@wordpress/block-library";

/**
 * begin: CSS Imports
 */
import "../../assets/styles/built-in/style.scss";
import "@wordpress/components/build-style/style.css";
import "@wordpress/block-editor/build-style/style.css";
/*
 * end: CSS Imports
 **/

registerCoreBlocks();

function App() {
  const [blocks, updateBlocks] = useState([]);

  console.log(blocks);

  return (
    <BlockEditorProvider
      value={blocks}
      onInput={updateBlocks}
      onChange={updateBlocks}
    >
      <WritingFlow>
        <ObserveTyping>
          <BlockList />
        </ObserveTyping>
      </WritingFlow>
    </BlockEditorProvider>
  );
}

export default App;
