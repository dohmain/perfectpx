# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

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
