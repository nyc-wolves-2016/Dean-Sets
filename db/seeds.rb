# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

a = User.create(username: "dad", password: "password", email: "dad@mom.com")
Game.create(user: a)

shapes = ["pill", "squiggle", "diamond"]
colors = ["green", "purple", "red"]
numbers = [1 ,2, 3]
shadings = ["solid", "lined", "empty"]

shapes.each do |shape|
  colors.each do |color|
    numbers.each do |number|
      shadings.each do |shading|
        Card.create!(shading: shading, color: color, number: number, shape: shape)
      end
    end
  end
end
