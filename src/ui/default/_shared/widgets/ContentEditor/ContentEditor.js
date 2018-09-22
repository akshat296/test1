import React from 'react';
import {
  Editor,
  EditorState,
  RichUtils,
  convertFromRaw,
  convertToRaw,
  SelectionState,
  BlockMapBuilder,
  Modifier,
  CharacterMetadata,
  DefaultDraftBlockRenderMap
} from 'draft-js';
import { Map } from 'immutable';
import './ContentEditor.scss';
import { LinkRenderer } from './CustomRenderers';

const styleMap = {
  STRIKETHROUGH: {
    textDecoration: 'line-through'
  }
};

const customBlockRendererMap = Map({
  link: {
    element: 'a',
    wrapper: LinkRenderer
  }
});

const mergedBlockRendererMap = DefaultDraftBlockRenderMap.merge(customBlockRendererMap);

class ContentEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createWithContent(props.value) };
    this.blockStyler = this.blockStyler.bind(this);
    this.handleBlockAlignment = this.handleBlockAlignment.bind(this);
    this.handleStack = this.handleStack.bind(this);
  }

  clearContent() {
    this.setState({ editorState: EditorState.createEmpty() });
  }

  onChange(editorState) {
    this.setState({ editorState }, () => {
      if (this.props.onChange) {
        this.props.onChange(this.state.editorState.getCurrentContent());
      }
    });
  }

  handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }

  handleInlineStyleToggle(e) {
    const command = e.target.getAttribute('data-command');
    const removeStyles = [];
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, command));
  }

  handleBlockTypeToggle(e) {
    const command = e.target.getAttribute('data-command');
    this.onChange(RichUtils.toggleBlockType(this.state.editorState, command));
  }

  // Method to apply class to block being rendered
  // based on some conditions.
  // Alternative to styleMap defined above.
  blockStyler(block) {
    let style = 'left';
    block.findStyleRanges(function(e) {
      if (e.hasStyle('center')) style = 'center';
      if (e.hasStyle('right')) style = 'right';
    });
    return `alignment-${style}`;
  }

  // Get selected block meta data.
  getBlockMeta(editorState) {
    let currentContentState = editorState.getCurrentContent();
    let currentSelection = editorState.getSelection();
    let focusBlock = currentContentState.getBlockForKey(currentSelection.getFocusKey());
    let anchorBlock = currentContentState.getBlockForKey(currentSelection.getAnchorKey());
    let selectionIsBackward = currentSelection.getIsBackward();
    let changes = {
      anchorOffset: 0,
      focusOffset: focusBlock.getLength()
    };

    if (selectionIsBackward) {
      changes = {
        focusOffset: 0,
        anchorOffset: anchorBlock.getLength()
      };
    }

    let block = currentSelection.merge(changes);

    return {
      focusBlock,
      anchorBlock,
      currentSelection,
      block
    };
  }

  // Handle per block alignment command button clicks.
  handleBlockAlignment(event) {
    event.preventDefault();
    event.stopPropagation();
    const command = event.currentTarget.getAttribute('data-command');
    let removeStyles = [];
    const editorState = this.state.editorState;
    const blockMeta = this.getBlockMeta(editorState);

    let modifiedContent = Modifier.applyInlineStyle(editorState.getCurrentContent(), blockMeta.block, command);
    switch (command) {
      case 'left':
        removeStyles = ['center', 'right'];
        break;
      case 'center':
        removeStyles = ['left', 'right'];
        break;
      case 'right':
        removeStyles = ['left', 'center'];
        break;
    }

    let finalContentState = removeStyles.reduce(function(content, command) {
      return Modifier.removeInlineStyle(content, blockMeta.block, command);
    }, modifiedContent);
    this.onChange(EditorState.push(editorState, finalContentState, 'change-inline-style'));
  }

  // Handle undo and redo commands from button click.
  handleStack(event) {
    event.preventDefault();
    event.stopPropagation();
    const command = event.currentTarget.getAttribute('data-command');
    this.onChange(EditorState[command](this.state.editorState));
  }

  handleLinkInsertion(event) {
    event.stopPropagation();
    event.preventDefault();
    alert('TODO: Handle link insertion.');
  }

  handleImageInsertion(event) {
    event.preventDefault();
    event.stopPropagation();
    alert('TODO: Handle image insertion.');
  }

  render() {
    return (
      <div className="editor">
        <form>
          <ul className="toolbar" style={{}}>
            <li>
              <div className="btn-group">
                <a
                  onClick={this.handleInlineStyleToggle.bind(this)}
                  className="btn btn-sm btn-default"
                  data-command="BOLD"
                  title="Bold"
                  href="javascript:;"
                >
                  <span className="fa fa-bold" />
                </a>
                <a
                  onClick={this.handleInlineStyleToggle.bind(this)}
                  className="btn btn-sm btn-default"
                  data-command="ITALIC"
                  title="Italic"
                  href="javascript:;"
                >
                  <span className="fa fa-italic" />
                </a>
                <a
                  onClick={this.handleInlineStyleToggle.bind(this)}
                  className="btn btn-sm btn-default"
                  data-command="UNDERLINE"
                  title="Underline"
                  href="javascript:;"
                >
                  <span className="fa fa-underline" />
                </a>
                <a
                  onClick={this.handleInlineStyleToggle.bind(this)}
                  className="btn btn-sm btn-default"
                  data-command="STRIKETHROUGH"
                  title="Strikethrough"
                  href="javascript:;"
                >
                  <span className="fa fa-strikethrough" />
                </a>
              </div>
            </li>
            <li>
              <div className="btn-group">
                <a
                  onClick={this.handleBlockTypeToggle.bind(this)}
                  className="btn btn-sm btn-default"
                  data-command="unordered-list-item"
                  title="Unordered list"
                  href="javascript:;"
                >
                  <span className="fa fa-list-ul" />
                </a>
                <a
                  onClick={this.handleBlockTypeToggle.bind(this)}
                  className="btn btn-sm btn-default"
                  data-command="ordered-list-item"
                  title="Ordered list"
                  href="javascript:;"
                >
                  <span className="fa fa-list-ol" />
                </a>
              </div>
            </li>
            <li>
              <div className="btn-group">
                <a
                  onClick={this.handleBlockAlignment}
                  className="btn btn-sm btn-default"
                  data-command="left"
                  title="Align left"
                  href="javascript:;"
                >
                  <span className="fa fa-align-left" />
                </a>
                <a
                  onClick={this.handleBlockAlignment}
                  className="btn btn-sm btn-default"
                  data-command="center"
                  title="Align center"
                  href="javascript:;"
                >
                  <span className="fa fa-align-center" />
                </a>
                <a
                  onClick={this.handleBlockAlignment}
                  className="btn btn-sm btn-default"
                  data-command="right"
                  title="Align right"
                  href="javascript:;"
                >
                  <span className="fa fa-align-right" />
                </a>
              </div>
            </li>
            <li>
              <div className="btn-group">
                <a
                  onClick={this.handleLinkInsertion}
                  className="btn btn-sm btn-default"
                  title="Add Link"
                  href="javascript:;"
                >
                  <span className="fa fa-link" />
                </a>
                <a
                  onClick={this.handleImageInsertion}
                  className="btn btn-sm btn-default"
                  title="Add Image"
                  href="javascript:;"
                >
                  <span className="fa fa-image" />
                </a>
              </div>
            </li>
            <li>
              <div className="btn-group">
                <a
                  onClick={this.handleStack}
                  className="btn btn-sm btn-default"
                  data-command="undo"
                  title="Undo"
                  href="javascript:;"
                >
                  <span className="fa fa-undo" />
                </a>
                <a
                  onClick={this.handleStack}
                  className="btn btn-sm btn-default"
                  data-command="redo"
                  title="Redo"
                  href="javascript:;"
                >
                  <span className="fa fa-undo flipY" />
                </a>
              </div>
            </li>
          </ul>
        </form>
        <div>
          <Editor
            customStyleMap={styleMap}
            editorState={this.state.editorState}
            handleKeyCommand={this.handleKeyCommand.bind(this)}
            onChange={this.onChange.bind(this)}
            blockStyleFn={this.blockStyler}
            blockRendererMap={mergedBlockRendererMap}
          />
        </div>
      </div>
    );
  }
}

export default ContentEditor;
