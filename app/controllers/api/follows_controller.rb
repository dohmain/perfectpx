class Api::FollowsController < ApplicationController

  before_action :ensure_logged_in!, only: [:create, :destroy] 

  def index 
    @follows = Follow.all.includes(:follower).includes(:followed)
    render :index
  end

  def show 
    @follow = Follow.find(params[:id])
  end 

  def create 
    @follow = Follow.new(follow_params)
    if @follow.save 
      render :show 
    else 
      render json: @follow.errors.full_messages, status: 422 
    end
  end 

  def destroy 
    @follow = Follow.find(params[:id])
    if @follow.destroy 
      render :show 
    else 
      render json: @follow.errors.full_messages, status: 422
    end
  end

  private

  def follow_params 
    params.require(:follow).permit(:follower_id, :followed_id)
  end

end