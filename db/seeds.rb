require 'open-uri'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Photo.destroy_all

user1 = User.create!(email: 'doh@mail.com', password: 'hunter2020', username: 'doh', fname: 'Joe', lname: 'Doh')
user2 = User.create!(email: 'krapman@mail.com', password: 'hunter2020', username: 'kraPmaN', fname: 'Nam', lname: 'Park')
user3 = User.create!(email: 'neo@matrix', password: 'hunter2020', username: 'Neo', fname: 'Thomas', lname: 'Anderson')
user4 = User.create!(email: 'jules@pulp.com', password: 'hunter2020', username: 'The Shepherd', fname: 'Jules', lname: 'Winnfield')
user5 = User.create!(email: 'kiddo@mail.com', password: 'hunter2020', username: 'The Bride', fname: 'Beatrix', lname: 'kiddo')
user6 = User.create!(email: 'hpotter@hogs.com', password: 'hunter2020', username: 'HPotter', fname: 'Harry', lname: 'Potter')
user7 = User.create!(email: 'wolverine@xmen.com', password: 'hunter2020', username: 'Wolverine', fname: 'Logan', lname: 'Fowler')
user8 = User.create!(email: 'tony@stark.com', password: 'hunter2020', username: 'Ironman', fname: 'Tony', lname: 'Stark')
user9 = User.create!(email: 'widow@avengers.com', password: 'hunter2020', username: 'Black Widow', fname: 'Natasha', lname: 'Romanova')
user10 = User.create!(email: 'selene@coven.com', password: 'hunter2020', username: 'Selene', fname: '', lname: '')
user11 = User.create!(email: 'kapow@bayside.edu', password: 'hunter2020', username: 'kapow', fname: 'Kelly', lname: 'Kapowski')
user12 = User.create!(email: 'demo@demo.com', password: 'hunter2020', username: 'Demo User', fname: 'Demo', lname: 'User')

px1 = Photo.create!(title: 'Snowy Mountain', description: 'Snow covered mountain in front of stars', creator_id: user1.id)
file1 = open('https://perfectpx-seeds.s3.amazonaws.com/black_white_mountain.jpg')
px1.px.attach(io: file1, filename: 'black_white_mountain.jpg')

px2 = Photo.create!(title: 'Littlefinger Beach', description: 'Aerial view of littlefinger beach', creator_id: user2.id)
file2 = open('https://perfectpx-seeds.s3.amazonaws.com/littlefinger_beach.jpg')
px2.px.attach(io: file2, filename: 'littlefinger_beach.jpg')

px3 = Photo.create!(title: 'Hot Air Balloons', description: 'Two hot air balloons floating', creator_id: user3.id)
file3 = open('https://perfectpx-seeds.s3.amazonaws.com/hot_air_balloons.jpg')
px3.px.attach(io: file3, filename: 'hot_air_balloons.jpg')

px4 = Photo.create!(title: 'Moonlight', description: 'Moon over mountain silhouette', creator_id: user4.id)
file4 = open('https://perfectpx-seeds.s3.amazonaws.com/moon_mountains.jpg')
px4.px.attach(io: file4, filename: 'moon_mountains.jpg')

px5 = Photo.create!(title: 'Miami', description: 'Sunset and palm trees', creator_id: user5.id)
file5 = open('https://perfectpx-seeds.s3.amazonaws.com/palmtree_sunset.jpg')
px5.px.attach(io: file5, filename: 'palmtree_sunset.jpg')

px6 = Photo.create!(title: 'Swiss Mountains', description: 'Snow-capped mountains of Switzerland', creator_id: user6.id)
file6 = open('https://perfectpx-seeds.s3.amazonaws.com/swiss_mountains.jpg')
px6.px.attach(io: file6, filename: 'swiss_mountains.jpg')

px7 = Photo.create!(title: 'Offroading', description: 'SUV driving over water', creator_id: user7.id)
file7 = open('https://perfectpx-seeds.s3.amazonaws.com/suv_on_water.jpg')
px7.px.attach(io: file7, filename: 'suv_on_water.jpg')

px8 = Photo.create!(title: 'Lakeside', description: 'Couple of old lakeside houses', creator_id: user8.id)
file8 = open('https://perfectpx-seeds.s3.amazonaws.com/lakeside_houses.jpg')
px8.px.attach(io: file8, filename: 'lakeside_houses.jpg')

px9 = Photo.create!(title: 'Bali Beach', description: 'Aerial shot of a beach in Bali', creator_id: user9.id)
file9 = open('https://perfectpx-seeds.s3.amazonaws.com/bali_aerial_shot.jpg')
px9.px.attach(io: file9, filename: 'bali_aerial_shot.jpg')

