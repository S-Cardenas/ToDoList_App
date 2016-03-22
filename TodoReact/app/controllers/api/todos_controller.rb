class Api::TodosController < ApplicationController

	def index
		@todos = Todo.all
		render json: @todos
	end

	def show
	end

	def create
		@todo = Todo.create!(todos_params)
		render json: @todo
	end

	def update
		@todo = Todo.find(params[:id])
		@todo.update!(todos_params)
		render json: @todo
	end

	def destroy
	end

	private

	def todos_params
		params.require(:todos).permit(:title, :body, :done)
	end

end
