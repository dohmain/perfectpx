json.follows do 
  @follows.each do |follow|
    json.set! follow.id do 
      json.extract! follow, :id, :follower_id, :followed_id
    end
  end
end