json.extract! @user, :id, :username, :email, :fname, :lname
json.photos do
  @user.photos.each do |photo|
    json.extract! photo, :id, :title, :description
    json.pxURL url_for(photo.px)
  end
end
