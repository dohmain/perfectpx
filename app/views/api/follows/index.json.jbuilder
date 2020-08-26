json.follows do 
  @follows.each do |follow|
    json.set! follow.id do 
      json.extract! follow, :id, :follower_id, :followed_id
      json.follower_username follow.follower.username
      json.followed_username follow.followed.username
    end
  end
end