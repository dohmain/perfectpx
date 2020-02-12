class Api::SessionsController < ApplicationController
  before_action :ensure_logged_in!, only: [:destroy]

  def create 
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user 
      log_in!(@user)
      render 'api/users/show'
    else
      render json: ['Incorrect username or password'], status: 401
    end
  end 

  def destroy
    @user = current_user
    if @user
      log_out!
      render 'api/users/show'
    else
      render json: ['You are not logged in!'], status: 404
    end
  end
end