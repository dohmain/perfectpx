  json.extract! photo, :id, :title, :description, :creator_id, :created_at
  json.extract! photo.creator, :username
  json.pxURL url_for(photo.px)