# def print_odd_numbers(upper=99)
#   # upper.times do |n|
#   #   puts n if n.odd?
#   # end
#   (2..99).each do |n|
#     puts n if n.odd?
#   end
# end

# print_odd_numbers()


#Todo: recursive

def print_odd_numbers_r(bound=99, n=3)
  if iteration <= bound
    puts n
    print_odd_numbers_r(bound, n+2)
  end

end
