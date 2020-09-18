
json.user do 
  json.extract! @user, :id, :username, :email, :fname, :lname, :photo_ids, :comment_ids, :following_ids, :follower_ids
end

json.photos do
  @user.photos.each do |photo|
    json.set! photo.id do
      json.extract! photo, :id, :title, :description, :created_at
      json.pxURL url_for(photo.px)
    end
  end
end

json.comments do 
  @user.comments.each do |comment| 
    json.set! comment.id do 
      json.extract! comment, :id, :user_id, :photo_id, :body 
    end
  end
end

json.follows do 
  json.followings do 
    @user.followings.each do |following|
      json.set! following.id do 
        json.extract! following, :id, :follower_id, :followed_id
      end
    end
  end
  json.followers do 
    @user.followers.each do |follower| 
      json.set! follower.id do 
        json.extract! follower, :id, :follower_id, :followed_id
      end
    end
  end
end