json.photo do 
  json.extract! @photo, :id, :title, :description, :created_at
  json.pxURL url_for(@photo.px)

  json.creator do 
    json.extract! @photo.creator, :id, :username, :fname, :lname, :photo_ids
  end

  json.comments do 
    @photo.comments.each do |comment|
      json.set! comment.id do
        json.extract! comment, :id, :body, :user_id, :photo_id
        json.extract! comment.user, :username
      end
    end
  end
end


# json.photo do

#     json.set! @photo.id do
#       json.extract! @photo, :id, :title, :description, :creator_id, :created_at, :comment_ids
#       json.pxURL url_for(@photo.px)
#     end

#     json.creator do 
#       json.extract! @photo.creator, :id, :username, :fname, :lname, :photo_ids
#     end

#     json.comments do 
#       @photo.comments.each do |comment|
#         json.set! comment.id do
#           json.extract! comment, :id, :body, :user_id, :photo_id, :user
#         end
#       end
#     end
# end

# json.users do 
#   json.byId do
#     json.set! @photo.creator.id do 
#       json.extract! @photo.creator, :id, :username, :fname, :lname, :photo_ids
#     end
#     @photo.comments.each do |comment|
#       json.set! comment.user.id do
#         json.extract! comment.user, :id, :username, :fname, :lname
#       end
#     end
#   end
# end

# json.comments do 
#   json.byId do
#     @photo.comments.each do |comment|
#       json.set! comment.id do
#         json.extract! comment, :id, :body, :user_id, :photo_id
#       end
#     end
#   end
# end