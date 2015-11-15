{ div, h1, h2, p, ul, li } = React.DOM


window.TodoListIndex = React.createClass
  render: ->
    div {}, 
      h1 {}, 'Todo Lists'
        _.map @props.todo_lists, (todo_list)=>
          h2 {}, todo_list.title,
          p {}, todo_list.description,
          ul className: 'list-unstyled',
            li className: 'btn btn-primary', 'List Items'
            li className: 'btn btn-primary', 'Edit'
            li className: 'btn btn-primary', 'Destroy'
