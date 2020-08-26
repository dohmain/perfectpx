class Api::FollowsController < ApplicationController

  before_action :ensure_logged_in!, only: [:create, :destroy] 

  def index 
    @follows = Follow.all
    render :index
  end

  def show 

  end 

  def create 

  end 

  def destroy 

  end


end