json.photos do
    @photos.each do |photo|
        json.set! photo.id do
            json.partial! 'api/photos/photo', photo: photo
        end
    end
end


json.users do 
    @photos.each do |photo|
        json.set! photo.creator.id do 
            json.partial! 'api/users/user', user: photo.creator
        end
    end
end