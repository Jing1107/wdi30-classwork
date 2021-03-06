require 'pry'
=begin
A. Given the following data structure:
a = ["Anil", "Erik", "Jonathan"]
How would you return the string "Erik"?
How would you add your name to the array?
=end
a = ["Anil", "Erik", "Jonathan"]
p a[1]
p a<<("Chao")

=begin
B. Given the following data structure:
h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}
How would you return the string "One"?
How would you return the string "Two"?
How would you return the number 2?
How would you add {3 => "Three"} to the hash?
How would you add {:four => 4} to the hash?
=end
h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}
h[1]
h[2]
h["two"]
h[3] = "Three"
h.merge({:four => 4})

# C. Given the following data structure:
# is = {true => "It's true!", false => "It's false"}
# What is the return value of is[2 + 2 == 4]?
#puts "It's true"
# What is the return value of is["Erik" == "Jonathan"]?
#puts "It's false"
# What is the return value of is[9 > 10]?
#puts "It's false"
# What is the return value of is[0]?
#puts "nil"
# What is the return value of is["Erik"]?
#puts "nil"



#D. Given the following data structure:
binding.pry
users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  },
}
# How would you access Jonathan's Twitter handle (i.e. the string "tronathan")?
p users["Jonanthan"]
# How would you add the number 7 to Erik's favorite numbers?
users["Erik"][:favorite_numbers] << 7
# How would you add yourself to the users hash?
users["Jing"] = {:twitter => "nonono", :favorite_numbers => [7,12,24]}
# How would you return the array of Erik's favorite numbers?
p users["Erik"][:favorite_numbers]
# How would you return the smallest of Erik's favorite numbers?
p users["Erik"][:favorite_numbers].min
# How would you return an array of Anil's favorite numbers that are also even?
p users["Anil"][:favorite_numbers].select {|n| n.even? }
# How would you return an array of the favorite numbers common to all users?
#users.map {|name,user| user[:faviorite_numbers]}.inject(&:&)
# How would you return an array containing all users' favorite numbers, sorted,
# and excluding duplicates?
