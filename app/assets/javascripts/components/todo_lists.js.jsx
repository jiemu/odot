var TodoLists = React.createClass({
  getInitialState: function(){
    return {
      <h1>Hello World</h1>
      todo_lists: this.props.todo_list,
    }
  },

  render: function(){
    var self = this;
    
    var listItems = "List Items"
    var show = "Show"
    var edit = "Edit"
    var destroy = "Destroy"

    return (
      //SYNTAX: for each for todo_lists
      { this.state.todo_lists.map(function(todo_lists){
            return (
                <TodoList key={ todo_list.id } 
                    todo_list={ todo_list } />

                <div className="container">
                <h2> { todo_list.title }</h2>
                <p>  { todo_list.description }</p>  
          
                <ul class="functions">
                  //path syntax for reactjs
                  <li><a href={todo_list_todo_items_path(todo_list)}>listItems</a></li>
                      
                  <li><a href={todo_list}>show</a></li>
                      
                  <li><a href={edit_todo_list_path(todo_list)}>edit</a></li>
                  //jsx for destroy
                  <li><%= link_to 'Destroy', todo_list, method: :delete, data: { confirm: 'Are you sure?' } %></li>
                </ul>
                </div>
            )
       }
     )}
    )
  }
});

var TodoLists = React.createClass({
    render: function() {
        getInitialState: function(){
            return { todo_lists: this.todo_lists.initialTodoLists };
        }

        return (
            <div className="todo_lists">
                <>
                <TodoLists post={this.props.post} />
            </div>
        );
    }
});

var TodoItems = React.createClass({
    render: function() {
        return (
            var posts = this.state.todo_items.map(function(todo_item) {
                return <TodoItems key={todo_item.id} todo_item={todo_item} />;
            });
            <TodoItems key={ todo_item.id } 
                    todo_item={ todo_item } />
            <tr id="<%= dom_id(todo_item) %>">
            <td>
              if (this.props.todo_item) { //if completed
                  this.state.todo_item.completed.at//completed_at
              } else {
                  <%= link_to "Mark Complete", complete_todo_list_todo_item_path(todo_item), method: :patch %>
              }
            </td>
            <td><%= todo_item.content %></td>
            <td>
              <%= link_to "Edit", edit_todo_list_todo_item_path(todo_item) %>
              <%= link_to "Delete", todo_list_todo_item_path(todo_item), method: :delete, data: { confirm: "Are you sure?" } %>
            </td>
          </tr>
        );
    }
});

var TodoApp = React.createClass({
    getInitialState: function(){
        return {items: []};
    }
    render: function() {
        return (
            <div className="todoListBox">
                <h1>Odot</h1>
                <TodoLists />
            </div>
        );
    }
});

React.render(<TodoApp />, document.body);



