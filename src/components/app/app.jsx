import {
  BlockEditorProvider,
  BlockList,
  WritingFlow,
  ObserveTyping,
  BlockEditorKeyboardShortcuts
} from "@wordpress/block-editor";
import { Popover } from "@wordpress/components";
import { useState, useEffect } from "@wordpress/element";
import { registerCoreBlocks } from "@wordpress/block-library";

import "../../assets/styles/built-in/style.scss";
import "@wordpress/components/build-style/style.css";
import "@wordpress/block-editor/build-style/style.css";

function App() {
  const [blocks, updateBlocks] = useState([]);

  console.log(blocks);

  useEffect(() => {
    registerCoreBlocks();
  }, []);

  return (
    <div className="playground">
      <BlockEditorProvider
        value={blocks}
        onInput={updateBlocks}
        onChange={updateBlocks}
      >
        <div className="editor-styles-wrapper">
          <BlockEditorKeyboardShortcuts />
          <WritingFlow>
            <ObserveTyping>
              <BlockList />
            </ObserveTyping>
          </WritingFlow>
        </div>
        <Popover.Slot />
      </BlockEditorProvider>
    </div>
  );
}

export default App;
