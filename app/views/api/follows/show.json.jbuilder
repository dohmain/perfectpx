json.follows do
  json.followers do 
    json.set! @follow.id do 
      json.partial! 'api/follows/follow', follow: @follow
    end
  end
end

json.user do 
  json.partial! 'api/users/user', user: @follow.followed
end

json.session do 
  json.partial! 'api/users/user', user: @follow.follower
end