px10 = Photo.create!(title: 'Denmark National Aquarium', description: 'Entrance way to the Denmark National Aquarium', creator_id: user10.id)
file10 = open('https://perfectpx-seeds.s3.amazonaws.com/denmark_national_aquarium.jpg')
px10.px.attach(io: file10, filename: 'denmark_national_aquarium.jpg')

px11 = Photo.create!(title: 'Skyscrapers', description: 'Skyscrapers in the Toronto financial district', creator_id: user11.id)
file11 = open('https://perfectpx-seeds.s3.amazonaws.com/toronto_skyscrapers.jpg')
px11.px.attach(io: file11, filename: 'toronto_skyscrapers.jpg')

px12 = Photo.create!(title: 'Summer Palm Trees', description: 'Green Palm Trees from below', creator_id: user12.id)
file12 = open('https://perfectpx-seeds.s3.amazonaws.com/green_palmtree.jpg')
px12.px.attach(io: file12, filename: 'green_palmtree.jpg')

px13 = Photo.create!(title: 'Vintage Ride', description: 'Red leather interior of vintage car', creator_id: user1.id)
file13 = open('https://perfectpx-seeds.s3.amazonaws.com/vintage_red_interior.jpg')
px13.px.attach(io: file13, filename: 'vintage_red_interior.jpg')

px14 = Photo.create!(title: 'Prairie House', description: 'Prairie house on slanted hillside', creator_id: user2.id)
file14 = open('https://perfectpx-seeds.s3.amazonaws.com/hillside_house.jpg')
px14.px.attach(io: file14, filename: 'hillside_house.jpg')

px15 = Photo.create!(title: 'Footbridge', description: 'Footbridge at Whangarie Falls', creator_id: user3.id)
file15 = open('https://perfectpx-seeds.s3.amazonaws.com/whangarie_falls_footbridge.jpg')
px15.px.attach(io: file15, filename: 'whangarie_falls_footbridge.jpg')

px16 = Photo.create!(title: 'Frozen Village', description: 'Winter village in Norway', creator_id: user4.id)
file16 = open('https://perfectpx-seeds.s3.amazonaws.com/norway_village.jpg')
px16.px.attach(io: file16, filename: 'norway_village.jpg')

px17 = Photo.create!(title: 'Nightlight', description: 'USA at night from space', creator_id: user5.id)
file17 = open('https://perfectpx-seeds.s3.amazonaws.com/usa_at_night.jpg')
px17.px.attach(io: file17, filename: 'usa_at_night.jpg')

px18 = Photo.create!(title: 'Wave', description: 'Shot of small wave on ocean surface', creator_id: user6.id)
file18 = open('https://perfectpx-seeds.s3.amazonaws.com/ocean_wave.jpg')
px18.px.attach(io: file18, filename: 'ocean_wave.jpg')

px19 = Photo.create!(title: 'Leaves', description: 'Green-blue leaves', creator_id: user7.id)
file19 = open('https://perfectpx-seeds.s3.amazonaws.com/green_blue_leaves.jpg')
px19.px.attach(io: file19, filename: 'green_blue_leaves.jpg')

px20 = Photo.create!(title: 'Ferns', description: 'Sea of green ferns', creator_id: user8.id)
file20 = open('https://perfectpx-seeds.s3.amazonaws.com/green_ferns.jpg')
px20.px.attach(io: file20, filename: 'green_ferns.jpg')

px21 = Photo.create!(title: 'Eye', description: 'Architectural eye', creator_id: user9.id)
file21 = open('https://perfectpx-seeds.s3.amazonaws.com/architectural_eye.jpg')
px21.px.attach(io: file21, filename: 'architectural_eye.jpg')

px22 = Photo.create!(title: 'Beach Drive', description: 'Audi driving down beach-side road', creator_id: user10.id)
file22 = open('https://perfectpx-seeds.s3.amazonaws.com/audi_beach.jpg')
px22.px.attach(io: file22, filename: 'audi_beach.jpg')

px23 = Photo.create!(title: 'Bear', description: 'Big brown bear', creator_id: user11.id)
file23 = open('https://perfectpx-seeds.s3.amazonaws.com/brown_bear.jpg')
px23.px.attach(io: file23, filename: 'brown_bear.jpg')

px24 = Photo.create!(title: 'Dolphins', description: 'Small pod of three dolphins', creator_id: user12.id)
file24 = open('https://perfectpx-seeds.s3.amazonaws.com/triple_dolphins.jpg')
px24.px.attach(io: file24, filename: 'triple_dolphins.jpg')

