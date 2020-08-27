class Api::PhotosController < ApplicationController
  def index
    @photos = Photo.with_attached_px.all.includes(:creator)
    render :index
  end

  def create
    @photo = Photo.new(photo_params)
    if @photo.save
      render :show
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def show 
    @photo = Photo.includes(:comments => [:user]).find(params[:id])
    render :show
  end

  private

  def photo_params
    params.require(:photo).permit(:title, :description, :creator_id, :px)
  end
end
