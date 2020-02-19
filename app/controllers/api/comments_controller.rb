class Api::CommentsController < ApplicationController
  def index
    @comments = Comment.all
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
  private

  def comment_params
      params.require(:comment).permit(:body, :user_id, :photo_id)
  end
end