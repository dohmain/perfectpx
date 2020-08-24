class Api::CommentsController < ApplicationController
  def index
    if (params[:photo_id]) 
      @comments = Comment.where('photo_id' => params[:photo_id])
    elsif (params[:user_id])
      @comments = Comment.where('user_id' => params[:user_id])
    end
    render :index
  end

  def create
      @comment = Comment.new(comment_params)
      if @comment.save
          render :show
      else
          render json: @comment.errors.full_messages, status: 422 
      end
  end

  def show 
    @comment = Comment.find(params[:id])
    render :show
  end

  private

  def comment_params
      params.require(:comment).permit(:body, :user_id, :photo_id)
  end
end