px25 = Photo.create!(title: 'Winding Road', description: 'Road winding through a forest', creator_id: user1.id)
file25 = open('https://perfectpx-seeds.s3.amazonaws.com/winding_road.jpg')
px25.px.attach(io: file25, filename: 'winding_road.jpg')

px26 = Photo.create!(title: 'Giraffe Head', description: 'Just the tip', creator_id: user2.id)
file26 = open('https://perfectpx-seeds.s3.amazonaws.com/giraffe_head.jpg')
px26.px.attach(io: file26, filename: 'giraffe_head.jpg')

px27 = Photo.create!(title: 'Empire State', description: 'Empire State Building - NYC', creator_id: user3.id)
file27 = open('https://perfectpx-seeds.s3.amazonaws.com/empire_state_nyc.jpg')
px27.px.attach(io: file27, filename: 'empire_state_nyc.jpg')

px28 = Photo.create!(title: 'Kirkjufell', description: 'Kirkjufell - the "mountain shaped like an arrowhead".', creator_id: user4.id)
file28 = open('https://perfectpx-seeds.s3.amazonaws.com/arrowhead_mountain.jpg')
px28.px.attach(io: file28, filename: 'arrowhead_mountain.jpg')

px29 = Photo.create!(title: 'Yak', description: 'Young yak', creator_id: user5.id)
file29 = open('https://perfectpx-seeds.s3.amazonaws.com/young_moo.jpg')
px29.px.attach(io: file29, filename: 'young_moo.jpg')

px30 = Photo.create!(title: 'Commute', description: 'Aerial view of city showing lit up roadways', creator_id: user6.id)
file30 = open('https://perfectpx-seeds.s3.amazonaws.com/city_aerial.jpg')
px30.px.attach(io: file30, filename: 'city_aerial.jpg')

px31 = Photo.create!(title: 'Jelly Fish', description: 'Cool jelly fish from the deep', creator_id: user7.id)
file31 = open('https://perfectpx-seeds.s3.amazonaws.com/jelly_fish.jpg')
px31.px.attach(io: file31, filename: 'jelly_fish.jpg')

px32 = Photo.create!(title: 'Peek', description: 'Cat peeking over roof', creator_id: user8.id)
file32 = open('https://perfectpx-seeds.s3.amazonaws.com/cat_on_roof.jpg')
px32.px.attach(io: file32, filename: 'cat_on_roof.jpg')

px33 = Photo.create!(title: 'Stumps', description: 'Just some tree stumps', creator_id: user9.id)
file33 = open('https://perfectpx-seeds.s3.amazonaws.com/tree_logs.jpg')
px33.px.attach(io: file33, filename: 'tree_logs.jpg')

px34 = Photo.create!(title: 'Angles', description: 'Geometric shapes from two adjacent buildings', creator_id: user10.id)
file34 = open('https://perfectpx-seeds.s3.amazonaws.com/adjacent_buildings.jpg')
px34.px.attach(io: file34, filename: 'adjacent_buildings.jpg')

px35 = Photo.create!(title: 'Lightshow', description: 'The Northern Lights', creator_id: user11.id)
file35 = open('https://perfectpx-seeds.s3.amazonaws.com/northern_lights.jpg')
px35.px.attach(io: file35, filename: 'northern_lights.jpg')

px36 = Photo.create!(title: 'Beach Day', description: 'Aerial shot of crowded beach', creator_id: user12.id)
file36 = open('https://perfectpx-seeds.s3.amazonaws.com/beach_aerial.jpg')
px36.px.attach(io: file36, filename: 'beach_aerial.jpg')

px37 = Photo.create!(title: 'Abandoned', description: 'Plane abandoned in the middle of the forest', creator_id: user1.id)
file37 = open('https://perfectpx-seeds.s3.amazonaws.com/abandoned_plane.jpg')
px37.px.attach(io: file37, filename: 'abandoned_plane.jpg')

px38 = Photo.create!(title: 'Balcony Gardens', description: 'Building with balcony gardens', creator_id: user2.id)
file38 = open('https://perfectpx-seeds.s3.amazonaws.com/balcony_gardens.jpg')
px38.px.attach(io: file38, filename: 'balcony_gardens.jpg')

px39 = Photo.create!(title: 'Flatiron Building', description: 'Flatiron Building - NYC', creator_id: user3.id)
file39 = open('https://perfectpx-seeds.s3.amazonaws.com/flatiron_building.jpg')
px39.px.attach(io: file39, filename: 'flatiron_building.jpg')

