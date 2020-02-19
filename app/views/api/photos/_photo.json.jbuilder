  json.extract! photo, :id, :title, :description, :creator_id, :created_at
  json.creatorUser photo.creator.username
  json.creatorFName photo.creator.fname 
  json.creatorLName photo.creator.lname
  json.pxURL url_for(photo.px)