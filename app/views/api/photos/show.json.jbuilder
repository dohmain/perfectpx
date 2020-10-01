json.photo do 
  json.partial! 'api/photos/photo', photo: @photo
  json.pxURL url_for(@photo.px)
end

json.user do 
  json.partial! 'api/users/user', user: @photo.creator
end

json.comments do 
  @photo.comments.each do |comment|
    json.set! comment.id do
      json.partial! 'api/comments/comment', comment: comment
    end
  end
end

json.follows do
  json.followings do 
    @photo.creator.followings.each do |following|
      json.set! following.id do 
        json.partial! 'api/follows/follow', follow: following
      end
    end
  end
  json.followers do 
    @photo.creator.followers.each do |follower| 
      json.set! follower.id do 
        json.partial! 'api/follows/follow', follow: follower
      end
    end
  end
end