px40 = Photo.create!(title: 'Penguins', description: 'Penguins in the arctic', creator_id: user4.id)
file40 = open('https://perfectpx-seeds.s3.amazonaws.com/penguins.jpg')
px40.px.attach(io: file40, filename: 'penguins.jpg')

px41 = Photo.create!(title: 'Eiffel Tower', description: 'Eiffel Tower - Paris, France', creator_id: user5.id)
file41 = open('https://perfectpx-seeds.s3.amazonaws.com/eiffel_tower.jpg')
px41.px.attach(io: file41, filename: 'eiffel_tower.jpg')

px42 = Photo.create!(title: 'Elephants', description: 'Two elephants standing around', creator_id: user6.id)
file42 = open('https://perfectpx-seeds.s3.amazonaws.com/elephants.jpg')
px42.px.attach(io: file42, filename: 'elephants.jpg')

px43 = Photo.create!(title: 'Golden Sun', description: 'Sunflower shot during golden hour', creator_id: user7.id)
file43 = open('https://perfectpx-seeds.s3.amazonaws.com/golden_hour_sunflower.jpg')
px43.px.attach(io: file43, filename: 'golden_hour_sunflower.jpg')

px44 = Photo.create!(title: 'Peeking Deer', description: 'Deer peeking out from the bushes', creator_id: user8.id)
file44 = open('https://perfectpx-seeds.s3.amazonaws.com/peeking_deer.jpg')
px44.px.attach(io: file44, filename: 'peeking_deer.jpg')

px45 = Photo.create!(title: 'Warp', description: 'Escalator', creator_id: user9.id)
file45 = open('https://perfectpx-seeds.s3.amazonaws.com/escalator.jpg')
px45.px.attach(io: file45, filename: 'escalator.jpg')

px46 = Photo.create!(title: 'Hairpin', description: 'Hairpin turn in the middle of the forest', creator_id: user10.id)
file46 = open('https://perfectpx-seeds.s3.amazonaws.com/hairpin_turn.jpg')
px46.px.attach(io: file46, filename: 'hairpin_turn.jpg')

px47 = Photo.create!(title: 'Winter Ferrari', description: 'Ferrari in the snow', creator_id: user11.id)
file47 = open('https://perfectpx-seeds.s3.amazonaws.com/ferrari_in_snow.jpg')
px47.px.attach(io: file47, filename: 'ferrari_in_snow.jpg')

px48 = Photo.create!(title: 'Do What You Love', description: 'Neon sign', creator_id: user12.id)
file48 = open('https://perfectpx-seeds.s3.amazonaws.com/what_you_love.jpg')
px48.px.attach(io: file48, filename: 'what_you_love.jpg')

# px = Photo.create!(title: '', description: '', creator_id: user1.id)
# file = open('')
# px.px.attach(io: file, filename: '')

# px = Photo.create!(title: '', description: '', creator_id: user2.id)
# file = open('')
# px.px.attach(io: file, filename: '')

# px = Photo.create!(title: '', description: '', creator_id: user3.id)
# file = open('')
# px.px.attach(io: file, filename: '')

# px = Photo.create!(title: '', description: '', creator_id: user4.id)
# file = open('')
# px.px.attach(io: file, filename: '')

# px = Photo.create!(title: '', description: '', creator_id: user5.id)
# file = open('')
# px.px.attach(io: file, filename: '')

# px = Photo.create!(title: '', description: '', creator_id: user6.id)
# file = open('')
# px.px.attach(io: file, filename: '')

# px = Photo.create!(title: '', description: '', creator_id: user7.id)
# file = open('')
# px.px.attach(io: file, filename: '')

# px = Photo.create!(title: '', description: '', creator_id: user8.id)
# file = open('')
# px.px.attach(io: file, filename: '')

# px = Photo.create!(title: '', description: '', creator_id: user9.id)
# file = open('')
# px.px.attach(io: file, filename: '')

# px = Photo.create!(title: '', description: '', creator_id: user10.id)
# file = open('')
# px.px.attach(io: file, filename: '')

# px = Photo.create!(title: '', description: '', creator_id: user11.id)
# file = open('')
# px.px.attach(io: file, filename: '')

# px = Photo.create!(title: '', description: '', creator_id: user12.id)
# file = open('')
# px.px.attach(io: file, filename: '')

# px = Photo.create!(title: '', description: '', creator_id: user1.id)
# file = open('')
# px.px.attach(io: file, filename: '')

# px = Photo.create!(title: '', description: '', creator_id: user2.id)
# file = open('')
# px.px.attach(io: file, filename: '')

# px = Photo.create!(title: '', description: '', creator_id: user3.id)
# file = open('')
# px.px.attach(io: file, filename: '')

