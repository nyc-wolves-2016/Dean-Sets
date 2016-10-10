class StaticController < ApplicationController

  def index
  end

end

# class TodoController < ApplicationController
#   def register
#     @todos = Todo.all
#     render component: 'TodoList', props: { todos: @todos }, tag: 'span', class: 'todo'
#   end
# end
