# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
 puts "Seeding..."

# users
 u1= User.create(first_name: 'Alexandra', last_name: 'Weaver', username: 'aweaver', password: 'Hello123', state: 'Texas')



 puts "Seeding done!"