  json.extract! photo, :id, :title, :description, :creator_id, :created_at
  json.pxURL url_for(photo.px)