json.photos do 
    json.byId do 
        @photos.each do |photo|
            json.set! photo.id do
                json.partial! 'api/photos/photo', photo: photo
            end
        end
    end
end

json.users do 
    json.byId do 
        @photos.each do |photo|
            json.set! photo.creator.id do 
                json.extract! photo.creator, :id, :username, :email, :fname, :lname, :photo_ids
            end
        end
    end
end