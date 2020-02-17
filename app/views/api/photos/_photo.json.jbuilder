  json.extract! photo, :id, :title, :description, :creator_id
  json.pxURL url_for(photo.px)