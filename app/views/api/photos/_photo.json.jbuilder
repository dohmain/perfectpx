  json.extract! photo, :id, :title, :description, :creator_id, :created_at, :unsplashURL, :unsplashUserURL, :unsplashName, :comment_ids
  json.extract! photo.creator, :username
  json.pxURL url_for(photo.px)