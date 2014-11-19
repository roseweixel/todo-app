require 'pry'
class TasksController < ApplicationController

  def create
    @list = List.find(params[:list_id])
    @task = @list.tasks.build(task_params)
    
    if @task.save
      # redirect_to list_path(@list)
      respond_to do |f|
        #f.json { render json: @task }
        f.js
        #f.html { redirect_to list_path(@list) }
      end
    else
      redirect_to list_path(@list), notice: "Task needs a description!"
    end
  end

  def destroy
    @list = List.find(params[:list_id])
    @task = @list.tasks.find(params[:id])
    @task.destroy
  end

  private

    def task_params
      params.require(:task).permit(:description, :priority)
    end
end
