json.follows do
  json.followers do 
    json.set! @follow.id do 
      json.extract! @follow, :id, :follower_id, :followed_id
    end
  end
  # json.followers do 
  #   debugger
  #   @follow.follower.each do |follower|
  #     json.extract! @follow, :id, :follower_id, :followed_id
  #   end
  # end
end

json.user do 
  json.extract! @follow.followed, :id, :username, :fname, :lname, :photo_ids, :following_ids, :follower_ids
end