class ListsController < ApplicationController
  def index
    @lists = List.all
    @list = List.new
  end

  def create
    @list = List.new(list_params)
    if @list.save
      redirect_to list_path(@list)
    else
      redirect_to root_path, notice: "Cannot make a list without a name!"
    end
  end

  def show
    @list = List.find(params[:id])
    @tasks = @list.tasks
  end

  def destroy
    @list = List.find(params[:id])
    @list.destroy
    redirect_to root_path, notice: "List successfully destroyed."
  end

  private

    def list_params
      params.require(:list).permit(:name)
    end


end
