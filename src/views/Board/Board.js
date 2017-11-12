import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import { toWrite, writePost } from '../../api/board';

class Board extends Component {
  constructor() {
    super();
    this.state = {
      writing: false
    };
    this.handleToWrite = this.handleToWrite.bind(this);
    this.handleWritePost = this.handleWritePost.bind(this);
  }

  handleToWrite(e) {
    e.preventDefault();
    toWrite(this);
  }

  handleWritePost(e) {
    e.preventDefault();
    writePost(e,this);
  }

  render() {
    if(this.state.writing)
      return (
        <div id="board-wrapper">
          <form onSubmit={this.handleWritePost}>
            제목 <input type='text' name='title'/><br/>
            내용 <input type='text' name='content'/><br/> //TODO 창 크기 바꾸기
            <input type='submit' value='post'/>
          </form>
        </div>
      );
    else
      return (
        <div id="board-wrapper">
          <button id="write-button" onClick={this.handleToWrite}>
            글쓰기
          </button>
          <div id="board-title-wrapper">
          //TODO map 함수이용하여 게시판 제목 리스트
          </div>
          <div id="board-search">
          //TODO
          </div>
        </div>
      );
  }
}

export default Board;
