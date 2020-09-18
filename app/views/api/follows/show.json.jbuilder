json.follow do
  json.extract! @follow, :id, :follower_id, :followed_id
end

json.user do 
  json.extract! @follow.followed, :id, :username, :fname, :lname, :photo_ids, :following_ids, :follower_ids
end