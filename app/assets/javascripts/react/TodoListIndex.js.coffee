{ div, h1, h2, p, ul, li, label, input, a, br } = React.DOM

TodoForm = React.createFactory React.createClass
  render: ->
    div className: 'form-group',
      br {} 
      label {}, 'Enter Todo'
      input className: 'form-control', placeholder: 'Title'
      input className: 'form-control', placeholder: 'Description'
      a className: 'btn btn-primary', 'Create Todo List' 

TodoListItem = React.createFactory React.createClass
  render: ->
    h2 {}, @props.todo_list.title,
      p {}, @props.todo_list.description,
      ul className: 'list-unstyled',
        li className: 'btn btn-primary', 'List Items'
        li className: 'btn btn-primary', 'Edit'
        li className: 'btn btn-primary', 'Destroy'

TodoList = React.createFactory React.createClass
  render: ->
    div {}, 
      _.map @props.todo_lists, (todo_list)=>
        TodoListItem(todo_list: todo_list)
        

window.TodoListIndex = React.createClass
  getInitialState: ->
    todo_lists: []

  componentWillMount: ->
    @setState(todo_lists: @props.todo_lists)

  render: ->
    div {}, 
      h1 {}, 'Todo Lists'  
      TodoList(todo_lists: @state.todo_lists)
      TodoForm()

