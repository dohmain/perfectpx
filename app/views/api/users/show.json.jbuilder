
json.user do 
  json.partial! 'api/users/user', user: @user
end

json.photos do
  @user.photos.each do |photo|
    json.set! photo.id do
      json.partial! 'api/photos/photo', photo: photo
    end
  end
end

json.comments do 
  @user.comments.each do |comment| 
    json.set! comment.id do 
      json.partial! 'api/comments/comment', comment: comment
    end
  end
end

json.follows do 
  json.followings do 
    @user.followings.each do |following|
      json.set! following.id do 
        json.partial! 'api/follows/follow', follow: following
      end
    end
  end
  json.followers do 
    @user.followers.each do |follower| 
      json.set! follower.id do 
        json.partial! 'api/follows/follow', follow: follower
      end
    end
  end
end