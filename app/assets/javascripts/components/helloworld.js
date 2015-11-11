
var TodoLists = React.createClass({
  getInitialState: function(){
    return {
      <h1>Hello World</h1>
      todo_lists: this.props.todo_list,
    }
  },

  render: function(){
    var self = this;
    
    var listItems = "List Items";
	var show = "Show";
	var edit = "Edit";
	var destroy = "Destroy";

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
})