# px = Photo.create!(title: '', description: '', creator_id: user4.id)
# file = open('')
# px.px.attach(io: file, filename: '')

# px = Photo.create!(title: '', description: '', creator_id: user5.id)
# file = open('')
# px.px.attach(io: file, filename: '')

# px = Photo.create!(title: '', description: '', creator_id: user6.id)
# file = open('')
# px.px.attach(io: file, filename: '')

# px = Photo.create!(title: '', description: '', creator_id: user7.id)
# file = open('')
# px.px.attach(io: file, filename: '')

# px = Photo.create!(title: '', description: '', creator_id: user8.id)
# file = open('')
# px.px.attach(io: file, filename: '')

# px = Photo.create!(title: '', description: '', creator_id: user9.id)
# file = open('')
# px.px.attach(io: file, filename: '')

# px = Photo.create!(title: '', description: '', creator_id: user10.id)
# file = open('')
# px.px.attach(io: file, filename: '')

# px = Photo.create!(title: '', description: '', creator_id: user11.id)
# file = open('')
# px.px.attach(io: file, filename: '')

# px = Photo.create!(title: '', description: '', creator_id: user12.id)
# file = open('')
# px.px.attach(io: file, filename: '')

# px = Photo.create!(title: '', description: '', creator_id: user1.id)
# file = open('')
# px.px.attach(io: file, filename: '')

# px = Photo.create!(title: '', description: '', creator_id: user2.id)
# file = open('')
# px.px.attach(io: file, filename: '')

# px = Photo.create!(title: '', description: '', creator_id: user3.id)
# file = open('')
# px.px.attach(io: file, filename: '')

# px = Photo.create!(title: '', description: '', creator_id: user4.id)
# file = open('')
# px.px.attach(io: file, filename: '')

# px = Photo.create!(title: '', description: '', creator_id: user5.id)
# file = open('')
# px.px.attach(io: file, filename: '')

# px = Photo.create!(title: '', description: '', creator_id: user6.id)
# file = open('')
# px.px.attach(io: file, filename: '')

# px = Photo.create!(title: '', description: '', creator_id: user7.id)
# file = open('')
# px.px.attach(io: file, filename: '')

# px = Photo.create!(title: '', description: '', creator_id: user8.id)
# file = open('')
# px.px.attach(io: file, filename: '')

# px = Photo.create!(title: '', description: '', creator_id: user9.id)
# file = open('')
# px.px.attach(io: file, filename: '')

# px = Photo.create!(title: '', description: '', creator_id: user10.id)
# file = open('')
# px.px.attach(io: file, filename: '')

# px = Photo.create!(title: '', description: '', creator_id: user11.id)
# file = open('')
# px.px.attach(io: file, filename: '')

# px = Photo.create!(title: '', description: '', creator_id: user12.id)
# file = open('')
# px.px.attach(io: file, filename: '')

# px = Photo.create!(title: '', description: '', creator_id: user1.id)
# file = open('')
# px.px.attach(io: file, filename: '')

# px = Photo.create!(title: '', description: '', creator_id: user2.id)
# file = open('')
# px.px.attach(io: file, filename: '')

# px = Photo.create!(title: '', description: '', creator_id: user3.id)
# file = open('')
# px.px.attach(io: file, filename: '')

# px = Photo.create!(title: '', description: '', creator_id: user4.id)
# file = open('')
# px.px.attach(io: file, filename: '')

# px = Photo.create!(title: '', description: '', creator_id: user5.id)
# file = open('')
# px.px.attach(io: file, filename: '')

# px = Photo.create!(title: '', description: '', creator_id: user6.id)
# file = open('')
# px.px.attach(io: file, filename: '')

# px = Photo.create!(title: '', description: '', creator_id: user7.id)
# file = open('')
# px.px.attach(io: file, filename: '')

# px = Photo.create!(title: '', description: '', creator_id: user8.id)
# file = open('')
# px.px.attach(io: file, filename: '')

# px = Photo.create!(title: '', description: '', creator_id: user9.id)
# file = open('')
# px.px.attach(io: file, filename: '')

# px = Photo.create!(title: '', description: '', creator_id: user10.id)
# file = open('')
# px.px.attach(io: file, filename: '')

# px = Photo.create!(title: '', description: '', creator_id: user11.id)
# file = open('')
# px.px.attach(io: file, filename: '')

# px = Photo.create!(title: '', description: '', creator_id: user12.id)
# file = open('')
# px.px.attach(io: file, filename: '')

# px = Photo.create!(title: '', description: '', creator_id: user.id)
# file = open('')
# px.px.attach(io: file, filename: '')