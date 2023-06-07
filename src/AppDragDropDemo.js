import React, { Component } from 'react';

export default class AppDragDropDemo extends Component {
  state = {
    tasks: [
      {
        name: "Learn Angular",
        category: "wip",
        bgcolor: "yellow"
      },
      {
        name: "React",
        category: "wip",
        bgcolor: "pink"
      },
      {
        name: "Vue",
        category: "complete",
        bgcolor: "skyblue"
      },
      {
        name: "Another complete task",
        category: "complete",
        bgcolor: "skyblue"
      },
      {
        name: "A third complete task",
        category: "complete",
        bgcolor: "skyblue"
      },
      {
        name: "a second WIP",
        category: "wip",
        bgcolor: "pink"
      },
      {
        name: "third WIP",
        category: "wip",
        bgcolor: "pink"
      },
    ]
  };

  onDragStart = (ev, id) => {
    console.log('dragstart:', id);
    ev.dataTransfer.setData('text/plain', id);
  };

  render() {
    var tasks = {
      wip: [],
      complete: []
    };

    this.state.tasks.forEach((t) => {
      tasks[t.category].push(
        <div
          key={t.name}
          onDragStart={(e) => this.onDragStart(e, t.name)}
          draggable
          className='draggable'
          style={{ backgroundColor: t.bgcolor }}
        >
          {t.name}
        </div>
      );
    });

    return (
      <div className="container-drag">
        <h2 className='header'>DRAG & DROP DEMO</h2>
        <div className='wip'>
          <span className='task-header'>WIP</span>
          {tasks.wip}
        </div>
        <div className='droppable'
          onDragOver={(e) => this.onDragOver(e)}>
          <span className='task-header'>COMPLETED</span>
          {tasks.complete}
        </div>
      </div >
    );
  }
}