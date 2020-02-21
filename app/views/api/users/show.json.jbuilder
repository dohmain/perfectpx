json.users do 
  json.set! @user.id do 
    json.extract! @user, :id, :username, :email, :fname, :lname, :photo_ids
  end
end

json.photos do
  @user.photos.each do |photo|
    json.set! photo.id do
      json.extract! photo, :id, :title, :description
      json.pxURL url_for(photo.px)
    end
  end
end
